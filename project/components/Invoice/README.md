The invoice the shop generates for every online order, so nobody writes one by hand. Titled "Online order invoice", numbered in sequence with four digits, on a `surface-raised` sheet with the logo top left.

- Number: `VWG.invoiceNumber(n)` gives "0001"; the counter only ever goes up, and the number appears in the order email subject too.
- Head: the black disc at 72px, then the title, number, date and a status badge (`stock` for Paid).
- Parties: From is Vintage Warehouse Glasgow with the company name, R and BM Logistics Limited, under it; To is the customer and the UK delivery address.
- Lines: one per bag with its weight, quantity and price; delivery as its own line. Totals right-aligned with tabular numerals; the grand total in the `price` style above a 3px rule.
- Foot: payment method and date, and a one-line thank you. Add the VAT number and a VAT line only if the company is VAT registered.
- The same markup prints to PDF for the order email; keep it to one page.
- Company address and registration number are still to come; the preview shows the slots.
