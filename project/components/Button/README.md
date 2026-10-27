One primary button per view, for the thing the page is for; everything else is outline or a link. Labels are verbs in sentence case ("Add to basket"); the style sets them uppercase.

```html
<a class="vwg-btn vwg-btn-primary" href="/shop">Shop online</a>
<button class="vwg-btn vwg-btn-outline" type="button">Get directions</button>
<button class="vwg-btn vwg-btn-link" type="button">View all bags</button>
```

- `vwg-btn-primary` is an `ink` fill; `vwg-btn-brick` the accent fill, for the hero's call to action or checkout; `vwg-btn-outline` and `vwg-btn-link` for secondary actions.
- On `band` use `vwg-btn-inverse` (filled) and `vwg-btn-ghost` (outlined); never the primary, which disappears.
- `vwg-btn-sm` inside product cards; `vwg-btn-block` on phones at checkout.
- Hover swaps to brick (or to ink on the brick button). Focus shows `focus-ring`. Disabled is 45% and not clickable, with a label that says why ("Sold out").
- From JavaScript: `VWG.Button({ label, variant, size, href, onClick })`.
