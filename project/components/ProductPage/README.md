One bag in full: the photo with a thumbnail row on the left; on the right the stamp, the name, the meta line, the price on its tag with the delivery line, the stock badge, the description and Add to basket.

```html
<div class="vwg-product">
  <div class="vwg-product-gallery">
    <div class="vwg-product-media">
      <img src="/images/mixed-vintage-bag.jpg" alt="Mixed vintage bag, about 20 kg" width="1080" height="1350">
    </div>
    <div class="vwg-product-thumbs">
      <a class="vwg-product-thumb" href="/images/mixed-vintage-bag.jpg" aria-current="true"><img src="/images/mixed-vintage-bag-thumb.jpg" alt="Mixed vintage bag, about 20 kg"></a>
      <a class="vwg-product-thumb" href="/images/mixed-vintage-bag-2.jpg"><img src="/images/mixed-vintage-bag-2-thumb.jpg" alt="The bag opened to show the pieces"></a>
    </div>
  </div>
  <div class="vwg-product-details">
    <span class="vwg-stamp">Vintage</span>
    <h1 class="vwg-product-title">Mixed vintage bag</h1>
    <p class="vwg-product-meta">Approx. 20 kg · 60–80 pieces · mixed sizes</p>
    <p class="vwg-price"><span class="vwg-tag">£60.00</span> <small>+ £12.00 UK delivery</small></p>
    <p class="vwg-product-stock"><span class="vwg-badge vwg-badge-stock">In stock</span></p>
    <div class="vwg-prose"><p>…</p></div>
    <form class="vwg-product-form" action="/basket/items" method="post">
      <div class="vwg-qty" role="group" aria-label="Quantity">…</div>
      <button class="vwg-btn vwg-btn-primary" type="submit">Add to basket</button>
    </form>
  </div>
</div>
<script>VWG.gallery(document.querySelector('.vwg-product')); VWG.qty(document.querySelector('.vwg-qty'));</script>
```

- The name is sentence case, so the page title is `vwg-product-title` (28/34, weight 800) rather than the uppercase `h1`; the stamp above it says Vintage or New (`vwg-stamp-new`), as it does on the card's photo.
- The photo is 4:5 in its true colours, never `vwg-photo-aged`. Thumbnails are 64×80 links to the photos; `VWG.gallery(el)` makes a click swap the main photo and mark the thumbnail `aria-current`. With one photo, leave the row out.
- The delivery line beside the price: "+ £12.00 UK delivery" once the client confirms the charge, "Free UK delivery" if it is nil, "UK delivery only" until then. `VWG.deliveryLine(pence)` writes it.
- The description is markdown in `vwg-prose`; the quantity is the `vwg-qty` stepper from `Basket`, capped at the stock; Add to basket is the page's primary button.
- Sold out: add `vwg-product-sold` to the wrapper, the big `vwg-stamp vwg-stamp-sold vwg-stamp-lg vwg-card-stamp-lg` inside `vwg-product-media`, the badge `vwg-badge-sold`, and a disabled button labelled "Sold out". The page stays up; people come back for it.
- Two columns (5:6) from 760px, one below. Vintage touches here: the tag and the stamp, with the paper.
