(function () {
  var boothsSection = document.querySelector('.ex-booths');
  if (boothsSection) {
    var boothsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          document.querySelectorAll('.ex-booth__bar-fill').forEach(function (bar, i) {
            var targetWidth = bar.getAttribute('data-width');
            bar.style.setProperty('--target-width', targetWidth + '%');
            setTimeout(function () {
              bar.classList.add('animated');
            }, i * 300);
          });
          boothsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    boothsObserver.observe(boothsSection);
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
