(() => {
  // ===== i18n (Telugu default) =====
  const I18N = {
    te: {
      appName:"TribalEase",
      getStarted:"ప్రారంభించండి",
      language:"భాష",
      navCalc:"క్యాలిక్యులేటర్",
      navTracker:"లోన్ ట్రాకర్",
      navCompare:"లోన్స్ పోలిక",
      navVoice:"వాయిస్",
      navBank:"బ్యాంక్ సమాచారం",
      backLanding:"ల్యాండింగ్‌కు వెనుకకు",
      calcTitle:"వడ్డీ క్యాలిక్యులేటర్",
      principal:"మూలధనం",
      rate:"రేటు (%)",
      years:"సంవత్సరాలు",
      extra:"అదనపు నెలవారీ",
      calculate:"లెక్కించు",
      exportPDF:"పిడిఎఫ్ ఎగుమతి",
      speakResult:"ఫలితం వినిపించు",
      search:"శోధన",
      addLoan:"కొత్త లోన్",
      export:"ఎగుమతి",
      record:"చెల్లింపు చేర్చు",
      back:"వెనుకకు",
      loanDetailSpeak:"సంక్షిప్తం వినిపించు",
      bankInfo:"బ్యాంక్ సమాచారం",
      compareTitle:"లోన్స్ పోలిక",
      betterFill:"పోలికకు వివరాలు ఇవ్వండి",
      betterChoose:"మంచిది: లోన్ {n}",
      saveYou:"మీరు ఆదా"
    },
    hi: {
      appName:"TribalEase",
      getStarted:"शुरू करें",
      language:"भाषा",
      navCalc:"कैलकुलेटर",
      navTracker:"ऋण ट्रैकर",
      navCompare:"ऋण तुलना",
      navVoice:"वॉयस",
      navBank:"बैंक जानकारी",
      backLanding:"लैंडिंग पर वापस",
      calcTitle:"ब्याज कैलकुलेटर",
      principal:"मूलधन",
      rate:"दर (%)",
      years:"वर्ष",
      extra:"अतिरिक्त मासिक",
      calculate:"गणना",
      exportPDF:"PDF निर्यात",
      speakResult:"परिणाम सुनाएँ",
      search:"खोज",
      addLoan:"नया ऋण",
      export:"निर्यात",
      record:"भुगतान जोड़ें",
      back:"वापस",
      loanDetailSpeak:"सारांश सुनाएँ",
      bankInfo:"बैंक जानकारी",
      compareTitle:"ऋण तुलना",
      betterFill:"तुलना के लिए विवरण भरें",
      betterChoose:"बेहतर: ऋण {n}",
      saveYou:"आप बचाते हैं"
    },
    en: {
      appName:"TribalEase",
      getStarted:"Get Started",
      language:"Language",
      navCalc:"Interest Calculator",
      navTracker:"Loan Tracker",
      navCompare:"Compare Loans",
      navVoice:"Voice",
      navBank:"Bank Info",
      backLanding:"Back to Landing",
      calcTitle:"Interest Calculator",
      principal:"Principal",
      rate:"Rate (%)",
      years:"Years",
      extra:"Extra / Month",
      calculate:"Calculate",
      exportPDF:"Export PDF",
      speakResult:"Speak Result",
      search:"Search",
      addLoan:"Add Loan",
      export:"Export",
      record:"Record Payment",
      back:"Back",
      loanDetailSpeak:"Speak Summary",
      bankInfo:"Bank Info",
      compareTitle:"Compare Loans",
      betterFill:"Fill the forms to compare",
      betterChoose:"Better: Loan {n}",
      saveYou:"You Save"
    }
  };
  const LANG_KEY = 'tribalease_lang';
  const langSelEl = document.getElementById('langSel');
  const defaultLang = localStorage.getItem(LANG_KEY) || 'te';
  if (langSelEl) langSelEl.value = defaultLang;

  function t(key, vars={}) {
    const L = I18N[localStorage.getItem(LANG_KEY) || 'te'] || I18N.te;
    let s = (L[key] || I18N.en[key] || key);
    Object.entries(vars).forEach(([k,v]) => { s = s.replace(`{${k}}`, v); });
    return s;
  }
  function applyStaticText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    const titleHero = document.getElementById('titleHero');
    const descHero = document.getElementById('descHero');
    if (titleHero) titleHero.textContent = "TribalEase — Empowering Tribals Financially";
    if (descHero) descHero.textContent = "A unified platform for tribal communities to calculate loan interest, track borrowings, and explore bank loan details easily.";
  }

  // ===== Theme =====
  const storedTheme = localStorage.getItem('tribalease_theme');
  const startDark = storedTheme ? storedTheme === 'dark' : true;
  document.documentElement.classList.toggle('dark', startDark);
  document.documentElement.classList.toggle('light', !startDark);
  function setTheme(dark){
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
    localStorage.setItem('tribalease_theme', dark ? 'dark' : 'light');
  }

  // Elements
  const landing = document.getElementById('landing');
  const app = document.getElementById('app');
  const main = document.getElementById('main');
  const getStarted = document.getElementById('getStarted');
  const themeToggle = document.getElementById('themeToggle');
  const toggleThemeLanding = document.getElementById('toggleThemeLanding');
  const backToLanding = document.getElementById('backToLanding');

  // Apply initial language text
  applyStaticText();

  // Language change
  langSelEl?.addEventListener('change', () => {
    localStorage.setItem(LANG_KEY, langSelEl.value);
    applyStaticText();
    // Refresh current section labels
    if (!landing.classList.contains('hidden')) return;
    renderSection(S.section);
  });

  // Theme toggles
  themeToggle?.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));
  toggleThemeLanding?.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));

  // Quote
  const qEl = document.getElementById('qod');
  if (qEl) {
    const quotes = [
      "Small steps lead to big changes.",
      "Plan your money, own your future.",
      "Knowledge is the best investment.",
      "Track today to save tomorrow."
    ];
    const key = 'tribalease_qotd_index';
    const idx = (parseInt(localStorage.getItem(key) || '0', 10) + 1) % quotes.length;
    localStorage.setItem(key, String(idx));
    qEl.textContent = quotes[idx];
  }

  // Back to Landing
  backToLanding?.addEventListener('click', () => {
    app.classList.add('hidden');
    landing.classList.remove('hidden');
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  // Router state
  const S = {
    loans: JSON.parse(localStorage.getItem('tribalease_loans') || '[]'),
    locale: 'en-IN',
    currency: 'INR',
    chart: null,
    section: 'calculator'
  };
  function saveLoans() { localStorage.setItem('tribalease_loans', JSON.stringify(S.loans)); }
  const money = v => new Intl.NumberFormat(S.locale,{style:'currency',currency:S.currency,minimumFractionDigits:0}).format(Number.isFinite(v)?v:0);
  const sanitize = s => String(s||'').replace(/[&<>"'`=\/]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;','/':'&#x2F;'}[c]));

  // Landing -> App
  getStarted?.addEventListener('click', () => {
    landing.classList.add('hidden');
    const userTypeSel = document.getElementById('userType');
    if (userTypeSel) {
      localStorage.setItem('tribalease_user_type', userTypeSel.value);
    }
    app.classList.remove('hidden');
    renderSection('calculator');
  });

  // Sidebar nav
  document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSection(btn.dataset.section);
      localStorage.setItem('tribalease_last_section', btn.dataset.section);
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (!e.ctrlKey) return;
    const map = { '1':'calculator', '2':'tracker', '3':'compare', '4':'voice', '5':'bank' };
    if (map[e.key]) document.querySelector(`.nav-btn[data-section="${map[e.key]}"]`)?.click();
  });

  // Voice helpers
  function speak(text){
    try { const u = new SpeechSynthesisUtterance(text); u.lang = (localStorage.getItem(LANG_KEY)||'te')==='te' ? 'te-IN' : 'en-IN'; window.speechSynthesis.speak(u); } catch {}
  }
  function micButton(onResult){
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const btn = document.createElement('button');
    btn.type='button';
    btn.className='ml-2 text-sky-500 hover:text-sky-400';
    btn.title='Speak';
    btn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
    btn.onclick = () => {
      if (!SR) { alert('Speech recognition not supported'); return; }
      const r = new SR(); r.lang = (localStorage.getItem(LANG_KEY)||'te')==='te' ? 'te-IN' : 'en-IN';
      r.start(); r.onresult = e => onResult && onResult(e.results[0][0].transcript);
    };
    return btn;
  }

  // Math
  function emi(p, r, years) {
    const n = Math.max(1, Math.round(Number(years) * 12));
    const i = Number(r) / 12;
    if (!isFinite(p) || p <= 0 || !isFinite(i)) return { emi:0, total:0, interest:0, months:n };
    if (i === 0) return { emi: p / n, total: p, interest: 0, months: n };
    const pow = Math.pow(1 + i, n);
    const e = p * i * pow / (pow - 1);
    return { emi: e, total: e * n, interest: e * n - p, months: n };
  }
  function amortData(p, r, years, extra = 0) {
    const n = Math.max(1, Math.round(Number(years) * 12));
    const i = Number(r) / 12;
    const base = emi(p, r, years).emi;
    const pay = Math.max(0, base + Number(extra || 0));
    let bal = Number(p), out = [];
    if (!isFinite(bal) || bal <= 0 || !isFinite(i)) return out;
    for (let m = 1; m <= n; m++) {
      const interest = bal * i;
      let principal = pay - interest;
      if (principal > bal) principal = bal;
      bal = bal - principal;
      out.push({ m, bal: +bal.toFixed(2), interest: +interest.toFixed(2), principal: +principal.toFixed(2), payment: +(principal+interest).toFixed(2) });
      if (bal <= 0.000001) break;
    }
    return out;
  }
  function renderChart(canvasId, series) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !Array.isArray(series) || series.length === 0) { if (S.chart) { S.chart.destroy(); S.chart=null; } return; }
    const labels = series.map(x => x.m);
    const balances = series.map(x => x.bal || 0);
    const interests = series.map(x => x.interest || 0);
    const ctx = canvas.getContext('2d');
    if (S.chart) S.chart.destroy();
    S.chart = new Chart(ctx, {
      type: 'line',
      data: { labels, datasets: [
        { label: 'Remaining Balance', data: balances, borderColor: '#14b8a6', backgroundColor: 'rgba(20,184,166,.12)', fill: false, tension: 0.25 },
        { label: 'Monthly Interest', data: interests, borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.12)', fill: false, tension: 0.25 }
      ]},
      options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, scales: { y: { beginAtZero: true } } }
    });
  }

  // Router
  function renderSection(id) {
    S.section = id;
    if (id === 'calculator') renderCalculator();
    else if (id === 'tracker') renderTracker();
    else if (id === 'compare') renderCompare();
    else if (id === 'voice') renderVoice();
    else if (id === 'bank') renderBank();
  }
  
  function parseNumberWords(text) {
    text = text.replace(/[,]/g, '').toLowerCase();
    const map = {
      thousand: 1e3, lakh: 1e5, lac: 1e5, million: 1e6, crore: 1e7, billion: 1e9, hundred: 1e2
    };
    let tokens = text.split(/[\s-]+/);
    let total = 0, curr = 0;
    for (let word of tokens) {
      let num = parseFloat(word.replace(/[^\d.]/g,''));
      if (!isNaN(num)) { curr += num; }
      else if (word in map) {
        if (curr === 0) curr = 1;
        curr *= map[word];
        total += curr;
        curr = 0;
      }
    }
    total += curr;
    return total || null;
  }
  async function translateLibre(text, targetLang) {
    if (!text || !targetLang || targetLang === "en") return text;
    try {
      const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text, source: "en", target: targetLang, format: "text" })
      });
      const data = await res.json();
      return data?.translatedText ?? text;
    } catch { return text; }
  }

  // Calculator
  function renderCalculator() {
    main.innerHTML = `
      <div class="panel section">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div>
            <h2 class="text-2xl font-extrabold mb-1">${t('calcTitle')}</h2>
            <p class="muted text-base">${t('principal')} • ${t('rate')} • ${t('years')} • EMI</p>
          </div>
          <div class="flex gap-2 mt-2 md:mt-0">
            <button id="speak" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('speakResult')}</button>
            <button id="calcPdf" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('exportPDF')}</button>
          </div>
        </div>
        <form id="calcForm" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label class="block font-semibold w-full">
            ${t('principal')}
            <div class="flex items-center mt-2">
              <input name="p" type="number" class="input flex-1" required />
              <span class="ml-2"></span>
            </div>
          </label>
          <label class="block font-semibold w-full">
            ${t('rate')}
            <div class="flex items-center mt-2">
              <input name="r" type="number" step="0.1" class="input flex-1" required />
              <span class="ml-2"></span>
            </div>
          </label>
          <label class="block font-semibold w-full">
            ${t('years')}
            <div class="flex items-center mt-2">
              <input name="y" type="number" class="input flex-1" required />
              <span class="ml-2"></span>
            </div>
          </label>
          <label class="block font-semibold w-full">
            ${t('extra')}
            <div class="flex items-center mt-2">
              <input name="x" type="number" value="0" min="0" step="100" class="input flex-1" />
              <span class="ml-2"></span>
            </div>
          </label>
          <div class="col-span-full">
            <button class="btn btn-primary w-full py-4 text-lg font-semibold flex justify-center items-center mt-2"><i class="fa-solid fa-calculator mr-2"></i>${t('calculate')}</button>
          </div>
        </form>
        <div id="calcOut" class="mt-4"></div>
        <div class="mt-5 h-[260px]"><canvas id="calcChart"></canvas></div>
      </div>
    `;
    const f = document.getElementById('calcForm');
    const out = document.getElementById('calcOut');
    const pdfBtn = document.getElementById('calcPdf');
    const speakBtn = document.getElementById('speak');

    ['p','r','y','x'].forEach(name=>{
      const input = f.elements[name];
      const holder = input.parentElement;
      holder.querySelector('span').appendChild(micButton(text=>{
        const num = parseNumberWords(text) || parseFloat((text.match(/[\d.]+/g)||[]).join('')) || '';
        input.value = num;
      }));
    });

    let last = null;
    f.onsubmit = e => {
      e.preventDefault();
      const p = +f.p.value, r = +f.r.value/100, y = +f.y.value, x = +f.x.value;
      const res = emi(p, r, y);
      const series = amortData(p, r, y, x);
      out.innerHTML = `<div class="glass p-3 rounded-lg grid md:grid-cols-3 gap-4">
        <div><div class="text-sm muted">EMI</div><div class="text-2xl font-extrabold">${money(res.emi + (x||0))}</div></div>
        <div><div class="text-sm muted">Total</div><div class="text-2xl font-extrabold text-[color:var(--ok)]">${money(res.total)}</div></div>
        <div><div class="text-sm muted">Interest</div><div class="text-2xl font-extrabold text-[color:var(--warn)]">${money(res.interest)}</div></div>
      </div>`;
      renderChart('calcChart', series);
      last = { p, r, y, x, res, series };
    };
    pdfBtn.onclick = () => {
      if (!last?.series?.length) return;
      const doc = new window.jspdf.jsPDF();
      doc.text('Amortization', 10, 10);
      doc.text(`P: ${money(last.p)} R: ${(last.r*100).toFixed(2)}% Y: ${last.y} Extra: ${money(last.x)}`, 10, 18);
      let y = 26;
      doc.text('M  Principal  Interest  Balance', 10, y); y += 6;
      last.series.forEach(r => { doc.text(`${r.m}  ${money(r.principal)}  ${money(r.interest)}  ${money(r.bal)}`, 10, y); y += 6; if (y > 270) { doc.addPage(); y = 10; } });
      doc.save('amortization.pdf');
    };

    // Now includes rate in TTS
    speakBtn.onclick = () => {
      if (!last?.res) return;
      const rpercent = (typeof last.r === "number") ? (last.r * 100).toFixed(2) + "%" : "";
      speak(`EMI is ${Math.round(last.res.emi + (last.x||0))} rupees, total ${Math.round(last.res.total)} rupees,interest amount is ${Math.round(last.res.interest)} rupees`);
    };
  }

// DEFAULT LANGUAGE: Set to English
localStorage.setItem('tribalease_lang', 'en');

  // Tracker & Detail (spacing refined)
  function renderTracker(){
    main.innerHTML = `
      <div class="panel section">
        <div class="flex items-center gap-2 mb-3">
          <button id="addLoan" class="btn btn-primary"><i class="fa fa-plus mr-1"></i>${t('addLoan')}</button>
          <input id="q" placeholder="${t('search')}..." class="input flex-1">
          <button id="exportLoans" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('export')}</button>
        </div>
        <div id="loanList" class="grid gap-3"></div>
      </div>
    `;
    document.getElementById('addLoan').onclick = addLoanModal;
    document.getElementById('exportLoans').onclick = exportLoansPdf;
    document.getElementById('q').oninput = renderLoanList;
    renderLoanList();
  }
  function renderLoanList(){
    const q = (document.getElementById('q')?.value||'').toLowerCase();
    const c = document.getElementById('loanList');
    const loans = S.loans.filter(l => sanitize(l.lenderName).toLowerCase().includes(q));
    if (!loans.length) { c.innerHTML = '<div class="muted py-10 text-center">No loans</div>'; return; }
    c.innerHTML = loans.map(l => loanCard(l)).join('');
    c.querySelectorAll('.open').forEach(b => b.onclick = () => renderLoanDetail(b.dataset.id));
    c.querySelectorAll('.rec').forEach(b => b.onclick = () => recordModal(b.dataset.id));
    c.querySelectorAll('.del').forEach(b => b.onclick = () => deleteLoan(b.dataset.id));
  }
  function loanCard(l){
    const paid = l.payments.reduce((s,p)=>s+(+p.amount||0),0);
    const rem = Math.max(0,(l.totalAmount||0)-paid);
    const overdue = new Date()>new Date(l.dueDate) && rem>0;
    const progress = (l.totalAmount>0)? Math.min(100, Math.round(paid/l.totalAmount*100)) : 0;
    return `<div class="glass p-4 group transition-shadow hover:shadow-[0_4px_24px_rgba(20,184,166,.10)] border border-transparent hover:border-[color:var(--accent)] rounded-2xl">
        <div class="flex justify-between items-center">
        <div>
            <div class="font-bold text-lg">${sanitize(l.lenderName)} ${overdue?`<span class="text-xs bg-red-700 px-2 py-0.5 rounded ml-2">Overdue</span>`:''}</div>
            <div class="text-xs muted mt-1">P: ${money(l.principal)} • R: ${(l.ratePercent||0).toFixed(2)}% • Due: ${new Date(l.dueDate).toLocaleDateString()}</div>
        </div>
        <div class="flex gap-2 mt-1 ml-3">
            <button class="open btn bg-gradient-to-r from-teal-400 to-sky-400 text-slate-900 shadow-md hover:from-sky-400 hover:to-cyan-300 ring-2 ring-transparent hover:ring-sky-400 focus:ring-2 focus:ring-sky-300 transition" data-id="${l.id}">Open</button>
            <button class="rec btn bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold shadow-md hover:brightness-110 ring-2 ring-transparent hover:ring-green-300 focus:ring-2 focus:ring-green-300 transition" data-id="${l.id}">Record Payment</button>
            <button class="del btn bg-red-600 text-white font-semibold hover:bg-red-500 ring-2 ring-transparent hover:ring-red-400 focus:ring-2 focus:ring-red-400 transition" data-id="${l.id}">Delete</button>
        </div>
        </div>
        <div class="mt-4">
        <div class="h-2 bg-[color:var(--bg-soft)]/40 rounded"><div class="h-2 rounded bg-teal-400 transition-all" style="width:${progress}%"></div></div>
        </div>
    </div>`;
}

  function renderLoanDetail(id){
    const l=S.loans.find(x=>x.id===id); if(!l) return;
    const paid = l.payments.reduce((s,p)=>s+(+p.amount||0),0);
    const rem = Math.max(0,(l.totalAmount||0)-paid);
    const progress = (l.totalAmount>0)? Math.min(100, Math.round(paid/l.totalAmount*100)) : 0;
    main.innerHTML = `
      <div class="panel section">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-extrabold">${sanitize(l.lenderName)}</h2>
            <div class="text-sm muted">Due: ${new Date(l.dueDate).toLocaleDateString()}</div>
          </div>
          <div class="flex gap-2">
            <button id="speakLoan" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('loanDetailSpeak')}</button>
            <button id="backList" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('back')}</button>
          </div>
        </div>

        <div class="mt-4">
          <p class="mb-1 muted">Progress</p>
          <div class="h-3 bg-[color:var(--bg-soft)]/40 rounded"><div class="h-3 bg-[color:var(--accent)] rounded" style="width:${progress}%"></div></div>
          <div class="text-right text-sm mt-1">${progress}%</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div class="glass p-4"><div class="text-sm muted">Total</div><div class="text-2xl font-extrabold text-sky-400">${money(l.totalAmount||0)}</div></div>
          <div class="glass p-4"><div class="text-sm muted">Paid</div><div class="text-2xl font-extrabold text-[color:var(--ok)]">${money(paid)}</div></div>
          <div class="glass p-4 md:col-span-2"><div class="text-sm muted">Remaining</div><div class="text-3xl font-extrabold text-[color:var(--warn)]">${money(rem)}</div></div>
        </div>

        <div class="mt-4">
          <button class="btn btn-primary" id="recordOne"><i class="fa-solid fa-plus mr-2"></i>${t('record')}</button>
        </div>
      </div>
    `;
    document.getElementById('backList').onclick = renderTracker;
    document.getElementById('recordOne').onclick = () => recordModal(l.id);
    document.getElementById('speakLoan').onclick = () => {
      const L = localStorage.getItem(LANG_KEY)||'te';
      const line = L==='te'
        ? `మొత్తం ${Math.round(l.totalAmount||0)}. చెల్లింపు ${Math.round(paid)}. మిగిలింది ${Math.round(rem)}.`
        : `Total ${Math.round(l.totalAmount||0)}, paid ${Math.round(paid)}, remaining ${Math.round(rem)}.`;
      speak(line);
    };
  }
  function addLoanModal(){
    showModal(t('addLoan'), `
      <label class="flex items-center">${t('principal')}
        <div class="w-full ml-2 flex items-center">
          <input name="p" type="number" class="input flex-1" required>
        </div>
      </label>
      <label class="flex items-center">${t('rate')}
        <div class="w-full ml-2 flex items-center">
          <input name="r" type="number" step="0.1" class="input flex-1" required>
        </div>
      </label>
      <label class="flex items-center">${t('years')}
        <input name="due" type="date" class="input w-full ml-2" required>
      </label>
      <label class="flex items-center">Lender
        <input name="name" class="input w-full ml-2" required>
      </label>
    `, d=>{
      const rp=parseFloat(d.r)||0, p=+d.p||0;
      const l={ id:`loan-${Date.now()}`, lenderName:sanitize(d.name), principal:p, ratePercent:rp, rateDecimal:rp/100, dueDate:d.due, totalAmount:p*(1+rp/100*1), payments:[], createdAt:Date.now() };
      S.loans.push(l); saveLoans(); renderLoanList();
    });
    setTimeout(()=>{
      const form=document.getElementById('m-f');
      [['p'],['r']].forEach(([name])=>{
        const input=form.querySelector(`[name="${name}"]`);
        const holder=input.parentElement;
        holder.appendChild(micButton(text=>{
          const num=parseFloat((text.match(/[\d.]+/g)||[]).join(''))||'';
          input.value=num;
        }));
      });
    });
  }
  function recordModal(id){
    const l=S.loans.find(x=>x.id===id); if(!l) return;
    showModal(t('record'), `
      <label class="flex items-center">Amount
        <div class="w-full ml-2 flex items-center">
          <input name="amt" type="number" class="input flex-1" required>
        </div>
      </label>
      <label>Date<input name="date" type="date" class="input w-full ml-2" required></label>
      <label>Receipt<input name="file" type="file" accept="image/*" class="input w-full ml-2"></label>
    `, async d=>{
      let b64=''; const file=document.querySelector('input[name="file"]')?.files?.[0];
      if(file){ b64=await new Promise(res=>{ const r=new FileReader(); r.onload=e=>res(e.target.result); r.readAsDataURL(file); }); l.photo=b64; }
      l.payments.push({ amount:+d.amt||0, date:d.date, photo:b64 });
      saveLoans(); renderLoanDetail(l.id);
    });
    setTimeout(()=>{
      const form=document.getElementById('m-f');
      const input=form.querySelector('[name="amt"]');
      const holder=input.parentElement;
      holder.appendChild(micButton(text=>{
        const num=parseFloat((text.match(/[\d.]+/g)||[]).join(''))||'';
        input.value=num;
      }));
    });
  }
  function deleteLoan(id){
    const idx=S.loans.findIndex(x=>x.id===id); if(idx<0) return;
    S.loans.splice(idx,1); saveLoans(); renderLoanList();
  }
  function exportLoansPdf(){
    const doc = new window.jspdf.jsPDF();
    doc.text('Loan Summary', 10, 10);
    let y=18;
    S.loans.forEach(l => {
      doc.text(`${l.lenderName}: P ${money(l.principal)} @ ${(l.ratePercent||0).toFixed(2)}%`, 10, y); y+=6;
      l.payments.forEach(p => { doc.text(` - ${new Date(p.date).toLocaleDateString()} ${money(p.amount)}`, 14, y); y+=6; if (y>270){ doc.addPage(); y=10; } });
    });
    doc.save('loans.pdf');
  }

  // Compare
  function renderCompare(){
    main.innerHTML = `
      <div class="panel section">
        <div class="ribbon p-3 mb-3 flex items-center gap-3 text-[color:var(--ok)]">
          <i class="fa-solid fa-badge-check"></i><span class="font-semibold">Better Option</span>
          <span id="bestText" class="ml-auto muted text-sm">${t('betterFill')}</span>
        </div>
        <form id="cmp" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="glass p-4 border rounded-2xl">
            <div class="flex items-center gap-2 text-sky-300 font-bold mb-3"><i class="fa-solid fa-arrow-trend-up"></i> Loan 1</div>
            <label>Principal<input name="p1" type="number" class="input w-full" required value="10000"></label>
            <label class="mt-2">Rate (%)<input name="r1" type="number" step="0.1" class="input w-full" required value="5"></label>
            <label class="mt-2">Years<input name="y1" type="number" class="input w-full" required value="2"></label>
          </div>
          <div class="glass p-4 border rounded-2xl">
            <div class="flex items-center gap-2 text-green-300 font-bold mb-3"><i class="fa-solid fa-sack-dollar"></i> Loan 2</div>
            <label>Principal<input name="p2" type="number" class="input w-full" required value="10000"></label>
            <label class="mt-2">Rate (%)<input name="r2" type="number" step="0.1" class="input w-full" required value="7"></label>
            <label class="mt-2">Years<input name="y2" type="number" class="input w-full" required value="2"></label>
          </div>
        </form>
        <button id="go" class="btn btn-primary mt-3">${t('navCompare')}</button>
        <div id="res" class="mt-4 grid gap-3"></div>
      </div>
    `;
    document.getElementById('go').onclick = () => {
      const f=document.getElementById('cmp');
      const p1=+f.p1.value, r1=+f.r1.value/100, y1=+f.y1.value;
      const p2=+f.p2.value, r2=+f.r2.value/100, y2=+f.y2.value;
      const tot1=p1*(1+r1*y1), tot2=p2*(1+r2*y2);
      const better=tot1<=tot2?1:2, sav=Math.abs(tot1-tot2);
      document.getElementById('bestText').textContent = t('betterChoose', { n: String(better) });

      document.getElementById('res').innerHTML = `
        <div class="grid md:grid-cols-2 gap-3">
          <div class="glass p-4"><div class="text-sm muted">Loan 1 Total</div><div class="text-4xl font-extrabold text-sky-300">${money(tot1)}</div></div>
          <div class="glass p-4"><div class="text-sm muted">Loan 2 Total</div><div class="text-4xl font-extrabold text-[color:var(--ok)]">${money(tot2)}</div></div>
        </div>
        <div class="glass p-4">
          <div class="muted mb-2">${t('saveYou')}</div>
          <div class="text-5xl font-extrabold text-[color:var(--ok)]">${money(sav)}</div>
        </div>
      `;
    };
  }

  // -- Voice Section --
  function renderVoice() {
    main.innerHTML = `
      <div class="panel section">
        <h2 class="text-xl font-bold mb-3">${t('navVoice')}</h2>
        <div class="grid md:grid-cols-2 gap-3">
          <div class="glass p-4">
            <div class="font-semibold mb-2">Text to Speech</div>
            <div class="flex flex-col gap-2">
              <select id="ttsLang" class="input w-auto self-start">
                <option value="en">English Voice</option>
                <option value="te">Telugu Voice</option>
                <option value="hi">Hindi Voice</option>
              </select>
              <textarea id="ttsText" class="input w-full" rows="4" placeholder="Type in English: will auto-translate"></textarea>
              <div class="flex gap-2 mt-2">
                <button id="speakBtn" class="btn btn-primary flex items-center"><i class="fa-solid fa-volume-high mr-2"></i>Speak</button>
                <button id="stopSpeak" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">Stop</button>
              </div>
            </div>
          </div>
          <div class="glass p-4">
            <div class="font-semibold mb-2">Fill Calculator via Voice</div>
            <p class="text-sm muted mb-2">Say: "principal twenty two lakh rate 10 years 5" or "principal five million rate 7 years 2"</p>
            <button id="sttBtn" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)] flex items-center"><i class="fa-solid fa-microphone mr-2"></i>Start Listening</button>
            <div id="sttOut" class="text-sm mt-2"></div>
          </div>
        </div>
      </div>
    `;
    // TTS with translation
    document.getElementById('speakBtn').onclick = async () => {
      const txtEl = document.getElementById('ttsText');
      const txt = txtEl.value.trim();
      if (!txt) return;
      const tgt = document.getElementById('ttsLang').value;
      let speakText = txt;
      if (tgt !== "en") {
        speakText = await translateLibre(txt, tgt);
        txtEl.value = speakText;
      }
      // Find a system voice for the language if possible:
      let synth = window.speechSynthesis;
      let voices = synth.getVoices();
      let wantedLangs = tgt === "te" ? ["te-IN","te","bn-IN"] : tgt === "hi" ? ["hi-IN","hi"] : ["en-IN","en"];
      let found = voices.find(v => wantedLangs.includes(v.lang));
      let u = new SpeechSynthesisUtterance(speakText);
      if (found) u.voice = found;
      u.lang = found ? found.lang : (tgt === "hi" ? "hi-IN" : tgt === "te" ? "te-IN" : "en-IN");
      window.speechSynthesis.speak(u);
    };
    document.getElementById('stopSpeak').onclick = () => window.speechSynthesis.cancel();

    // STT: fill calculator with words like "fifteen lakh"
    document.getElementById('sttBtn').onclick = () => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { document.getElementById('sttOut').textContent='Speech recognition not supported.'; return; }
      const L = localStorage.getItem('tribalease_lang') || 'en';
      const rec = new SR(); rec.lang = L === "hi" ? "hi-IN" : L === "te" ? "te-IN" : "en-IN"; rec.interimResults = false; rec.start();
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        document.getElementById('sttOut').textContent = text;
        // Now parse named numbers like "principal two crore fifty lakh rate 5 years 25"
        const M = text.toLowerCase().match(/principal ([^ ]+( [^ ]+)*) rate ([^ ]+( [^ ]+)*) years ([^ ]+( [^ ]+)*)/);
        if (M) {
          document.querySelector('.nav-btn[data-section="calculator"]')?.click();
          setTimeout(() => {
            const form = document.getElementById('calcForm');
            if (!form) return;
            form.p.value = parseNumberWords(M[1]) || "";
            form.r.value = parseNumberWords(M[3]) || "";
            form.y.value = parseNumberWords(M[5]) || "";
            form.dispatchEvent(new Event('submit', { cancelable:true, bubbles:true }));
          }, 200);
        }
      };
    };
  }

  // Bank info
  const BANKS = [
    { name:'SBI', interest:'8.4%–10.0%', docs:['Aadhaar','PAN','Income Proof','Address Proof'], policy:'Lower rates for salaried; flexible tenure up to 7 years.' },
    { name:'HDFC', interest:'8.5%–10.5%', docs:['Aadhaar','PAN','Salary Slips','Bank Statements'], policy:'Fast processing; pre-approved offers for existing customers.' },
    { name:'ICICI', interest:'8.6%–11.0%', docs:['Aadhaar','PAN','ITR/Salary','Address Proof'], policy:'Attractive balance transfer and top-up options.' },
    { name:'Axis', interest:'8.7%–11.5%', docs:['Aadhaar','PAN','Income Proof','Residence Proof'], policy:'Digital KYC; quick disbursal for pre-verified customers.' },
  ];
  function renderBank(){
    main.innerHTML = `
      <div class="panel section">
        <div class="flex items-center gap-2 mb-3">
          <h2 class="text-xl font-bold">${t('bankInfo')}</h2>
          <input id="bankQ" placeholder="${t('search')} bank..." class="input ml-auto">
        </div>
        <div id="bankGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
      </div>
    `;
    const q = document.getElementById('bankQ');
    const grid = document.getElementById('bankGrid');
    function draw(){
      const term=(q.value||'').toLowerCase();
      const items=BANKS.filter(b=>b.name.toLowerCase().includes(term));
      grid.innerHTML = items.map(b=>bankCard(b)).join('');
      grid.querySelectorAll('.more').forEach(btn => btn.onclick = ()=> bankModal(items.find(x=>x.name===btn.dataset.name)));
    }
    function bankCard(b){
      return `<div class="glass p-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold">${b.name}</h3>
          <span class="text-xs px-2 py-0.5 rounded bg-[color:var(--accent)]/15 text-[color:var(--accent)]">Rates ${b.interest}</span>
        </div>
        <p class="mt-2 text-sm muted">${b.policy}</p>
        <button class="more btn mt-3 bg-[color:var(--glass)] border border-[color:var(--stroke)]" data-name="${b.name}">Documents</button>
      </div>`;
    }
    function bankModal(b){
      if(!b) return;
      showModal(`${b.name} — Details`, `
        <div class="space-y-2">
          <div><b>Interest Range:</b> ${b.interest}</div>
          <div><b>Required Documents:</b><ul class="list-disc ml-6 text-sm">${b.docs.map(d=>`<li>${d}</li>`).join('')}</ul></div>
          <div><b>Policy:</b> ${b.policy}</div>
        </div>
      `, ()=>{});
    }
    q.oninput = draw; draw();
  }

  // Modal
  function showModal(title, body, onSubmit){
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div class="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
        <div class="glass p-4 w-full max-w-md">
          <div class="flex justify-between items-center">
            <h3 class="font-bold">${title}</h3>
            <button id="m-x" aria-label="Close">&times;</button>
          </div>
          <form id="m-f" class="mt-3 grid gap-2">
            ${body}
            <div class="mt-3 flex gap-2 justify-end">
              <button type="button" id="m-c" class="btn bg-[color:var(--glass)] border border-[color:var(--stroke)]">${t('back')}</button>
              <button class="btn btn-primary">${t('addLoan')}</button>
            </div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
    const close=()=>wrap.remove();
    wrap.querySelector('#m-x').onclick = close;
    wrap.querySelector('#m-c').onclick = close;
    wrap.querySelector('#m-f').onsubmit = e => {
      e.preventDefault();
      const data=Object.fromEntries(new FormData(e.target).entries());
      onSubmit && onSubmit(data);
      close();
    };
  }

  // Boot
  const last = localStorage.getItem('tribalease_last_section');
  if (last && app && landing.classList.contains('hidden')) renderSection(last);
})();
