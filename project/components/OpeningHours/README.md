The Find us block: address and directions on the left, the hours table on the right. It sits beside the map on the Find us page and, smaller, on the homepage.

```html
<section class="vwg-hours" aria-labelledby="find-us">
  <div>
    <span class="vwg-script" aria-hidden="true">find us</span>
    <h2 id="find-us">Vintage Warehouse Glasgow</h2>
    <address>Bay E, Barclay Curle Complex<br>South Street, Glasgow G14&nbsp;0BX</address>
    <a class="vwg-btn vwg-btn-outline" href="https://www.google.com/maps/search/?api=1&query=Barclay+Curle+Complex%2C+South+Street%2C+Glasgow+G14+0BX" target="_blank" rel="noopener">Get directions</a>
  </div>
  <div>
    <h3>Opening hours</h3>
    <table>
      <tr><td>Monday to Friday</td><td>10am–5pm</td></tr>
      <tr><td>Saturday</td><td>10am–3pm</td></tr>
      <tr><td>Sunday</td><td class="vwg-closed">Closed</td></tr>
    </table>
  </div>
</section>
```

- The address, as the client gave it on 28 October 2026: Bay E, Barclay Curle Complex, South Street, Glasgow G14 0BX. Two lines, in that order, everywhere it appears.
- Hours as the client gave them: Monday to Friday 10am–5pm, Saturday 10am–3pm, Sunday closed for now. Keep the Sunday row; it may open later.
- Times use an en dash and no spaces; "Closed" is `ink-muted`.
- "Get directions" opens Google Maps in a new tab with the address as the query; embed the map beside this block on the Find us page only.
