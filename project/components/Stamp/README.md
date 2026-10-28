A rubber-stamp label: one or two uppercase words inside a double line, tilted a little, as if stamped on a bale label. It goes on product photos (Vintage, New, Sold out) and on the invoice (Paid). Its companion is the swing-tag price, `vwg-tag`.

```html
<span class="vwg-stamp">Vintage</span>
<span class="vwg-stamp vwg-stamp-new">New</span>
<span class="vwg-stamp vwg-stamp-stock">Paid</span>
<span class="vwg-stamp vwg-stamp-sold vwg-stamp-lg">Sold out</span>

<p class="vwg-price"><span class="vwg-tag">£60.00</span> <small>UK delivery only</small></p>
```

- Tones: brick by default (Vintage), `vwg-stamp-new` (blue), `vwg-stamp-stock` (Paid), `vwg-stamp-sold` (danger). The word carries the meaning; the colour repeats it.
- `vwg-stamp-lg` is the big one, tilted 12°, across a sold-out photo with `vwg-card-stamp-lg`. On a photo the small stamp sits top left with `vwg-card-stamp`.
- The stamp has a `surface-raised` ground so it reads on any photo in both themes. Never put one on `band`.
- The `Badge` pill stays for tables, filters and lists; a tilted stamp in a table row looks like a mistake.
- The price tag: brick on brick-soft with a punched hole and a pointed end, 32px tall, tabular numerals. Product cards and the basket only; invoice lines and totals stay plain.
- From JavaScript: `VWG.Stamp({ label, tone, size })`.
