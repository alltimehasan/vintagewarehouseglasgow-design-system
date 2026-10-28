Running text from markdown: the privacy, terms and delivery pages, and product descriptions. The page opens with `vwg-page-title`, the uppercase `h1` over the ledger rule; the body sits in `vwg-prose`, 65 characters wide.

```html
<section class="vwg-section">
  <div class="vwg-container">
    <div class="vwg-page-title">
      <span class="vwg-script" aria-hidden="true">the small print</span>
      <h1>Delivery and returns</h1>
      <div class="vwg-rule" aria-hidden="true"></div>
      <p>How your bag gets to you, and what to do if it is not right.</p>
    </div>
    <div class="vwg-prose">
      <h2>Delivery</h2>
      <p>…</p>
    </div>
  </div>
</section>
```

- `h2` is the section style, uppercase with the thick-thin rule under it; `h3` is sentence case; `h4` the eyebrow. Markdown starts at `##`: the page title is the `h1`.
- Paragraphs, lists, a table (delivery times and costs), a quote with a brick rule down its left, and photos full width with a caption. Links are brick and underlined.
- Keep the markdown plain: no raw HTML, no code, no image wider than the column; crop photos to 3:2 before upload. The copy in the preview is a sample; the real pages come from the client and are checked before launch.
- Page rhythm: every block of a page is a `vwg-section` holding a `vwg-container`. Consecutive sections share one `space-16` gap (`space-12` on phones); a `vwg-band` section keeps its padding on both sides. A `vwg-section-heading` or `vwg-page-title` at the top of a section gets `space-8` under it.
- The skip link `<a class="vwg-skip" href="#main">Skip to content</a>` is the first thing in `body`, visible on keyboard focus (see `SiteHeader`).
- A product name stays sentence case even as a page title: `vwg-product-title` (28/34, weight 800), not the uppercase `h1`. See `ProductPage`.
