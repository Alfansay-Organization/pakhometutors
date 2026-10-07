/* Shared Header + WhatsApp float + favicon – categorized navigation */
(function () {
  var WA = 'https://wa.me/923119696807?text=Hello%20Pak%20Home%20Tutors%2C%20I%20need%20a%20tutor';
  var FAVICON = 'images/pht_logo.webp';

  var headerHtml = `
<header class="site-header">
  <div class="header-bar">
    <a href="index.html" class="brand">
      <img src="images/pht_logo.webp" alt="Pak Home Tutors Logo" class="logo" width="120" height="52">
      <span class="brand-text">
        <span class="name">Pak Home Tutors</span>
        <span class="tag">Home & Online Tutors across Pakistan</span>
      </span>
    </a>
    <nav class="nav-desktop" aria-label="Main menu">
      <a href="index.html" data-nav="home">Home</a>

      <div class="nav-dropdown" data-nav="islamabad">
        <button type="button" class="nav-drop-btn" aria-haspopup="true" aria-expanded="false">Islamabad <span class="nav-caret" aria-hidden="true">▾</span></button>
        <div class="nav-drop-panel">
          <div class="nav-drop-group">
            <span class="nav-drop-label">G Sectors</span>
            <a href="home-tutors-g6-islamabad.html">G-6</a>
            <a href="home-tutors-g7-islamabad.html">G-7</a>
            <a href="home-tutors-g8-islamabad.html">G-8</a>
            <a href="home-tutors-g9-islamabad.html">G-9</a>
            <a href="home-tutors-g10-islamabad.html">G-10</a>
            <a href="home-tutors-g11-islamabad.html">G-11</a>
            <a href="home-tutors-g12-islamabad.html">G-12</a>
            <a href="home-tutors-g13-islamabad.html">G-13</a>
            <a href="home-tutors-g14-islamabad.html">G-14</a>
            <a href="home-tutors-g15-islamabad.html">G-15</a>
            <a href="home-tutors-g16-islamabad.html">G-16</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">F, E &amp; I Sectors</span>
            <a href="home-tutors-f6-islamabad.html">F-6</a>
            <a href="home-tuition-f7-islamabad.html">F-7</a>
            <a href="home-tutors-f8-islamabad.html">F-8</a>
            <a href="home-tutors-f10-islamabad.html">F-10</a>
            <a href="home-tutors-f11-islamabad.html">F-11</a>
            <a href="home-tutors-f12-islamabad.html">F-12</a>
            <a href="home-tutors-e7-islamabad.html">E-7</a>
            <a href="home-tutors-e8-islamabad.html">E-8</a>
            <a href="home-tutors-e11-islamabad.html">E-11</a>
            <a href="home-tutors-i8-islamabad.html">I-8</a>
            <a href="home-tutors-i9-islamabad.html">I-9</a>
            <a href="home-tutors-i10-islamabad.html">I-10</a>
            <a href="home-tutors-i11-islamabad.html">I-11</a>
            <a href="home-tutors-i12-islamabad.html">I-12</a>
            <a href="home-tutors-i14-islamabad.html">I-14</a>
            <a href="home-tutors-i15-islamabad.html">I-15</a>
            <a href="home-tutors-i16-islamabad.html">I-16</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">DHA Islamabad</span>
            <a href="home-tutors-dha-islamabad.html">DHA Overview</a>
            <a href="home-tutors-dha-phase-1-islamabad.html">Phase 1</a>
            <a href="home-tutors-dha-phase-2-islamabad.html">Phase 2</a>
            <a href="home-tutors-dha-phase-2-extension-islamabad.html">Phase 2 Ext</a>
            <a href="home-tutors-dha-phase-3-islamabad.html">Phase 3</a>
            <a href="home-tutors-dha-phase-4-islamabad.html">Phase 4</a>
            <a href="home-tutors-dha-phase-5-islamabad.html">Phase 5</a>
            <a href="physics-home-tutors-dha-phase-2-islamabad.html">Physics Phase 2</a>
            <a href="mathematics-home-tutors-dha-phase-2-islamabad.html">Maths Phase 2</a>
            <a href="female-home-tutors-dha-islamabad.html">Female Tutors</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">Other Islamabad</span>
            <a href="online-tutors-bahria-town-islamabad.html">Bahria Town</a>
            <a href="home-tutors-gulberg-greens-islamabad.html">Gulberg Greens</a>
            <a href="home-tutors-gulberg-residencia-islamabad.html">Gulberg Residencia</a>
            <a href="home-tutors-bani-gala-islamabad.html">Bani Gala</a>
            <a href="home-tutors-pwd-islamabad.html">PWD</a>
            <a href="home-tutors-soan-garden-islamabad.html">Soan Garden</a>
            <a href="home-tutors-chak-shahzad-islamabad.html">Chak Shahzad</a>
            <a href="home-tutors-park-view-city-islamabad.html">Park View City</a>
            <a href="home-tutors-capital-smart-city-islamabad.html">Capital Smart City</a>
          </div>
        </div>
      </div>

      <div class="nav-dropdown" data-nav="lahore">
        <button type="button" class="nav-drop-btn" aria-haspopup="true" aria-expanded="false">Lahore <span class="nav-caret" aria-hidden="true">▾</span></button>
        <div class="nav-drop-panel">
          <div class="nav-drop-group">
            <span class="nav-drop-label">Main Areas</span>
            <a href="dha-lahore.html">DHA Lahore</a>
            <a href="cavalry-ground-lahore.html">Cavalry Ground</a>
            <a href="gulberg-lahore.html">Gulberg</a>
            <a href="model-town-lahore.html">Model Town</a>
            <a href="bahria-town-lahore.html">Bahria Town</a>
            <a href="johar-town-lahore.html">Johar Town</a>
            <a href="wapda-town-lahore.html">Wapda Town</a>
            <a href="askari-lahore.html">Askari</a>
            <a href="garden-town-lahore.html">Garden Town</a>
            <a href="valencia-town-lahore.html">Valencia Town</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">Cavalry Ground</span>
            <a href="physics-home-tutors-cavalry-ground-lahore.html">Physics</a>
            <a href="mathematics-home-tutors-cavalry-ground-lahore.html">Mathematics</a>
            <a href="chemistry-home-tutors-cavalry-ground-lahore.html">Chemistry</a>
            <a href="biology-home-tutors-cavalry-ground-lahore.html">Biology</a>
            <a href="english-home-tutors-cavalry-ground-lahore.html">English</a>
            <a href="computer-science-home-tutors-cavalry-ground-lahore.html">Computer Science</a>
            <a href="o-level-home-tutors-cavalry-ground-lahore.html">O Level</a>
            <a href="a-level-home-tutors-cavalry-ground-lahore.html">A Level</a>
            <a href="igcse-home-tutors-cavalry-ground-lahore.html">IGCSE</a>
            <a href="matric-home-tutors-cavalry-ground-lahore.html">Matric</a>
            <a href="fsc-home-tutors-cavalry-ground-lahore.html">FSc</a>
            <a href="female-home-tutors-cavalry-ground-lahore.html">Female Tutors</a>
            <a href="online-tutors-cavalry-ground-lahore.html">Online Tutors</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">Gulberg</span>
            <a href="physics-home-tutors-gulberg-lahore.html">Physics</a>
            <a href="mathematics-home-tutors-gulberg-lahore.html">Mathematics</a>
            <a href="chemistry-home-tutors-gulberg-lahore.html">Chemistry</a>
            <a href="biology-home-tutors-gulberg-lahore.html">Biology</a>
            <a href="english-home-tutors-gulberg-lahore.html">English</a>
            <a href="computer-science-home-tutors-gulberg-lahore.html">Computer Science</a>
            <a href="o-level-home-tutors-gulberg-lahore.html">O Level</a>
            <a href="a-level-home-tutors-gulberg-lahore.html">A Level</a>
            <a href="igcse-home-tutors-gulberg-lahore.html">IGCSE</a>
            <a href="gcse-home-tutors-gulberg-lahore.html">GCSE</a>
            <a href="matric-home-tutors-gulberg-lahore.html">Matric</a>
            <a href="fsc-home-tutors-gulberg-lahore.html">FSc</a>
            <a href="female-home-tutors-gulberg-lahore.html">Female Tutors</a>
            <a href="online-tutors-gulberg-lahore.html">Online Tutors</a>
          </div>
        </div>
      </div>

      <div class="nav-dropdown" data-nav="subjects">
        <button type="button" class="nav-drop-btn" aria-haspopup="true" aria-expanded="false">Subjects <span class="nav-caret" aria-hidden="true">▾</span></button>
        <div class="nav-drop-panel nav-drop-panel--compact">
          <div class="nav-drop-group">
            <span class="nav-drop-label">Core Subjects</span>
            <a href="physics-home-tutors-dha-phase-2-islamabad.html">Physics</a>
            <a href="mathematics-home-tutors-dha-phase-2-islamabad.html">Mathematics</a>
            <a href="chemistry-home-tutors-dha-phase-2-islamabad.html">Chemistry</a>
            <a href="biology-home-tutors-dha-phase-1-islamabad.html">Biology</a>
            <a href="english-home-tutors-dha-phase-2-islamabad.html">English</a>
            <a href="computer-science-home-tutors-dha-phase-2-islamabad.html">Computer Science</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">Tech &amp; Specialty</span>
            <a href="ai-tutors-dha-islamabad.html">AI Tutors</a>
            <a href="python-tutors-dha-islamabad.html">Python</a>
            <a href="coding-tutors-dha-islamabad.html">Coding</a>
            <a href="robotics-tutors-dha-islamabad.html">Robotics</a>
            <a href="online-ai-tutors-dha-islamabad.html">Online AI</a>
          </div>
        </div>
      </div>

      <div class="nav-dropdown" data-nav="curricula">
        <button type="button" class="nav-drop-btn" aria-haspopup="true" aria-expanded="false">Curricula <span class="nav-caret" aria-hidden="true">▾</span></button>
        <div class="nav-drop-panel nav-drop-panel--compact">
          <div class="nav-drop-group">
            <span class="nav-drop-label">Cambridge / International</span>
            <a href="o-level-physics-home-tutors-dha-islamabad.html">O Level</a>
            <a href="a-level-physics-home-tutors-dha-islamabad.html">A Level</a>
            <a href="igcse-home-tutors-cavalry-ground-lahore.html">IGCSE</a>
            <a href="gcse-home-tutors-gulberg-lahore.html">GCSE</a>
          </div>
          <div class="nav-drop-group">
            <span class="nav-drop-label">Board / Local</span>
            <a href="matric-home-tutors-cavalry-ground-lahore.html">Matric</a>
            <a href="fsc-home-tutors-cavalry-ground-lahore.html">FSc</a>
            <a href="federal-board-physics-home-tutors-dha-islamabad.html">Federal Board</a>
            <a href="home-tutors-primary-students-cavalry-ground-lahore.html">Primary</a>
          </div>
        </div>
      </div>

      <a href="${WA}" class="nav-wa" target="_blank" rel="noopener">WhatsApp</a>
    </nav>
    <button type="button" class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
      <i class="fas fa-bars" aria-hidden="true"></i>
    </button>
  </div>
  <nav class="nav-mobile" id="mobileNav" aria-label="Mobile menu">
    <a href="index.html" data-nav="home">Home</a>

    <details class="mob-section">
      <summary>Islamabad</summary>
      <div class="mob-links">
        <a href="home-tutors-g9-islamabad.html">G Sectors (G-6 to G-16)</a>
        <a href="home-tutors-f10-islamabad.html">F / E / I Sectors</a>
        <a href="home-tutors-dha-islamabad.html">DHA Islamabad</a>
        <a href="home-tutors-dha-phase-2-islamabad.html">DHA Phase 2</a>
        <a href="online-tutors-bahria-town-islamabad.html">Bahria Town</a>
        <a href="home-tutors-pwd-islamabad.html">PWD &amp; More Areas</a>
      </div>
    </details>

    <details class="mob-section">
      <summary>Lahore</summary>
      <div class="mob-links">
        <a href="dha-lahore.html">DHA Lahore</a>
        <a href="cavalry-ground-lahore.html">Cavalry Ground</a>
        <a href="gulberg-lahore.html">Gulberg</a>
        <a href="model-town-lahore.html">Model Town</a>
        <a href="bahria-town-lahore.html">Bahria Town Lahore</a>
        <a href="johar-town-lahore.html">Johar Town</a>
        <a href="physics-home-tutors-cavalry-ground-lahore.html">Physics – Cavalry Ground</a>
        <a href="physics-home-tutors-gulberg-lahore.html">Physics – Gulberg</a>
        <a href="o-level-home-tutors-cavalry-ground-lahore.html">O Level – Cavalry Ground</a>
        <a href="a-level-home-tutors-gulberg-lahore.html">A Level – Gulberg</a>
      </div>
    </details>

    <details class="mob-section">
      <summary>Subjects</summary>
      <div class="mob-links">
        <a href="physics-home-tutors-dha-phase-2-islamabad.html">Physics</a>
        <a href="mathematics-home-tutors-dha-phase-2-islamabad.html">Mathematics</a>
        <a href="chemistry-home-tutors-dha-phase-2-islamabad.html">Chemistry</a>
        <a href="biology-home-tutors-dha-phase-1-islamabad.html">Biology</a>
        <a href="english-home-tutors-dha-phase-2-islamabad.html">English</a>
        <a href="computer-science-home-tutors-dha-phase-2-islamabad.html">Computer Science</a>
        <a href="ai-tutors-dha-islamabad.html">AI / Python / Coding</a>
        <a href="robotics-tutors-dha-islamabad.html">Robotics</a>
      </div>
    </details>

    <details class="mob-section">
      <summary>Curricula</summary>
      <div class="mob-links">
        <a href="o-level-physics-home-tutors-dha-islamabad.html">O Level</a>
        <a href="a-level-physics-home-tutors-dha-islamabad.html">A Level</a>
        <a href="igcse-home-tutors-cavalry-ground-lahore.html">IGCSE</a>
        <a href="gcse-home-tutors-gulberg-lahore.html">GCSE</a>
        <a href="matric-home-tutors-cavalry-ground-lahore.html">Matric</a>
        <a href="fsc-home-tutors-cavalry-ground-lahore.html">FSc</a>
        <a href="federal-board-physics-home-tutors-dha-islamabad.html">Federal Board</a>
      </div>
    </details>

    <a href="${WA}" class="nav-wa" target="_blank" rel="noopener">Chat on WhatsApp</a>
  </nav>
</header>`;

  var waHtml = `
<a href="${WA}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp" style="font-size:1.3rem"></i>
  <span>Chat on WhatsApp</span>
</a>`;

  function injectNavStyles() {
    if (document.getElementById('pht-nav-fix')) return;
    var s = document.createElement('style');
    s.id = 'pht-nav-fix';
    s.textContent = [
      '.site-header .nav-desktop > a{font-size:0.8rem!important;font-weight:600;transition:font-weight .15s,color .15s}',
      '.site-header .nav-desktop > a:hover,.site-header .nav-desktop > a.active{background:transparent!important;font-weight:700!important;color:var(--yellow)!important}',
      '.nav-drop-btn{font-size:0.8rem!important;font-weight:600;background:transparent!important;transition:font-weight .15s,color .15s}',
      '.nav-drop-btn:hover,.nav-dropdown.open .nav-drop-btn,.nav-dropdown.active .nav-drop-btn{background:transparent!important;font-weight:700!important;color:var(--yellow)!important}',
      '.nav-caret{font-size:0.7rem;margin-left:3px;display:inline-block;transition:transform .2s}',
      '.nav-dropdown.open .nav-caret{transform:rotate(180deg)}',
      '.nav-mobile .mob-section summary{list-style:none}',
      '.nav-mobile .mob-section summary::-webkit-details-marker{display:none}',
      '.nav-mobile .mob-section summary::after{content:"\\25BE"!important;font-family:inherit!important;font-size:0.85rem!important;font-weight:400!important;opacity:0.75;margin-left:8px}',
      '.nav-mobile .mob-section[open] summary::after{content:"\\25B4"!important;transform:none!important}'
    ].join('');
    (document.head || document.documentElement).appendChild(s);
  }

  function injectFavicon() {
    if (document.querySelector('link[rel="icon"][data-pht-favicon]')) return;
    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;
    var icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/webp';
    icon.href = FAVICON;
    icon.setAttribute('data-pht-favicon', '1');
    head.appendChild(icon);
    var shortcut = document.createElement('link');
    shortcut.rel = 'shortcut icon';
    shortcut.type = 'image/webp';
    shortcut.href = FAVICON;
    shortcut.setAttribute('data-pht-favicon', '1');
    head.appendChild(shortcut);
    var apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.href = FAVICON;
    apple.setAttribute('data-pht-favicon', '1');
    head.appendChild(apple);
  }

  function pathName() {
    var p = (window.location.pathname || '').split('/').pop() || 'index.html';
    if (!p || p === '') p = 'index.html';
    return p.toLowerCase();
  }

  function setActive(root) {
    var page = pathName();
    var links = root.querySelectorAll('a[data-nav], .nav-dropdown');
    links.forEach(function (el) {
      if (el.tagName === 'A') {
        el.classList.remove('active');
        var href = (el.getAttribute('href') || '').toLowerCase();
        if (href === page) el.classList.add('active');
        else if (page === 'index.html' && el.getAttribute('data-nav') === 'home') el.classList.add('active');
      }
    });
    root.querySelectorAll('.nav-dropdown').forEach(function (dd) {
      dd.classList.remove('active');
      var nav = dd.getAttribute('data-nav');
      if (nav === 'lahore' && page.indexOf('lahore') !== -1) dd.classList.add('active');
      if (nav === 'islamabad' && (page.indexOf('islamabad') !== -1 || /g\\d|f\\d|e\\d|i\\d|pwd|soan|korang|khanna|chak|faisal|bani|emaar|margalla|park-view|capital|top-city|bahria|dha-phase|dha-islamabad/.test(page)) && page.indexOf('lahore') === -1)
        dd.classList.add('active');
      if (nav === 'subjects' && /(physics|mathematics|chemistry|biology|english|computer-science|ai-tutors|python|coding|robotics)/.test(page))
        dd.classList.add('active');
      if (nav === 'curricula' && /(o-level|a-level|igcse|gcse|matric|fsc|federal-board|primary)/.test(page))
        dd.classList.add('active');
    });
  }

  function bindDropdowns() {
    var drops = document.querySelectorAll('.nav-dropdown');
    drops.forEach(function (dd) {
      var btn = dd.querySelector('.nav-drop-btn');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = dd.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        drops.forEach(function (other) {
          if (other !== dd) {
            other.classList.remove('open');
            var ob = other.querySelector('.nav-drop-btn');
            if (ob) ob.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
    document.addEventListener('click', function () {
      drops.forEach(function (dd) {
        dd.classList.remove('open');
        var btn = dd.querySelector('.nav-drop-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function bindMenu() {
    var btn = document.getElementById('menuToggle');
    var nav = document.getElementById('mobileNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.innerHTML = open
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
        btn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      });
    });
  }

  function inject() {
    injectNavStyles();
    injectFavicon();
    document.querySelectorAll('header.site-header, header').forEach(function (el) { el.remove(); });
    document.querySelectorAll('a.whatsapp-float').forEach(function (el) { el.remove(); });

    var placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.outerHTML = headerHtml;
    } else if (document.body) {
      document.body.insertAdjacentHTML('afterbegin', headerHtml);
    }

    var header = document.querySelector('header.site-header');
    if (header) setActive(header);

    if (document.body) {
      document.body.insertAdjacentHTML('beforeend', waHtml);
    }

    bindMenu();
    bindDropdowns();
  }

  injectNavStyles();
  injectFavicon();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
