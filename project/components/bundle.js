/* @ds-bundle: {"format":4,"namespace":"VWG","components":[{"name":"Button"},{"name":"Badge"},{"name":"Stamp"},{"name":"ProductCard"},{"name":"SectionHeading"},{"name":"Field"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"Strip"},{"name":"OpeningHours"},{"name":"SiteFooter"},{"name":"Invoice"}]} */
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

  // "£60.00" from pence. Prices are always shown with pence.
  function formatPrice(pence) {
    return '£' + (Number(pence) / 100).toFixed(2);
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
          h('p', { class: 'vwg-price' }, [h('span', { class: 'vwg-tag', text: formatPrice(p.pricePence) }), h('small', { text: p.priceNote || 'UK delivery only' })]),
          Button({ label: soldOut ? 'Sold out' : 'Add to basket', size: 'sm', disabled: soldOut, onClick: p.onAdd })
        ])
      ])
    ]);
  }

  var ns = window.VWG = window.VWG || {};
  ns.Button = Button;
  ns.Badge = Badge;
  ns.Stamp = Stamp;
  ns.ProductCard = ProductCard;
  ns.SectionHeading = SectionHeading;
  ns.Field = Field;
  ns.formatPrice = formatPrice;
  ns.invoiceNumber = invoiceNumber;
})();
