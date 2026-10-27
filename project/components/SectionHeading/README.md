Every section opens the same way: a script lead-in in brick, the uppercase heading, a short black rule, and an optional one-line intro. The pattern is the logo's: script over bold caps.

```html
<div class="vwg-section-heading">
  <span class="vwg-script" aria-hidden="true">shop online</span>
  <h2 id="shop">Bags of vintage and new stock</h2>
  <div class="vwg-rule" aria-hidden="true"></div>
  <p>Six bags, packed by hand in Glasgow. UK delivery only.</p>
</div>
```

- The lead-in is one to three lowercase words and is decorative (`aria-hidden`); the `h2` carries the meaning.
- On `band` the rule and intro switch to `on-band` and `on-band-muted` by themselves.
- From JavaScript: `VWG.SectionHeading({ lead, title, intro })`.
