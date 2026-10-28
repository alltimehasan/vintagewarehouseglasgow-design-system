The Find us page: the hours block and the map side by side. The map is a `surface-raised` box with the address until the visitor presses Load map; only then is the Google Maps iframe added, so nothing is requested from Google and no cookie is set before they ask.

```html
<div class="vwg-split">
  <section class="vwg-hours" aria-labelledby="find-us">…</section>
  <div class="vwg-map" data-map-src="https://www.google.com/maps?q=Barclay+Curle+Complex%2C+South+Street%2C+Glasgow+G14+0BX&output=embed" data-map-title="Map showing Vintage Warehouse Glasgow at the Barclay Curle Complex">
    <div class="vwg-map-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.25"/></svg>
      <address>Bay E, Barclay Curle Complex<br>South Street, Glasgow G14&nbsp;0BX</address>
      <p>The map comes from Google Maps and is loaded only when you ask for it.</p>
      <div class="vwg-map-actions">
        <button class="vwg-btn vwg-btn-outline" type="button" data-map-load>Load map</button>
        <a class="vwg-btn vwg-btn-link" href="https://www.google.com/maps/search/?api=1&query=…" target="_blank" rel="noopener">Get directions</a>
      </div>
    </div>
  </div>
</div>
<script>VWG.map(document.querySelector('.vwg-map'));</script>
```

- `VWG.map(el)` wires the button: it builds `<iframe src="…" title="…" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen>` from `data-map-src` and `data-map-title`, swaps it for the placeholder and moves focus to it. The embed URL is the plain `maps?q=…&output=embed` form, which needs no API key.
- The box is 4:3 and keeps that size when the map loads, so the page does not jump. The pin is the one blue mark on the page, drawn inline at 24px like the other icons.
- Get directions is a plain link to Google Maps in a new tab; `OpeningHours` has the same link as its outline button, so the page works with the map never loaded. Load map is an outline button: the page's action is still Get directions.
- `vwg-split` is two equal columns from 760px and one column below, with the hours first.
- The privacy page can say the site sets no third-party cookies unless the map is loaded.
