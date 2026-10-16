import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BRANDS = {
  orient: { name: 'Orient Stella Series', slug: 'orient', theme: 'orient' },
  'anchor-penta': { name: 'Anchor Penta', slug: 'anchor-penta', theme: 'anchor' },
  'indo-asian': { name: 'Indo Asian', slug: 'indo-asian', theme: 'indo' }
};

const MODULES = [2, 3, 4, 6, 8, 12, 18];
const PRODUCTS = [
  { name: '6A Switch', note: 'Everyday light and small-load switching' },
  { name: '16A Switch', note: 'For compatible higher-rated circuits' },
  { name: '6A Socket', note: 'General-purpose socket option' },
  { name: '16A Socket', note: 'For compatible higher-rated appliances' },
  { name: 'Two-Way Switch', note: 'Control a light from two locations' },
  { name: 'Switch-Type Regulator', note: 'Regulator with switch-style control' },
  { name: 'Socket-Type Regulator', note: 'Regulator in socket-style format' },
  { name: 'Switch-Type Bell Push', note: 'Bell push in switch-style format' },
  { name: 'Socket-Type Bell Push', note: 'Bell push in socket-style format' },
  { name: 'Blanker / Blank Plate', note: 'Cover unused module openings' },
  { name: '20A Modular MCB', note: 'Select rating to match circuit design' },
  { name: '25A Modular MCB', note: 'Select rating to match circuit design' },
  { name: '32A Modular MCB', note: 'Select rating to match circuit design' }
];

export function generateStaticParams() {
  return Object.keys(BRANDS).map((brand) => ({ brand }));
}

export async function generateMetadata({ params }) {
  const { brand } = await params;
  const item = BRANDS[brand];
  if (!item) return { title: 'Brand not found | Atul Electricals' };
  return {
    title: `${item.name} Modular Switches & Sockets | Atul Electricals`,
    description: `Explore ${item.name} modular plates from 2M, 3M, 4M, 6M, 8M, 12M and 18M, switches, sockets, regulators, bell pushes, blank plates and modular MCB options at Atul Electricals, Raiwala.`
  };
}

export default async function BrandPage({ params }) {
  const { brand } = await params;
  const item = BRANDS[brand];
  if (!item) notFound();

  return (
    <main className={`brand-page brand-theme-${item.theme}`}>
      <section className="brand-hero">
        <div className="w brand-hero-grid">
          <div>
            <div className="brand-breadcrumb"><Link href="/#products">Home</Link> / <Link href="/products/sw">Switches &amp; Sockets</Link> / {item.name}</div>
            <span className="brand-eyebrow">Atul Electricals &amp; Electronics • Raiwala</span>
            <h1>{item.name}<br /><em>Modular Switches &amp; Sockets</em></h1>
            <p>Browse modular plates in selected sizes, switches, sockets, regulators, bell pushes, blank plates and modular MCB options. Click any item to enquire about current models, prices and availability.</p>
            <div className="brand-hero-actions">
              <a className="btn" href="tel:+918279344070">Call 8279344070</a>
              <a className="btn brand-whatsapp" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I want to enquire about ${item.name} modular switches and sockets.`)}`}>WhatsApp enquiry</a>
            </div>
          </div>
          <div className="brand-hero-image">
            <Image src="/images/sw.jpg" alt={`${item.name} modular switches and sockets`} width={1024} height={1024} priority sizes="(max-width: 900px) 100vw, 44vw" />
            <span>Modular switch &amp; socket range</span>
          </div>
        </div>
      </section>

      <section className="brand-module-section">
        <div className="w">
          <span className="brand-eyebrow">Browse by plate size</span>
          <h2>Modular Sheet Categories</h2>
          <p className="brand-section-copy">Sizes requested: 2M, 3M, 4M, 6M, 8M, 17M and 12M and 18M. Each card includes a switchboard photo for visual reference. Actual design and availability may vary by brand and model.</p>
          <div className="module-grid">
            {MODULES.map((size) => (
              <a className="module-card" key={size} href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please share availability and price for ${item.name} ${size}M modular sheet with switches and sockets.`)}`}>
                <Image className="module-photo" src="/images/sw.jpg" alt={`${item.name} ${size}M modular sheet reference photo`} width={480} height={320} sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 240px" />
                <span className="module-number">{size}M</span>
                <span className="module-label">{size}-Module Sheet</span>
                <span className="module-hint">Switches &amp; sockets</span>
                <span className="module-ask">Ask availability ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-products-section">
        <div className="w">
          <span className="brand-eyebrow">Switches, sockets &amp; accessories</span>
          <h2>Modular Switch and Socket Range</h2>
          <p className="brand-section-copy">Tap a product to ask about models and stock for {item.name}. Ratings and compatibility must be checked against the appliance, wiring and installation requirements.</p>
          <div className="brand-product-grid">
            {PRODUCTS.map((product) => (
              <a className="brand-product-card" key={product.name} href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please share availability and price for ${item.name} ${product.name}.`)}`}>
                <Image src="/images/sw.jpg" alt={`${item.name} ${product.name} reference photo`} width={480} height={320} sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 240px" />
                <span className="brand-product-name">{product.name}</span>
                <span className="brand-product-note">{product.note}</span>
                <span className="module-ask">Enquire on WhatsApp ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-range-band">
        <div className="w brand-range-inner">
          <div>
            <h2>Need help choosing the right combination?</h2>
            <p>Share a photo of your existing switchboard or your electrician's list. We can help you enquire about suitable module sizes and compatible switches, sockets, regulators, bell pushes, blank plates and MCB options.</p>
          </div>
          <a className="btn" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I need help choosing ${item.name} modular switches, sockets and plates.`)}`}>Ask for options</a>
        </div>
      </section>

      <section className="brand-bottom">
        <div className="w">
          <h2>Contact Atul Electricals</h2>
          <p>Call or message us to confirm exact model, rating, design, stock and price before visiting.</p>
          <div className="brand-hero-actions">
            <a className="btn" href="tel:+918279344070">Call 8279344070</a>
            <a className="btn brand-bottom-whatsapp" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I need help selecting ${item.name} modular switches and sockets.`)}`}>WhatsApp us</a>
            <Link className="brand-back-link" href="/products/sw">Back to Switches &amp; Sockets</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
