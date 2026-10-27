The Find us block: address and directions on the left, the hours table on the right. It sits beside the map on the Find us page and, smaller, on the homepage.

```html
<section class="vwg-hours" aria-labelledby="find-us">
  <div>
    <span class="vwg-script" aria-hidden="true">find us</span>
    <h2 id="find-us">Vintage Warehouse Glasgow</h2>
    <address>Street address<br>Glasgow G0 0AA</address>
    <a class="vwg-btn vwg-btn-outline" href="https://maps.google.com/?q=...">Get directions</a>
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

- Hours as the client gave them: Monday to Friday 10am–5pm, Saturday 10am–3pm. Sunday closed is assumed; confirm it.
- Times use an en dash and no spaces; "Closed" is `ink-muted`.
- The map is a plain link out ("Get directions"); embed the map beside this block on the Find us page only.
- The street address is still to come; do not publish the block without it.
