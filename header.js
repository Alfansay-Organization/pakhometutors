/* Shared Header + WhatsApp float + favicon – edit this file only to update every page */
(function () {
  var WA = 'https://wa.me/923119696807?text=Hello%20Pak%20Home%20Tutors%2C%20I%20need%20a%20tutor';
  var FAVICON = 'images/logo.webp';

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
      <a href="home-tutors-g9-islamabad.html" data-nav="islamabad">Islamabad</a>
      <a href="dha-lahore.html" data-nav="lahore">Lahore</a>
      <a href="home-tutors-dha-islamabad.html" data-nav="dha">DHA Islamabad</a>
      <a href="${WA}" class="nav-wa" target="_blank" rel="noopener">WhatsApp</a>
    </nav>
    <button type="button" class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
      <i class="fas fa-bars" aria-hidden="true"></i>
    </button>
  </div>
  <nav class="nav-mobile" id="mobileNav" aria-label="Mobile menu">
    <a href="index.html" data-nav="home">Home</a>
    <a href="home-tutors-g9-islamabad.html" data-nav="islamabad">Islamabad Tutors</a>
    <a href="dha-lahore.html" data-nav="lahore">Lahore Tutors</a>
    <a href="home-tutors-dha-islamabad.html" data-nav="dha">DHA Islamabad</a>
    <a href="online-tutors-bahria-town-islamabad.html" data-nav="bahria">Bahria Town</a>
    <a href="${WA}" class="nav-wa" target="_blank" rel="noopener">Chat on WhatsApp</a>
  </nav>
</header>`;

  var waHtml = `
<a href="${WA}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp" style="font-size:1.3rem"></i>
  <span>Chat on WhatsApp</span>
</a>`;

  function injectFavicon() {
    if (document.querySelector('link[rel="icon"][data-pht-favicon]')) return;
    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    // Remove generic default icons if any, keep ours as primary
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
    var links = root.querySelectorAll('a[data-nav]');
    links.forEach(function (a) {
      a.classList.remove('active');
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (href === page) a.classList.add('active');
      else if (page === 'index.html' && a.getAttribute('data-nav') === 'home') a.classList.add('active');
      else if (page.indexOf('lahore') !== -1 && a.getAttribute('data-nav') === 'lahore') a.classList.add('active');
      else if ((page.indexOf('dha') !== -1 || page.indexOf('islamabad') !== -1) && page.indexOf('lahore') === -1) {
        if (a.getAttribute('data-nav') === 'islamabad' && page.indexOf('dha') === -1 && page.indexOf('bahria') === -1) {
          if (/g\d|f\d|e\d|i\d|pwd|soan|korang|khanna|chak|faisal|gulberg|bani|emaar|margalla|park-view|capital|top-city/.test(page))
            a.classList.add('active');
        }
        if (a.getAttribute('data-nav') === 'dha' && page.indexOf('dha') !== -1) a.classList.add('active');
      }
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
    injectFavicon();

    // Remove existing headers (shared or legacy)
    document.querySelectorAll('header.site-header, header').forEach(function (el) {
      el.remove();
    });
    // Remove existing WhatsApp floats to avoid duplicates
    document.querySelectorAll('a.whatsapp-float').forEach(function (el) {
      el.remove();
    });

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
  }

  // Favicon can run immediately (head is available)
  injectFavicon();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
