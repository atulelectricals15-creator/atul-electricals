import Image from 'next/image';
import Link from 'next/link';

const SIZES = ['0.75mm', '1.0mm', '1.5mm', '2.5mm', '4mm', '6mm'];

export default function WireBrandPage({ brand, slug }) {
  return (
    <main className={`brand-page wire-brand-page brand-${slug}`}>
      <div className="w">
        <div className="brand-hero">
          <div className="brand-breadcrumb"><Link href="/">Home</Link> / <Link href="/products/wire">Wires &amp; Cables</Link> / {brand}</div>
          <span className="brand-eyebrow">Atul Electricals &amp; Electronics • Raiwala</span>
          <h1>{brand}<br /><em>Wires &amp; Cables</em></h1>
          <p>Explore {brand} wire sizes for home wiring and electrical projects. Select a size below to enquire about current stock, wire type, coil length and price.</p>
          <div className="brand-hero-actions">
            <a className="btn" href="tel:+918279344070">Call 8279344070</a>
            <a className="btn brand-whatsapp" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please share ${brand} wires and cables sizes, availability and prices.`)}`}>WhatsApp enquiry</a>
          </div>
        </div>
        <section className="wire-selector">
          <span className="brand-eyebrow">Browse by wire size</span>
          <h2>{brand} Wire Size Categories</h2>
          <p className="brand-section-copy">Choose the required nominal conductor size. Actual availability, insulation type, coil length and colour options may vary; confirm specifications before purchase.</p>
          <div className="wire-size-grid">
            {SIZES.map((size) => (
              <a className="wire-size-card" key={size} href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please share availability and price for ${brand} ${size} wire. Also share available colours, insulation type and coil length.`)}`}>
                <Image className="wire-size-photo" src="/images/wire.jpg" alt={`${brand} ${size} wire reference`} width={600} height={400} />
                <h3>{size}</h3>
                <p>{brand} electrical wire — enquire for available specifications.</p>
                <span className="module-ask">Ask availability &amp; price ↗</span>
              </a>
            ))}
          </div>
          <p className="brand-note">Wire size and circuit suitability should be confirmed by a qualified electrician based on load, installation method and applicable standards.</p>
        </section>
        <section className="brand-range-band">
          <div className="w brand-range-inner">
            <div><h2>Need help selecting a wire size?</h2><p>Share your electrician’s material list or project details and ask us about available {brand} wire sizes.</p></div>
            <a className="btn" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, please help me choose ${brand} wire sizes.`)}`}>Enquire on WhatsApp</a>
          </div>
        </section>
        <div className="brand-bottom">
          <h2>More wire brands</h2>
          <p>Explore other brands available at Atul Electricals.</p>
          <div className="brand-hero-actions">
            <Link className="brand-back-link" href="/brands/havells">Havells</Link>
            <Link className="brand-back-link" href="/brands/kei">KEI</Link>
            <Link className="brand-back-link" href="/brands/polycab">Polycab</Link>
            <Link className="brand-back-link" href="/brands/kunthcab">Kunthcab</Link>
            <Link className="brand-back-link" href="/products/wire">Back to Wires &amp; Cables</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
