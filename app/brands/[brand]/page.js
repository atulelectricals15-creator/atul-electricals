import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BRANDS = {
  orient: { name: 'Orient', slug: 'orient', accent: 'Orient modular switches and sockets' },
  'anchor-penta': { name: 'Anchor Penta', slug: 'anchor-penta', accent: 'Anchor Penta modular switches and sockets' },
  'indo-asian': { name: 'Indo Asian', slug: 'indo-asian', accent: 'Indo Asian modular switches and sockets' }
};

const MODULES = Array.from({ length: 17 }, (_, index) => index + 2);

export function generateStaticParams() {
  return Object.keys(BRANDS).map((brand) => ({ brand }));
}

export async function generateMetadata({ params }) {
  const { brand } = await params;
  const item = BRANDS[brand];
  if (!item) return { title: 'Brand not found | Atul Electricals' };
  return {
    title: `${item.name} Modular Switches & Sockets | Atul Electricals`,
    description: `Explore ${item.name} modular switches, sockets and modular plates from 2 module to 18 module at Atul Electricals, Raiwala. Call to confirm availability.`
  };
}

export default async function BrandPage({ params }) {
  const { brand } = await params;
  const item = BRANDS[brand];
  if (!item) notFound();

  return (
    <main className="brand-page">
      <section className="brand-hero">
        <div className="w brand-hero-grid">
          <div>
            <div className="brand-breadcrumb"><Link href="/#products">Home</Link> / <Link href="/products/sw">Switches &amp; Sockets</Link> / {item.name}</div>
            <span className="brand-eyebrow">Atul Electricals &amp; Electronics • Raiwala</span>
            <h1>{item.name}<br /><em>Modular Switches &amp; Sockets</em></h1>
            <p>Explore modular switch, socket and plate size options from 2 module to 18 module. Choose a suitable layout for your room, wiring plan and required switches or sockets.</p>
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
          <h2>2 Module to 18 Module Plates</h2>
          <p className="brand-section-copy">Select a module size to ask about matching plates, switches, sockets and compatible combinations. Availability, designs and configurations may vary by brand and model.</p>
          <div className="module-grid">
            {MODULES.map((size) => (
              <a className="module-card" key={size} href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please share availability and price for ${item.name} ${size} module modular plate with switches and sockets.`)}`}>
                <span className="module-number">{size}</span>
                <span className="module-label">Module Plate</span>
                <span className="module-hint">Switches &amp; sockets</span>
                <span className="module-ask">Ask availability ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-range-band">
        <div className="w brand-range-inner">
          <div>
            <h2>Build your modular switch combination</h2>
            <p>Ask us about switch types, 5A/6A and higher-rated sockets where suitable, fan regulators, bell switches, USB sockets and matching plates. Final selection should match the electrical load and installation requirements.</p>
          </div>
          <a className="btn" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I need help choosing ${item.name} modular switches, sockets and plates.`)}`}>Ask for options</a>
        </div>
      </section>

      <section className="brand-bottom">
        <div className="w">
          <h2>Need help choosing the right size?</h2>
          <p>Share a photo of your existing switchboard or your electrician's list. We can help you enquire about suitable module sizes and combinations.</p>
          <div className="brand-hero-actions">
            <a className="btn" href="tel:+918279344070">Call 8279344070</a>
            <a className="btn brand-whatsapp" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I need help selecting ${item.name} modular switches and sockets.`)}`}>WhatsApp us</a>
            <Link className="brand-back-link" href="/products/sw">Back to Switches &amp; Sockets</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
