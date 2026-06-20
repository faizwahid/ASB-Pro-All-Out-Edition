
// ══════════════════════════════════════════════════════
// STRINGS — Full BM / EN translation dictionary
// ══════════════════════════════════════════════════════
const STRINGS = {
  bm: {
    brand_sub:'Kalkulator Pelaburan',
    hdr_share:'Kongsi Link',
    tab_dashboard:'Dashboard', tab_savings:'Simpanan', tab_financing:'ASBF',
    tab_comparison:'Banding', tab_forecast:'Ramalan', tab_goal:'Matlamat',
    tab_zakat:'Zakat', tab_history:'Sejarah', tab_news:'Berita', tab_ageplan:'Pelan Umur',
    ui_normal:'Standard', ui_pro:'Pro',
    hero_label:'Unjuran Nilai Akhir (Kadar Sederhana)',
    hero_eyebrow:'Nilai dikira berdasarkan tetapan di tab Simpanan — ubah untuk lihat unjuran anda',
    stat_invested:'Jumlah Dilaburkan', stat_dividends:'Jumlah Dividen',
    stat_monthly:'Sumbangan Bulanan', stat_zakat:'Zakat Tahun Ini',
    chart_scenarios:'Pertumbuhan ASB — 3 Senario',
    lbl_optimis:'Optimis', lbl_moderate:'Sederhana', lbl_pessimis:'Pesimis',
    lbl_invested:'Dilaburkan', lbl_asb_value:'Nilai ASB', lbl_loan_bal:'Baki Pinjaman',
    lbl_savings:'Simpanan', lbl_target:'Sasaran',
    qc_savings:'Kira Simpanan', qc_financing:'Kira ASBF',
    qc_forecast:'Lihat Ramalan', qc_goals:'Tetapkan Matlamat',
    sav_title:'Kalkulator Simpanan ASB',
    sav_desc:'Simulasi DCA bulanan dengan kaedah pengiraan PNB',
    sav_initial:'Deposit Awal', sav_monthly:'Sumbangan Bulanan (DCA)',
    sav_rate:'Kadar Dividen Dijangka', sav_bonus:'Bonus Tahunan',
    sav_years:'Tempoh Pelaburan', sav_withdrawal_section:'Simulasi Pengeluaran',
    sav_withdrawal:'Pengeluaran Sekali (RM)',
    sav_withdrawal_hint:'Kesan pengeluaran terhadap nilai akhir',
    sav_final_label:'Nilai Akhir (DCA)', sav_invested:'Jumlah Dilaburkan',
    sav_dividend:'Jumlah Dividen', sav_roi:'ROI', sav_impact:'Impak Pengeluaran',
    sav_compare:'DCA vs Lump Sum', sav_dca_label:'DCA Bulanan',
    sav_lump_label:'Lump Sum Awal',
    sav_dca_sub:'Salin RM/bulan sepanjang tempoh',
    sav_lump_sub:'Laburkan semua duit dari awal',
    sav_autosave:'Tetapan disimpan secara automatik',
    sav_view_table:'Lihat Jadual Tahunan', sav_close_table:'Tutup Jadual',
    sav_chart1:'Pertumbuhan ASB (RM)', sav_chart2:'Dividen Tahunan (RM)',
    th_start_bal:'Baki Awal', th_deposit:'Deposit', th_dividend:'Dividen',
    th_end_bal:'Baki Akhir', th_total_inv:'Jum. Dilaburkan',
    th_interest:'Faedah', th_principal:'Prinsipal', th_net:'Nilai Bersih',
    fin_title:'Kalkulator ASBF',
    fin_desc:'Pembiayaan ASB — analisis bayaran, faedah dan keuntungan bersih',
    fin_mode_loan:'Input Jumlah Pinjaman', fin_mode_pay:'Input Bayaran Bulanan',
    fin_loan:'Jumlah Pinjaman', fin_payment:'Bayaran Bulanan',
    fin_rate:'Kadar Faedah Pinjaman', fin_tenure:'Tempoh Pinjaman',
    fin_div:'Kadar Dividen ASB', fin_net_label:'Keuntungan Bersih ASBF',
    fin_spread:'Spread (Dividen − Faedah)',
    fin_monthly:'Bayaran Bulanan', fin_asb_final:'Nilai ASB (Akhir)',
    fin_interest:'Jumlah Faedah Dibayar', fin_total_paid:'Jumlah Bayaran',
    fin_chart1:'Nilai ASB vs Baki Pinjaman', fin_chart2:'Komposisi Bayaran',
    fin_view_table:'Lihat Jadual Amortisasi',
    cmp_title:'Perbandingan Instrumen',
    cmp_desc:'ASB Biasa vs ASBF vs FD vs EPF — pilih yang terbaik untuk anda',
    cmp_budget:'Bajet Bulanan', cmp_div:'Kadar Dividen ASB',
    cmp_loan:'Kadar Faedah ASBF', cmp_fd:'Kadar FD', cmp_epf:'Kadar EPF/KWSP',
    cmp_years:'Tempoh', badge_asb:'ASB Biasa', badge_asbf:'ASBF',
    badge_fd:'FD Bank', badge_epf:'EPF/KWSP',
    cmp_method_dca:'DCA Bulanan', cmp_method_loan:'Pinjaman Sepenuh',
    cmp_chart_title:'Pertumbuhan Semua Instrumen',
    cmp_sensitivity:'Analisis Sensitiviti (Kadar Dividen)',
    cmp_th_rate:'Kadar Dividen', cmp_th_asb:'ASB Biasa',
    cmp_th_asbf:'ASBF (bersih)', cmp_th_fd:'FD', cmp_th_winner:'Pemenang',
    fc_title:'Ramalan Jangka Panjang',
    fc_desc:'Unjuran 3 senario dengan pelarasan inflasi',
    fc_initial:'Deposit Awal', fc_monthly:'Sumbangan Bulanan',
    fc_years:'Tempoh Ramalan', fc_inflation:'Kadar Inflasi',
    fc_scenario_title:'Kadar Senario',
    fc_chart1:'Unjuran Nilai Nominal', fc_chart2:'Nilai Benar (Selepas Inflasi)',
    goal_title:'Perancang Matlamat Kewangan',
    goal_desc:'Kira DCA bulanan yang diperlukan + nombor FIRE anda',
    goal_target:'Sasaran (RM)', goal_current:'Simpanan Semasa',
    goal_years:'Tempoh Capai Matlamat', goal_rate:'Kadar Pulangan Dijangka',
    goal_dca_label:'DCA Bulanan Diperlukan', goal_fire_section:'Nombor FIRE',
    goal_fire_exp:'Perbelanjaan Tahunan', goal_fire_rate:'Kadar Pengeluaran',
    goal_fire_label:'Nombor FIRE Anda',
    goal_chart:'Trajektori Capai Matlamat', goal_fire_chart:'Kemajuan FIRE',
    goal_btn_retirement:'Persaraan', goal_btn_education:'Pendidikan',
    goal_btn_property:'Hartanah', goal_btn_emergency:'Kecemasan',
    goal_btn_custom:'Lain',
    gbd_target:'Sasaran Matlamat', gbd_current:'Simpanan Semasa',
    gbd_gap:'Jurang Tersisa', gbd_dca:'DCA Bulanan Perlu', gbd_final:'Nilai Akhir Dijangka',
    gbd_progress:'Kemajuan Matlamat', gbd_fire:'Kemajuan FIRE',
    zakat_title:'Kalkulator Zakat ASB',
    zakat_desc:'Set kadar %, nilai dikira secara automatik dari tab Simpanan',
    zakat_rate:'Kadar Zakat', zakat_basis:'Asas Pengiraan',
    zakat_balance:'Baki Simpanan', zakat_dividend:'Dividen Sahaja',
    zakat_both:'Baki + Dividen', zakat_override:'Override Manual (opsyenal)',
    zakat_override_label:'Nilai Dikenakan Zakat (RM)',
    zakat_override_ph:'Kosong = auto dari tab Simpanan',
    zakat_amount_label:'Zakat Perlu Dibayar',
    zakat_chart_title:'Unjuran Zakat Tahunan',
    zbd_basis:'Asas Pengiraan', zbd_value:'Nilai Asas',
    zbd_rate:'Kadar Zakat', zbd_total:'Zakat Tahunan',
    zakat_links_title:'Bayar Zakat Secara Online',
    zakat_note:'Kaedah pengiraan zakat ASB berbeza mengikut negeri dan fatwa. Rujuk lembaga zakat negeri anda untuk kepastian hukum.',
    hist_title:'Sejarah Dividen ASB',
    hist_desc:'Data dividen & bonus PNB 2010–2024 · Auto-dikemas kini bila ada pengumuman baharu',
    hist_avg_all:'Purata 2010–2024', hist_avg5:'Purata 5 Tahun',
    hist_high:'Tertinggi', hist_low:'Terendah', hist_overall:'Keseluruhan',
    hist_chart_title:'Dividen & Bonus Tahunan (%)',
    hist_col_year:'Tahun', hist_col_div:'Dividen',
    hist_col_bonus:'Bonus', hist_col_total:'Jumlah', hist_col_trend:'Trend',
    news_title:'Berita ASB & Pelaburan',
    news_desc:'Berita terkini berkaitan ASB, PNB dan pasaran kewangan Malaysia',
    news_bm:'Bahasa Melayu', news_en:'English',
    // Dynamic strings used in JS
    years_sfx:'tahun', month_sfx:'bulan',
    dca_better:'DCA lebih baik', lump_better:'Lump Sum lebih baik', dca_equal:'Kedua-dua hampir sama',
    dca_reason:'dividen dikompaunkan atas deposit bertahap',
    lump_reason:'lebih banyak modal dikompaunkan dari awal',
    no_withdrawal:'—', exceed_deposit:'Melebihi simpanan awal',
    spread_positive:'melebihi faedah — menguntungkan',
    spread_zero:'titik pulang modal', spread_negative:'melebihi dividen — rugi bersih',
    net_profit:'Untung bersih selepas tolak faedah',
    net_loss:'Rugi — faedah lebih tinggi dari dividen',
    breakeven_yr:'ASBF mengatasi ASB Biasa pada tahun ke-',
    breakeven_no:'ASB Biasa unggul keseluruhan tempoh',
    milestone_reach:'Capai', milestone_over:'thn', milestone_beyond:'> thn',
    milestone_real:'Nilai Benar akhir (inf:',
    milestone_power:'Kuasa beli dilindungi',
    dca_enough:'Dah cukup!', dca_invest_msg:'Labur',
    dca_per_month:'/bulan untuk capai', dca_in:'dalam',
    fire_sub_from:'perbelanjaan tahunan',
    goal_progress:'Kemajuan Matlamat', goal_fire_prog:'Kemajuan FIRE',
    toast_share:'Link disalin! Simpan sebagai bookmark atau kongsi.',
    toast_url:'URL dikemas kini — salin dari bar alamat',
    toast_share_fail:'Gagal — salin URL dari bar alamat',
    toast_import:'Tetapan berjaya diimport!',
    toast_import_fail:'Fail tidak sah',
    reset_confirm:'Reset semua tetapan ke nilai asal?',
    live_loading:'Mengambil data terkini...',
    live_pending:'Dividen tahun ini belum diumumkan oleh PNB',
    live_static:'Data disahkan (statik)',
    fallback_notice:'Suapan langsung tidak tersedia — pautan sumber dipercayai',
    fallback_visit:'Ketik untuk lawati',
    winner_asb:'ASB Biasa', winner_asbf:'ASBF', winner_fd:'FD', winner_epf:'EPF',
                    goal_fire_exp:'Nak Keluarkan Sebulan Bila Bersara',
    goal_fire_advanced:'Tetapan Lanjutan (opsyenal)',
    goal_fire_rate_hint:'Pakar kewangan cadang 4% sebagai kadar selamat',
    goal_fire_rate:'Kadar Pengeluaran Selamat (%)',
    zakat_m1_title:'App Bank (paling mudah)',
    zakat_m1_desc:'Buka Maybank, CIMB, RHB, Bank Islam — cari "Zakat" dalam menu Bayaran/Payment. Terus tolak dari akaun.',
    zakat_m2_title:'e-Wallet (Touch \'n Go)',
    zakat_m2_desc:'Buka TnG eWallet → More → cari "Zakat". Boleh bayar terus guna baki eWallet.',
    zakat_m3_title:'Portal Zakat Negeri',
    zakat_m3_desc:'Cari portal rasmi negeri anda (LZS, MAIWP, MAINS dll). Ketik untuk cari di Google.',
    fin_calc_loan_label:'Jumlah Pinjaman Maksimum Yang Boleh Dipohon:',
    sav_initial:'Simpanan/Deposit Awal',
    sav_monthly:'Tabung Setiap Bulan',
    sav_rate:'Anggaran Dividen Tahunan (%)',
    sav_years:'Berapa Tahun Nak Simpan?',
    fin_mode_loan:'Tahu Pinjaman', fin_mode_pay:'Tahu Bayaran/Bulan',
    fin_hint_loan:'Masukkan jumlah pinjaman — bayaran bulanan dikira automatik',
    fin_hint_pay:'Masukkan bayaran bulanan mampu — pinjaman maksimum dikira automatik',
    fin_auto_payment:'Bayaran bulanan anda:', fin_auto_loan:'Pinjaman maksimum anda:',
    footer_disclaimer:'Bukan nasihat kewangan',
    footer_by:'Dibangunkan oleh',
    age_title:'Pelan Kewangan Ikut Umur',
    age_desc:'Masukkan umur anda — kami susun pelan & cadangan instrumen',
    age_current:'Umur Sekarang', age_retire:'Umur Nak Bersara',
    age_savings:'Simpanan Sekarang', age_monthly:'Boleh Tabung Sebulan',
    age_years_left:'Tahun Sehingga Bersara',
    age_at_retire:'Nilai Masa Bersara', age_monthly_income:'Pendapatan Bulanan (4%)',
    age_monthly_income_sub:'Jika keluar 4%/tahun',
    age_instruments:'Pilihan Instrumen Untuk Anda',
    age_timeline:'Unjuran Sehingga Bersara',
    age_milestones:'Pencapaian Ikut Umur (ASB 5%)',
    fire_flow_1:'Nak keluarkan sebulan',
    fire_flow_2:'Perlu kumpul (Nombor FIRE)',
    fire_flow_3:'Anggaran masa capai (ikut DCA semasa)',
    cmpEPFRateVal_default:'6.30%',
            tip_dca:'DCA (Dollar Cost Averaging) — cara melabur sikit-sikit setiap bulan, bukan sekali gus. Kurangkan risiko turun naik harga.',
    tip_dividend:'Dividen — pulangan tahunan yang ASB bayar. Contoh 2024: ~5%. Makin tinggi, makin banyak untung.',
    tip_dca_lump:'Lump Sum = labur semua duit sekali gus dari awal. DCA = labur sikit-sikit. Banding mana lebih baik untuk anda.',
    tip_spread:'Spread = Dividen ASB tolak Faedah pinjaman. Kalau positif (+), ASBF untung. Kalau negatif (−), rugi.',
    tip_fire:'FIRE = Financial Independence, Retire Early. Jumlah simpanan yang cukup untuk hidup dari pulangan pelaburan tanpa kerja.',
    manual_div_open:'Isi Dividen Manual',
    manual_div_title:'Masukkan Dividen Terkini',
    manual_div_sub:'PNB belum kemaskini laman web — isi sendiri bila diumumkan',
    manual_div_year:'Tahun', manual_div_rate:'Dividen (%)', manual_div_bonus:'Bonus (%)',
    manual_div_save:'Simpan & Kemas Kini',
    zakat_your_values:'Nilai ASB Anda',
    zakat_bal_label:'Baki Simpanan ASB (RM)',
    zakat_div_label:'Dividen Tahun Ini (RM)',
    zakat_auto_fill:'Auto-isi dari tab Simpanan',
    news_refresh:'Muat Semula',
  },
  en: {
    brand_sub:'Investment Calculator',
    hdr_share:'Share Link',
    tab_dashboard:'Dashboard', tab_savings:'Savings', tab_financing:'ASBF',
    tab_comparison:'Compare', tab_forecast:'Forecast', tab_goal:'Goals',
    tab_zakat:'Zakat', tab_history:'History', tab_news:'News', tab_ageplan:'Age Plan',
    ui_normal:'Standard', ui_pro:'Pro',
    hero_label:'Projected Final Value (Base Rate)',
    hero_eyebrow:'Calculated from your Savings settings — adjust to see your projection',
    stat_invested:'Total Invested', stat_dividends:'Total Dividends',
    stat_monthly:'Monthly Contribution', stat_zakat:'Zakat This Year',
    chart_scenarios:'ASB Growth — 3 Scenarios',
    lbl_optimis:'Optimistic', lbl_moderate:'Moderate', lbl_pessimis:'Conservative',
    lbl_invested:'Invested', lbl_asb_value:'ASB Value', lbl_loan_bal:'Loan Balance',
    lbl_savings:'Savings', lbl_target:'Target',
    qc_savings:'Calculate Savings', qc_financing:'Calculate ASBF',
    qc_forecast:'View Forecast', qc_goals:'Set a Goal',
    sav_title:'ASB Savings Calculator',
    sav_desc:'Monthly DCA simulation using the official PNB calculation method',
    sav_initial:'Initial Deposit', sav_monthly:'Monthly Contribution (DCA)',
    sav_rate:'Expected Dividend Rate', sav_bonus:'Annual Bonus',
    sav_years:'Investment Period', sav_withdrawal_section:'Withdrawal Simulation',
    sav_withdrawal:'One-time Withdrawal (RM)',
    sav_withdrawal_hint:'Impact of withdrawal on final value',
    sav_final_label:'Final Value (DCA)', sav_invested:'Total Invested',
    sav_dividend:'Total Dividends', sav_roi:'ROI', sav_impact:'Withdrawal Impact',
    sav_compare:'DCA vs Lump Sum', sav_dca_label:'Monthly DCA',
    sav_lump_label:'Lump Sum Upfront',
    sav_dca_sub:'Invest monthly throughout the period',
    sav_lump_sub:'Invest the total amount from day one',
    sav_autosave:'Settings saved automatically',
    sav_view_table:'View Annual Table', sav_close_table:'Close Table',
    sav_chart1:'ASB Growth (RM)', sav_chart2:'Annual Dividends (RM)',
    th_start_bal:'Opening Balance', th_deposit:'Deposit', th_dividend:'Dividend',
    th_end_bal:'Closing Balance', th_total_inv:'Total Invested',
    th_interest:'Interest', th_principal:'Principal', th_net:'Net Value',
    fin_title:'ASBF Calculator',
    fin_desc:'ASB Financing — analyse payments, interest and net profit',
    fin_mode_loan:'Enter Loan Amount', fin_mode_pay:'Enter Monthly Payment',
    fin_loan:'Loan Amount', fin_payment:'Monthly Payment',
    fin_rate:'Loan Interest Rate', fin_tenure:'Loan Tenure',
    fin_div:'ASB Dividend Rate', fin_net_label:'ASBF Net Profit',
    fin_spread:'Spread (Dividend − Interest)',
    fin_monthly:'Monthly Payment', fin_asb_final:'ASB Value (Final)',
    fin_interest:'Total Interest Paid', fin_total_paid:'Total Payment',
    fin_chart1:'ASB Value vs Loan Balance', fin_chart2:'Payment Composition',
    fin_view_table:'View Amortisation Table',
    cmp_title:'Instrument Comparison',
    cmp_desc:'ASB vs ASBF vs Fixed Deposit vs EPF — find what works best for you',
    cmp_budget:'Monthly Budget', cmp_div:'ASB Dividend Rate',
    cmp_loan:'ASBF Interest Rate', cmp_fd:'Fixed Deposit Rate', cmp_epf:'EPF Rate',
    cmp_years:'Duration', badge_asb:'ASB Regular', badge_asbf:'ASBF',
    badge_fd:'Fixed Deposit', badge_epf:'EPF',
    cmp_method_dca:'Monthly DCA', cmp_method_loan:'Full Financing',
    cmp_chart_title:'All Instruments Growth',
    cmp_sensitivity:'Sensitivity Analysis (Dividend Rate)',
    cmp_th_rate:'Dividend Rate', cmp_th_asb:'ASB Regular',
    cmp_th_asbf:'ASBF (net)', cmp_th_fd:'Fixed Deposit', cmp_th_winner:'Winner',
    fc_title:'Long-Term Forecast',
    fc_desc:'3-scenario projection with inflation adjustment',
    fc_initial:'Initial Deposit', fc_monthly:'Monthly Contribution',
    fc_years:'Forecast Period', fc_inflation:'Inflation Rate',
    fc_scenario_title:'Scenario Rates',
    fc_chart1:'Nominal Value Projection', fc_chart2:'Real Value (After Inflation)',
    goal_title:'Financial Goal Planner',
    goal_desc:'Calculate your required monthly DCA + FIRE number',
    goal_target:'Target (RM)', goal_current:'Current Savings',
    goal_years:'Time to Achieve Goal', goal_rate:'Expected Return Rate',
    goal_dca_label:'Required Monthly DCA', goal_fire_section:'FIRE Number',
    goal_fire_exp:'Annual Expenses', goal_fire_rate:'Withdrawal Rate',
    goal_fire_label:'Your FIRE Number',
    goal_chart:'Goal Achievement Trajectory', goal_fire_chart:'FIRE Progress',
    goal_btn_retirement:'Retirement', goal_btn_education:'Education',
    goal_btn_property:'Property', goal_btn_emergency:'Emergency',
    goal_btn_custom:'Other',
    gbd_target:'Goal Target', gbd_current:'Current Savings',
    gbd_gap:'Remaining Gap', gbd_dca:'Required Monthly DCA', gbd_final:'Projected Final Value',
    gbd_progress:'Goal Progress', gbd_fire:'FIRE Progress',
    zakat_title:'ASB Zakat Calculator',
    zakat_desc:'Set your rate % — value is auto-calculated from your Savings tab',
    zakat_rate:'Zakat Rate', zakat_basis:'Calculation Basis',
    zakat_balance:'Savings Balance', zakat_dividend:'Dividends Only',
    zakat_both:'Balance + Dividends', zakat_override:'Manual Override (optional)',
    zakat_override_label:'Zakatable Amount (RM)',
    zakat_override_ph:'Leave empty = auto from Savings tab',
    zakat_amount_label:'Zakat Payable',
    zakat_chart_title:'Annual Zakat Projection',
    zbd_basis:'Calculation Basis', zbd_value:'Base Value',
    zbd_rate:'Zakat Rate', zbd_total:'Annual Zakat',
    zakat_links_title:'Pay Zakat Online',
    zakat_note:"ASB zakat calculation methods vary by state and religious ruling. Refer to your state's Lembaga Zakat for authoritative guidance.",
    hist_title:'ASB Dividend History',
    hist_desc:'PNB dividend & bonus data 2010–2024 · Auto-updated on new announcements',
    hist_avg_all:'Average 2010–2024', hist_avg5:'5-Year Average',
    hist_high:'Highest', hist_low:'Lowest', hist_overall:'Overall',
    hist_chart_title:'Annual Dividend & Bonus (%)',
    hist_col_year:'Year', hist_col_div:'Dividend',
    hist_col_bonus:'Bonus', hist_col_total:'Total', hist_col_trend:'Trend',
    news_title:'ASB & Investment News',
    news_desc:"Latest news on ASB, PNB and Malaysia's financial markets",
    news_bm:'Bahasa Melayu', news_en:'English',
    years_sfx:'years', month_sfx:'month',
    dca_better:'DCA is better', lump_better:'Lump Sum is better', dca_equal:'Both strategies are similar',
    dca_reason:'dividends compound on each monthly deposit',
    lump_reason:'more capital compounds from the start',
    no_withdrawal:'—', exceed_deposit:'Exceeds initial deposit',
    spread_positive:'exceeds interest — profitable',
    spread_zero:'break-even point', spread_negative:'exceeds dividends — net loss',
    net_profit:'Net profit after deducting interest of',
    net_loss:'Loss — interest is higher than dividends',
    breakeven_yr:'ASBF surpasses ASB Regular in year ',
    breakeven_no:'ASB Regular leads throughout the entire period',
    milestone_reach:'Reach', milestone_over:'yr', milestone_beyond:'> yr',
    milestone_real:'Real value at end (inf:',
    milestone_power:'Purchasing power retained',
    dca_enough:"Already enough!", dca_invest_msg:'Invest',
    dca_per_month:'/month to achieve', dca_in:'in',
    fire_sub_from:'annual expenses',
    goal_progress:'Goal Progress', goal_fire_prog:'FIRE Progress',
    toast_share:'Link copied! Bookmark this page or share the URL.',
    toast_url:'URL updated — copy from address bar',
    toast_share_fail:'Failed — copy URL from address bar',
    toast_import:'Settings imported successfully!',
    toast_import_fail:'Invalid file',
    reset_confirm:'Reset all settings to default?',
    live_loading:'Fetching latest data...',
    live_pending:'This year\'s dividend has not been announced by PNB yet',
    live_static:'Data verified (static)',
    fallback_notice:'Live feed unavailable — here are trusted sources',
    fallback_visit:'Tap to visit',
    winner_asb:'ASB Regular', winner_asbf:'ASBF', winner_fd:'Fixed Deposit', winner_epf:'EPF',
                    goal_fire_exp:'Monthly Withdrawal in Retirement',
    goal_fire_advanced:'Advanced Settings (optional)',
    goal_fire_rate_hint:'Financial experts recommend 4% as a safe withdrawal rate',
    goal_fire_rate:'Safe Withdrawal Rate (%)',
    zakat_m1_title:'Bank App (easiest)',
    zakat_m1_desc:'Open Maybank, CIMB, RHB, Bank Islam — find "Zakat" under Payment menu. Pays directly from your account.',
    zakat_m2_title:'e-Wallet (Touch \'n Go)',
    zakat_m2_desc:'Open TnG eWallet → More → search "Zakat". Pay directly using your eWallet balance.',
    zakat_m3_title:'State Zakat Portal',
    zakat_m3_desc:'Find your state\'s official portal (LZS, MAIWP, MAINS, etc). Tap to search on Google.',
    fin_calc_loan_label:'Maximum Loan Amount You Can Apply For:',
    sav_initial:'Initial Savings / Deposit',
    sav_monthly:'Monthly Contribution',
    sav_rate:'Expected Annual Dividend (%)',
    sav_years:'How Many Years to Save?',
    fin_mode_loan:'Know Loan', fin_mode_pay:'Know Payment',
    fin_hint_loan:'Enter loan amount — monthly payment auto-calculated',
    fin_hint_pay:'Enter affordable monthly payment — max loan auto-calculated',
    fin_auto_payment:'Your monthly payment:', fin_auto_loan:'Your maximum loan:',
    footer_disclaimer:'Not financial advice',
    footer_by:'Built by',
    age_title:'Age-Based Financial Plan',
    age_desc:'Enter your age — we build a plan & suggest instruments',
    age_current:'Current Age', age_retire:'Retirement Age',
    age_savings:'Current Savings', age_monthly:'Monthly Saving',
    age_years_left:'Years Until Retirement',
    age_at_retire:'Value at Retirement', age_monthly_income:'Monthly Income (4%)',
    age_monthly_income_sub:'If withdrawing 4%/year',
    age_instruments:'Instrument Options For You',
    age_timeline:'Projection Until Retirement',
    age_milestones:'Milestones by Age (ASB 5%)',
    fire_flow_1:'Monthly withdrawal',
    fire_flow_2:'Need to save (FIRE Number)',
    fire_flow_3:'Est. time to reach (at current DCA)',
    cmpEPFRateVal_default:'6.30%',
            tip_dca:'DCA (Dollar Cost Averaging) — investing a fixed amount monthly instead of all at once. Reduces risk from price swings.',
    tip_dividend:'Dividend — the annual return ASB pays out. 2024 example: ~5%. Higher rate means more profit.',
    tip_dca_lump:'Lump Sum = invest everything upfront. DCA = invest gradually. Compare which works better for you.',
    tip_spread:'Spread = ASB dividend minus loan interest. Positive (+) means ASBF profits. Negative (−) means a loss.',
    tip_fire:'FIRE = Financial Independence, Retire Early. The savings amount enough to live off investment returns without working.',
    manual_div_open:'Enter Dividend Manually',
    manual_div_title:'Enter Latest Dividend',
    manual_div_sub:'PNB has not updated their website yet — fill in once announced',
    manual_div_year:'Year', manual_div_rate:'Dividend (%)', manual_div_bonus:'Bonus (%)',
    manual_div_save:'Save & Update',
    zakat_your_values:'Your ASB Values',
    zakat_bal_label:'ASB Savings Balance (RM)',
    zakat_div_label:'Annual Dividend (RM)',
    zakat_auto_fill:'Auto-fill from Savings tab',
    news_refresh:'Refresh',
  }
};

function t(key) {
  const lang = state?.lang || 'bm';
  return STRINGS[lang]?.[key] ?? STRINGS.bm?.[key] ?? key;
}

function applyLanguage(lang) {
  state.lang = lang;
  // Update all static [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const str = t(node.dataset.i18n);
    if (str && str !== node.dataset.i18n) node.textContent = str;
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(node => {
    const str = t(node.dataset.i18nPh);
    if (str) node.placeholder = str;
  });
  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'ms';
  // Toggle active state on lang buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Re-run dynamic content so t() picks new lang
  updateAll();
  localStorage.setItem('asb-pro-lang', lang);
}

function initLanguage() {
  const saved = localStorage.getItem('asb-pro-lang') || 'bm';
  state.lang = saved;
  document.documentElement.lang = saved === 'en' ? 'en' : 'ms';
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === saved);
  });
}

// ══════════════════════════════════════════════════════
// COLOR THEMES
// ══════════════════════════════════════════════════════
const THEMES = {
  emerald: { accent:'#059669', accent2:'#10b981', bg:'rgba(5,150,105,0.08)', border:'rgba(5,150,105,0.25)' },
  ocean:   { accent:'#0284c7', accent2:'#38bdf8', bg:'rgba(2,132,199,0.08)',  border:'rgba(2,132,199,0.25)' },
  sunset:  { accent:'#ea580c', accent2:'#f97316', bg:'rgba(234,88,12,0.08)',  border:'rgba(234,88,12,0.25)' },
  purple:  { accent:'#7c3aed', accent2:'#a78bfa', bg:'rgba(124,58,237,0.08)',border:'rgba(124,58,237,0.25)' },
  rose:    { accent:'#e11d48', accent2:'#fb7185', bg:'rgba(225,29,72,0.08)',  border:'rgba(225,29,72,0.25)' },
};

function setColorTheme(name) {
  const th = THEMES[name] || THEMES.emerald;
  const root = document.documentElement;
  root.dataset.color = name;
  root.style.setProperty('--accent',         th.accent);
  root.style.setProperty('--accent-2',        th.accent2);
  root.style.setProperty('--accent-bg',       th.bg);
  root.style.setProperty('--accent-border',   th.border);
  root.style.setProperty('--brand-gradient',  `linear-gradient(135deg, ${th.accent}, ${th.accent2})`);
  // Sync color dots active state
  document.querySelectorAll('.color-dot').forEach(d => {
    d.classList.toggle('active', d.dataset.color === name);
  });
  localStorage.setItem('asb-pro-color', name);
  updateChartAccent(th.accent, th.accent2);
}

function updateChartAccent(accent, accent2) {
  // Update chart colors that use accent (e.g. bar charts, line borders)
  if (charts.savDiv?.data.datasets[0]) {
    charts.savDiv.data.datasets[0].backgroundColor = accent;
    charts.savDiv.update('none');
  }
  if (charts.zakat?.data.datasets[0]) {
    charts.zakat.data.datasets[0].backgroundColor = accent;
    charts.zakat.update('none');
  }
}

function initColorTheme() {
  const saved = localStorage.getItem('asb-pro-color') || 'emerald';
  setColorTheme(saved);
}

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
const DIV_MANUAL_KEY = 'asb-pro-div-manual';
const DIV_CACHE_TTL = 12 * 60 * 60 * 1000; // 12 jam
const STATE_KEY    = 'asb-pro-state';

async function fetchLatestDividend() {
  const nowYear = new Date().getFullYear();
  const targetYear = nowYear - 1; // last fully announced dividend year

  // 0. Apply saved MANUAL entry first (user's own data takes display priority)
  let manualEntry = null;
  try {
    manualEntry = JSON.parse(localStorage.getItem(DIV_MANUAL_KEY)||'null');
    if (manualEntry && manualEntry.year) {
      applyLiveDividend(manualEntry.year, manualEntry.dividend, manualEntry.bonus||0, 'Manual', false, true);
    }
  } catch {}

  // 1. Check live cache
  try {
    const cached = JSON.parse(localStorage.getItem(DIV_CACHE_KEY)||'null');
    if (cached && cached.year === targetYear && (Date.now()-cached.ts) < DIV_CACHE_TTL) {
      // If user has manual for same year and it differs → prompt
      if (manualEntry && manualEntry.year === cached.year &&
          (manualEntry.dividend !== cached.dividend || (manualEntry.bonus||0) !== (cached.bonus||0))) {
        promptDividendConflict(cached, manualEntry);
      } else if (!manualEntry) {
        applyLiveDividend(cached.year, cached.dividend, cached.bonus||0, cached.src, false);
      }
      return;
    }
  } catch {}

  const existing = DIVIDEND_HISTORY.find(r => r.year === targetYear);
  if (existing && existing.dividend > 0) setLiveBadge('static');

  setLiveBadge('loading');

  // Extract dividend + bonus from raw text
  function parseDivBonus(text) {
    // Dividend patterns: "5.00 sen", "agihan 5.00%", "dividen 5.00 peratus"
    const divPatterns = [
      /agihan[^.]{0,60}?(\d{1,2}[.,]\d{2,4})\s*(?:sen|%|peratus)/i,
      /dividen[^.]{0,60}?(\d{1,2}[.,]\d{2,4})\s*(?:sen|%|peratus)/i,
      /(\d{1,2}[.,]\d{2,4})\s*sen\s*bagi\s*setiap\s*unit/i,
      /ASB[^.]{0,60}?(\d{1,2}[.,]\d{2,4})\s*(?:sen|%)/i,
    ];
    // Bonus patterns: "bonus 0.25 sen", "0.25% bonus"
    const bonusPatterns = [
      /bonus[^.]{0,40}?(\d[.,]\d{2,4})\s*(?:sen|%|peratus)/i,
      /(\d[.,]\d{2,4})\s*(?:sen|%)\s*bonus/i,
    ];
    let dividend = 0, bonus = 0;
    for (const pat of divPatterns) {
      const m = text.match(pat);
      if (m) { const v = parseFloat(m[1].replace(',','.')); if (v > 1 && v < 15) { dividend = v; break; } }
    }
    for (const pat of bonusPatterns) {
      const m = text.match(pat);
      if (m) { const v = parseFloat(m[1].replace(',','.')); if (v >= 0 && v < 2) { bonus = v; break; } }
    }
    return dividend > 0 ? { dividend, bonus } : null;
  }

  // 2. Try PNB website (domain confirmed stable)
  const pnbPages = [
    'https://www.pnb.com.my/index.php/pengumuman-agihan',
    'https://www.pnb.com.my/index.php/amanah-saham-bumiputera',
    'https://www.pnb.com.my/',
  ];
  const proxies = [
    u => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  ];

  for (const page of pnbPages) {
    for (const proxyFn of proxies) {
      try {
        const resp = await fetch(proxyFn(page), { signal: AbortSignal.timeout(8000) });
        let text = '';
        const proxyUrl = proxyFn(page);
        if (proxyUrl.includes('allorigins')) {
          const d = await resp.json(); text = d.contents || '';
        } else {
          text = await resp.text();
        }
        const found = parseDivBonus(text);
        if (found) {
          if (manualEntry && manualEntry.year === targetYear &&
              (manualEntry.dividend !== found.dividend || (manualEntry.bonus||0) !== (found.bonus||0))) {
            cacheLiveDividend(targetYear, found.dividend, found.bonus, 'PNB Website');
            promptDividendConflict({year:targetYear, dividend:found.dividend, bonus:found.bonus, src:'PNB Website'}, manualEntry);
          } else {
            applyLiveDividend(targetYear, found.dividend, found.bonus, 'PNB Website', true);
          }
          return;
        }
      } catch {}
    }
  }

  // 3. Google News RSS fallback — look for headline with rate
  try {
    const q = `ASB dividen bonus ${targetYear} PNB sen peratus`;
    const rss = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=ms&gl=MY&ceid=MY:ms`;
    const r2j = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}&count=10`;
    const resp = await fetch(r2j, { signal: AbortSignal.timeout(8000) });
    const data = await resp.json();
    if (data.status === 'ok') {
      for (const item of (data.items||[])) {
        const raw = (item.title||'') + ' ' + (item.description||'');
        const found = parseDivBonus(raw);
        if (found) {
          if (manualEntry && manualEntry.year === targetYear &&
              (manualEntry.dividend !== found.dividend || (manualEntry.bonus||0) !== (found.bonus||0))) {
            cacheLiveDividend(targetYear, found.dividend, found.bonus, 'Berita');
            promptDividendConflict({year:targetYear, dividend:found.dividend, bonus:found.bonus, src:'Berita'}, manualEntry);
          } else {
            applyLiveDividend(targetYear, found.dividend, found.bonus, 'Berita', true);
          }
          return;
        }
      }
    }
  } catch {}

  // 4. All failed — set badge; user can click "Isi Manual" if they want
  if (manualEntry) {
    setLiveBadge('live', `${manualEntry.year}: ${manualEntry.dividend.toFixed(2)}% (Manual)`);
  } else if (!DIVIDEND_HISTORY.some(r => r.year === targetYear)) {
    setLiveBadge('pending');
  } else {
    setLiveBadge('static');
  }
}

function showManualDividendForm(year) {
  const card = document.getElementById('manualDivCard');
  if (!card) return;
  const inp = document.getElementById('manualDivYear');
  if (inp) inp.value = year || (new Date().getFullYear() - 1);
  card.classList.remove('hidden');
  setTimeout(() => card.scrollIntoView({ behavior:'smooth', block:'nearest' }), 200);
}

function saveManualDividend() {
  const year    = parseInt(document.getElementById('manualDivYear')?.value);
  const divRate = parseFloat(document.getElementById('manualDivRate')?.value);
  const bonus   = parseFloat(document.getElementById('manualDivBonus')?.value)||0;
  if (!year || !divRate || divRate < 0.5 || divRate > 15) {
    showToast(state.lang==='en' ? 'Enter a valid dividend %' : 'Masukkan kadar dividen yang sah');
    return;
  }
  // Persist as MANUAL (separate from auto cache)
  try { localStorage.setItem(DIV_MANUAL_KEY, JSON.stringify({ year, dividend:divRate, bonus })); } catch {}
  applyLiveDividend(year, divRate, bonus, 'Manual', true, true);
  document.getElementById('manualDivCard')?.classList.add('hidden');
  showToast(state.lang==='en'
    ? `Saved: ${year} dividend ${divRate}% + ${bonus}% bonus`
    : `Disimpan: Dividen ${year} ${divRate}% + ${bonus}% bonus`);
}

// Toggle manual entry form open/close
function toggleManualDividend() {
  const card = document.getElementById('manualDivCard');
  if (!card) return;
  const isHidden = card.classList.contains('hidden');
  if (isHidden) {
    const inp = document.getElementById('manualDivYear');
    if (inp && !inp.value) inp.value = new Date().getFullYear() - 1;
    card.classList.remove('hidden');
    card.scrollIntoView({ behavior:'smooth', block:'nearest' });
  } else {
    card.classList.add('hidden');
  }
}

// Conflict: PNB announced a value different from user's manual entry
function promptDividendConflict(auto, manual) {
  // Show manual value on screen first
  applyLiveDividend(manual.year, manual.dividend, manual.bonus||0, 'Manual', false, true);
  const bonusStr = auto.bonus > 0 ? ` + ${auto.bonus}%` : '';
  const msg = state.lang==='en'
    ? `PNB announced ${auto.year}: ${auto.dividend}%${bonusStr} (official). You have a manual entry of ${manual.dividend}%. Use the official value?`
    : `PNB umum ${auto.year}: ${auto.dividend}%${bonusStr} (rasmi). Anda ada nilai manual ${manual.dividend}%. Guna nilai rasmi?`;
  if (window.confirm(msg)) {
    // User chooses official → clear manual, apply auto
    try { localStorage.removeItem(DIV_MANUAL_KEY); } catch {}
    applyLiveDividend(auto.year, auto.dividend, auto.bonus, auto.src||'PNB', true);
    showToast(state.lang==='en' ? 'Updated to official PNB value' : 'Dikemas kini ke nilai rasmi PNB');
  } else {
    showToast(state.lang==='en' ? 'Keeping your manual value' : 'Kekal nilai manual anda');
  }
}

// Cache live value without displaying (used when manual takes priority)
function cacheLiveDividend(year, dividend, bonus, source) {
  try {
    localStorage.setItem(DIV_CACHE_KEY, JSON.stringify({ year, dividend, bonus, src:source, ts:Date.now() }));
  } catch {}
}


function applyLiveDividend(year, dividend, bonus, source, isNew, isManual) {
  // Never add data for the current or future year — dividend not yet announced
  const safeMaxYear = new Date().getFullYear() - 1;
  if (year > safeMaxYear) {
    console.warn(`[ASB] Ignoring dividend for ${year} — not yet announced`);
    setLiveBadge('pending');
    return;
  }
  const existing = DIVIDEND_HISTORY.findIndex(r => r.year === year);
  if (existing >= 0) {
    DIVIDEND_HISTORY[existing] = { year, dividend, bonus };
  } else {
    DIVIDEND_HISTORY.push({ year, dividend, bonus });
    DIVIDEND_HISTORY.sort((a,b) => a.year - b.year);
  }

  // Cache to localStorage (skip for manual — manual has its own store)
  if (!isManual) {
    try {
      localStorage.setItem(DIV_CACHE_KEY, JSON.stringify({ year, dividend, bonus, src:source, ts:Date.now() }));
    } catch {}
  }

  // Update charts + stats
  updateHistory();
  updateDashboard();

  const bonusStr = bonus > 0 ? ` + ${bonus.toFixed(2)}% bonus` : '';
  setLiveBadge('live', `${year}: ${dividend.toFixed(2)}%${bonusStr} (${source})`);
}

function setLiveBadge(status, msg) {
  const badge = document.getElementById('histLiveBadge');
  const text  = document.getElementById('histLiveBadgeText');
  if (!badge || !text) return;
  badge.className = 'live-badge live-'+status;
  badge.style.display = 'flex';
  const labels = {
    loading: t('live_loading'),
    live:    msg || 'Data terkini',
    pending: t('live_pending'),
    static:  t('live_static'),
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
  cmpBudget:500, cmpDiv:5, cmpLoanRate:4, cmpFDRate:3.5, cmpEPFRate:6.3, cmpYears:20,
  // Forecast
  fcInit:10000, fcMonthly:500, fcYears:30, fcInflation:3, fcBear:3, fcBase:5, fcBull:7,
  // Goal
  goalType:'retirement', goalAmt:500000, goalCurrent:10000, goalYears:20, goalRate:5,
  fireExp:3000, fireWithdraw:4, // monthly withdrawal RM + safe rate %
  // Zakat (simplified)
  zakatRate:2.5, zakatBasis:'balance', zakatBalance:0, zakatDividend:0,
  // Age plan
  ageCurrent:30, ageRetire:60, ageSavings:20000, ageMonthly:500,
  uiMode:'normal', // 'normal' hides complex details, 'pro' shows all
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
  const step = ts => {
    const p = Math.min((ts-start)/dur,1);
    const ease = 1-Math.pow(1-p,3);
    element.textContent = formatter(from+(to-from)*ease);
    if(p<1) requestAnimationFrame(step);
    else element.textContent = formatter(to);
  };
  requestAnimationFrame(step);
}

// ── STATE PERSISTENCE ──
function saveState() {
  try {
    // also persist free-text inputs that aren't in state object
    const extra = {
      zakatBalance:  el('zakatBalance')?.value  || '',
      zakatDividend: el('zakatDividend')?.value || '',
      withdrawAmount: el('withdrawAmount')?.value || '',
    };
    localStorage.setItem(STATE_KEY, JSON.stringify({ ...state, ...extra }));
  } catch {}
}

function loadSavedState() {
  // Clear stale dividend cache if it's for current/future year
  try {
    const cached = JSON.parse(localStorage.getItem(DIV_CACHE_KEY)||'null');
    const safeMax = new Date().getFullYear() - 1;
    if (cached && cached.year > safeMax) {
      localStorage.removeItem(DIV_CACHE_KEY);
    }
  } catch {}
  // Load from localStorage (settings auto-saved per device)
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)||'null');
    if (saved) {
      const { zakatManualBase, withdrawAmount, ...rest } = saved;
      Object.assign(state, rest);
      // Restore text inputs after DOM ready
      requestAnimationFrame(() => {
        if (zakatManualBase && el('zakatManualBase')) el('zakatManualBase').value = zakatManualBase;
        if (withdrawAmount  && el('withdrawAmount'))  el('withdrawAmount').value  = withdrawAmount;
      });
    }
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
    ageCurrent:'ageCurrent', ageRetire:'ageRetire',
    ageSavings:'ageSavings', ageMonthly:'ageMonthly',
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
    el('asbfModePay')?.classList.add('active');
    el('asbfModeLoan')?.classList.remove('active');
    el('asbfPayInput')?.classList.remove('hidden');
    el('asbfLoanInput')?.classList.add('hidden');
  } else {
    el('asbfModeLoan')?.classList.add('active');
    el('asbfModePay')?.classList.remove('active');
    el('asbfLoanInput')?.classList.remove('hidden');
    el('asbfPayInput')?.classList.add('hidden');
  }
  // Zakat basis radio
  document.querySelectorAll('input[name="zakatBasis"]').forEach(r => {
    r.checked = r.value === state.zakatBasis;
  });
  if (state.zakatBalance  && el('zakatBalance'))  el('zakatBalance').value  = state.zakatBalance;
  if (state.zakatDividend && el('zakatDividend')) el('zakatDividend').value = state.zakatDividend;
}

function resetState() {
  if (!confirm(t('reset_confirm'))) return;
  localStorage.removeItem(STATE_KEY);
  location.reload();
}

async function shareURL() {
  const url = `${location.origin}${location.pathname}`;

  // Try native share sheet with url-only payload (cleanest link share)
  if (navigator.share) {
    const payload = { title: 'ASB Pro', url };
    // canShare guards against browsers that would otherwise screenshot
    const okToShare = !navigator.canShare || navigator.canShare(payload);
    if (okToShare) {
      try {
        await navigator.share(payload);
        return;
      } catch (e) {
        if (e && e.name === 'AbortError') return; // user dismissed
        // any other error → fall through to clipboard
      }
    }
  }

  // Fallback: copy link to clipboard
  try {
    await navigator.clipboard.writeText(url);
    showToast(t('toast_share'));
  } catch {
    window.prompt(state.lang==='en' ? 'Copy this link:' : 'Salin pautan ini:', url);
  }
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
      showToast(t('toast_import'));
    } catch { showToast(t('toast_import_fail')); }
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

  // Age plan timeline
  charts.age = new Chart(el('ageChart'), {
    type:'line', data:{ labels:[], datasets:[
      lineDataset('ASB 5%',[],C.bull,C.bullA),
      lineDataset('EPF 6.3%',[],C.base,C.baseA),
      lineDataset('FD 3.5%',[],C.slate,C.slateA),
    ]}, options:{ ...def, plugins:{ ...def.plugins, legend:{ display:false } } }
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
  setText('dashFinalSub', `${t('stat_monthly')}: RM${state.savMonthly.toLocaleString('en-MY')}/bln · ${years} thn · dividen ${state.savRate}%`);
  setText('dashInvestSub', `${years} tahun sumbangan`);
  setText('dashReturnSub', `ROI: ${last.totalInvested>0?((last.netReturns/last.totalInvested)*100).toFixed(1):'0'}%`);
  setText('dashMonthly', fmt(state.savMonthly));
  setText('dashDivRate', `Kadar dividen: ${fmtPct(state.savRate)}`);
  setText('dashPillMonthly', `${t('stat_monthly')}: ${fmt(state.savMonthly)}/${t('month_sfx')}`);
  setText('dashPillYears', `${t('tab_forecast')}: ${years} ${t('years_sfx')}`);
  setText('dashPillRate', `${t('th_dividend')}: ${fmtPct(state.savRate)}`);

  // Zakat uses standalone user inputs (zakatBalance / zakatDividend)
  const zBal = state.zakatBalance || 0;
  const zDiv = state.zakatDividend || 0;
  const zakatBase = state.zakatBasis==='dividend' ? zDiv
    : state.zakatBasis==='both' ? (zBal+zDiv)
    : zBal;
  const zakatAmt = zakatBase*(state.zakatRate/100);
  const dashZakatEl = el('dashZakat');
  if (dashZakatEl) animateCounter(dashZakatEl, zakatAmt, fmt);
  setText('dashZakatSub', zakatBase > 0
    ? `${state.zakatRate}% × ${fmt(zakatBase)}`
    : 'Masukkan nilai di tab Zakat');
}

// ── UPDATE SAVINGS ──
function updateSavings() {
  savData = calcASB(state.savInitial, state.savMonthly, state.savRate, state.savBonus, state.savYears);
  const last = savData[savData.length-1];
  const labels = savData.map(r=>r.year.toString());

  // DCA vs Lump Sum — compare: invest the same monthly budget as lump sum from day 1
  // Lump sum: invest ALL the money you WOULD have saved (initial + all future DCA) right now
  const totalBudget = state.savInitial + state.savMonthly * 12 * state.savYears;
  const lumpData = calcLumpSum(totalBudget, state.savRate, state.savYears);
  const lumpFinal = lumpData[lumpData.length-1].balance;
  const dcaFinal = last.balance;

  updateChartData(charts.savGrowth, labels, [
    savData.map(r=>r.balance),
    lumpData.map(r=>r.balance),
    savData.map(r=>r.totalInvested)
  ]);
  updateChartData(charts.savDiv, labels, [ savData.map(r=>r.dividend) ]);

  animateCounter(el('savFinalVal'), dcaFinal, fmt);
  const totalRate = state.savRate + state.savBonus;
  setText('savLastDiv', state.lang==='en'
    ? `Year ${state.savYears} dividend: ${fmt(last.dividend)} · Rate: ${fmtPct(totalRate)}`
    : `Dividen tahun ke-${state.savYears}: ${fmt(last.dividend)} · Kadar: ${fmtPct(totalRate)}`);
  animateCounter(el('savTotalInvest'), last.totalInvested, fmt);
  animateCounter(el('savTotalDiv'), last.netReturns, fmt);
  setText('savROI', (last.totalInvested>0?((last.netReturns/last.totalInvested)*100).toFixed(1):'0')+'%');

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
    const ctx = state.lang==='en'
      ? `If you had RM${totalBudget.toLocaleString('en-MY',{maximumFractionDigits:0})} available today:`
      : `Kalau anda ada RM${totalBudget.toLocaleString('en-MY',{maximumFractionDigits:0})} sekarang:`;
    if (lumpFinal>dcaFinal) {
      const pctMore = ((lumpFinal-dcaFinal)/dcaFinal*100).toFixed(1);
      verdictEl.innerHTML = `<span style="font-size:0.7rem;color:var(--text-4)">${ctx}</span><br><strong>${t('lump_better')}</strong> +${fmt(diff)} (${pctMore}%) — ${t('lump_reason')}`;
    } else if (dcaFinal>lumpFinal) {
      verdictEl.innerHTML = `<span style="font-size:0.7rem;color:var(--text-4)">${ctx}</span><br><strong>${t('dca_better')}</strong> +${fmt(diff)} — ${t('dca_reason')}`;
    } else {
      verdictEl.innerHTML = t('dca_equal');
    }
  }

  buildSavingsTable();
}

// ── UPDATE FINANCING ──
function updateFinancing() {
  const months = state.finTenure * 12;
  // Determine loan amount based on mode
  let loanAmt;
  if (state.finMode === 'payment') {
    // User inputs payment → derive loan
    loanAmt = calcLoanFromPayment(state.finPayment, state.finRate, months);
    setText('finLoanAuto', fmt(loanAmt));
  } else {
    // User inputs loan → derive payment
    loanAmt = state.finLoan;
    const pay = calcMonthlyPayment(loanAmt, state.finRate, months);
    setText('finPaymentAuto', fmt(pay));
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
  setText('cmpEPFReturn', state.lang==='en'
    ? `Return: ${fmt(epfReturn)} · EPF 2024: 6.3%`
    : `Pulangan: ${fmt(epfReturn)} · EPF 2024: 6.3%`);

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
  // FIRE: convert monthly withdrawal to annual for calculation
  // state.fireExp now stores MONTHLY amount (more intuitive for users)
  const annualExp = (state.fireExp || 0) * 12;
  const fireNum = fireWithdraw > 0
    ? annualExp / (fireWithdraw / 100)
    : null;
  const stillNeeded = fireNum ? Math.max(0, fireNum - goalCurrent) : 0;

  setText('goalRequiredDCA', reqDCA<1 ? 'Dah cukup!' : fmt(reqDCA));
  setText('goalDCASub', reqDCA<1
    ? 'Simpanan semasa sudah mencukupi — teruskan melabur!'
    : `Labur ${fmt(reqDCA)}/bulan untuk capai ${fmt(goalAmt)} dalam ${goalYears} tahun`);
  if (fireNum === null) {
    setText('fireNumber', state.lang==='en' ? 'Keep investing — no withdrawal' : 'Terus melabur sahaja');
    setText('fireSub', state.lang==='en'
      ? 'With 0% withdrawal rate, just keep growing your savings'
      : 'Kadar 0% — simpan terus, keluarkan bila perlu sahaja');
  } else {
    setText('fireNumber', fmt(fireNum));
    const monthly = fmt(state.fireExp);
    // Warn if withdrawal rate is unrealistically low (makes FIRE number explode)
    if (fireWithdraw < 3) {
      setText('fireSub', state.lang==='en'
        ? `⚠️ ${fmtPct(fireWithdraw)} is very low — needs a huge fund. Experts suggest 4%.`
        : `⚠️ ${fmtPct(fireWithdraw)} terlalu rendah — perlu dana besar. Pakar cadang 4%.`);
      const fnEl = el('fireNumber');
      if (fnEl) fnEl.style.color = 'var(--bear)';
    } else {
      const fnEl = el('fireNumber');
      if (fnEl) fnEl.style.color = '';
      setText('fireSub', state.lang==='en'
        ? `To withdraw ${monthly}/month for life without running out`
        : `Supaya boleh keluarkan ${monthly}/bulan seumur hidup tanpa kehabisan wang`);
    }
  }

  const trajectory = calcForecast(goalCurrent, reqDCA>0?reqDCA:0, goalRate, goalYears, 0);
  const labels = trajectory.map(r=>r.year.toString());
  updateChartData(charts.goal, labels, [
    trajectory.map(r=>r.balance),
    labels.map(()=>goalAmt)
  ]);

  // FIRE donut
  const saved = fireNum ? Math.min(goalCurrent, fireNum) : goalCurrent;
  const stillNeeded2 = fireNum ? Math.max(0, fireNum-goalCurrent) : 0;
  charts.fire.data.datasets[0].data = [saved, stillNeeded2];
  charts.fire.data.datasets[0].backgroundColor = [C.bull, isDark()?'#374151':'#e4e4e7'];
  charts.fire.update('active');

  // FIRE flow visual: monthly → target → time to reach
  setText('fireFlowMonthly', fmt(state.fireExp));
  if (fireNum === null) {
    setText('fireFlowTarget', state.lang==='en' ? 'Not applicable' : 'Tidak berkaitan');
    setText('fireFlowYears', '—');
  } else {
    setText('fireFlowTarget', fmt(fireNum));
    // Estimate years to reach FIRE number from current savings + monthly DCA
    const rM = Math.pow(1+goalRate/100, 1/12) - 1;
    let bal = goalCurrent, months = 0;
    const monthlyDCA = reqDCA > 0 ? reqDCA : state.savMonthly || 500;
    while (bal < fireNum && months < 1200) { bal = bal*(1+rM) + monthlyDCA; months++; }
    const yrs = Math.floor(months/12), mo = months%12;
    if (goalCurrent >= fireNum) {
      setText('fireFlowYears', state.lang==='en' ? 'Already there!' : 'Dah sampai!');
    } else if (months >= 1200) {
      setText('fireFlowYears', state.lang==='en' ? '100+ years' : '100+ tahun');
    } else {
      setText('fireFlowYears', state.lang==='en'
        ? `~${yrs} yr ${mo} mo`
        : `~${yrs} thn ${mo} bln`);
    }
  }

  const pct = Math.min(100,(goalCurrent/goalAmt)*100);
  const firePct = fireNum ? Math.min(100,(goalCurrent/fireNum)*100) : 100;
  const bd = el('goalBreakdown');
  if (bd) bd.innerHTML = `
    <div class="chart-block" style="margin-bottom:0">
      <div class="gbd-row"><span>${t('gbd_target')}</span><span>${fmt(goalAmt)}</span></div>
      <div class="gbd-row"><span>${t('gbd_current')}</span><span>${fmt(goalCurrent)}</span></div>
      <div class="gbd-row"><span>${t('gbd_gap')}</span><span style="color:var(--bear)">${fmt(Math.max(0,goalAmt-goalCurrent))}</span></div>
      <div class="gbd-row"><span>${t('gbd_dca')}</span><span style="color:var(--accent)">${reqDCA<1?(state.lang==='en'?'Not needed':'Tidak perlu'):fmt(reqDCA)}</span></div>
      <div class="gbd-row"><span>${t('gbd_final')}</span><span>${fmt(trajectory[trajectory.length-1]?.balance||0)}</span></div>
      <div style="padding:0.75rem 0 0.25rem">
        <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-3);margin-bottom:4px">
          <span>${t('gbd_progress')}</span><span>${pct.toFixed(1)}%</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div style="padding:0.25rem 0 0.5rem">
        <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-3);margin-bottom:4px">
          <span>${t('gbd_fire')}</span><span>${firePct.toFixed(1)}%</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${firePct}%"></div></div>
      </div>
    </div>`;
}

// ── UPDATE ZAKAT (SIMPLIFIED) ──
function updateZakat() {
  // STANDALONE — reads directly from user inputs, no Savings tab dependency
  const zBal = parseFloat(el('zakatBalance')?.value)||state.zakatBalance||0;
  const zDiv = parseFloat(el('zakatDividend')?.value)||state.zakatDividend||0;
  state.zakatBalance  = zBal;
  state.zakatDividend = zDiv;

  let base = 0;
  if (state.zakatBasis==='balance')  base = zBal;
  else if (state.zakatBasis==='dividend') base = zDiv;
  else base = zBal + zDiv;

  const zakatAmt = base*(state.zakatRate/100);

  animateCounter(el('zakatAmount'), zakatAmt, fmt);
  setText('zakatSub', base > 0 ? `${state.zakatRate}% × ${fmt(base)}` : 'Masukkan nilai di atas');
  setText('zbdBase', state.zakatBasis==='balance'?t('zakat_balance'):state.zakatBasis==='dividend'?t('zakat_dividend'):t('zakat_both'));
  setText('zbdBaseVal', fmt(base));
  setText('zbdRate', fmtPct(state.zakatRate));
  setText('zbdAmount', fmt(zakatAmt));

  // Yearly projection (simple: assume balance stays at zBal growing at savRate)
  const years = state.savYears || 20;
  const rate  = state.savRate  || 5;
  const labels = Array.from({length:years},(_,i)=>(i+1).toString());
  const zakatYearly = labels.map((_,i)=>{
    const growthFactor = Math.pow(1+rate/100, i+1);
    const projBal = zBal * growthFactor;
    const projDiv = projBal * (rate/100);
    const b2 = state.zakatBasis==='balance' ? projBal
      : state.zakatBasis==='dividend' ? projDiv
      : projBal + projDiv;
    return b2*(state.zakatRate/100);
  });
  updateChartData(charts.zakat, labels, [zakatYearly]);
}


// ── UPDATE AGE PLAN ──
function updateAgePlan() {
  const { ageCurrent, ageRetire, ageSavings, ageMonthly } = state;
  const yearsLeft = Math.max(0, ageRetire - ageCurrent);

  setText('ageYearsLeft', yearsLeft > 0
    ? `${yearsLeft} ${state.lang==='en'?'years':'tahun'}`
    : (state.lang==='en'?'Already retired':'Sudah bersara'));
  setText('ageYearsSub', state.lang==='en'
    ? `From age ${ageCurrent} to ${ageRetire}`
    : `Dari umur ${ageCurrent} ke ${ageRetire}`);

  // Life stage
  let stage, stageDesc, stageIcon;
  if (ageCurrent < 30) {
    stageIcon = 'ph-rocket-launch';
    stage = state.lang==='en' ? 'Building Phase (20s)' : 'Fasa Membina (20-an)';
    stageDesc = state.lang==='en'
      ? 'Time is your biggest asset. Even small amounts grow huge over 30+ years. Start now!'
      : 'Masa adalah aset terbesar. Simpanan kecil pun jadi besar dalam 30+ tahun. Mula sekarang!';
  } else if (ageCurrent < 40) {
    stageIcon = 'ph-trend-up';
    stage = state.lang==='en' ? 'Growth Phase (30s)' : 'Fasa Pertumbuhan (30-an)';
    stageDesc = state.lang==='en'
      ? 'Peak earning years. Maximise contributions while you can. Consider ASBF if dividend beats loan rate.'
      : 'Tahun pendapatan puncak. Maksimumkan simpanan. Pertimbang ASBF jika dividen atasi kadar pinjaman.';
  } else if (ageCurrent < 50) {
    stageIcon = 'ph-chart-line-up';
    stage = state.lang==='en' ? 'Acceleration Phase (40s)' : 'Fasa Pecutan (40-an)';
    stageDesc = state.lang==='en'
      ? 'Catch-up time. Boost savings rate. Balance growth with some safer instruments.'
      : 'Masa kejar. Tingkatkan kadar simpanan. Imbang pertumbuhan dengan instrumen lebih selamat.';
  } else if (ageCurrent < 60) {
    stageIcon = 'ph-shield-check';
    stage = state.lang==='en' ? 'Preservation Phase (50s)' : 'Fasa Pemeliharaan (50-an)';
    stageDesc = state.lang==='en'
      ? 'Protect what you built. Shift toward stable returns. Plan your withdrawal strategy.'
      : 'Lindungi apa yang dibina. Beralih ke pulangan stabil. Rancang strategi pengeluaran.';
  } else {
    stageIcon = 'ph-house-line';
    stage = state.lang==='en' ? 'Retirement Phase (60+)' : 'Fasa Persaraan (60+)';
    stageDesc = state.lang==='en'
      ? 'Focus on capital preservation and steady income. Keep some in growth for longevity.'
      : 'Fokus pemeliharaan modal dan pendapatan tetap. Kekalkan sebahagian dalam pertumbuhan.';
  }
  setText('lifeStageTitle', stage);
  setText('lifeStageDesc', stageDesc);
  const iconEl = el('lifeStageIcon');
  if (iconEl) iconEl.innerHTML = `<i class="ph ${stageIcon}"></i>`;

  // Projection at retirement (ASB 5% as primary)
  const asbProj = calcForecast(ageSavings, ageMonthly, 5, Math.max(1,yearsLeft), 0);
  const retireValue = yearsLeft > 0 ? asbProj[asbProj.length-1].balance : ageSavings;
  animateCounter(el('ageRetireValue'), retireValue, fmt);
  setText('ageRetireSub', state.lang==='en'
    ? `At age ${ageRetire}, ASB 5%`
    : `Pada umur ${ageRetire}, ASB 5%`);
  // Monthly income from 4% withdrawal
  const monthlyIncome = (retireValue * 0.04) / 12;
  animateCounter(el('ageMonthlyIncome'), monthlyIncome, fmt);

  // Timeline chart — 3 instruments
  const yrs = Math.max(1, yearsLeft);
  const asbData = calcForecast(ageSavings, ageMonthly, 5, yrs, 0);
  const epfData = calcDCA(ageMonthly, 6.3, yrs).map((r,i)=>({balance: r.balance + ageSavings*Math.pow(1.063,i+1)}));
  const fdData  = calcDCA(ageMonthly, 3.5, yrs).map((r,i)=>({balance: r.balance + ageSavings*Math.pow(1.035,i+1)}));
  const ageLabels = asbData.map((_,i)=>(ageCurrent+i+1).toString());
  updateChartData(charts.age, ageLabels, [
    asbData.map(r=>r.balance),
    epfData.map(r=>r.balance),
    fdData.map(r=>r.balance),
  ]);

  // Instrument suggestions — show all, let user decide
  const grid = el('instrumentGrid');
  if (grid) {
    const instruments = [
      { name:'ASB / ASN', rate:'~5%', risk: state.lang==='en'?'Low':'Rendah', icon:'ph-seal-check',
        note: state.lang==='en'?'Stable dividends, Bumiputera fund':'Dividen stabil, dana Bumiputera', cls:'bull' },
      { name:'EPF / KWSP', rate:'~6.3%', risk: state.lang==='en'?'Low':'Rendah', icon:'ph-umbrella',
        note: state.lang==='en'?'Retirement savings, tax relief':'Simpanan persaraan, pelepasan cukai', cls:'base' },
      { name:'ASBF', rate: state.lang==='en'?'Leverage':'Leveraj', risk: state.lang==='en'?'Medium':'Sederhana', icon:'ph-bank',
        note: state.lang==='en'?'Financing — profits if dividend > interest':'Pembiayaan — untung jika dividen > faedah', cls:'base' },
      { name:'Fixed Deposit', rate:'~3.5%', risk: state.lang==='en'?'Very Low':'Sangat Rendah', icon:'ph-vault',
        note: state.lang==='en'?'Guaranteed, capital protected':'Dijamin, modal dilindungi', cls:'slate' },
    ];
    grid.innerHTML = instruments.map(ins=>`
      <div class="instrument-card">
        <div class="instrument-head">
          <span class="instrument-icon ${ins.cls}"><i class="ph ${ins.icon}"></i></span>
          <div>
            <div class="instrument-name">${ins.name}</div>
            <div class="instrument-meta">${ins.rate} · ${state.lang==='en'?'Risk':'Risiko'}: ${ins.risk}</div>
          </div>
        </div>
        <div class="instrument-note">${ins.note}</div>
      </div>`).join('');
  }

  // Age milestones (ASB 5%)
  const msList = el('ageMilestones');
  if (msList) {
    const targets = [100000, 250000, 500000, 1000000];
    const proj = calcForecast(ageSavings, ageMonthly, 5, Math.max(1, 75-ageCurrent), 0);
    const rows = targets.map(tg => {
      const hit = proj.find(r=>r.balance>=tg);
      const atAge = hit ? ageCurrent + hit.year : null;
      return { target: tg, age: atAge };
    });
    msList.innerHTML = rows.map(r=>`
      <div class="age-milestone-row">
        <span class="age-milestone-target">${fmtK(r.target)}</span>
        <span class="age-milestone-age">${r.age && r.age<=90
          ? (state.lang==='en'?`Age ${r.age}`:`Umur ${r.age}`)
          : (state.lang==='en'?'Beyond 90':'Lewat 90')}</span>
      </div>`).join('');
  }
}

// ── UI MODE (Normal/Pro) ──
function applyUIMode(mode) {
  state.uiMode = (mode === 'pro') ? 'pro' : 'normal';
  document.documentElement.setAttribute('data-uimode', state.uiMode);
  // Update slide switch state
  const sw = document.getElementById('uiModeSwitch');
  if (sw) sw.setAttribute('data-uimode', state.uiMode);
  try { localStorage.setItem('asb-pro-uimode', state.uiMode); } catch {}
}

// Pull values from Savings tab (optional shortcut)
function autoFillZakat() {
  if (!savData.length) {
    showToast(state.lang==='en'
      ? 'Go to Savings tab first to set your values'
      : 'Pergi tab Simpanan dulu untuk tetapkan nilai');
    return;
  }
  const last = savData[savData.length-1];
  state.zakatBalance  = Math.round(last.balance);
  state.zakatDividend = Math.round(last.dividend);
  if (el('zakatBalance'))  el('zakatBalance').value  = state.zakatBalance;
  if (el('zakatDividend')) el('zakatDividend').value = state.zakatDividend;
  updateZakat();
  showToast(state.lang==='en'
    ? 'Values filled from Savings tab'
    : 'Nilai diambil dari tab Simpanan');
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
  try { saveState(); } catch(e) {}
  try { updateSavings(); }    catch(e) { console.error('[ASB] updateSavings:', e); }
  try { updateFinancing(); }  catch(e) { console.error('[ASB] updateFinancing:', e); }
  try { updateComparison(); } catch(e) { console.error('[ASB] updateComparison:', e); }
  try { updateForecast(); }   catch(e) { console.error('[ASB] updateForecast:', e); }
  try { updateGoal(); }       catch(e) { console.error('[ASB] updateGoal:', e); }
  try { updateZakat(); }      catch(e) { console.error('[ASB] updateZakat:', e); }
  try { updateAgePlan(); }    catch(e) { console.error('[ASB] updateAgePlan:', e); }
  try { updateHistory(); }    catch(e) { console.error('[ASB] updateHistory:', e); }
  try { updateDashboard(); }  catch(e) { console.error('[ASB] updateDashboard:', e); }
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
    // News loads via refresh button — static cards already visible
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
    { id:'fireExp',     key:'fireExp',     disp:'fireExpVal',    fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` }, // monthly withdrawal
    { id:'fireWithdraw',key:'fireWithdraw',disp:'fireWithdrawVal',fmt:v=>`${(+v).toFixed(2)}%` },
    { id:'zakatRate',   key:'zakatRate',   disp:'zakatRateVal',  fmt:v=>`${(+v).toFixed(1)}%` },
    { id:'ageCurrent',  key:'ageCurrent',  disp:'ageCurrentVal', fmt:v=>`${v} ${state.lang==='en'?'yrs':'tahun'}` },
    { id:'ageRetire',   key:'ageRetire',   disp:'ageRetireVal',  fmt:v=>`${v} ${state.lang==='en'?'yrs':'tahun'}` },
    { id:'ageSavings',  key:'ageSavings',  disp:'ageSavingsVal', fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
    { id:'ageMonthly',  key:'ageMonthly',  disp:'ageMonthlyVal', fmt:v=>`RM ${(+v).toLocaleString('en-MY')}` },
  ];

  configs.forEach(({ id, key, disp, fmt:f }) => {
    const slider = el(id);
    const display = el(disp);
    if (!slider) return;
    // Set initial display
    if (display) display.textContent = f(slider.value);

    // Slider drag
    slider.addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      state[key] = v;
      if (display) display.textContent = f(v);
      updateAll();
    });

    // Click value badge → inline edit (type exact number)
    if (display) {
      display.title = 'Klik untuk taip nilai terus';
      display.style.cursor = 'pointer';
      display.addEventListener('click', () => {
        const cur = state[key];
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.value = cur;
        inp.min = slider.min; inp.max = slider.max; inp.step = slider.step;
        inp.className = 'inline-edit-input';
        display.replaceWith(inp);
        inp.focus(); inp.select();
        const commit = () => {
          const v = parseFloat(inp.value);
          const clamped = isNaN(v) ? cur : Math.max(+slider.min, Math.min(+slider.max, v));
          state[key] = clamped;
          slider.value = clamped;
          // Restore display span
          const newSpan = document.createElement('span');
          newSpan.className = display.className;
          newSpan.id = display.id;
          newSpan.title = display.title;
          newSpan.style.cursor = 'pointer';
          newSpan.textContent = f(clamped);
          inp.replaceWith(newSpan);
          // Re-attach click listener on new span
          newSpan.addEventListener('click', () => newSpan.dispatchEvent(new Event('_reinit')));
          display.id = ''; // old ref now orphaned
          updateAll();
        };
        inp.addEventListener('blur', commit);
        inp.addEventListener('keydown', e => { if(e.key==='Enter') commit(); if(e.key==='Escape') inp.blur(); });
      });
    }
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

  // Language toggle
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Color picker — toggle handled by inline onclick="toggleColorPicker()"
  // Close popup when clicking outside it
  document.addEventListener('click', e => {
    const wrap = e.target.closest('.color-picker-wrap');
    if (!wrap) el('colorPickerPanel')?.classList.remove('picker-open');
  });

  // Normal/Pro mode slide switch — toggle on click
  el('uiModeSwitch')?.addEventListener('click', () => {
    applyUIMode(state.uiMode === 'pro' ? 'normal' : 'pro');
  });

  // Tooltip icons — tap to show explanation
  document.querySelectorAll('.tip-icon').forEach(icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();
      const popup = el('tipPopup');
      if (!popup) return;
      const text = t(icon.dataset.tip);
      popup.textContent = text;
      const rect = icon.getBoundingClientRect();
      popup.style.left = Math.min(rect.left, window.innerWidth - 280) + 'px';
      popup.style.top  = (rect.bottom + window.scrollY + 6) + 'px';
      popup.classList.add('show');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.tip-icon')) el('tipPopup')?.classList.remove('show');
  });

  // Color dots — pick theme + close
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      setColorTheme(dot.dataset.color);
      el('colorPickerPanel')?.classList.remove('picker-open');
    });
  });

  // ASBF mode toggle — Loan input vs Payment input
  el('asbfModeLoan')?.addEventListener('click', () => {
    state.finMode = 'loan';
    el('asbfModeLoan')?.classList.add('active');
    el('asbfModePay')?.classList.remove('active');
    el('asbfLoanInput')?.classList.remove('hidden');
    el('asbfPayInput')?.classList.add('hidden');
    setText('asbfModeHint', t('fin_hint_loan'));
    updateFinancing();
  });
  el('asbfModePay')?.addEventListener('click', () => {
    state.finMode = 'payment';
    el('asbfModePay')?.classList.add('active');
    el('asbfModeLoan')?.classList.remove('active');
    el('asbfPayInput')?.classList.remove('hidden');
    el('asbfLoanInput')?.classList.add('hidden');
    setText('asbfModeHint', t('fin_hint_pay'));
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
  el('zakatBalance')?.addEventListener('input',  () => updateZakat());
  el('zakatDividend')?.addEventListener('input', () => updateZakat());

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

  // News topic filter — uses data-feed attribute
  document.querySelectorAll('.news-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.news-filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      loadNews(btn.dataset.feed);
    });
  });

  // Window resize — re-position indicator
  window.addEventListener('resize', () => {
    const active = document.querySelector('.tab-btn.active');
    if (active) moveTabIndicator(active);
  });
}

// ── NEWS ──
// News cache — don't re-fetch on tab switch
let _newsCache = null;

function refreshNews() {
  _newsCache = null;
  const grid = el('newsGrid');
  if (grid) grid.innerHTML = '<div class="skeleton"></div>'.repeat(6);
  const activeBtn = document.querySelector('.news-filter-btn.active');
  loadNews(activeBtn?.dataset.feed || 'asb');
}

// Topic → RSS feed mapping (direct feeds, more reliable than Google News search)
const NEWS_FEEDS = {
  // ASB: Google News search (specific to ASB/PNB)
  'asb':      'https://news.google.com/rss/search?q=ASB%20PNB%20dividen&hl=ms&gl=MY&ceid=MY:ms',
  // Malaysia: broad finance/investment via Google News
  'malaysia': 'https://news.google.com/rss/search?q=pelaburan%20Malaysia&hl=ms&gl=MY&ceid=MY:ms',
  // US/China: established financial outlets (stable feeds)
  'us':       'https://news.google.com/rss/search?q=US%20stocks%20market%20Wall%20Street&hl=en&gl=US&ceid=US:en',
  'china':    'https://news.google.com/rss/search?q=China%20economy%20markets&hl=en&gl=US&ceid=US:en',
  'default':  'https://news.google.com/rss/search?q=Malaysia%20pelaburan&hl=ms&gl=MY&ceid=MY:ms',
};

async function loadNews(feedKey) {
  const grid = el('newsGrid');
  if (!grid) return;
  feedKey = feedKey || 'asb';
  if (_newsCache && _newsCache.feed === feedKey) {
    grid.innerHTML = _newsCache.html;
    return;
  }
  grid.innerHTML = '<div class="skeleton"></div>'.repeat(6);

  const rssUrl = NEWS_FEEDS[feedKey] || NEWS_FEEDS.default;

  const renderItems = items => {
    if (!items || !items.length) return false;
    const html = items.slice(0, 12).map(item => {
      let title = (item.title || item.name || '').replace(/<!\[CDATA\[|\]\]>/g,'').trim();
      const link  = item.link || item.url || item.guid || '#';
      const date  = item.pubDate || item.isoDate || item.published || '';
      let src   = (item.author || item.source || '').toString().split(',')[0].trim() || 'Berita';
      if (!title) return '';
      // Google News appends " - Source" to titles — split it out
      const dashIdx = title.lastIndexOf(' - ');
      if (dashIdx > 20 && src === 'Berita') { src = title.slice(dashIdx + 3); title = title.slice(0, dashIdx); }
      return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="news-card">
        <div class="news-source">${src.length>35?src.slice(0,33)+'…':src}</div>
        <div class="news-title">${title.length>140?title.slice(0,137)+'…':title}</div>
        <div class="news-date">${fmtDate(date)}</div>
      </a>`;
    }).filter(Boolean).join('');
    if (!html) return false;
    grid.innerHTML = html;
    try { _newsCache = { feed: feedKey, html }; } catch {}
    return true;
  };

  // Helper: parse XML RSS text into item objects
  function parseRssXml(xmlText) {
    const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
    return Array.from(doc.querySelectorAll('item')).map(n => {
      // Google News <link> is a text node; sometimes link is in nextSibling
      let link = n.querySelector('link')?.textContent?.trim();
      if (!link || link === '') link = n.querySelector('guid')?.textContent?.trim() || '#';
      return {
        title  : n.querySelector('title')?.textContent || '',
        link   : link,
        pubDate: n.querySelector('pubDate')?.textContent || '',
        source : n.querySelector('source')?.textContent || '',
      };
    });
  }

  // Strategy 1: codetabs proxy (fast, reliable, rarely blocked)
  try {
    const proxy = `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(rssUrl)}`;
    const res   = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    const xml   = await res.text();
    const items = parseRssXml(xml);
    if (items.length && renderItems(items)) return;
  } catch {}

  // Strategy 2: rss2json
  try {
    const r2j = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=15`;
    const res  = await fetch(r2j, { signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    if (data.status === 'ok' && data.items?.length && renderItems(data.items)) return;
  } catch {}

  // Strategy 3: allorigins (JSON wrapper)
  try {
    const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
    const res   = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    const data  = await res.json();
    if (data.contents) {
      const items = parseRssXml(data.contents);
      if (items.length && renderItems(items)) return;
    }
  } catch {}

  // Strategy 4: allorigins raw
  try {
    const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
    const res   = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    const xml   = await res.text();
    const items = parseRssXml(xml);
    if (items.length && renderItems(items)) return;
  } catch {}

  // Strategy 5: corsproxy.io
  try {
    const proxy = `https://corsproxy.io/?url=${encodeURIComponent(rssUrl)}`;
    const res   = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    const xml   = await res.text();
    const items = parseRssXml(xml);
    if (items.length && renderItems(items)) return;
  } catch {}

  // Static curated fallback — feed-specific trusted sources
  const FALLBACK_LINKS = {
    asb: [
      { src:'PNB Malaysia',     title:'Laman rasmi PNB — pengumuman agihan dividen ASB/ASN', url:'https://www.pnb.com.my' },
      { src:'Bernama Bisnes',   title:'Berita kewangan & ekonomi rasmi Malaysia',           url:'https://www.bernama.com/bm/bisnes/' },
      { src:'Berita Harian',    title:'Berita ekonomi & pelaburan terkini',                 url:'https://www.bharian.com.my/bisnes' },
      { src:'The Edge Malaysia',title:'Pasaran modal & ekuiti Malaysia',                    url:'https://theedgemalaysia.com' },
    ],
    malaysia: [
      { src:'The Edge Malaysia',title:'Pasaran modal, saham & pelaburan Malaysia',          url:'https://theedgemalaysia.com' },
      { src:'Bernama Bisnes',   title:'Berita ekonomi & kewangan rasmi',                    url:'https://www.bernama.com/bm/bisnes/' },
      { src:'Berita Harian',    title:'Berita bisnes & pelaburan',                          url:'https://www.bharian.com.my/bisnes' },
      { src:'Bursa Malaysia',   title:'Maklumat pasaran saham rasmi Malaysia',              url:'https://www.bursamalaysia.com' },
    ],
    us: [
      { src:'Yahoo Finance',    title:'US stock market, S&P 500, Nasdaq & investing news',   url:'https://finance.yahoo.com' },
      { src:'MarketWatch',      title:'Wall Street, markets & financial headlines',          url:'https://www.marketwatch.com' },
      { src:'CNBC Markets',     title:'US market news, stocks & economy',                    url:'https://www.cnbc.com/markets/' },
      { src:'Reuters Markets',  title:'Global & US financial market coverage',               url:'https://www.reuters.com/markets/' },
    ],
    china: [
      { src:'SCMP Business',    title:'China economy, markets & business news',              url:'https://www.scmp.com/business' },
      { src:'Reuters China',    title:'China markets & economic coverage',                   url:'https://www.reuters.com/world/china/' },
      { src:'CNBC Asia',        title:'Asia-Pacific & China market news',                    url:'https://www.cnbc.com/asia-markets/' },
      { src:'Yahoo Finance',    title:'Global markets incl. China indices',                  url:'https://finance.yahoo.com/world-indices/' },
    ],
  };
  const useEn = (feedKey === 'us' || feedKey === 'china');
  const links = FALLBACK_LINKS[feedKey] || FALLBACK_LINKS.asb;
  const noticeText = state.lang==='en'
    ? 'Live feed busy right now — trusted sources below'
    : 'Suapan langsung sibuk — sumber dipercayai di bawah';
  const visitText = state.lang==='en' ? 'Tap to visit' : 'Ketik untuk lawati';
  grid.innerHTML = `
    <div class="news-fallback-notice" style="grid-column:1/-1">
      <i class="ph ph-info"></i>
      <span>${noticeText}</span>
    </div>
    ${links.map(l=>`
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="news-card news-card-static">
      <div class="news-source">${l.src}</div>
      <div class="news-title">${l.title}</div>
      <div class="news-date">${visitText}</div>
    </a>`).join('')}`;
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
  try {
    initTheme();
    loadSavedState();
    initLanguage();
    initColorTheme();
    // UI mode (Normal/Pro)
    let savedMode = 'normal';
    try { savedMode = localStorage.getItem('asb-pro-uimode') || state.uiMode || 'normal'; } catch {}
    applyUIMode(savedMode);
  } catch(e) { console.error('[ASB] Phase 1 error:', e); }

  // Charts — init now if Chart.js ready, else retry when it loads
  function tryInitCharts() {
    if (typeof Chart === 'undefined') return false;
    try { initCharts(); updateAll(); return true; }
    catch(e) { console.error('[ASB] Chart init error:', e); return false; }
  }
  if (!tryInitCharts()) {
    // Chart.js not ready yet — poll briefly until it loads
    let tries = 0;
    const chartTimer = setInterval(() => {
      tries++;
      if (tryInitCharts() || tries > 40) clearInterval(chartTimer); // max ~6s
    }, 150);
  }

  try {
    applyStateToInputs();
    setupSliders();
    setupSliderTooltip();
    setupEventListeners();    // MUST always run
  } catch(e) { console.error('[ASB] Setup error:', e); }

  try {
    applyLanguage(state.lang || 'bm');
  } catch(e) { console.error('[ASB] Language error:', e); }

  setTimeout(() => {
    const active = document.querySelector('.tab-btn.active');
    if (active) moveTabIndicator(active);
  }, 80);

  // Non-blocking
  fetchLatestDividend();
}


// ── EXPOSE FUNCTIONS GLOBALLY (required for inline HTML onclick handlers) ──
window.shareURL          = shareURL;
window.resetState        = resetState;
window.refreshNews       = refreshNews;
window.switchTab         = switchTab;
window.autoFillZakat     = autoFillZakat;
window.saveManualDividend= saveManualDividend;
window.toggleManualDividend = toggleManualDividend;
window.toggleColorPicker = function(ev) {
  if (ev) ev.stopPropagation();
  const panel = document.getElementById('colorPickerPanel');
  if (panel) panel.classList.toggle('picker-open');
};

// Run init once — guard against double execution
let _asbStarted = false;
function startApp() {
  if (_asbStarted) return;
  _asbStarted = true;
  init();
}
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  // DOM already parsed — run now (Chart.js loads async, init handles its absence)
  startApp();
} else {
  document.addEventListener('DOMContentLoaded', startApp);
}
// Safety net: also try on full window load
window.addEventListener('load', startApp);
