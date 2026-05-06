(function () {
  var nav = document.querySelector('.nav');
  var mobileToggle = document.querySelector('.nav__mobile-toggle');
  var navLinks = document.querySelector('.nav__links');
  var navScrim = document.querySelector('.nav__scrim');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  var menuOpen = false;
  var lastFocusedElement = null;
  var focusableSelectors = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function setMenuState(isOpen) {
    if (!mobileToggle || !navLinks) return;

    menuOpen = isOpen;

    if (isOpen) {
      lastFocusedElement = document.activeElement;
      navLinks.classList.add('open');
      mobileToggle.classList.add('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.add('nav-open');
      if (navScrim) {
        navScrim.hidden = false;
      }
      var firstFocusable = navLinks.querySelector(focusableSelectors);
      if (firstFocusable) {
        setTimeout(function () { firstFocusable.focus(); }, 100);
      }
    } else {
      navLinks.classList.remove('open');
      mobileToggle.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.remove('nav-open');
      if (navScrim) {
        navScrim.hidden = true;
      }
      if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
      }
    }
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      setMenuState(!menuOpen);
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
      if (event.key === 'Escape' && menuOpen) {
        setMenuState(false);
        return;
      }
      if (event.key === 'Tab' && menuOpen) {
        var focusableItems = Array.from(navLinks.querySelectorAll(focusableSelectors));
        if (focusableItems.length === 0) return;
        var first = focusableItems[0];
        var last = focusableItems[focusableItems.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  var navLinkEls = document.querySelectorAll('.nav__link');
  if (navLinkEls.length) {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinkEls.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkPage = href.split('#')[0].split('?')[0];
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
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
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initCountdown() {
    var countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    var target = new Date('2026-09-04T10:00:00+06:00').getTime();

    function update() {
      var now = new Date().getTime();
      var diff = target - now;

      if (diff <= 0) {
        countdownEl.innerHTML = '<div class="countdown__launched">Event is Live!</div>';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((diff % (1000 * 60)) / 1000);

      var units = [
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: mins, label: 'Minutes' },
        { value: secs, label: 'Seconds' }
      ];

      countdownEl.innerHTML = units.map(function (u) {
        return '<div class="countdown__unit">' +
          '<span class="countdown__number">' + String(u.value).padStart(2, '0') + '</span>' +
          '<span class="countdown__label">' + u.label + '</span>' +
          '</div>';
      }).join('<div class="countdown__sep">:</div>');

      setTimeout(update, 1000);
    }

    update();
  }

  initCountdown();
})();
