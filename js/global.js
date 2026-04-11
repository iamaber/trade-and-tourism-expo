(function () {
  const nav = document.querySelector('.nav');
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const navLinks = document.querySelector('.nav__links');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const spans = mobileToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      if (mobileToggle) {
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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

      requestAnimationFrame(function () {
        setTimeout(update, 1000);
      });
    }

    update();
  }

  initCountdown();
})();
