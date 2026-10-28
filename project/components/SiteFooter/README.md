The black band at the foot of every page: the white logo and one line, then Shop, Visit (the address and hours) and Follow columns, the legal line, and a bottom row with the copyright and "UK delivery only".

```html
<footer class="vwg-footer">
  <div class="vwg-container vwg-footer-inner">
    <div class="vwg-footer-brand">
      <img src="/images/logo-white.png" alt="Vintage Warehouse Glasgow" width="88" height="88">
      <p>New and secondhand clothing, sold by the bag.</p>
    </div>
    <div><h4>Shop</h4><ul>…</ul></div>
    <div><h4>Visit</h4><ul>…</ul></div>
    <div><h4>Follow</h4><ul>…</ul></div>
  </div>
  <div class="vwg-container vwg-footer-legal">
    <p>Vintage Warehouse Glasgow is the trading name of R and BM Logistics Limited, registered in Scotland, company number SC769949. Registered office: Bay E, Barclay Curle Complex, South Street, Glasgow G14&nbsp;0BX. VAT number GB 522 8334 04.</p>
    <p>Email <a href="mailto:…">…</a></p>
  </div>
  <div class="vwg-container vwg-footer-bottom">
    <span>© 2026 Vintage Warehouse Glasgow</span>
    <span>UK delivery only · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
  </div>
</footer>
```

- Always `logo-white.png` here, in both themes.
- Follow links to the Instagram and TikTok pages open in a new tab; text links are fine until the official glyphs are added.
- Four columns, two under 760px, one under 480px.
- Visit: the address on two lines (Bay E, Barclay Curle Complex / South Street, Glasgow G14 0BX), the hours on three, then the Find us link. The postcode takes a non-breaking space so it never splits.
- The legal line (`vwg-footer-legal`), in `on-band-muted` small text under the columns: the trading name, the legal name R and BM Logistics Limited, registered in Scotland, company number SC769949, the registered office, the VAT number GB 522 8334 04, then the shop's email on its own line. A UK company must show these on its website; the company name appears nowhere else on the site but the invoice. The email in the preview is a placeholder until the client gives the address.
- Brick and `ink-muted` are never used on `band`; links in the legal line are `on-band`.
