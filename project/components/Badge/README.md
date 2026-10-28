One or two uppercase words of status, as a pill. Every product carries Vintage or New; stock and sold-out states come from the shop.

```html
<span class="vwg-badge vwg-badge-vintage">Vintage</span>
<span class="vwg-badge vwg-badge-new">New</span>
<span class="vwg-badge vwg-badge-stock">In stock</span>
<span class="vwg-badge vwg-badge-sold">Sold out</span>
<span class="vwg-badge">Mixed sizes</span>
```

- Tones: `vintage` (brick on brick-soft), `new` (blue on blue-soft), `stock`, `sold` (muted), `danger` (payment failed), and none for neutral facts like sizes.
- The word carries the meaning; the colour only repeats it.
- Tables, filters and lists only. On a product photo and on the invoice the `Stamp` does this job.
- From JavaScript: `VWG.Badge({ label, tone })`.
