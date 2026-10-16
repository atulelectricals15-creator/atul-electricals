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
