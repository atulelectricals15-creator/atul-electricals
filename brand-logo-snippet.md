# Brand logo + theme snippet

Files `logos/` folder ko apne project ke `public/images/` (ya `assets/images/`) mein daal do.

## CSS (global stylesheet mein)

```css
:root {
  --orient: #EB5A29;
  --indo-asian: #C21225;
  --anchor-penta: #0E4C9E;
}

.brand-orient       { --brand-color: var(--orient); }
.brand-indo-asian   { --brand-color: var(--indo-asian); }
.brand-anchor-penta { --brand-color: var(--anchor-penta); }

.brand-hero {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border-bottom: 4px solid var(--brand-color);
}

.brand-hero img {
  height: 56px;          /* Anchor ke liye 48px kaafi hai */
  width: auto;
  object-fit: contain;
}

.brand-hero h1 { color: var(--brand-color); margin: 0; }

.brand-btn {
  background: var(--brand-color);
  color: #fff;
  border: 0;
  padding: .6rem 1.2rem;
  border-radius: 6px;
}
.brand-btn:hover { filter: brightness(.9); }
```

## HTML (har page ke top par)

```html
<!-- Orient page -->
<body class="brand-orient">
  <header class="brand-hero">
    <img src="/images/logos/orient-logo.png" alt="Orient Electric">
    <h1>Orient Electric</h1>
  </header>

<!-- Indo Asian page -->
<body class="brand-indo-asian">
  <header class="brand-hero">
    <img src="/images/logos/indoasian-logo.png" alt="Indo Asian">
    <h1>Indo Asian</h1>
  </header>

<!-- Anchor Penta page -->
<body class="brand-anchor-penta">
  <header class="brand-hero">
    <img src="/images/logos/anchor-logo.png" alt="Anchor by Panasonic">
    <h1>Anchor Penta</h1>
  </header>
```

## React / Next.js version

```jsx
const brands = {
  orient:  { logo: "/images/logos/orient-logo.png",    color: "#EB5A29", name: "Orient Electric" },
  indo:    { logo: "/images/logos/indoasian-logo.png", color: "#C21225", name: "Indo Asian" },
  anchor:  { logo: "/images/logos/anchor-logo.png",    color: "#0E4C9E", name: "Anchor Penta" },
};

export default function BrandHeader({ brand }) {
  const b = brands[brand];
  return (
    <header style={{ "--brand-color": b.color }} className="brand-hero">
      <img src={b.logo} alt={b.name} />
      <h1>{b.name}</h1>
    </header>
  );
}
```
