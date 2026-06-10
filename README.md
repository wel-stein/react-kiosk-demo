# ManjaLink Kiosk Demo

A React demo of a transit ticket kiosk UI, based on the Stitch design export in
`stitch_interactive_kiosk_interface/`.

## Run

```
npm install
npm run dev
```

## Flow

1. **Welcome** — choose a service (only "Purchase Single Journey Bus Ticket" is wired up)
2. **Select Destination** — searchable, paginated destination grid with fares
3. **Ticket Quantity** — adult ticket stepper with live order summary
4. **Select Mode of Payment** — Cash / Credit Card / Nets / E-Wallet
5. **Payment Successful** — ticket summary, QR code, print / return home

State lives in [App.jsx](src/App.jsx); each screen is a component under
[src/screens](src/screens). Design tokens (teal palette, Plus Jakarta Sans,
spacing) follow the DESIGN.md in the Stitch export and are defined as CSS
variables in [index.css](src/index.css).
