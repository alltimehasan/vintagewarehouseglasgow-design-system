The invoice the shop generates for every online order, so nobody writes one by hand. Titled "Online order invoice", numbered in sequence with four digits, on a `surface-raised` sheet with the logo top left. The company is VAT registered, so this is a VAT invoice.

- Number: `VWG.invoiceNumber(n)` gives "0001"; the counter only ever goes up, and the number appears in the order email subject too.
- Head: the black disc at 72px, then the title, number, date and the Paid stamp (`vwg-stamp-stock`), over the thick-thin rule.
- Parties: From is Vintage Warehouse Glasgow, then the company name R and BM Logistics Limited, the registered office (Bay E, Barclay Curle Complex, South Street, Glasgow G14 0BX), the company number SC769949 and the VAT number. To is the customer and the UK delivery address.
- Lines: one per bag with its weight, quantity and price, all VAT inclusive; delivery as its own line. Totals right-aligned with tabular numerals: subtotal, delivery, the grand total in the `price` style over the thick-thin rule, then "Includes VAT at 20%" in `vwg-vat`.
- Foot: payment method and date, "All prices include VAT", and a one-line thank you.
- The same markup prints to PDF for the order email; keep it to one page.
- The VAT number is still to come from the client; the preview shows the slot. Nothing else on the sheet is a placeholder except the customer and the lines.
