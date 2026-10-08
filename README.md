# Atul Electricals & Electronics (Next.js)

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Deploy
Push to GitHub and import the repo in Vercel. No settings needed.

## Edit content
- Products, tabs, buying guide: `lib/data.js`
- Hero, brands, FAQ, About, Contact: `app/page.js`
- Colours and styles: `app/globals.css` (tokens at the top, in `:root`)
- Photos: `public/images/` (square JPG, keep the same file names or update `lib/data.js` and `components/Products.js`)

## To confirm with the client
- Brand list in the marquee (`app/page.js`, search "Trusted brands"). Only Indo Asian is confirmed.
- Store hours, phone and address.
- Wires, MCB and LED lighting use icons. Add photos named `wire.jpg`, `mcb.jpg`, `led.jpg` and add those keys to `PHOTOS` in `components/Products.js`.
