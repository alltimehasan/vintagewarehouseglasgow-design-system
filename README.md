# Vintage Warehouse Glasgow — design system

The brand book, tokens, components and assets for the Vintage Warehouse Glasgow website, as a static style guide.

Live: https://alltimehasan.github.io/vintagewarehouseglasgow-design-system/

## See it locally

Open `index.html` in a browser. Nothing to install: every page is static and the previews are plain HTML files.

To serve it instead (previews report their height to the page more reliably over http):

```sh
npx serve .            # or: python3 -m http.server 8000
```

## Change it

The source of truth is `project/`:

| Path | What |
| --- | --- |
| `project/tokens.json` | colours (light and dark), type, spacing, radius, shadows |
| `project/README.md` | the brand book shown on the Overview page |
| `project/components/<Name>/README.md`, `preview.html` | each component's guidelines and live preview |
| `project/components/bundle.css`, `bundle.js` | the component styles and the `window.VWG` builders |
| `project/assets/`, `project/fonts/` | logos, photos, self-hosted typefaces |
| `project/design-system.json` | the asset index |

After editing, rebuild the pages and `dist/`:

```sh
node build.js
```

`build.js` has no dependencies. It generates `dist/tokens.css` from `tokens.json`, copies the bundles, fonts and images into `dist/`, writes one standalone page per component into `previews/`, and renders the six pages.

## Use it in the website

Copy `dist/` into the site and load:

```html
<link rel="stylesheet" href="dist/tokens.css">
<link rel="stylesheet" href="dist/vwg.css">
<script src="dist/vwg.js"></script>
```

Then build pages from the markup on the Components page. `dist/fonts/` and `dist/images/` are referenced relatively from the CSS and the previews.

## Publish

The site is served by GitHub Pages from the `main` branch root. Commit the rebuilt output together with the source change and push; Pages updates within a minute or two.

```sh
node build.js
git add -A
git commit -m "Describe the change"
git push
```
