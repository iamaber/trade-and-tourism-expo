(function () {
  var designs = [
    { num: 1, url: 'index.html' },
    { num: 2, url: 'v2.html' },
    { num: 3, url: 'v3.html' },
    { num: 4, url: 'v4.html' },
    { num: 5, url: 'v5.html' },
    { num: 6, url: 'v6.html' }
  ];

  var currentPath = window.location.pathname;
  var activeDesign = 1;
  if (currentPath.indexOf('v2') !== -1) activeDesign = 2;
  if (currentPath.indexOf('v3') !== -1) activeDesign = 3;
  if (currentPath.indexOf('v4') !== -1) activeDesign = 4;
  if (currentPath.indexOf('v5') !== -1) activeDesign = 5;
  if (currentPath.indexOf('v6') !== -1) activeDesign = 6;

  var widget = document.createElement('div');
  widget.className = 'design-toggle';

  designs.forEach(function (d) {
    var btn = document.createElement('a');
    btn.href = d.url;
    btn.className = 'design-toggle__btn';
    btn.textContent = d.num;
    if (d.num === activeDesign) btn.classList.add('active');
    widget.appendChild(btn);
  });

  document.body.appendChild(widget);
})();
