A bag for sale: photo with its Vintage or New stamp, name, weight and piece count, the price on a swing tag with the delivery line under it, and Add to basket. The shop has about six of these, in a `vwg-grid`.

```html
<article class="vwg-card">
  <a class="vwg-card-media" href="/shop/mixed-vintage-bag">
    <img src="/images/mixed-vintage-bag.jpg" alt="Mixed vintage bag, about 20 kg">
    <span class="vwg-stamp vwg-card-stamp">Vintage</span>
  </a>
  <div class="vwg-card-body">
    <h3 class="vwg-card-title"><a href="/shop/mixed-vintage-bag">Mixed vintage bag</a></h3>
    <p class="vwg-card-meta">Approx. 20 kg · 60–80 pieces · mixed sizes</p>
    <div class="vwg-card-foot">
      <p class="vwg-price"><span class="vwg-tag">£60.00</span> <small>+ £12.00 UK delivery</small></p>
      <button class="vwg-btn vwg-btn-primary vwg-btn-sm" type="button">Add to basket</button>
    </div>
  </div>
</article>
```

- The photo is 4:5 and shows the whole bag, in its true colours: never `vwg-photo-aged` here. Until product photos arrive, the bales photo stands in.
- The stamp on the photo is `Stamp`: brick for Vintage, `vwg-stamp-new` for New. The pill `Badge` is for tables and lists, not photos.
- Sold out: add `vwg-card-sold` to the article, keep the Vintage or New stamp, add the big `vwg-stamp-sold vwg-stamp-lg vwg-card-stamp-lg` across the photo and disable the button with the label "Sold out". Never hide a sold-out bag; people come back for it.
- The name is sentence case (`h3`); the price sits on the `vwg-tag` swing tag with tabular numerals, and the delivery line under it: "+ £12.00 UK delivery" once the client confirms the charge, "Free UK delivery" if it is nil, "UK delivery only" until then. `VWG.deliveryLine(pence)` writes it; the card takes it as `deliveryPence`.
- From JavaScript: `VWG.ProductCard({ name, image, kind: 'vintage' | 'new', meta, pricePence, deliveryPence, soldOut, onAdd })`.
- The bag on its own page is `ProductPage`; the same photo, stamp, meta line and tag, with the description and the quantity.
