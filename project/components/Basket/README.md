The basket page: one row per bag with its photo, name, meta line and price tag, a quantity stepper and the line total, then the totals and Pay now. The same lines and totals make the order summary on the success page, and the empty state stands in when there is nothing to show.

```html
<table class="vwg-lines">
  <thead><tr><th>Bag</th><th>Quantity</th><th class="vwg-num">Total</th></tr></thead>
  <tbody>
    <tr>
      <td>
        <div class="vwg-lines-item">
          <a class="vwg-lines-thumb" href="/shop/mixed-vintage-bag"><img src="/images/mixed-vintage-bag.jpg" alt=""></a>
          <div>
            <a class="vwg-lines-name" href="/shop/mixed-vintage-bag">Mixed vintage bag</a>
            <span class="vwg-lines-meta">Approx. 20 kg · 60–80 pieces · mixed sizes</span>
            <p class="vwg-price"><span class="vwg-tag">£60.00</span></p>
            <button class="vwg-btn vwg-btn-link" type="submit" name="remove" value="1">Remove</button>
          </div>
        </div>
      </td>
      <td>
        <div class="vwg-qty" role="group" aria-label="Quantity of Mixed vintage bag">
          <button class="vwg-btn vwg-btn-outline vwg-btn-sm" type="button" aria-label="Decrease quantity">−</button>
          <input class="vwg-input" type="number" name="quantity[1]" value="1" min="1" max="4" inputmode="numeric" aria-label="Quantity">
          <button class="vwg-btn vwg-btn-outline vwg-btn-sm" type="button" aria-label="Increase quantity">+</button>
        </div>
      </td>
      <td class="vwg-num">£60.00</td>
    </tr>
  </tbody>
</table>
<div class="vwg-totals">
  <div><span>Subtotal</span><span>£250.00</span></div>
  <div><span>UK delivery</span><span>£12.00</span></div>
  <div class="vwg-grand"><span>Total</span><span>£262.00</span></div>
  <div class="vwg-vat"><span>Includes VAT at 20%</span><span>£43.67</span></div>
</div>
<div class="vwg-totals-actions">
  <button class="vwg-btn vwg-btn-brick vwg-btn-block" type="submit">Pay now</button>
  <p class="vwg-totals-note">By paying you agree to our <a href="/terms">terms</a> and <a href="/delivery-and-returns">delivery and returns</a>, including your 14-day right to cancel.</p>
  <a class="vwg-btn vwg-btn-link" href="/shop">Continue shopping</a>
</div>

<div class="vwg-empty">
  <span class="vwg-script" aria-hidden="true">nothing here yet</span>
  <p>Your basket is empty.</p>
  <a class="vwg-btn vwg-btn-primary" href="/shop">Shop online</a>
</div>
```

- The unit price sits on the swing tag, as on the card; the line total and the totals block stay plain, with tabular numerals. The grand total is the `price` style over a plain 2px rule: the thick-thin rule belongs to section headings and the invoice.
- The stepper `vwg-qty`: two small outline buttons around a 48px numeric input with `min` and `max` (the stock). `VWG.qty(el)` keeps the number in range, disables the button that cannot go further and fires `change` on the input. Without JavaScript the input still works; the buttons can also be `type="submit"` with a name and value so a plain form handles them.
- Under 600px each row stacks: the bag on top, the stepper and the line total on one line beneath. The table head is hidden from sight, not from screen readers.
- Pay now is the brick button and the only filled button on the page; the pre-contract sentence sits directly above it. The totals and the actions are 320px wide and right-aligned, full width on phones.
- The empty state `vwg-empty`: a script lead-in, one sentence and the primary button, on a bordered `surface-raised` block. The same block serves a shop with nothing published and a filter with no bags.
- Vintage touches on this page: the paper and the tags. No stamps.
