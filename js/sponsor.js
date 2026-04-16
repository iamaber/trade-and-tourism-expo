(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setCountersFinal() {
    document.querySelectorAll('.sp-stat__number').forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10);
      counter.textContent = target >= 1000 ? target.toLocaleString() : target;
    });
  }

  function animateCounters() {
    var counters = document.querySelectorAll('.sp-stat__number');
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'));
      var duration = 2000;
      var start = 0;
      var startTime = null;

      function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
      }

      function update(currentTime) {
        if (!startTime) startTime = currentTime;
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var easedProgress = easeOutQuart(progress);
        var current = Math.floor(easedProgress * target);

        if (target >= 1000) {
          counter.textContent = current.toLocaleString();
        } else {
          counter.textContent = current;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  function animateBars() {
    document.querySelectorAll('.sp-stat__bar-fill').forEach(function (bar) {
      var targetWidth = bar.getAttribute('data-width');
      bar.style.setProperty('--target-width', targetWidth + '%');
      bar.classList.add('animated');
    });

    document.querySelectorAll('.sp-tier__bar-fill').forEach(function (bar) {
      setTimeout(function () {
        bar.classList.add('animated');
      }, 300);
    });

    document.querySelectorAll('.sp-vis-item__progress-fill').forEach(function (bar) {
      var targetWidth = bar.getAttribute('data-width');
      bar.style.setProperty('--target-width', targetWidth + '%');
      bar.classList.add('animated');
    });
  }

  var statsSection = document.querySelector('.sp-stats');
  if (statsSection) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setCountersFinal();
      animateBars();
    } else {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
            setTimeout(animateBars, 500);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      statsObserver.observe(statsSection);
    }
  }

  var tiersSection = document.querySelector('.sp-tiers');
  if (tiersSection) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.sp-tier__bar-fill').forEach(function (bar) {
        bar.classList.add('animated');
      });
    } else {
      var tiersObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            document.querySelectorAll('.sp-tier__bar-fill').forEach(function (bar, i) {
              setTimeout(function () {
                bar.classList.add('animated');
              }, i * 200);
            });
            tiersObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      tiersObserver.observe(tiersSection);
    }
  }
})();
