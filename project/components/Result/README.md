A centred page for the three moments with nothing else on them: payment success, payment cancelled, and page not found. A stamp, the uppercase `h1`, one sentence, one or two buttons.

```html
<section class="vwg-section">
  <div class="vwg-container">
    <div class="vwg-result">
      <span class="vwg-stamp vwg-stamp-stock vwg-stamp-lg">Paid</span>
      <h1>Thank you for your order</h1>
      <p>Order 0001 is paid. Your invoice is on its way to name@example.com, and your bag will be posted within two working days.</p>
      <div class="vwg-result-actions">
        <a class="vwg-btn vwg-btn-primary" href="/orders/…/invoice">View invoice</a>
        <a class="vwg-btn vwg-btn-outline" href="/shop">Shop online</a>
      </div>
    </div>
  </div>
</section>
```

- Stamps: `vwg-stamp-stock` "Paid" on success; `vwg-stamp-sold` "Not paid" when the payment was cancelled, with "Your basket is unchanged." in the sentence; the plain brick stamp "Not found" on the 404. The big stamp is the page's one vintage touch, beside the paper.
- The sentence says what happened and what happens next: the order number and the email address on success, the way back on the others. No exclamation marks.
- One primary button for the next step and an outline button for the way back. The 404 offers Shop online and Find us; the cancelled payment offers Back to basket and Shop online.
- The success page may add the order summary under the result: `vwg-lines` and `vwg-totals` from `Basket`, lines plain (no tags) and no stepper.
- Error pages carry `noindex`; the success page is reached only from the payment provider.
