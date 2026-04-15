(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealBoothBars() {
    document.querySelectorAll('.ex-booth__bar-fill').forEach(function (bar, i) {
      var targetWidth = bar.getAttribute('data-width');
      bar.style.setProperty('--target-width', targetWidth + '%');
      if (reduceMotion) {
        bar.classList.add('animated');
      } else {
        setTimeout(function () {
          bar.classList.add('animated');
        }, i * 300);
      }
    });
  }

  var boothsSection = document.querySelector('.ex-booths');
  if (boothsSection) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealBoothBars();
    } else {
      var boothsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealBoothBars();
            boothsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      boothsObserver.observe(boothsSection);
    }
  }

  var zoneBands = document.querySelectorAll('.ex-zone-band');
  zoneBands.forEach(function (band) {
    band.addEventListener('mouseenter', function () {
      band.style.transform = 'scale(1.01)';
      band.style.transformOrigin = 'center';
    });
    band.addEventListener('mouseleave', function () {
      band.style.transform = 'scale(1)';
    });
  });
})();
