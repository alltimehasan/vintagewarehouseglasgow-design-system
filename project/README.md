Vintage Warehouse Glasgow sells new outlet stock and secondhand clothing by the bag, from a red-brick warehouse in Glasgow: in person from the pick-and-choose area, and online with UK delivery only. The look comes from the building and the sign. A black disc on a white panel, brick all round, blue container doors, and the hanger script. Keep it that plain: black, white, one brick accent, bold uppercase headings, a script word or two. Then a few vintage touches, used sparingly: a rubber stamp, a swing tag, a ledger rule, paper grain, a brick strip.

## Words

- Write the name as Vintage Warehouse Glasgow in running text; `hero`, `h1`, `h2` and `eyebrow` set it uppercase, as the ring on the logo does. Never shorten it for customers. The legal entity, R and BM Logistics Limited, appears on invoices and in the footer's legal line only.
- Plain, warm, short. Sentence case for everything that is not a display style. No exclamation marks. No emoji on the site.
- The product is a **bag**: "Mixed vintage bag", "Branded outlet bag". Give the weight and an approximate piece count on every product: "Approx. 20 kg · 60–80 pieces".
- Beside every price, the delivery line: "+ £12.00 UK delivery" once the client confirms the charge, "Free UK delivery" if it is nil, "UK delivery only" until then. "UK delivery only" stays in the strip and the footer. The shop does not ship anywhere else.
- Label every product Vintage or New with a `Badge`. The two kinds of stock are the point of the shop.
- The address is Bay E, Barclay Curle Complex, South Street, Glasgow G14 0BX. Two lines, in that order, on the Find us block, in the footer and on invoices.
- Write hours as "Mon–Fri 10am–5pm · Sat 10am–3pm · Sun closed", with an en dash. Sunday is closed for now; keep the row.
- Buttons are verbs: "Shop online", "Add to basket", "Get directions", "Send message". The one action a page is for gets the primary button; everything else is outline or a link.
- Page titles are uppercase (`vwg-page-title`); a product name stays sentence case even as a page title (`vwg-product-title`). A notice is one sentence beside its colour: "Added to your basket.", "Message sent. We reply within a working day.", "Payment was not completed. Your basket is unchanged." A result page (paid, not paid, not found) says what happened and what to do next, in one sentence.
- Invoices are titled "Online order invoice" and numbered with four digits in sequence (0001, 0002 …), never reused.
- The company is VAT registered. Every price on the site includes VAT; the invoice shows the registered office, the company number SC769949, the VAT number GB 522 8334 04 and the VAT included in the total.

## Colour

- `surface` is the page. `surface-raised` is cards, product tiles, inputs, the site header and the invoice sheet, always with a `line` border and never a shadow.
- `ink` for text on either surface; `ink-muted` for meta and helper text. The primary button is an `ink` fill with `surface` text.
- `band` is the black of the logo disc: the footer, and the ground under hero photos. On it, text is `on-band` or `on-band-muted`, dividers are `line-on-band`, and the logo is `logo-white.png`.
- `brick` is the one accent, taken from the warehouse wall: links, script lead-ins, the Vintage badge text on `brick-soft`, the brick button with `on-brick` text, the underline on the current nav link, and the current page in pagination and the active filter, filled with `on-brick` text. Do not set brick text on `band` in the light theme (3.2:1); there it is a fill only.
- `blue` is the container blue from inside the warehouse. It marks New stock (text on `blue-soft`), the map pin and the info notice. Nothing else.
- `stock` means in stock, paid, sent. `danger` means sold out, an error, a failed payment. Each always sits beside a word; the colour never carries the meaning alone. The notice tones follow the same rule: `stock-soft` for done, `danger-soft` for an error, `blue-soft` for a fact; the sentence does the work.
- A hero photo takes the flat `overlay` so `on-band` text reads on it. No gradients anywhere.
- Every control shows `focus-ring` on keyboard focus: a 2px gap in the page colour, then 2px of solid brick.
- The dark theme follows the same rules with the swapped values: brick lightens and takes dark `on-brick` text, and the header shows `logo-white.png` instead of `logo-black.png`.

## Type

Three faces, each with one job.

- **Display: Montserrat** 700 and 800, uppercase and tracked, the face nearest the ring on the logo. `hero` and `h1` for page titles, `h2` for sections, `eyebrow` for nav links, form labels and footer headings, `button` for buttons, `price` for prices with tabular numerals. `h3` is the exception: sentence case, for product names.
- **Script: Sacramento**, standing in for the hanger script on the logo. `script` above an `h2` as a lead-in ("find us", "new in"), `script-lg` over the hero. One to three lowercase words, in `brick` on the surfaces or `on-band` on band. Never a sentence, never a heading on its own, never for prices or legal text.
- **Body: Source Sans 3**, close to the small bold line on the logo. `lead` under a title, `body` for everything read, `body-strong` for emphasis and day names, `small` for meta and legal lines. Running text stays under 65 characters a line.
- The three faces are self-hosted from `fonts/` with `@font-face`; do not load them from Google on the live site.

## Spacing, shape and borders

- 4px base, nine steps. `space-4` inside cards and as the phone gutter; `space-6` as the desktop gutter and between cards; `space-16` between sections, `space-12` on phones. Pages are built from `vwg-section` blocks: consecutive sections share one gap; a `vwg-band` section keeps its padding on both sides.
- Square by default (`radius-none`): cards, images, sections, tables. `radius-sm` on buttons and inputs. `radius-full` on badges, the basket count and the logo disc. Nothing in between.
- Borders, not shadows: `line` for dividers and cards, `line-strong` for input borders. `shadow-drawer` is for the phone menu panel only; the basket is a page, not a drawer.
- The thick-thin rule, 3px over 1px with a 2px gap, under section headings (the page title and the `h2`s in prose included), the invoice head and over the invoice total. Nowhere else: basket and order totals sit over a plain 2px rule.
- Content sits in a 1200px container. The header is `surface-raised` with a `line` under it and the logo disc at 56px; the footer is `band`.

## Imagery

- Use the warehouse's own photos in `assets/Photos`: the façade for the hero, the pick-and-choose area and the bales for sections and the Find us page. No stock photography.
- Product photos: one bag per photo, the whole bag in frame, on a plain floor or wall, cropped 4:5. Shoot them in the warehouse; the brick and the containers are part of the brand.
- Photos are square-cornered. Text over a photo needs the `overlay`.
- `vwg-photo-aged` warms the hero and section photos a little. Never on a product photo: customers must see the clothes in their true colours.

## Iconography

- Inline SVG at 24px with a 1.75 stroke in `currentColor`: basket, menu, close, map pin, arrow. The menu, close and basket icons are drawn inline in the `SiteHeader` preview, the close icon again in `Notice`, the pin in `Map`; copy them from there. The system ships no icon files yet; add them under `assets/Icons` when drawn, each with a usage line in that folder's README.
- Instagram and TikTok: use each platform's official glyph from its own brand resources, or a plain text link. Do not redraw them.

## Components

Markup patterns in `components/bundle.css` (classes prefixed `vwg-`), with builders for the small reusable ones in `components/bundle.js` as `window.VWG`. Each component's README shows the markup; its preview shows it live in both themes.

- `Button`: primary (`ink`), brick, outline, link; inverse and ghost on `band`. One primary per view.
- `Badge`: Vintage, New, In stock, Sold out, and a neutral tone for sizes, in tables and lists.
- `Stamp`: the rubber-stamp label for photos and the invoice, with the swing-tag price `vwg-tag` as its companion.
- `ProductCard`: photo with its stamp, name, weight and piece count, the price on a tag with "UK delivery only", Add to basket.
- `SectionHeading`: script lead-in, uppercase `h2`, short rule, optional intro.
- `Field`: label, input or textarea, hint, error state (`vwg-field-error` on the wrapper or `aria-invalid` on the input).
- `SiteHeader`: the logo disc, Shop online · Find us · Contact us, basket with count; under 760px the Menu button opens the nav as a panel (`VWG.menu`). The skip link `vwg-skip` goes before it.
- `Hero`: the façade photo, aged, under `overlay`; script line, uppercase headline, two buttons.
- `Strip`: the brick band of words under the hero: Vintage · New · Sold by the bag · UK delivery only · Glasgow.
- `OpeningHours`: the Find us block with address, directions button and the hours table.
- `SiteFooter`: `band`, white logo, Shop, Visit (hours) and Follow columns, the legal line (`vwg-footer-legal`: trading name, company, registration, VAT number, email), copyright and "UK delivery only".
- `Invoice`: the automatically generated "Online order invoice", numbered in sequence, with the logo, parties, lines and totals.
- `Notice`: one sentence beside its colour, plain, stock, danger or info, with an optional close button.
- `Prose`: markdown content in `vwg-prose` under the `vwg-page-title`; with it the `vwg-section` rhythm and `vwg-product-title`.
- `Pagination`: real page links with the current page in brick, Previous and Next as small outline buttons, and the `vwg-filter` row for Vintage and New.
- `Basket`: `vwg-lines` rows with the price tag, the `vwg-qty` stepper, `vwg-totals` over a plain rule, Pay now, and the `vwg-empty` state.
- `Result`: the centred page for paid, not paid and not found: stamp, `h1`, sentence, buttons.
- `Map`: the click-to-load Google map beside `OpeningHours` in a `vwg-split`; nothing is requested from Google until Load map is pressed.
- `ProductPage`: `vwg-product`, the gallery with its thumbnail row and the details column, with the delivery line beside the price.

## Vintage touches

The plain system is modern on purpose; these details are what make it read as vintage. Use one or two in a view, never all of them at once.

- The stamp (`Stamp`): a rubber-stamp label in brick with an inner line and a slight tilt. Vintage and New on product photos and above the product page title, Sold out across a sold-out photo, Paid on the invoice, and the big stamp on a result page (Paid, Not paid, Not found). Elsewhere the plain `Badge` pill.
- The swing tag (`vwg-tag`): the price on a clothing tag, brick on brick-soft with a punched hole. Product cards, the product page and the basket lines; totals and invoice lines stay plain.
- The ledger rule (`vwg-rule`): 3px over 1px under section headings and on the invoice.
- The aged photo (`vwg-photo-aged`): a light sepia on the hero and section photos, never on product photos.
- Paper (`vwg-paper` on `body`): a faint grain over the whole page in both themes, so the off-white reads as paper, not screen. One overlay per page, never per element.
- The strip (`Strip`): a brick band of uppercase words with discs between them, under the hero.

## Using this system

- Load the compiled `tokens.css` (every token as a custom property and every type style as a class), then `components/bundle.css`, then the fonts from `fonts/`. Put `vwg-paper` on `body`, start `body` with the skip link, give `main` the id `main`, and build each page from `vwg-section` blocks.
- Build pages from the component markup; call `VWG.Button`, `VWG.Badge`, `VWG.Stamp`, `VWG.ProductCard`, `VWG.SectionHeading`, `VWG.Field` and `VWG.Notice` from `bundle.js` where markup is generated in the browser. `VWG.formatPrice(pence)`, `VWG.deliveryLine(pence)` and `VWG.invoiceNumber(n)` keep prices, delivery lines and invoice numbers in the house format.
- Behaviour lives in `bundle.js` too, and only there: `VWG.menu(header)` runs the phone menu, `VWG.qty(el)` a quantity stepper, `VWG.gallery(el)` the product gallery, `VWG.map(el)` the click-to-load map and `VWG.notices()` the notice close buttons. Call them once the page has loaded; the site needs no other script and no framework.
- Logos: `logo-black.png` on light surfaces, `logo-white.png` on `band` and in the dark theme; the `icon-*.png` set is the favicon and app icon.
