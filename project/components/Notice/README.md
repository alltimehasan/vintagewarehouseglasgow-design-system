One sentence beside its colour, for what just happened: added to the basket, message sent, payment not completed, a fact worth knowing. It sits at the top of the page content, inside the container, never as a floating toast.

```html
<div class="vwg-notice vwg-notice-stock" role="status">
  <p>Added to your basket. <a href="/basket">View basket</a></p>
  <button class="vwg-notice-close" type="button" aria-label="Dismiss">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
  </button>
</div>
<div class="vwg-notice vwg-notice-danger" role="alert"><p>Payment was not completed. Your basket is unchanged.</p></div>
```

- Tones: none (a `line-strong` border on `surface-raised`) for plain news, `vwg-notice-stock` for done and paid, `vwg-notice-danger` for an error or a failed payment, `vwg-notice-info` (the container blue) for a fact such as the delivery charge. The sentence carries the meaning; the colour repeats it.
- `role="status"` for news, `role="alert"` for an error, so a screen reader announces it.
- The close button is optional and removes the notice, nothing more. `VWG.notices()` wires every close button on the page with one listener; `VWG.Notice({ tone, text, link, dismissible })` builds one in the browser.
- Square corners, a 1px border in the tone's colour on its soft tint, no shadow, no icon. One notice at a time; the next page load clears it.
- A field's own error stays in `Field`: `vwg-field-error` on the wrapper or `aria-invalid="true"` on the input turn the border `danger` and the hint says the fix.
