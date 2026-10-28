A label, a control, and a hint that turns into the error. Used on the contact form and at checkout.

```html
<div class="vwg-field">
  <label for="email">Email</label>
  <input class="vwg-input" id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint" required>
  <p class="vwg-field-hint" id="email-hint">We only use it for your order confirmation and invoice.</p>
</div>
```

- Labels are the `eyebrow` style and always visible; placeholders never replace them.
- Inputs are 48px tall with a `line-strong` border, `surface-raised` fill and `radius-sm`; focus turns the border `ink` and shows `focus-ring`.
- Error: add `vwg-field-error` to the wrapper, set `aria-invalid="true"`, and write the fix in the hint ("Enter an email address like name@example.com"). The hint is `danger`; the word does the work, not the colour. Either the wrapper class or `aria-invalid="true"` on the input alone turns the border `danger`, so a server-rendered form needs only the attribute and the hint; use both when you can.
- Stack fields in a `vwg-form` (16px gaps, 560px wide); the submit is a primary button, "Send message" or "Pay now".
- What happened after submitting is a `Notice` above the form ("Message sent. We reply within a working day."), not a hint.
- From JavaScript: `VWG.Field({ id, label, type, hint, error, multiline })`.
