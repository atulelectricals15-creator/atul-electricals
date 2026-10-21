import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BRANDS, C } from '../../../lib/data';

const COLORS = ['Red', 'Blue', 'Green', 'White', 'Yellow', 'Black'];
const SIZES = ['0.75mm', '1.0mm', '1.5mm', '2.5mm', '4.0mm', '6.0mm'];
const slugify = name => ({ 'Orient — Stella Series':'orient', 'Orient':'orient', 'Anchor Penta':'anchor-penta', 'Indo Asian':'indo-asian' }[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const categoryFor = slug => {
  const entry = Object.entries(BRANDS).find(([, names]) => names.some(name => slugify(name) === slug));
  return entry ? C.find(item => item[0] === entry[0]) : null;
};
export function generateStaticParams() {
  return [...new Set(Object.values(BRANDS).flat().map(slugify))].map(slug => ({slug}));
}
export async function generateMetadata({params}) {
  const {slug} = await params; const item = categoryFor(slug);
  if (!item) return {title:'Brand not found | Atul Electricals'};
  const brandName = Object.values(BRANDS).flat().find(name => slugify(name) === slug) || slug;
  const wire = item[0] === 'wire';
  return {title: `${wire ? brandName + ' Sri Copper Wires' : brandName} | Atul Electricals & Electronics`, description: `Explore ${brandName} products at Atul Electricals & Electronics, Raiwala. Call to confirm current stock and prices.`};
}
export default async function BrandPage({params}) {
  const {slug} = await params; const item = categoryFor(slug); if (!item) notFound();
  const brandName = Object.values(BRANDS).flat().find(name => slugify(name) === slug) || slug;
  const wire = item[0] === 'wire';
  const heading = wire ? `${brandName} Sri Copper Wires` : brandName;
  const wireLink = (size, colour) => `https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please confirm availability of ${heading}, ${size}, ${colour} colour.`)}`;
  return <main className="brand-page"><div className="w">
    <div className="crumb"><Link href="/">Home</Link> / <Link href={`/products/${item[0]}`}>{item[2]}</Link> / {heading}</div>
    <section className="brand-hero"><span className="eyebrow">{item[2]}</span><h1>{heading}</h1><p>{wire ? `Explore ${brandName} Sri Copper Wires. Select a wire size and colour to enquire about availability.` : `Explore ${brandName} products in ${item[2]}. Please contact our store to confirm available models, variants and prices.`}</p><p className="brand-note">Availability and prices can change. Call us to confirm stock, specifications and current pricing.</p><div className="detail-actions"><a className="btn" href="tel:+918279344070">Call 8279344070</a><a className="btn alt" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I want to enquire about ${heading}.`)}`}>Ask on WhatsApp</a></div></section>
    {wire ? <section className="wire-selector"><h2>Wire sizes &amp; colour options</h2><p className="sub">Sri Copper Wires · Choose the size and colour you want to ask about.</p><div className="wire-size-grid">{SIZES.map(size => <article className="wire-size-card" key={size}><h3>{size}</h3><p>Available colour options</p><div className="wire-colours">{(size === '0.75mm' ? ['Green','White'] : COLORS).map(colour => <a key={colour} className="wire-colour" href={wireLink(size, colour)}><i className={`swatch swatch-${colour.toLowerCase()}`} aria-hidden="true"></i>{colour}</a>)}</div></article>)}</div><p className="brand-note">Colour options are for enquiry and are subject to actual stock. For 0.75mm, only Green and White are listed here. Confirm wire type, rating and suitability with a qualified electrician before purchase.</p></section> : <section className="brand-info"><h2>Explore this brand</h2><p>For current models, sizes, finishes and pricing, contact the shop or visit us near Shiv Chowk, Raiwala.</p><Link className="btn" href={`/products/${item[0]}`}>Browse {item[2]}</Link></section>}
    <Link className="back-link" href={`/products/${item[0]}`}>← Back to {item[2]}</Link>
  </div></main>;
}
