/* @ds-bundle: {"format":4,"namespace":"VWG","components":[{"name":"Button"},{"name":"Badge"},{"name":"Stamp"},{"name":"Notice"},{"name":"ProductCard"},{"name":"ProductPage"},{"name":"Basket"},{"name":"Pagination"},{"name":"SectionHeading"},{"name":"Prose"},{"name":"Field"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"Strip"},{"name":"OpeningHours"},{"name":"Map"},{"name":"SiteFooter"},{"name":"Result"},{"name":"Invoice"}]} */
(function () {
  'use strict';

  // Tiny element helper: h('a', { class: 'x', href: '#', text: 'Shop' }, [children])
  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }

  // The close icon, drawn as the header draws its icons: 24px, a 1.75 stroke, currentColor.
  var CLOSE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  // "£60.00" from pence. Prices are always shown with pence.
  function formatPrice(pence) {
    return '£' + (Number(pence) / 100).toFixed(2);
  }

  // The delivery line beside a price: "+ £12.00 UK delivery", "Free UK delivery" for nil, "UK delivery only" until the charge is known.
  function deliveryLine(pence) {
    if (pence == null || pence === '' || isNaN(Number(pence))) return 'UK delivery only';
    return Number(pence) > 0 ? '+ ' + formatPrice(pence) + ' UK delivery' : 'Free UK delivery';
  }

  // "0001" — the sequential invoice number, four digits, never reused.
  function invoiceNumber(n) {
    return String(Math.max(0, Math.floor(Number(n)))).padStart(4, '0');
  }

  function Button(p) {
    p = p || {};
    var cls = ['vwg-btn', 'vwg-btn-' + (p.variant || 'primary'), p.size === 'sm' ? 'vwg-btn-sm' : null, p.block ? 'vwg-btn-block' : null, p.className]
      .filter(Boolean).join(' ');
    if (p.href) {
      return h('a', { class: cls, href: p.href, 'aria-disabled': p.disabled ? 'true' : null, text: p.label });
    }
    return h('button', { class: cls, type: p.type || 'button', disabled: !!p.disabled, onClick: p.onClick, text: p.label });
  }

  function Badge(p) {
    p = p || {};
    var tone = p.tone && p.tone !== 'neutral' ? ' vwg-badge-' + p.tone : '';
    return h('span', { class: 'vwg-badge' + tone + (p.className ? ' ' + p.className : ''), text: p.label });
  }

  // A rubber-stamp label. Brick by default; tones new, stock (Paid) and sold (Sold out); size 'lg' for a stamp across a photo.
  function Stamp(p) {
    p = p || {};
    var cls = ['vwg-stamp', p.tone && p.tone !== 'vintage' ? 'vwg-stamp-' + p.tone : null, p.size === 'lg' ? 'vwg-stamp-lg' : null, p.className]
      .filter(Boolean).join(' ');
    return h('span', { class: cls, text: p.label });
  }

  // A notice: one sentence beside its colour. Tones stock (done, paid), danger (an error, announced as an alert), info (a fact); none for plain news.
  function Notice(p) {
    p = p || {};
    var tone = p.tone && p.tone !== 'neutral' ? ' vwg-notice-' + p.tone : '';
    var el = h('div', { class: 'vwg-notice' + tone + (p.className ? ' ' + p.className : ''), role: p.role || (p.tone === 'danger' ? 'alert' : 'status') }, [
      h('p', null, [p.text, p.link ? ' ' : null, p.link ? h('a', { href: p.link.href, text: p.link.label }) : null])
    ]);
    if (p.dismissible) {
      var btn = h('button', { class: 'vwg-notice-close', type: 'button', 'aria-label': 'Dismiss', onClick: function () { el.remove(); } });
      btn.innerHTML = CLOSE_ICON;
      el.appendChild(btn);
    }
    return el;
  }

  function SectionHeading(p) {
    p = p || {};
    return h('div', { class: 'vwg-section-heading' }, [
      p.lead ? h('span', { class: 'vwg-script', 'aria-hidden': 'true', text: p.lead }) : null,
      h('h2', { id: p.id, text: p.title }),
      h('div', { class: 'vwg-rule', 'aria-hidden': 'true' }),
      p.intro ? h('p', { text: p.intro }) : null
    ]);
  }

  function Field(p) {
    p = p || {};
    var hintId = p.id + '-hint';
    var control = p.multiline
      ? h('textarea', { class: 'vwg-input', id: p.id, name: p.name || p.id, placeholder: p.placeholder, required: !!p.required, 'aria-describedby': (p.hint || p.error) ? hintId : null, 'aria-invalid': p.error ? 'true' : null })
      : h('input', { class: 'vwg-input', id: p.id, name: p.name || p.id, type: p.type || 'text', placeholder: p.placeholder, required: !!p.required, autocomplete: p.autocomplete, 'aria-describedby': (p.hint || p.error) ? hintId : null, 'aria-invalid': p.error ? 'true' : null });
    if (p.value != null) control.value = p.value;
    return h('div', { class: 'vwg-field' + (p.error ? ' vwg-field-error' : '') }, [
      h('label', { for: p.id, text: p.label }),
      control,
      (p.error || p.hint) ? h('p', { class: 'vwg-field-hint', id: hintId, text: p.error || p.hint }) : null
    ]);
  }

  function ProductCard(p) {
    p = p || {};
    var soldOut = !!p.soldOut;
    var kind = p.kind === 'new' ? 'new' : 'vintage';
    var note = p.priceNote || (p.deliveryPence !== undefined ? deliveryLine(p.deliveryPence) : 'UK delivery only');
    return h('article', { class: 'vwg-card' + (soldOut ? ' vwg-card-sold' : '') }, [
      h('a', { class: 'vwg-card-media', href: p.href || '#' }, [
        h('img', { src: p.image, alt: p.alt || p.name, loading: 'lazy' }),
        Stamp({ tone: kind, label: kind === 'new' ? 'New' : 'Vintage', className: 'vwg-card-stamp' }),
        soldOut ? Stamp({ tone: 'sold', label: 'Sold out', size: 'lg', className: 'vwg-card-stamp-lg' }) : null
      ]),
      h('div', { class: 'vwg-card-body' }, [
        h('h3', { class: 'vwg-card-title' }, [h('a', { href: p.href || '#', text: p.name })]),
        p.meta ? h('p', { class: 'vwg-card-meta', text: p.meta }) : null,
        h('div', { class: 'vwg-card-foot' }, [
          h('p', { class: 'vwg-price' }, [h('span', { class: 'vwg-tag', text: formatPrice(p.pricePence) }), h('small', { text: note })]),
          Button({ label: soldOut ? 'Sold out' : 'Add to basket', size: 'sm', disabled: soldOut, onClick: p.onAdd })
        ])
      ])
    ]);
  }

  /* ---- Behaviour for the markup patterns. Each takes the element the pattern's README shows and wires it once. ---- */

  // The phone menu on a .vwg-header: the Menu button opens nav#menu as a panel under the header (CSS: .vwg-header[data-menu-open]).
  // A click toggles it; Escape closes it and returns focus to the button; a click outside closes it; so does widening past 760px.
  function menu(header) {
    header = header || document.querySelector('.vwg-header');
    var btn = header && header.querySelector('.vwg-menu-btn');
    var nav = btn && document.getElementById(btn.getAttribute('aria-controls') || 'menu');
    if (!btn || !nav) return null;
    function isOpen() { return header.hasAttribute('data-menu-open'); }
    function set(open) {
      if (open) header.setAttribute('data-menu-open', ''); else header.removeAttribute('data-menu-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function () { set(!isOpen()); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { set(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (isOpen() && !header.contains(e.target)) set(false);
    });
    var wide = window.matchMedia('(min-width: 760px)');
    var onWide = function (m) { if (m.matches && isOpen()) set(false); };
    if (wide.addEventListener) wide.addEventListener('change', onWide); else wide.addListener(onWide);
    set(isOpen());
    return { open: function () { set(true); }, close: function () { set(false); }, toggle: function () { set(!isOpen()); }, isOpen: isOpen };
  }

  // A quantity stepper (.vwg-qty): the buttons step the input within its min and max and fire change; a typed number is clamped on change.
  function qty(el) {
    var input = el && el.querySelector('input');
    var buttons = el ? el.querySelectorAll('button') : [];
    if (!input || buttons.length < 2) return;
    var down = buttons[0], up = buttons[buttons.length - 1];
    function bound(attr, fallback) { var v = input.getAttribute(attr); return v === null || v === '' ? fallback : Number(v); }
    function set(n, fire) {
      var min = bound('min', 1), max = bound('max', Infinity);
      var v = Math.min(max, Math.max(min, isNaN(n) ? min : Math.round(n)));
      input.value = String(v);
      down.disabled = v <= min;
      up.disabled = v >= max;
      if (fire) input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    down.addEventListener('click', function () { set(Number(input.value) - 1, true); });
    up.addEventListener('click', function () { set(Number(input.value) + 1, true); });
    input.addEventListener('change', function () { set(Number(input.value), false); });
    set(Number(input.value), false);
  }

  // The product gallery (.vwg-product): a thumbnail click swaps the main photo; without JavaScript the thumbnails are links to the photos.
  function gallery(el) {
    var main = el && el.querySelector('.vwg-product-media img');
    var thumbs = el ? el.querySelectorAll('.vwg-product-thumb') : [];
    if (!main || !thumbs.length) return;
    Array.prototype.forEach.call(thumbs, function (thumb) {
      thumb.addEventListener('click', function (e) {
        e.preventDefault();
        var img = thumb.querySelector('img');
        var src = thumb.getAttribute('href') || thumb.getAttribute('data-src');
        if (src) { main.removeAttribute('srcset'); main.src = src; }
        if (img && img.alt) main.alt = img.alt;
        Array.prototype.forEach.call(thumbs, function (t) {
          if (t === thumb) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
        });
      });
    });
  }

  // The click-to-load map (.vwg-map): nothing is requested from Google until Load map is pressed; then the iframe replaces the placeholder.
  function map(el) {
    var btn = el && el.querySelector('[data-map-load]');
    var src = el && el.getAttribute('data-map-src');
    if (!btn || !src) return;
    btn.addEventListener('click', function () {
      var frame = h('iframe', { src: src, title: el.getAttribute('data-map-title') || 'Map', loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade', allowfullscreen: true });
      var box = el.querySelector('.vwg-map-placeholder');
      if (box) el.replaceChild(frame, box); else el.appendChild(frame);
      frame.focus();
    });
  }

  // Notice close buttons: one listener on root (default: the document) removes the notice a close button belongs to.
  function notices(root) {
    (root || document).addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('.vwg-notice-close') : null;
      var box = btn && btn.closest('.vwg-notice');
      if (box) box.remove();
    });
  }

  var ns = window.VWG = window.VWG || {};
  ns.Button = Button;
  ns.Badge = Badge;
  ns.Stamp = Stamp;
  ns.Notice = Notice;
  ns.ProductCard = ProductCard;
  ns.SectionHeading = SectionHeading;
  ns.Field = Field;
  ns.formatPrice = formatPrice;
  ns.deliveryLine = deliveryLine;
  ns.invoiceNumber = invoiceNumber;
  ns.menu = menu;
  ns.qty = qty;
  ns.gallery = gallery;
  ns.map = map;
  ns.notices = notices;
})();
