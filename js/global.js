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

    var target = new Date('2026-08-21T10:00:00+06:00').getTime();

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
