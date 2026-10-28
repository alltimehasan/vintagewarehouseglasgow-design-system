/* Theme switch and preview frames for the style guide. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  var KEY = 'vwg-theme';

  function stored() { try { return localStorage.getItem(KEY) || 'system'; } catch (e) { return 'system'; } }
  function current() { return root.getAttribute('data-theme') || 'system'; }
  function frames() { return Array.prototype.slice.call(document.querySelectorAll('.sg-preview iframe')); }

  function send(frame) {
    var c = current();
    try { frame.contentWindow.postMessage({ type: 'vwg-theme', theme: c === 'system' ? '' : c }, '*'); } catch (e) { /* not loaded yet */ }
  }

  function apply(choice) {
    if (choice === 'light' || choice === 'dark') root.setAttribute('data-theme', choice);
    else root.removeAttribute('data-theme');
    try { if (choice === 'system') localStorage.removeItem(KEY); else localStorage.setItem(KEY, choice); } catch (e) { /* private window */ }
    document.querySelectorAll('[data-theme-choice]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-choice') === choice));
    });
    document.querySelectorAll('a.sg-open').forEach(function (a) {
      var parts = a.getAttribute('href').split('?');
      var params = (parts[1] || '').split('&').filter(function (p) { return p && p.indexOf('theme=') !== 0; });
      if (choice !== 'system') params.push('theme=' + choice);
      a.setAttribute('href', parts[0] + (params.length ? '?' + params.join('&') : ''));
    });
    frames().forEach(send);
  }

  /* Previews are laid out at a fixed width and scaled down to fit the column; their height follows the content. */
  function fit(box) {
    var frame = box.querySelector('iframe');
    if (!frame) return;
    var w = parseInt(box.getAttribute('data-width'), 10) || frame.clientWidth || 960;
    var base = parseInt(box.getAttribute('data-height'), 10) || 0;
    var content = parseInt(box.getAttribute('data-content-height'), 10) || 0;
    var h = Math.max(base, content);
    var scale = Math.min(1, box.clientWidth / w);
    frame.style.width = w + 'px';
    frame.style.height = h + 'px';
    frame.style.transform = 'scale(' + scale + ')';
    box.style.height = Math.round(h * scale) + 'px';
  }
  function fitAll() { document.querySelectorAll('.sg-preview[data-width]').forEach(fit); }

  addEventListener('message', function (e) {
    var m = e.data;
    if (!m || typeof m !== 'object') return;
    var frame = frames().filter(function (f) { return f.contentWindow === e.source; })[0];
    if (!frame) return;
    if (m.type === 'vwg-ready') send(frame);
    if (m.type === 'vwg-size' && m.height > 0) {
      var box = frame.parentNode;
      box.setAttribute('data-content-height', String(Math.ceil(m.height)));
      fit(box);
    }
  });

  document.querySelectorAll('[data-theme-choice]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-theme-choice')); });
  });
  frames().forEach(function (f) { f.addEventListener('load', function () { send(f); }); });
  addEventListener('resize', fitAll);

  apply(stored());
  fitAll();
})();
