(function () {
  var designs = [
    { num: 1, name: 'Elegant Navy', desc: 'Navy / Gold / Teal', url: 'index.html' },
    { num: 2, name: 'Bold Brutalist', desc: 'Black / Yellow / Red', url: 'v2.html' },
    { num: 3, name: 'Editorial Luxury', desc: 'Forest / Terracotta / Sand', url: 'v3.html' }
  ];

  var currentPath = window.location.pathname;
  var activeDesign = 1;
  if (currentPath.indexOf('v2') !== -1) activeDesign = 2;
  if (currentPath.indexOf('v3') !== -1) activeDesign = 3;

  var widget = document.createElement('div');
  widget.className = 'design-toggle';
  widget.id = 'designToggle';

  var toggleBtn = document.createElement('button');
  toggleBtn.className = 'design-toggle__toggle-btn';
  toggleBtn.innerHTML = '&#9776;';
  toggleBtn.setAttribute('aria-label', 'Toggle design switcher');

  var panel = document.createElement('div');
  panel.className = 'design-toggle__panel';
  panel.id = 'designTogglePanel';

  var title = document.createElement('div');
  title.className = 'design-toggle__panel-title';
  title.textContent = 'Switch Design';
  panel.appendChild(title);

  var optionsContainer = document.createElement('div');
  optionsContainer.className = 'design-toggle__options';

  designs.forEach(function (d) {
    var opt = document.createElement('a');
    opt.href = d.url;
    opt.className = 'design-toggle__option';
    if (d.num === activeDesign) opt.classList.add('active');

    opt.innerHTML =
      '<span class="design-toggle__option-num">' + d.num + '</span>' +
      '<span class="design-toggle__option-info">' +
        '<span class="design-toggle__option-name">' + d.name + '</span>' +
        '<span class="design-toggle__option-desc">' + d.desc + '</span>' +
      '</span>';

    optionsContainer.appendChild(opt);
  });

  panel.appendChild(optionsContainer);
  widget.appendChild(panel);
  widget.appendChild(toggleBtn);
  document.body.appendChild(widget);

  var isOpen = false;

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    toggleBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  document.addEventListener('click', function (e) {
    if (isOpen && !widget.contains(e.target)) {
      isOpen = false;
      panel.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      isOpen = false;
      panel.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
    }
  });
})();
