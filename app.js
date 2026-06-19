/* =====================================================
   ASB Pro — All-Out Application Logic
   Kalkulator Pelaburan Bumiputera Malaysia
   ===================================================== */

// ── DIVIDEND HISTORY ──
let DIVIDEND_HISTORY = [
  { year:2010, dividend:7.25, bonus:0.25 },
  { year:2011, dividend:7.35, bonus:0.25 },
  { year:2012, dividend:7.65, bonus:0.25 },
  { year:2013, dividend:7.25, bonus:0.25 },
  { year:2014, dividend:7.50, bonus:0.25 },
  { year:2015, dividend:7.50, bonus:0.25 },
  { year:2016, dividend:6.50, bonus:0.25 },
  { year:2017, dividend:7.25, bonus:0.25 },
  { year:2018, dividend:6.00, bonus:0.25 },
  { year:2019, dividend:5.50, bonus:0.25 },
  { year:2020, dividend:4.25, bonus:0 },
  { year:2021, dividend:5.00, bonus:0 },
  { year:2022, dividend:5.00, bonus:0 },
  { year:2023, dividend:5.00, bonus:0 },
  { year:2024, dividend:5.00, bonus:0 },
];


// ── LIVE DIVIDEND FETCH ──
// Cache key & TTL
const DIV_CACHE_KEY = 'asb-pro-div-live';
const DIV_CACHE_TTL = 12 * 60 * 60 * 1000; // 12 jam
const STATE_KEY    = 'asb-pro-state';

async function fetchLatestDividend() {
  const currentYear = new Date().getFullYear();

  // 1. Check localStorage cache (valid 12h)
  try {
    const cached = JSON.parse(localStorage.getItem(DIV_CACHE_KEY)||'null');
    if (cached && cached.year === currentYear && (Date.now()-cached.ts) < DIV_CACHE_TTL) {
      applyLiveDividend(cached.year, cached.dividend, cached.bonus, cached.src, false);
      return;
    }
  } catch {}

  setLiveBadge('loading');

  // 2. Try PNB website (agihan announcement page)
  const pnbUrls = [
    'https://www.pnb.com.my/index.php/pengumuman-agihan',
    'https://www.pnb.com.my/amanah-saham-bumiputera',
    'https://www.pnb.com.my/',
  ];

  for (const url of pnbUrls) {
    try {
      const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const resp = await fetch(proxy, { signal: AbortSignal.timeout(7000) });
      const data = await resp.json();
      if (!data.contents) continue;

      const text = data.contents;
      // Pattern: "5.50 sen", "5.50%", "agihan 5.50", "dividen 5.50"
      const patterns = [
        /agihan.*?(\d{1,2}[.,]\d{2})\s*(?:sen|%|peratus)/gi,
        /dividen.*?(\d{1,2}[.,]\d{2})\s*(?:sen|%|peratus)/gi,
        /(\d{1,2}[.,]\d{2})\s*sen\s*bagi\s*setiap\s*unit/gi,
        /ASB.*?(\d{1,2}[.,]\d{2})\s*(?:sen|%)/gi,
      ];

      for (const pat of patterns) {
        const m = [...text.matchAll(pat)];
        if (m.length) {
          const rate = parseFloat(m[0][1].replace(',','.'));
          if (rate > 0.5 && rate < 15) {
            // Look for bonus pattern near same paragraph
            const bonusPat = /bonus.*?(\d{1,2}[.,]\d{2})\s*(?:sen|%)/gi;
            const bm = [...text.matchAll(bonusPat)];
            const bonus = bm.length ? parseFloat(bm[0][1].replace(',','.')) : 0;
            applyLiveDividend(currentYear, rate, bonus, 'PNB Website', true);
            return;
          }
        }
      }
    } catch {}
  }

  // 3. Fallback: Google News RSS — cari tajuk dengan kadar %
  try {
    const queries = [
      `ASB dividen ${currentYear} sen PNB`,
      `"amanah saham bumiputera" agihan ${currentYear}`,
    ];
    for (const q of queries) {
      const rss = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=ms&gl=MY&ceid=MY:ms`;
      const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(rss)}`;
      const resp = await fetch(proxy, { signal: AbortSignal.timeout(7000) });
      const data = await resp.json();
      if (!data.contents) continue;

      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/xml');
      const items = Array.from(doc.querySelectorAll('item')).slice(0, 8);

      for (const item of items) {
        const raw = (item.querySelector('title')?.textContent||'') + ' ' + (item.querySelector('description')?.textContent||'');
        // Match "5.50 sen", "5.50 peratus", "5.50%"
        const m = raw.match(/(\d{1,2}[.,]\d{2})\s*(?:sen|peratus|%)/i);
        if (m) {
          const rate = parseFloat(m[1].replace(',','.'));
          if (rate > 0.5 && rate < 15) {
            applyLiveDividend(currentYear, rate, 0, 'Google News', true);
            return;
          }
        }
      }
    }
  } catch {}

  // 4. Nothing found — show "belum diumumkan" badge if current year not in static data
  const hasCurrentYear = DIVIDEND_HISTORY.some(r => r.year === currentYear);
  if (!hasCurrentYear) {
    setLiveBadge('pending');
  } else {
    setLiveBadge('static');
  }
}

function applyLiveDividend(year, dividend, bonus, source, isNew) {
  const existing = DIVIDEND_HISTORY.findIndex(r => r.year === year);
  if (existing >= 0) {
    DIVIDEND_HISTORY[existing] = { year, dividend, bonus };
  } else {
    DIVIDEND_HISTORY.push({ year, dividend, bonus });
    DIVIDEND_HISTORY.sort((a,b) => a.year - b.year);
  }

  // Cache to localStorage
  try {
    localStorage.setItem(DIV_CACHE_KEY, JSON.stringify({ year, dividend, bonus, src:source, ts:Date.now() }));
  } catch {}

  // Update charts + stats
  updateHistory();
  updateDashboard();

  setLiveBadge('live', `${year}: ${dividend.toFixed(2)}% (${source})`);
}

function setLiveBadge(status, msg) {
  const badge = document.getElementById('histLiveBadge');
  const text  = document.getElementById('histLiveBadgeText');
  if (!badge || !text) return;
  badge.className = 'live-badge live-'+status;
  badge.style.display = 'flex';
  const labels = {
    loading: 'Mengambil data terkini...',
    live:    msg || 'Data terkini',
    pending: 'Dividen tahun ini belum diumumkan oleh PNB',
    static:  'Data disahkan (statik)',
  };
  text.textContent = labels[status] || status;
}

// ── STATE ──
const state = {
  // Savings
  savInitial:10000, savMonthly:500, savRate:5, savBonus:0, savYears:20,
  // Financing
  finLoan:100000, finPayment:500, finRate:4, finTenure:30, finDiv:5, finMode:'loan',
  // Comparison
  cmpBudget:500, cmpDiv:5, cmpLoanRate:4, cmpFDRate:3.5, cmpEPFRate:5.5, cmpYears:20,
  // Forecast
  fcInit:10000, fcMonthly:500, fcYears:30, fcInflation:3, fcBear:3, fcBase:5, fcBull:7,
  // Goal
  goalType:'retirement', goalAmt:500000, goalCurrent:10000, goalYears:20, goalRate:5,
  fireExp:36000, fireWithdraw:4,
  // Zakat (simplified)
  zakatRate:2.5, zakatBasis:'balance',
};

// Cached results
let savData = [];
let finData = [];

// Chart instances
const charts = {};

// ── COLORS ──
const C = {
  bull:'#059669',   bullA:'rgba(5,150,105,0.15)',
  base:'#d97706',   baseA:'rgba(217,119,6,0.15)',
  bear:'#be123c',   bearA:'rgba(190,18,60,0.12)',
  slate:'#64748b',  slateA:'rgba(100,116,139,0.15)',
  epf:'#7c3aed',    epfA:'rgba(124,58,237,0.12)',
};

// ── FORMAT ──
const fmt = n => isNaN(n)||!isFinite(n)?'RM 0.00':'RM '+Math.abs(n).toLocaleString('en-MY',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtSgn = n => (n<0?'−':'')+fmt(n);
const fmtK = n => {
  const a=Math.abs(n);
  if(a>=1e6) return 'RM '+(n/1e6).toFixed(2)+'j';
  if(a>=1e3) return 'RM '+(n/1e3).toFixed(1)+'k';
  return fmt(n);
};
const fmtPct = n => (isNaN(n)?0:n).toFixed(2)+'%';
const fmtDate = s => { try { return new Date(s).toLocaleDateString('ms-MY',{day:'numeric',month:'short',year:'numeric'}); } catch { return s; } };

// ── DOM ──
const el = id => document.getElementById(id);
const setText = (id,v) => { const e=el(id); if(e) e.textContent=v; };

// ── ANIMATED COUNTER ──
function animateCounter(element, to, formatter) {
  if (!element) return;
  const from = parseFloat(element.dataset.v||0)||0;
  element.dataset.v = to;
  const dur = 550, start = performance.now();
  const step = t => {
    const p = Math.min((t-start)/dur,1);
    const ease = 1-Math.pow(1-p,3);
    element.textContent = formatter(from+(to-from)*ease);
    if(p<1) requestAnimationFrame(step);
    else element.textContent = formatter(to);
  };
  requestAnimationFrame(step);
}

// ── STATE PERSISTENCE ──
function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch {}
}

function loadSavedState() {
  // Priority: URL param > localStorage > defaults
  try {
    const params = new URLSearchParams(location.search);
    const urlState = params.get('s');
    if (urlState) {
      Object.assign(state, JSON.parse(atob(urlState)));
      history.replaceState(null,'', location.pathname); // clean URL
      return;
    }
  } catch {}
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)||'null');
    if (saved) Object.assign(state, saved);
  } catch {}
}

function applyStateToInputs() {
  // Sync all slider/input values from state to DOM
  const map = {
    savInitial:'savInitial', savMonthly:'savMonthly', savRate:'savRate',
    savBonus:'savBonus', savYears:'savYears',
    finLoan:'finLoan', finPayment:'finPayment', finRate:'finRate',
    finTenure:'finTenure', finDiv:'finDiv',
    cmpBudget:'cmpBudget', cmpDiv:'cmpDiv', cmpLoanRate:'cmpLoanRate',
    cmpFDRate:'cmpFDRate', cmpEPFRate:'cmpEPFRate', cmpYears:'cmpYears',
    fcInit:'fcInit', fcMonthly:'fcMonthly', fcYears:'fcYears', fcInflation:'fcInflation',
    goalAmt:'goalAmt', goalCurrent:'goalCurrent', goalYears:'goalYears', goalRate:'goalRate',
    fireExp:'fireExp', fireWithdraw:'fireWithdraw',
    zakatRate:'zakatRate',
  };
  Object.entries(map).forEach(([stateKey, inputId]) => {
    const inp = el(inputId);
    if (inp && state[stateKey] != null) inp.value = state[stateKey];
  });
  // Scenario number inputs
  ['fcBear','fcBase','fcBull'].forEach(k => {
    const inp = el(k); if (inp) inp.value = state[k];
  });
  // ASBF mode
  if (state.finMode === 'payment') {
    el('asbfModeToggle')?.classList.remove('active');
    el('asbfPaymentModeBtn')?.classList.add('active');
    el('asbfPaymentGroup')?.classList.remove('hidden');
    el('asbfLoanGroup')?.classList.add('hidden');
  }
  // Zakat basis radio
  document.querySelectorAll('input[name="zakatBasis"]').forEach(r => {
    r.checked = r.value === state.zakatBasis;
  });
}

function resetState() {
  if (!confirm('Reset semua tetapan ke nilai asal?')) return;
  localStorage.removeItem(STATE_KEY);
  location.reload();
}

function shareURL() {
  try {
    const encoded = btoa(JSON.stringify(state));
    const url = `${location.origin}${location.pathname}?s=${encoded}`;
    navigator.clipboard.writeText(url).then(() => showToast('Link tetapan disalin — kongsi dengan sesiapa!'));
  } catch { showToast('Gagal salin link'); }
}

function exportSettings() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'asb-pro-tetapan.json';
  a.click();
}

function importSettings(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      Object.assign(state, JSON.parse(e.target.result));
      applyStateToInputs();
      updateAll();
      showToast('Tetapan berjaya diimport!');
    } catch { showToast('Fail tidak sah'); }
  };
  reader.readAsText(file);
}

// ── THEME ──
const isDark = () => document.documentElement.dataset.theme==='dark';

// ── CHART DEFAULTS ──
function chartDefaults() {
  const dark = isDark();
  const grid = dark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)';
  const tick = dark?'#6b7280':'#9ca3af';
  const tip  = dark?'#1f2937':'#18181b';
  return {
    responsive:true, maintainAspectRatio:false,
    animation:{ duration:450, easing:'easeOutCubic' },
    plugins:{
      legend:{ display:false },
      tooltip:{
        backgroundColor:tip, titleColor:'#f9fafb', bodyColor:'#d1d5db',
        padding:10, cornerRadius:8, displayColors:false,
        callbacks:{ label: ctx => fmt(ctx.raw) }
      }
    },
    scales:{
      x:{ grid:{ color:grid }, ticks:{ color:tick, font:{ family:'Outfit', size:11 } } },
      y:{ grid:{ color:grid }, ticks:{ color:tick, font:{ family:'Outfit', size:11 }, callback:v=>fmtK(v) } }
    }
  };
}

function lineDataset(label, data, color, colorA, dash=[]) {
  return { label, data, borderColor:color, backgroundColor:colorA,
    fill:true, tension:0.4, borderWidth:2,
    pointRadius:0, pointHoverRadius:5, pointBackgroundColor:color,
    borderDash:dash };
}
function barDataset(label, data, color) {
  return { label, data, backgroundColor:color, borderRadius:5, borderSkipped:false };
}

// ── CALCULATIONS ──

// PNB method — average balance dividend
function calcASB(initial, monthly, rate, bonus, years) {
  const rows = [];
  let balance = initial;
  let totalInvested = initial;
  for (let y=1; y<=years; y++) {
    const yearStart = balance;
    const yearDeposit = monthly*12;
    const avgBalance = yearStart + (monthly*6.5);
    const dividend = avgBalance*(rate/100) + avgBalance*(bonus/100);
    balance = yearStart + yearDeposit + dividend;
    totalInvested += yearDeposit;
    rows.push({ year:y, yearStart, yearDeposit, dividend, balance, totalInvested, netReturns:balance-totalInvested });
  }
  return rows;
}

// Lump sum — compound annually
function calcLumpSum(principal, rate, years) {
  const rows = [];
  let balance = principal;
  for (let y=1; y<=years; y++) {
    const dividend = balance*(rate/100);
    balance += dividend;
    rows.push({ year:y, balance, dividend });
  }
  return rows;
}

// Loan monthly payment
function calcMonthlyPayment(loan, annualRate, months) {
  const r = annualRate/100/12;
  if (r===0) return loan/months;
  return loan*r/(1-Math.pow(1+r,-months));
}

// Max loan from payment
function calcLoanFromPayment(payment, annualRate, months) {
  const r = annualRate/100/12;
  if (r===0) return payment*months;
  return payment*(1-Math.pow(1+r,-months))/r;
}

// ASBF — reducing balance
function calcASBF(loanAmount, loanRate, tenureYears, asbDivRate) {
  const months = tenureYears*12;
  const r = loanRate/100/12;
  const monthlyPay = calcMonthlyPayment(loanAmount, loanRate, months);
  let loanBal = loanAmount;
  let totalInterest = 0;
  const yearly = [];
  for (let y=1; y<=tenureYears; y++) {
    let yInterest=0, yPrincipal=0;
    for (let m=0; m<12; m++) {
      const interest = loanBal*r;
      const principal = Math.min(monthlyPay-interest, loanBal);
      loanBal = Math.max(0, loanBal-principal);
      yInterest += interest; yPrincipal += principal;
      totalInterest += interest;
      if (loanBal<=0.01) break;
    }
    const asbValue = loanAmount*Math.pow(1+asbDivRate/100, y);
    yearly.push({
      year:y, loanBalance:Math.max(0,loanBal),
      yearInterest:yInterest, yearPrincipal:yPrincipal,
      asbValue, monthlyPayment:monthlyPay,
      totalInterestPaid:totalInterest,
      netWorth:asbValue-Math.max(0,loanBal)
    });
    if (loanBal<=0.01) break;
  }
  return yearly;
}

// DCA simple interest compound (for FD/EPF simulation)
function calcDCA(monthly, rate, years) {
  let balance = 0;
  const rY = rate/100;
  const rows = [];
  for (let y=1; y<=years; y++) {
    const startBal = balance;
    const deposits = monthly*12;
    const dividend = (startBal + deposits*0.5)*rY; // mid-year avg
    balance = startBal + deposits + dividend;
    rows.push({ year:y, balance, totalInvested:y*deposits });
  }
  return rows;
}

// Forecast with inflation
function calcForecast(initial, monthly, rate, years, inflation) {
  const rows = [];
  let balance = initial;
  let totalInvested = initial;
  for (let y=1; y<=years; y++) {
    const yearDeposit = monthly*12;
    const avgBalance = balance + monthly*6.5;
    const dividend = avgBalance*(rate/100);
    balance = balance + yearDeposit + dividend;
    totalInvested += yearDeposit;
    const realValue = balance/Math.pow(1+inflation/100, y);
    rows.push({ year:y, balance, totalInvested, realValue, dividend });
  }
  return rows;
}

// Required monthly DCA to reach goal
function calcRequiredDCA(target, current, years, rate) {
  const rM = Math.pow(1+rate/100,1/12)-1;
  const n = years*12;
  const fvCurrent = current*Math.pow(1+rM,n);
  if (fvCurrent>=target) return 0;
  const needed = target-fvCurrent;
  if (rM===0) return needed/n;
  return needed*rM/(Math.pow(1+rM,n)-1);
}

// ── CHART INIT ──
function initCharts() {
  const d = isDark();
  const def = chartDefaults();

  // Dashboard
  charts.dash = new Chart(el('dashChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Optimis',[],C.bull,C.bullA),
      lineDataset('Sederhana',[],C.base,C.baseA),
      lineDataset('Pesimis',[],C.bear,C.bearA),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Savings growth
  charts.savGrowth = new Chart(el('savGrowthChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Nilai ASB',[],C.bull,C.bullA),
      lineDataset('Lump Sum Setara',[],C.base,C.baseA,[5,4]),
      lineDataset('Dilaburkan',[],C.slate,C.slateA,[3,3]),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Savings dividend bar
  charts.savDiv = new Chart(el('savDivChart'), {
    type:'bar', data:{ labels:[], datasets:[ barDataset('Dividen Tahunan',[],C.bull) ] },
    options:{ ...def }
  });

  // Financing line
  charts.fin = new Chart(el('finChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Nilai ASB',[],C.bull,C.bullA),
      lineDataset('Baki Pinjaman',[],C.bear,C.bearA),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Financing donut
  charts.finDonut = new Chart(el('finDonutChart'), {
    type:'doughnut',
    data:{ labels:['Prinsipal','Faedah'], datasets:[{ data:[0,0], backgroundColor:[C.bull, C.bear], borderWidth:0, hoverOffset:4 }] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'68%',
      plugins:{ legend:{ display:true, position:'bottom', labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:10, boxHeight:10 } },
        tooltip:{ backgroundColor:d?'#1f2937':'#18181b', callbacks:{ label: ctx => ctx.label+': '+fmt(ctx.raw) } }
      }
    }
  });

  // Comparison
  charts.cmp = new Chart(el('cmpChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('ASB Biasa',[],C.bull,C.bullA),
      lineDataset('ASBF (bersih)',[],C.base,C.baseA),
      lineDataset('FD',[],C.slate,C.slateA),
      lineDataset('EPF',[],C.epf,C.epfA),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Forecast nominal
  charts.fc = new Chart(el('fcChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Optimis',[],C.bull,C.bullA),
      lineDataset('Sederhana',[],C.base,C.baseA),
      lineDataset('Pesimis',[],C.bear,C.bearA),
      lineDataset('Dilaburkan',[],C.slate,'transparent',[4,3]),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Forecast real
  charts.fcReal = new Chart(el('fcRealChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Optimis (benar)',[],C.bull,C.bullA),
      lineDataset('Sederhana (benar)',[],C.base,C.baseA),
      lineDataset('Pesimis (benar)',[],C.bear,C.bearA),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // Goal trajectory
  charts.goal = new Chart(el('goalChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('Simpanan Anda',[],C.bull,C.bullA),
      lineDataset('Sasaran',[],C.bear,C.bearA,[5,4]),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:8, boxHeight:8, borderRadius:2 } } } }
  });

  // FIRE donut
  charts.fire = new Chart(el('fireChart'), {
    type:'doughnut',
    data:{ labels:['Tersimpan','Perlu Tambah'], datasets:[{ data:[0,1], backgroundColor:[C.bull, isDark()?'#374151':'#e4e4e7'], borderWidth:0 }] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'72%',
      plugins:{ legend:{ display:true, position:'bottom', labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:10, boxHeight:10 } },
        tooltip:{ backgroundColor:d?'#1f2937':'#18181b', callbacks:{ label: ctx => ctx.label+': '+fmt(ctx.raw) } }
      }
    }
  });

  // Zakat bar
  charts.zakat = new Chart(el('zakatChart'), {
    type:'bar', data:{ labels:[], datasets:[ barDataset('Zakat Tahunan',[],C.base) ] },
    options:{ ...def, scales:{ ...def.scales, y:{ ...def.scales.y, ticks:{ ...def.scales.y.ticks, callback:v=>fmt(v) } } } }
  });

  // History stacked bar
  charts.hist = new Chart(el('histChart'), {
    type:'bar', data:{ labels:[], datasets:[
      { ...barDataset('Dividen',[],C.base), stack:'s' },
      { ...barDataset('Bonus',[],C.bull), stack:'s' },
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:true, labels:{ color:d?'#9ca3af':'#6b7280', font:{ family:'Outfit', size:11 }, boxWidth:10, boxHeight:10 } } },
      scales:{ ...def.scales, x:{ ...def.scales.x, stacked:true }, y:{ ...def.scales.y, stacked:true, max:9, ticks:{ ...def.scales.y.ticks, callback:v=>v+'%' } } }
    }
  });
}

function updateChartData(chart, labels, dataArrays) {
  if (!chart) return;
  chart.data.labels = labels;
  dataArrays.forEach((data, i) => {
    if (chart.data.datasets[i]) chart.data.datasets[i].data = data;
  });
  chart.update('active');
}

// ── UPDATE DASHBOARD ──
function updateDashboard() {
  if (!savData.length) return;
  const last = savData[savData.length-1];
  const years = state.savYears;
  const bearD = calcForecast(state.savInitial, state.savMonthly, state.fcBear, years, 0);
  const baseD = calcForecast(state.savInitial, state.savMonthly, state.savRate, years, 0);
  const bullD = calcForecast(state.savInitial, state.savMonthly, state.fcBull, years, 0);
  const labels = baseD.map(r=>r.year.toString());

  updateChartData(charts.dash, labels, [
    bullD.map(r=>r.balance), baseD.map(r=>r.balance), bearD.map(r=>r.balance)
  ]);

  animateCounter(el('dashFinalVal'), last.balance, fmt);
  animateCounter(el('dashTotalInvest'), last.totalInvested, fmt);
  animateCounter(el('dashTotalReturn'), last.netReturns, fmt);
  setText('dashFinalSub', `Berdasarkan RM${state.savMonthly.toLocaleString('en-MY')}/bln · ${years} thn · dividen ${state.savRate}%`);
  setText('dashInvestSub', `${years} tahun sumbangan`);
  setText('dashReturnSub', `ROI: ${((last.netReturns/last.totalInvested)*100).toFixed(1)}%`);
  setText('dashMonthly', fmt(state.savMonthly));
  setText('dashDivRate', `Kadar dividen: ${fmtPct(state.savRate)}`);
  setText('dashPillMonthly', `Sumbangan: ${fmt(state.savMonthly)}/bulan`);
  setText('dashPillYears', `Tempoh: ${years} tahun`);
  setText('dashPillRate', `Dividen: ${fmtPct(state.savRate)}`);

  const zakatBase = state.zakatBasis==='dividend' ? last.dividend
    : state.zakatBasis==='both' ? (last.balance+last.dividend)
    : last.balance;
  const zakatAmt = zakatBase*(state.zakatRate/100);
  setText('dashZakat', fmt(zakatAmt));
  setText('dashZakatSub', `${state.zakatRate}% × asas zakat`);
}

// ── UPDATE SAVINGS ──
function updateSavings() {
  savData = calcASB(state.savInitial, state.savMonthly, state.savRate, state.savBonus, state.savYears);
  const last = savData[savData.length-1];
  const labels = savData.map(r=>r.year.toString());

  // DCA vs Lump Sum comparison
  const totalMonthlyInvested = state.savInitial + state.savMonthly*12*state.savYears;
  const lumpData = calcLumpSum(totalMonthlyInvested, state.savRate, state.savYears);
  const lumpFinal = lumpData[lumpData.length-1].balance;
  const dcaFinal = last.balance;

  updateChartData(charts.savGrowth, labels, [
    savData.map(r=>r.balance),
    lumpData.map(r=>r.balance),
    savData.map(r=>r.totalInvested)
  ]);
  updateChartData(charts.savDiv, labels, [ savData.map(r=>r.dividend) ]);

  animateCounter(el('savFinalVal'), dcaFinal, fmt);
  setText('savLastDiv', `Dividen tahun terakhir: ${fmt(last.dividend)} (Kadar: ${fmtPct(state.savRate + state.savBonus)})`);
  animateCounter(el('savTotalInvest'), last.totalInvested, fmt);
  animateCounter(el('savTotalDiv'), last.netReturns, fmt);
  setText('savROI', ((last.netReturns/last.totalInvested)*100).toFixed(1)+'%');

  // Withdrawal impact
  const withdrawAmt = parseFloat(el('withdrawAmount')?.value)||0;
  if (withdrawAmt>0 && withdrawAmt<=state.savInitial) {
    const newData = calcASB(state.savInitial-withdrawAmt, state.savMonthly, state.savRate, state.savBonus, state.savYears);
    const impactLoss = dcaFinal - newData[newData.length-1].balance;
    setText('savWithdrawImpact', `−${fmt(impactLoss)}`);
    if (el('savWithdrawImpact')) el('savWithdrawImpact').style.color = 'var(--bear)';
  } else if (withdrawAmt>0) {
    setText('savWithdrawImpact', 'Melebihi simpanan awal');
    if (el('savWithdrawImpact')) el('savWithdrawImpact').style.color = 'var(--bear)';
  } else {
    setText('savWithdrawImpact', '—');
    if (el('savWithdrawImpact')) el('savWithdrawImpact').style.color = '';
  }

  // DCA vs Lump Sum verdict
  setText('dcaFinalVal', fmt(dcaFinal));
  setText('lumpFinalVal', fmt(lumpFinal));
  const diff = Math.abs(dcaFinal-lumpFinal);
  const verdictEl = el('dcaVsLumpVerdict');
  if (verdictEl) {
    if (dcaFinal>lumpFinal) {
      verdictEl.innerHTML = `<strong>DCA lebih baik</strong> sebanyak ${fmt(diff)} — kerana dividen dikompaunkan atas deposit bertahap`;
    } else if (lumpFinal>dcaFinal) {
      verdictEl.innerHTML = `<strong>Lump Sum lebih baik</strong> sebanyak ${fmt(diff)} — lebih banyak modal dikompaunkan dari awal`;
    } else {
      verdictEl.innerHTML = 'Kedua-dua strategi menghasilkan nilai hampir sama';
    }
  }

  buildSavingsTable();
}

// ── UPDATE FINANCING ──
function updateFinancing() {
  let loanAmt = state.finLoan;
  if (state.finMode==='payment') {
    loanAmt = calcLoanFromPayment(state.finPayment, state.finRate, state.finTenure*12);
  }
  finData = calcASBF(loanAmt, state.finRate, state.finTenure, state.finDiv);
  if (!finData.length) return;
  const last = finData[finData.length-1];
  const monthlyPay = last.monthlyPayment;
  const labels = finData.map(r=>r.year.toString());

  updateChartData(charts.fin, labels, [
    finData.map(r=>r.asbValue),
    finData.map(r=>r.loanBalance)
  ]);

  // Donut
  charts.finDonut.data.datasets[0].data = [loanAmt, last.totalInterestPaid];
  charts.finDonut.update('active');

  const netProfit = last.asbValue - last.totalInterestPaid;
  animateCounter(el('finMonthlyPay'), monthlyPay, fmt);
  animateCounter(el('finASBFinal'), last.asbValue, fmt);
  animateCounter(el('finTotalInterest'), last.totalInterestPaid, fmt);
  setText('finTotalPaid', fmt(monthlyPay*state.finTenure*12));

  const finNetEl = el('finNetProfit');
  if (finNetEl) {
    animateCounter(finNetEl, netProfit, fmt);
    finNetEl.style.color = netProfit>=0 ? 'var(--bull)' : 'var(--bear)';
  }
  setText('finNetSub', netProfit>=0 ? `Untung bersih selepas tolak faedah ${fmt(last.totalInterestPaid)}` : `Rugi — faedah lebih tinggi dari dividen`);

  // Spread
  const spread = state.finDiv - state.finRate;
  setText('spreadVal', (spread>=0?'+':'')+spread.toFixed(2)+'%');
  setText('spreadNote', spread>0 ? `Dividen (${state.finDiv}%) melebihi faedah (${state.finRate}%) — menguntungkan`
    : spread===0 ? 'Dividen sama dengan faedah — titik pulang modal'
    : `Faedah (${state.finRate}%) melebihi dividen (${state.finDiv}%) — rugi bersih`);
  const sc = el('spreadCard');
  if (sc) { sc.classList.toggle('positive', spread>0); sc.classList.toggle('negative', spread<0); }

  buildFinancingTable();
}

// ── UPDATE COMPARISON ──
function updateComparison() {
  const { cmpBudget:m, cmpDiv:div, cmpLoanRate:lr, cmpFDRate:fd, cmpEPFRate:epf, cmpYears:y } = state;

  // ASB DCA
  const asbData = calcASB(0, m, div, 0, y);
  const asbFinal = asbData[asbData.length-1].balance;
  const asbReturn = asbFinal - m*12*y;

  // ASBF
  const loanAmt = calcLoanFromPayment(m, lr, y*12);
  const asbfData = calcASBF(loanAmt, lr, y, div);
  const asbfLast = asbfData[asbfData.length-1];
  const asbfFinal = asbfLast.netWorth;
  const asbfReturn = asbfFinal - 0; // net of interest already

  // FD DCA
  const fdData = calcDCA(m, fd, y);
  const fdFinal = fdData[fdData.length-1].balance;
  const fdReturn = fdFinal - m*12*y;

  // EPF DCA
  const epfData = calcDCA(m, epf, y);
  const epfFinal = epfData[epfData.length-1].balance;
  const epfReturn = epfFinal - m*12*y;

  const labels = asbData.map(r=>r.year.toString());
  updateChartData(charts.cmp, labels, [
    asbData.map(r=>r.balance),
    asbfData.map(r=>r.netWorth),
    fdData.map(r=>r.balance),
    epfData.map(r=>r.balance),
  ]);

  const finals = { asb:asbFinal, asbf:asbfFinal, fd:fdFinal, epf:epfFinal };
  const winner = Object.entries(finals).sort((a,b)=>b[1]-a[1])[0][0];

  ['asb','asbf','fd','epf'].forEach(k => {
    const card = el(`cmpCard${k.toUpperCase()}`);
    if (card) card.classList.toggle('winner', k===winner);
  });

  setText('cmpASBFinal', fmt(asbFinal));
  setText('cmpASBReturn', `Pulangan: ${fmt(asbReturn)}`);
  setText('cmpASBFFinal', fmt(asbfFinal));
  setText('cmpASBFReturn', `Bersih selepas faedah`);
  setText('cmpFDFinal', fmt(fdFinal));
  setText('cmpFDReturn', `Pulangan: ${fmt(fdReturn)}`);
  setText('cmpEPFFinal', fmt(epfFinal));
  setText('cmpEPFReturn', `Pulangan: ${fmt(epfReturn)}`);

  // Breakeven ASBF vs ASB
  const beYear = asbfData.findIndex((r,i) => r.netWorth >= asbData[i]?.balance);
  setText('cmpBreakeven', beYear>=0
    ? `ASBF mengatasi ASB Biasa pada tahun ke-${beYear+1} (${fmt(asbfData[beYear].netWorth)} vs ${fmt(asbData[beYear].balance)})`
    : `ASB Biasa unggul keseluruhan tempoh ${y} tahun`);

  buildSensitivityTable(m, lr, fd, y);
}

// ── UPDATE FORECAST ──
function updateForecast() {
  const { fcInit:init, fcMonthly:monthly, fcYears:years, fcInflation:inf, fcBear:bear, fcBase:base, fcBull:bull } = state;
  const bearD = calcForecast(init, monthly, bear, years, inf);
  const baseD = calcForecast(init, monthly, base, years, inf);
  const bullD = calcForecast(init, monthly, bull, years, inf);
  const labels = baseD.map(r=>r.year.toString());

  updateChartData(charts.fc, labels, [
    bullD.map(r=>r.balance), baseD.map(r=>r.balance), bearD.map(r=>r.balance),
    baseD.map(r=>r.totalInvested)
  ]);
  updateChartData(charts.fcReal, labels, [
    bullD.map(r=>r.realValue), baseD.map(r=>r.realValue), bearD.map(r=>r.realValue)
  ]);

  // Scenario summary
  const sum = el('fcSummary');
  if (sum) {
    const items = [
      { cls:'bull', label:'Optimis', rate:bull, final:bullD[years-1].balance },
      { cls:'base', label:'Sederhana', rate:base, final:baseD[years-1].balance },
      { cls:'bear', label:'Pesimis', rate:bear, final:bearD[years-1].balance },
    ];
    sum.innerHTML = `<div class="scenario-summary">${items.map(s=>`
      <div class="scenario-card">
        <div class="scenario-card-label ${s.cls}">${s.label} (${s.rate}%)</div>
        <div class="scenario-card-val">${fmt(s.final)}</div>
        <div class="scenario-card-sub">Selepas ${years} tahun</div>
      </div>`).join('')}</div>`;
  }

  // Milestones
  const ms = el('fcMilestones');
  if (ms) {
    const targets = [100000, 250000, 500000, 1000000, 2000000, 5000000];
    const hits = targets.map(t => {
      const yr = baseD.find(r=>r.balance>=t);
      return { label:`Capai ${fmtK(t)}`, value:yr?`Tahun ${yr.year}`:`> ${years} thn` };
    });
    hits.push({ label:`Nilai Benar akhir (inf: ${inf}%)`, value:fmt(baseD[years-1].realValue) });
    hits.push({ label:`Kuasa beli dilindungi`, value:fmtPct((baseD[years-1].realValue/baseD[years-1].totalInvested-1)*100) });
    ms.innerHTML = hits.map(h=>`
      <div class="milestone-card">
        <span class="milestone-label">${h.label}</span>
        <span class="milestone-val">${h.value}</span>
      </div>`).join('');
  }
}

// ── UPDATE GOAL ──
function updateGoal() {
  const { goalAmt, goalCurrent, goalYears, goalRate, fireExp, fireWithdraw } = state;
  const reqDCA = calcRequiredDCA(goalAmt, goalCurrent, goalYears, goalRate);
  const fireNum = fireExp/(fireWithdraw/100);
  const stillNeeded = Math.max(0, fireNum-goalCurrent);

  setText('goalRequiredDCA', reqDCA<1 ? 'Dah cukup!' : fmt(reqDCA));
  setText('goalDCASub', reqDCA<1
    ? 'Simpanan semasa sudah mencukupi — teruskan melabur!'
    : `Labur ${fmt(reqDCA)}/bulan untuk capai ${fmt(goalAmt)} dalam ${goalYears} tahun`);
  setText('fireNumber', fmt(fireNum));
  setText('fireSub', `${fmt(fireExp)}/thn ÷ ${fmtPct(fireWithdraw)} = ${fmt(fireNum)}`);

  const trajectory = calcForecast(goalCurrent, reqDCA>0?reqDCA:0, goalRate, goalYears, 0);
  const labels = trajectory.map(r=>r.year.toString());
  updateChartData(charts.goal, labels, [
    trajectory.map(r=>r.balance),
    labels.map(()=>goalAmt)
  ]);

  // FIRE donut
  const saved = Math.min(goalCurrent, fireNum);
  charts.fire.data.datasets[0].data = [saved, Math.max(0,stillNeeded)];
  charts.fire.data.datasets[0].backgroundColor = [C.bull, isDark()?'#374151':'#e4e4e7'];
  charts.fire.update('active');

  const pct = Math.min(100,(goalCurrent/goalAmt)*100);
  const firePct = Math.min(100,(goalCurrent/fireNum)*100);
  const bd = el('goalBreakdown');
  if (bd) bd.innerHTML = `
    <div class="chart-block" style="margin-bottom:0">
      <div class="gbd-row"><span>Sasaran Matlamat</span><span>${fmt(goalAmt)}</span></div>
      <div class="gbd-row"><span>Simpanan Semasa</span><span>${fmt(goalCurrent)}</span></div>
      <div class="gbd-row"><span>Jurang Tersisa</span><span style="color:var(--bear)">${fmt(Math.max(0,goalAmt-goalCurrent))}</span></div>
      <div class="gbd-row"><span>DCA Bulanan Perlu</span><span style="color:var(--accent)">${reqDCA<1?'Tidak perlu':fmt(reqDCA)}</span></div>
      <div class="gbd-row"><span>Nilai Akhir Dijangka</span><span>${fmt(trajectory[trajectory.length-1]?.balance||0)}</span></div>
      <div style="padding:0.75rem 0 0.25rem">
        <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-3);margin-bottom:4px">
          <span>Kemajuan Matlamat</span><span>${pct.toFixed(1)}%</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div style="padding:0.25rem 0 0.5rem">
        <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-3);margin-bottom:4px">
          <span>Kemajuan FIRE</span><span>${firePct.toFixed(1)}%</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${firePct}%"></div></div>
      </div>
    </div>`;
}

// ── UPDATE ZAKAT (SIMPLIFIED) ──
function updateZakat() {
  if (!savData.length) return;
  const last = savData[savData.length-1];

  // Manual override or auto from savings
  const manualBase = parseFloat(el('zakatManualBase')?.value)||0;
  let base = 0;
  if (manualBase>0) {
    base = manualBase;
  } else {
    if (state.zakatBasis==='balance') base = last.balance;
    else if (state.zakatBasis==='dividend') base = last.dividend;
    else base = last.balance + last.dividend;
  }

  const zakatAmt = base*(state.zakatRate/100);

  animateCounter(el('zakatAmount'), zakatAmt, fmt);
  setText('zakatSub', `${state.zakatRate}% × ${fmt(base)}`);
  setText('zbdBase', state.zakatBasis==='balance'?'Baki Simpanan':state.zakatBasis==='dividend'?'Dividen Sahaja':'Baki + Dividen');
  setText('zbdBaseVal', fmt(base));
  setText('zbdRate', fmtPct(state.zakatRate));
  setText('zbdAmount', fmt(zakatAmt));

  // Yearly zakat projection
  const labels = savData.map(r=>r.year.toString());
  const zakatYearly = savData.map(r=>{
    let b2 = state.zakatBasis==='balance' ? r.balance
      : state.zakatBasis==='dividend' ? r.dividend
      : r.balance+r.dividend;
    return b2*(state.zakatRate/100);
  });
  updateChartData(charts.zakat, labels, [zakatYearly]);
}

// ── UPDATE HISTORY ──
function updateHistory() {
  const labels = DIVIDEND_HISTORY.map(r=>r.year.toString());
  const divs = DIVIDEND_HISTORY.map(r=>r.dividend);
  const bonus = DIVIDEND_HISTORY.map(r=>r.bonus);
  const totals = DIVIDEND_HISTORY.map(r=>r.dividend+r.bonus);

  updateChartData(charts.hist, labels, [divs, bonus]);

  const avg = totals.reduce((a,b)=>a+b,0)/totals.length;
  const last5 = totals.slice(-5);
  const avg5 = last5.reduce((a,b)=>a+b,0)/last5.length;
  const high = Math.max(...totals);
  const low = Math.min(...totals);
  const highYear = DIVIDEND_HISTORY[totals.indexOf(high)].year;
  const lowYear = DIVIDEND_HISTORY[totals.indexOf(low)].year;

  setText('histAvgAll', fmtPct(avg));
  setText('histAvg5', fmtPct(avg5));
  setText('histHigh', fmtPct(high));
  setText('histLow', fmtPct(low));
  setText('histHighYear', highYear.toString());
  setText('histLowYear', lowYear.toString());

  buildHistoryTable(totals);
}

// ── UPDATE ALL ──
function updateAll() {
  saveState();
  updateSavings();
  updateFinancing();
  updateComparison();
  updateForecast();
  updateGoal();
  updateZakat();
  updateHistory();
  updateDashboard();
}

// ── TABLE BUILDERS ──
function buildSavingsTable() {
  const body = el('savTableBody');
  if (!body) return;
  body.innerHTML = savData.map(r=>`
    <tr>
      <td>${r.year}</td>
      <td>${fmt(r.yearStart)}</td>
      <td>${fmt(r.yearDeposit)}</td>
      <td>${fmt(r.dividend)}</td>
      <td>${fmt(r.balance)}</td>
      <td>${fmt(r.totalInvested)}</td>
    </tr>`).join('');
}

function buildFinancingTable() {
  const body = el('finTableBody');
  if (!body||!finData.length) return;
  body.innerHTML = finData.map(r=>`
    <tr>
      <td>${r.year}</td>
      <td>${fmt(r.loanBalance)}</td>
      <td>${fmt(r.yearInterest)}</td>
      <td>${fmt(r.yearPrincipal)}</td>
      <td>${fmt(r.asbValue)}</td>
      <td style="color:${r.netWorth>=0?'var(--bull)':'var(--bear)'}">${fmt(r.netWorth)}</td>
    </tr>`).join('');
}

function buildSensitivityTable(monthly, loanRate, fdRate, years) {
  const body = el('sensitivityBody');
  if (!body) return;
  const rates = [3, 4, 5, 6, 7, 8];
  body.innerHTML = rates.map(rate => {
    const asb = calcASB(0, monthly, rate, 0, years);
    const asbFinal = asb[asb.length-1].balance;
    const loanAmt = calcLoanFromPayment(monthly, loanRate, years*12);
    const asbf = calcASBF(loanAmt, loanRate, years, rate);
    const asbfNet = asbf[asbf.length-1].netWorth;
    const fd = calcDCA(monthly, fdRate, years);
    const fdFinal = fd[fd.length-1].balance;
    const finals = [asbFinal, asbfNet, fdFinal];
    const maxI = finals.indexOf(Math.max(...finals));
    const names = ['winner-asb','winner-asbf','winner-fd'];
    const labels = ['ASB Biasa','ASBF','FD'];
    return `<tr>
      <td>${fmtPct(rate)}</td>
      <td>${fmt(asbFinal)}</td>
      <td>${fmt(asbfNet)}</td>
      <td>${fmt(fdFinal)}</td>
      <td><span class="winner-badge ${names[maxI]}">${labels[maxI]}</span></td>
    </tr>`;
  }).join('');
}

function buildHistoryTable(totals) {
  const body = el('histTableBody');
  if (!body) return;
  body.innerHTML = DIVIDEND_HISTORY.map((r,i)=>{
    const prev = i>0 ? DIVIDEND_HISTORY[i-1].dividend+DIVIDEND_HISTORY[i-1].bonus : null;
    const total = r.dividend+r.bonus;
    let trend = '—';
    if (prev!==null) {
      trend = total>prev ? '<span class="trend-up"><i class="ph ph-trend-up"></i></span>'
        : total<prev ? '<span class="trend-down"><i class="ph ph-trend-down"></i></span>'
        : '<span class="trend-same">→</span>';
    }
    return `<tr>
      <td>${r.year}</td>
      <td>${fmtPct(r.dividend)}</td>
      <td>${r.bonus>0?fmtPct(r.bonus):'—'}</td>
      <td style="font-weight:700;color:var(--text-1)">${fmtPct(total)}</td>
      <td>${trend}</td>
    </tr>`;
  }).join('');
}

// ── TAB SYSTEM ──
function moveTabIndicator(btn) {
  const ind = el('tabIndicator');
  if (!ind||!btn) return;
  ind.style.left = btn.offsetLeft+'px';
  ind.style.width = btn.offsetWidth+'px';
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  const panel = el('panel-'+tabId);
  const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (panel) panel.classList.add('active');
  if (btn) {
    btn.classList.add('active');
    moveTabIndicator(btn);
    btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
  }
  if (tabId==='news') {
    const grid = el('newsGrid');
    if (grid && grid.querySelector('.skeleton')) loadNews('ASB PNB Malaysia');
  }
}

// ── SLIDERS ──
function setupSliders() {
  const configs = [
    { id:'savInitial',  key:'savInitial',  disp:'savInitVal',    fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'savMonthly',  key:'savMonthly',  disp:'savMonthlyVal', fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'savRate',     key:'savRate',     disp:'savRateVal',    fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'savBonus',    key:'savBonus',    disp:'savBonusVal',   fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'savYears',    key:'savYears',    disp:'savYearsVal',   fmt:v=>`${v} tahun` },
    { id:'finLoan',     key:'finLoan',     disp:'finLoanVal',    fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'finPayment',  key:'finPayment',  disp:'finPaymentVal', fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'finRate',     key:'finRate',     disp:'finRateVal',    fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'finTenure',   key:'finTenure',   disp:'finTenureVal',  fmt:v=>`${v} tahun` },
    { id:'finDiv',      key:'finDiv',      disp:'finDivVal',     fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'cmpBudget',   key:'cmpBudget',   disp:'cmpBudgetVal',  fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'cmpDiv',      key:'cmpDiv',      disp:'cmpDivVal',     fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'cmpLoanRate', key:'cmpLoanRate', disp:'cmpLoanRateVal',fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'cmpFDRate',   key:'cmpFDRate',   disp:'cmpFDRateVal',  fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'cmpEPFRate',  key:'cmpEPFRate',  disp:'cmpEPFRateVal', fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'cmpYears',    key:'cmpYears',    disp:'cmpYearsVal',   fmt:v=>`${v} tahun` },
    { id:'fcInit',      key:'fcInit',      disp:'fcInitVal',     fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'fcMonthly',   key:'fcMonthly',   disp:'fcMonthlyVal',  fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'fcYears',     key:'fcYears',     disp:'fcYearsVal',    fmt:v=>`${v} tahun` },
    { id:'fcInflation', key:'fcInflation', disp:'fcInflationVal',fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'goalAmt',     key:'goalAmt',     disp:'goalAmtVal',    fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'goalCurrent', key:'goalCurrent', disp:'goalCurrentVal',fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'goalYears',   key:'goalYears',   disp:'goalYearsVal',  fmt:v=>`${v} tahun` },
    { id:'goalRate',    key:'goalRate',    disp:'goalRateVal',   fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'fireExp',     key:'fireExp',     disp:'fireExpVal',    fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'fireWithdraw',key:'fireWithdraw',disp:'fireWithdrawVal',fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'zakatRate',   key:'zakatRate',   disp:'zakatRateVal',  fmt:v=>`${(+v).toFixed(1)}%` },
  ];

  configs.forEach(({ id, key, disp, fmt:f }) => {
    const slider = el(id);
    const display = el(disp);
    if (!slider) return;
    // Set initial display
    if (display) display.textContent = f(slider.value);
    slider.addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      state[key] = v;
      if (display) display.textContent = f(v);
      updateAll();
    });
  });
}

// ── SLIDER TOOLTIP ──
function setupSliderTooltip() {
  const tooltip = el('sliderTooltip');
  if (!tooltip) return;
  document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', e => {
      const rect = e.target.getBoundingClientRect();
      const pct = (e.target.value-e.target.min)/(e.target.max-e.target.min);
      const x = rect.left + pct*rect.width;
      const y = rect.top + window.scrollY - 8;
      tooltip.textContent = e.target.value;
      tooltip.style.left = x+'px';
      tooltip.style.top = y+'px';
      tooltip.classList.add('visible');
    });
    slider.addEventListener('blur', () => tooltip.classList.remove('visible'));
    slider.addEventListener('change', () => setTimeout(()=>tooltip.classList.remove('visible'), 600));
  });
}

// ── TOAST ──
function showToast(msg) {
  const t = el('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}

// ── EVENTS ──
function setupEventListeners() {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Theme
  el('themeToggle')?.addEventListener('click', toggleTheme);

  // ASBF mode toggle
  el('asbfModeToggle')?.addEventListener('click', () => {
    state.finMode = 'loan';
    el('asbfModeToggle').classList.add('active');
    el('asbfPaymentModeBtn').classList.remove('active');
    el('asbfLoanGroup').classList.remove('hidden');
    el('asbfPaymentGroup').classList.add('hidden');
    updateFinancing();
  });
  el('asbfPaymentModeBtn')?.addEventListener('click', () => {
    state.finMode = 'payment';
    el('asbfPaymentModeBtn').classList.add('active');
    el('asbfModeToggle').classList.remove('active');
    el('asbfPaymentGroup').classList.remove('hidden');
    el('asbfLoanGroup').classList.add('hidden');
    updateFinancing();
  });

  // Savings table toggle
  el('savTableToggle')?.addEventListener('click', () => {
    const wrap = el('savTableWrap');
    if (!wrap) return;
    wrap.classList.toggle('hidden');
    el('savTableToggle').innerHTML = wrap.classList.contains('hidden')
      ? '<i class="ph ph-table"></i> Lihat Jadual Tahunan'
      : '<i class="ph ph-x"></i> Tutup Jadual';
  });

  // Financing table toggle
  el('finTableToggle')?.addEventListener('click', () => {
    const wrap = el('finTableWrap');
    if (!wrap) return;
    wrap.classList.toggle('hidden');
    el('finTableToggle').innerHTML = wrap.classList.contains('hidden')
      ? '<i class="ph ph-table"></i> Lihat Jadual Amortisasi'
      : '<i class="ph ph-x"></i> Tutup Jadual';
  });

  // Goal type buttons
  document.querySelectorAll('.goal-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.goal-type-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.goalType = btn.dataset.goal;
      // Preset amounts
      const presets = { retirement:500000, education:200000, property:600000, emergency:30000, custom:100000 };
      const preset = presets[state.goalType];
      if (preset) {
        state.goalAmt = preset;
        const sl = el('goalAmt');
        if (sl) { sl.value = preset; setText('goalAmtVal', `RM ${preset.toLocaleString('en-MY')}`); }
      }
      updateGoal();
    });
  });

  // Zakat basis radio
  document.querySelectorAll('input[name="zakatBasis"]').forEach(radio => {
    radio.addEventListener('change', e => {
      state.zakatBasis = e.target.value;
      updateZakat();
    });
  });

  // Zakat manual input
  el('zakatManualBase')?.addEventListener('input', () => updateZakat());

  // Withdrawal amount
  el('withdrawAmount')?.addEventListener('input', () => updateSavings());

  // Forecast scenario inputs
  ['fcBear','fcBase','fcBull'].forEach(id => {
    el(id)?.addEventListener('input', e => {
      state[id] = parseFloat(e.target.value)||0;
      updateForecast();
      updateDashboard();
    });
  });

  // News filter buttons
  document.querySelectorAll('.news-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.news-filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const grid = el('newsGrid');
      if (grid) grid.innerHTML = '<div class="skeleton"></div>'.repeat(6);
      loadNews(btn.dataset.topic);
    });
  });

  // Window resize — re-position indicator
  window.addEventListener('resize', () => {
    const active = document.querySelector('.tab-btn.active');
    if (active) moveTabIndicator(active);
  });
}

// ── NEWS ──
async function loadNews(topic) {
  const grid = el('newsGrid');
  if (!grid) return;
  grid.innerHTML = '<div class="skeleton"></div>'.repeat(6);

  // Try rss2json first (more reliable than allorigins)
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(topic)}&hl=ms&gl=MY&ceid=MY:ms`;
  const r2jUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=12`;

  const renderItems = items => {
    if (!items.length) throw new Error('empty');
    grid.innerHTML = items.map(item => {
      const title = (item.title||'').replace(/<!\[CDATA\[|\]\]>/g,'').trim();
      const link  = item.link||item.url||'#';
      const date  = item.pubDate||item.published||'';
      const src   = item.author||item.source||'PNB / Kewangan';
      return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="news-card">
        <div class="news-source">${src.length>30?src.slice(0,28)+'…':src}</div>
        <div class="news-title">${title.length>130?title.slice(0,127)+'…':title}</div>
        <div class="news-date">${fmtDate(date)}</div>
      </a>`;
    }).join('');
  };

  // Strategy 1: rss2json
  try {
    const resp = await fetch(r2jUrl, { signal: AbortSignal.timeout(8000) });
    const data = await resp.json();
    if (data.status === 'ok' && data.items?.length) { renderItems(data.items); return; }
  } catch {}

  // Strategy 2: allorigins fallback with XML parse
  try {
    const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
    const resp  = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    const data  = await resp.json();
    if (!data.contents) throw new Error('no contents');
    const doc   = new DOMParser().parseFromString(data.contents, 'text/xml');
    const raw   = Array.from(doc.querySelectorAll('item')).slice(0, 12).map(item => ({
      title   : item.querySelector('title')?.textContent||'',
      link    : item.querySelector('link')?.nextSibling?.textContent || item.querySelector('guid')?.textContent || '#',
      pubDate : item.querySelector('pubDate')?.textContent||'',
      source  : item.querySelector('source')?.textContent||'Berita',
    }));
    renderItems(raw.map(r => ({ title:r.title, link:r.link, pubDate:r.pubDate, author:r.source })));
    return;
  } catch {}

  // Fail state
  grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:var(--text-3)">
    <i class="ph ph-newspaper" style="font-size:2.5rem;display:block;margin-bottom:0.75rem;opacity:0.4"></i>
    <div style="font-size:0.85rem;margin-bottom:0.5rem">Berita tidak dapat dimuatkan</div>
    <div style="font-size:0.75rem;color:var(--text-4)">Cuba semak sambungan internet atau<br>klik butang topik sekali lagi</div>
  </div>`;
}

// ── THEME ──
function initTheme() {
  const saved = localStorage.getItem('asb-pro-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  const theme = saved||preferred;
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);
}

function toggleTheme() {
  const curr = document.documentElement.dataset.theme;
  const next = curr==='dark'?'light':'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('asb-pro-theme', next);
  updateThemeIcon(next);
  updateChartTheme(next==='dark');
}

function updateThemeIcon(theme) {
  const icon = el('themeIcon');
  if (icon) icon.className = theme==='dark'?'ph ph-sun':'ph ph-moon';
}

function updateChartTheme(dark) {
  const grid = dark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)';
  const tick = dark?'#6b7280':'#9ca3af';
  const tip  = dark?'#1f2937':'#18181b';
  Object.values(charts).forEach(c => {
    if (!c) return;
    if (c.options.scales) {
      Object.values(c.options.scales).forEach(s => {
        if (s.grid) s.grid.color = grid;
        if (s.ticks) s.ticks.color = tick;
      });
    }
    if (c.options.plugins?.tooltip) c.options.plugins.tooltip.backgroundColor = tip;
    if (c.options.plugins?.legend?.labels) c.options.plugins.legend.labels.color = tick;
    c.update('none');
  });
  // Update FIRE donut bg
  if (charts.fire) {
    charts.fire.data.datasets[0].backgroundColor[1] = dark?'#374151':'#e4e4e7';
    charts.fire.update('none');
  }
}

// ── INIT ──
function init() {
  initTheme();
  loadSavedState();      // 1. load persisted state FIRST
  initCharts();
  applyStateToInputs();  // 2. sync DOM inputs from loaded state
  setupSliders();        // 3. hook events (reads current input values)
  setupSliderTooltip();
  setupEventListeners();
  updateAll();
  setTimeout(() => {
    const active = document.querySelector('.tab-btn.active');
    if (active) moveTabIndicator(active);
  }, 80);
  // Auto-fetch latest dividend (non-blocking)
  fetchLatestDividend();
}

document.addEventListener('DOMContentLoaded', init);
