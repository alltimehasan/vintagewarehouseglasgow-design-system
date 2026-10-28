Pages of bags, with real links so a crawler and the back button both work, and the Vintage / New filter above the grid.

```html
<nav class="vwg-filter" aria-label="Filter the bags">
  <a class="vwg-btn vwg-btn-outline vwg-btn-sm" href="/shop" aria-current="true">All bags</a>
  <a class="vwg-btn vwg-btn-outline vwg-btn-sm" href="/shop?kind=vintage">Vintage</a>
  <a class="vwg-btn vwg-btn-outline vwg-btn-sm" href="/shop?kind=new">New</a>
</nav>

<nav class="vwg-pagination" aria-label="Pages of bags">
  <a class="vwg-btn vwg-btn-outline vwg-btn-sm" href="/shop?page=1" rel="prev">Previous</a>
  <ul>
    <li><a href="/shop?page=1">1</a></li>
    <li><a href="/shop?page=2" aria-current="page">2</a></li>
    <li><a href="/shop?page=3">3</a></li>
  </ul>
  <a class="vwg-btn vwg-btn-outline vwg-btn-sm" href="/shop?page=3" rel="next">Next</a>
</nav>
```

- Every page is an `<a href>`; the current one carries `aria-current="page"` and is filled brick with `on-brick` text, like the current nav link's underline. A gap in a long run is `<li><span aria-hidden="true">…</span></li>`.
- Previous and Next are small outline buttons with `rel="prev"` and `rel="next"`. On the first or last page the one that leads nowhere is `<span class="vwg-btn vwg-btn-outline vwg-btn-sm" aria-disabled="true">`, dimmed like a disabled button.
- Every target is 36px tall, above the 24px minimum; the row wraps on phones. The pagination sits under the grid with `space-8` above it.
- The filter is the same row of small outline buttons; the active one is brick and carries `aria-current="true"`. All bags, Vintage and New are the only filters: the two kinds of stock are the point of the shop.
- With six bags at twelve a page the shop never paginates; the pattern is here for the day it does.
