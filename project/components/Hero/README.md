The homepage opens on the façade: the photo under the flat `overlay`, a script line, the name in the `hero` style, one sentence, and two buttons. The text sits at the bottom left, on the ground, like the sign on the panel.

```html
<section class="vwg-hero">
  <img class="vwg-hero-media vwg-photo-aged" src="/images/warehouse-exterior.jpg" alt="">
  <div class="vwg-hero-overlay" aria-hidden="true"></div>
  <div class="vwg-container vwg-hero-inner">
    <span class="vwg-script" aria-hidden="true">outlets, new &amp; secondhand</span>
    <h1>Vintage Warehouse Glasgow</h1>
    <p>Vintage and new clothing sold by the bag. Order online for UK delivery, or come in and pick and choose.</p>
    <div class="vwg-hero-actions">
      <a class="vwg-btn vwg-btn-inverse" href="/shop">Shop online</a>
      <a class="vwg-btn vwg-btn-ghost" href="/find-us">Find us</a>
    </div>
  </div>
</section>
```

- The photo is decorative (`alt=""`); the headline is the page's `h1`.
- `vwg-photo-aged` warms the façade a little. The `Strip` runs directly under the hero on the homepage.
- Keep the overlay flat and at full strength: the text must read on any photo in both themes.
- Buttons on the hero are `inverse` and `ghost`, never primary.
- Under 600px the type steps down to 40px and the top padding to `space-16`.
