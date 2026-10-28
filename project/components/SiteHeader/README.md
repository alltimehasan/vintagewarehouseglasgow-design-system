The top of every page: the logo disc on the left, Shop online · Find us · Contact us, and the basket with its count. White (`surface-raised`) with a `line` under it, so the black disc sits on it like the sign on the panel. Under 760px the three links fold into a panel that the Menu button opens.

```html
<a class="vwg-skip" href="#main">Skip to content</a>
<header class="vwg-header">
  <div class="vwg-container vwg-header-inner">
    <a class="vwg-logo" href="/" aria-label="Vintage Warehouse Glasgow, home">
      <img class="vwg-logo-light" src="/images/logo-black.png" alt="" width="56" height="56">
      <img class="vwg-logo-dark" src="/images/logo-white.png" alt="" width="56" height="56">
    </a>
    <nav class="vwg-nav" id="menu" aria-label="Main">
      <a href="/shop" aria-current="page">Shop online</a>
      <a href="/find-us">Find us</a>
      <a href="/contact">Contact us</a>
    </nav>
    <button class="vwg-menu-btn" type="button" aria-expanded="false" aria-controls="menu">
      <svg class="vwg-menu-icon-open" …>…</svg>
      <svg class="vwg-menu-icon-close" …>…</svg>
      Menu
    </button>
    <a class="vwg-basket" href="/basket">Basket <span class="vwg-basket-count">2</span></a>
  </div>
</header>
<main id="main">…</main>
<script>VWG.menu(document.querySelector('.vwg-header'));</script>
```

- Three links, in this order; the current page gets `aria-current="page"` and a brick underline.
- Both logo files go in the markup; the stylesheet shows the black disc on light and the white disc on dark.
- The phone menu: under 760px the nav hides and the Menu button shows. `VWG.menu(header)` toggles `data-menu-open` on the header and `aria-expanded` on the button, and the same `nav#menu` drops under the header as a full-width `surface-raised` panel with `shadow-drawer`: the links stacked at 48px, the current one marked with a brick bar. Escape closes it and returns focus to the button; a click outside closes it; so does widening the window past 760px. The icon swaps from menu to close while it is open. Nothing else in `dist/vwg.js` is needed for the header.
- The skip link is the first thing in `body` and appears on keyboard focus, over the header; `main` carries `id="main"`.
- The icons are inline SVG at 24px with a 1.75 stroke in `currentColor`: menu, close and basket are drawn here; copy them.
- The basket count is `ink` on `surface`, a pill; hide it when the basket is empty.
