The top of every page: the logo disc on the left, Shop online · Find us · Contact us, and the basket with its count. White (`surface-raised`) with a `line` under it, so the black disc sits on it like the sign on the panel.

```html
<header class="vwg-header">
  <div class="vwg-container vwg-header-inner">
    <a class="vwg-logo" href="/" aria-label="Vintage Warehouse Glasgow, home">
      <img class="vwg-logo-light" src="/images/logo-black.png" alt="" width="56" height="56">
      <img class="vwg-logo-dark" src="/images/logo-white.png" alt="" width="56" height="56">
    </a>
    <nav class="vwg-nav" aria-label="Main">
      <a href="/shop" aria-current="page">Shop online</a>
      <a href="/find-us">Find us</a>
      <a href="/contact">Contact us</a>
    </nav>
    <button class="vwg-menu-btn" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <a class="vwg-basket" href="/basket">Basket <span class="vwg-basket-count">2</span></a>
  </div>
</header>
```

- Three links, in this order; the current page gets `aria-current="page"` and a brick underline.
- Both logo files go in the markup; the stylesheet shows the black disc on light and the white disc on dark.
- Under 760px the nav hides and the Menu button shows; the menu opens as a `surface-raised` panel with `shadow-drawer`.
- The basket count is `ink` on `surface`, a pill; hide it when the basket is empty.
