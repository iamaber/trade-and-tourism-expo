(function () {
  const nav = document.querySelector('.nav');
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const navLinks = document.querySelector('.nav__links');
  const navScrim = document.querySelector('.nav__scrim');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  function setMenuState(isOpen) {
    if (!mobileToggle || !navLinks) return;

    navLinks.classList.toggle('open', isOpen);
    mobileToggle.classList.toggle('is-open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);

    if (navScrim) {
      navScrim.hidden = !isOpen;
    }
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      setMenuState(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    if (navScrim) {
      navScrim.addEventListener('click', function () {
        setMenuState(false);
      });
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });
  }

  var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('revealed');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
