import Link from 'next/link';
import { notFound } from 'next/navigation';

const COLORS = ['Red', 'Blue', 'Green', 'White', 'Yellow', 'Black'];
const SIZES = ['0.75mm', '1.0mm', '1.5mm', '2.5mm', '4.0mm', '6.0mm'];
const WIRE_BRANDS = ['havells', 'kei', 'kunthcab'];
const BRAND_DATA = {
  orient: { name: 'Orient — Stella Series', category: 'Switches & Sockets', description: 'Explore Orient Stella Series switches and sockets. Confirm available finishes, modules and models with our store.' },
  'anchor-penta': { name: 'Anchor Penta', category: 'Switches & Sockets', description: 'Explore Anchor Penta switches, sockets and accessories. Confirm available modules and finishes with our store.' },
  'indo-asian': { name: 'Indo Asian', category: 'Switches & Sockets', description: 'Explore Indo Asian switches and sockets. Please contact our store to confirm current models and finishes.' },
  havells: { name: 'Havells Sri Copper Wires', category: 'Wires & Cables', description: 'Sri Copper Wires by Havells. Select a wire size and colour to enquire about availability.' },
  kei: { name: 'KEI Sri Copper Wires', category: 'Wires & Cables', description: 'Sri Copper Wires by KEI. Select a wire size and colour to enquire about availability.' },
  kunthcab: { name: 'Kunthcab Sri Copper Wires', category: 'Wires & Cables', description: 'Sri Copper Wires by Kunthcab. Select a wire size and colour to enquire about availability.' }
};

export function generateStaticParams() { return Object.keys(BRAND_DATA).map(slug => ({slug})); }
export async function generateMetadata({params}) {
  const {slug} = await params; const brand = BRAND_DATA[slug];
  return brand ? {title: `${brand.name} | Atul Electricals & Electronics`, description: brand.description} : {title:'Brand not found | Atul Electricals'};
}

export default async function BrandPage({params}) {
  const {slug} = await params; const brand = BRAND_DATA[slug]; if (!brand) notFound();
  const isWire = WIRE_BRANDS.includes(slug);
  return <main className="brand-page"><div className="w">
    <div className="crumb"><Link href="/">Home</Link> / <Link href={isWire ? '/products/wire' : '/products/sw'}>{brand.category}</Link> / {brand.name}</div>
    <section className="brand-hero"><span className="eyebrow">{brand.category}</span><h1>{brand.name}</h1><p>{brand.description}</p><p className="brand-note">Availability and prices can change. Call us to confirm stock, specifications and current pricing.</p><div className="detail-actions"><a className="btn" href={`tel:+918279344070`}>Call 8279344070</a><a className="btn alt" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I want to enquire about ${brand.name}.`) }`}>Ask on WhatsApp</a></div></section>
    {isWire ? <section className="wire-selector"><h2>Wire sizes &amp; colour options</h2><p className="sub">Sri Copper Wires · Choose the size and colour you want to ask about.</p><div className="wire-size-grid">{SIZES.map(size => <article className="wire-size-card" key={size}><h3>{size}</h3><p>Available colour options</p><div className="wire-colours">{(size === '0.75mm' ? ['Green','White'] : COLORS).map(colour => <a key={colour} className="wire-colour" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please confirm availability of ${brand.name}, ${size}, ${colour} colour.`) }`}><i className={`swatch swatch-${colour.toLowerCase()}`} aria-hidden="true"></i>{colour}</a>)}</div></article>)}</div><p className="brand-note">Colour options shown are for enquiry and are subject to actual stock. For 0.75mm, only Green and White are listed here. Confirm wire type, rating and suitability with a qualified electrician before purchase.</p></section> : <section className="brand-info"><h2>Explore this brand</h2><p>For current models, module sizes, finishes and pricing, contact the shop or visit us near Shiv Chowk, Raiwala.</p><Link className="btn" href="/products/sw">Browse Switches &amp; Sockets</Link></section>}
    <Link className="back-link" href={isWire ? '/products/wire' : '/products/sw'}>← Back to {brand.category}</Link>
  </div></main>;
}
