Vintage Warehouse Glasgow sells new outlet stock and secondhand clothing by the bag, from a red-brick warehouse in Glasgow: in person from the pick-and-choose area, and online with UK delivery only. The look comes from the building and the sign. A black disc on a white panel, brick all round, blue container doors, and the hanger script. Keep it that plain: black, white, one brick accent, bold uppercase headings, a script word or two. Then a few vintage touches, used sparingly: a rubber stamp, a swing tag, a ledger rule, paper grain, a brick strip.

## Words

- Write the name as Vintage Warehouse Glasgow in running text; `hero`, `h1`, `h2` and `eyebrow` set it uppercase, as the ring on the logo does. Never shorten it for customers. The legal entity, R and BM Logistics Limited, appears on invoices only.
- Plain, warm, short. Sentence case for everything that is not a display style. No exclamation marks. No emoji on the site.
- The product is a **bag**: "Mixed vintage bag", "Branded outlet bag". Give the weight and an approximate piece count on every product: "Approx. 20 kg · 60–80 pieces".
- Put "UK delivery only" beside every price and in the footer. The shop does not ship anywhere else.
- Label every product Vintage or New with a `Badge`. The two kinds of stock are the point of the shop.
- The address is Bay E, Barclay Curle Complex, South Street, Glasgow G14 0BX. Two lines, in that order, on the Find us block, in the footer and on invoices.
- Write hours as "Mon–Fri 10am–5pm · Sat 10am–3pm · Sun closed", with an en dash. Sunday is closed for now; keep the row.
- Buttons are verbs: "Shop online", "Add to basket", "Get directions", "Send message". The one action a page is for gets the primary button; everything else is outline or a link.
- Invoices are titled "Online order invoice" and numbered with four digits in sequence (0001, 0002 …), never reused.
- The company is VAT registered. Every price on the site includes VAT; the invoice shows the registered office, the company number SC769949, the VAT number GB 522 8334 04 and the VAT included in the total.

## Colour

- `surface` is the page. `surface-raised` is cards, product tiles, inputs, the site header and the invoice sheet, always with a `line` border and never a shadow.
- `ink` for text on either surface; `ink-muted` for meta and helper text. The primary button is an `ink` fill with `surface` text.
- `band` is the black of the logo disc: the footer, and the ground under hero photos. On it, text is `on-band` or `on-band-muted`, dividers are `line-on-band`, and the logo is `logo-white.png`.
- `brick` is the one accent, taken from the warehouse wall: links, script lead-ins, the Vintage badge text on `brick-soft`, the brick button with `on-brick` text, and the underline on the current nav link. Do not set brick text on `band` in the light theme (3.2:1); there it is a fill only.
- `blue` is the container blue from inside the warehouse. It marks New stock (text on `blue-soft`) and the map pin. Nothing else.
- `stock` means in stock, paid, sent. `danger` means sold out, an error, a failed payment. Each always sits beside a word; the colour never carries the meaning alone.
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

- 4px base, nine steps. `space-4` inside cards and as the phone gutter; `space-6` as the desktop gutter and between cards; `space-16` between sections, `space-12` on phones.
- Square by default (`radius-none`): cards, images, sections, tables. `radius-sm` on buttons and inputs. `radius-full` on badges, the basket count and the logo disc. Nothing in between.
- Borders, not shadows: `line` for dividers and cards, `line-strong` for input borders. `shadow-drawer` is for the basket drawer and the phone menu only.
- The thick-thin rule, 3px over 1px with a 2px gap, under section headings, the invoice head and over the invoice total. Nowhere else.
- Content sits in a 1200px container. The header is `surface-raised` with a `line` under it and the logo disc at 56px; the footer is `band`.

## Imagery

- Use the warehouse's own photos in `assets/Photos`: the façade for the hero, the pick-and-choose area and the bales for sections and the Find us page. No stock photography.
- Product photos: one bag per photo, the whole bag in frame, on a plain floor or wall, cropped 4:5. Shoot them in the warehouse; the brick and the containers are part of the brand.
- Photos are square-cornered. Text over a photo needs the `overlay`.
- `vwg-photo-aged` warms the hero and section photos a little. Never on a product photo: customers must see the clothes in their true colours.

## Iconography

- Inline SVG at 24px with a 1.75 stroke in `currentColor`: basket, menu, close, map pin, arrow. The system ships no icon files yet; add them under `assets/Icons` when drawn, each with a usage line in that folder's README.
- Instagram and TikTok: use each platform's official glyph from its own brand resources, or a plain text link. Do not redraw them.

## Components

Markup patterns in `components/bundle.css` (classes prefixed `vwg-`), with builders for the small reusable ones in `components/bundle.js` as `window.VWG`. Each component's README shows the markup; its preview shows it live in both themes.

- `Button`: primary (`ink`), brick, outline, link; inverse and ghost on `band`. One primary per view.
- `Badge`: Vintage, New, In stock, Sold out, and a neutral tone for sizes, in tables and lists.
- `Stamp`: the rubber-stamp label for photos and the invoice, with the swing-tag price `vwg-tag` as its companion.
- `ProductCard`: photo with its stamp, name, weight and piece count, the price on a tag with "UK delivery only", Add to basket.
- `SectionHeading`: script lead-in, uppercase `h2`, short rule, optional intro.
- `Field`: label, input or textarea, hint, error state.
- `SiteHeader`: the logo disc, Shop online · Find us · Contact us, basket with count.
- `Hero`: the façade photo, aged, under `overlay`; script line, uppercase headline, two buttons.
- `Strip`: the brick band of words under the hero: Vintage · New · Sold by the bag · UK delivery only · Glasgow.
- `OpeningHours`: the Find us block with address, directions button and the hours table.
- `SiteFooter`: `band`, white logo, Shop, Visit (hours) and Follow columns, copyright and "UK delivery only".
- `Invoice`: the automatically generated "Online order invoice", numbered in sequence, with the logo, parties, lines and totals.

## Vintage touches

The plain system is modern on purpose; these details are what make it read as vintage. Use one or two in a view, never all of them at once.

- The stamp (`Stamp`): a rubber-stamp label in brick with an inner line and a slight tilt. Vintage and New on product photos, Sold out across a sold-out photo, Paid on the invoice. Elsewhere the plain `Badge` pill.
- The swing tag (`vwg-tag`): the price on a clothing tag, brick on brick-soft with a punched hole. Product cards and the basket; totals and invoice lines stay plain.
- The ledger rule (`vwg-rule`): 3px over 1px under section headings and on the invoice.
- The aged photo (`vwg-photo-aged`): a light sepia on the hero and section photos, never on product photos.
- Paper (`vwg-paper` on `body`): a faint grain over the whole page in both themes, so the off-white reads as paper, not screen. One overlay per page, never per element.
- The strip (`Strip`): a brick band of uppercase words with discs between them, under the hero.

## Using this system

- Load the compiled `tokens.css` (every token as a custom property and every type style as a class), then `components/bundle.css`, then the fonts from `fonts/`. Put `vwg-paper` on `body`.
- Build pages from the component markup; call `VWG.Button`, `VWG.Badge`, `VWG.Stamp`, `VWG.ProductCard`, `VWG.SectionHeading` and `VWG.Field` from `bundle.js` where markup is generated in the browser. `VWG.formatPrice(pence)` and `VWG.invoiceNumber(n)` keep prices and invoice numbers in the house format.
- Logos: `logo-black.png` on light surfaces, `logo-white.png` on `band` and in the dark theme; the `icon-*.png` set is the favicon and app icon.
