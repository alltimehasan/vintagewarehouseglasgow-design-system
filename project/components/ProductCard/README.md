A bag for sale: photo with its Vintage or New badge, name, weight and piece count, the price with "UK delivery only" under it, and Add to basket. The shop has about six of these, in a `vwg-grid`.

```html
<article class="vwg-card">
  <a class="vwg-card-media" href="/shop/mixed-vintage-bag">
    <img src="/images/mixed-vintage-bag.jpg" alt="Mixed vintage bag, about 20 kg">
    <span class="vwg-badge vwg-badge-vintage vwg-card-badge">Vintage</span>
  </a>
  <div class="vwg-card-body">
    <h3 class="vwg-card-title"><a href="/shop/mixed-vintage-bag">Mixed vintage bag</a></h3>
    <p class="vwg-card-meta">Approx. 20 kg · 60–80 pieces · mixed sizes</p>
    <div class="vwg-card-foot">
      <p class="vwg-price">£60.00 <small>UK delivery only</small></p>
      <button class="vwg-btn vwg-btn-primary vwg-btn-sm" type="button">Add to basket</button>
    </div>
  </div>
</article>
```

- The photo is 4:5 and shows the whole bag. Until product photos arrive, the bales photo stands in.
- Sold out: add `vwg-card-sold` to the article, swap the badge to `vwg-badge-sold` and disable the button with the label "Sold out". Never hide a sold-out bag; people come back for it.
- The name is sentence case (`h3`); the price is the `price` style with tabular numerals.
- From JavaScript: `VWG.ProductCard({ name, image, kind: 'vintage' | 'new', meta, pricePence, soldOut, onAdd })`.
- Prices in the preview are examples; the real list comes from the client.
