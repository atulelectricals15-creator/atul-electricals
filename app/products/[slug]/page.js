import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { C, BRANDS, DETAILS } from '../../../lib/data';

const PHOTO_CATEGORIES = ['sw', 'fan', 'ac', 'tv', 'fr', 'wm', 'geyser', 'groom', 'inv'];

export function generateStaticParams() {
  return C.map((item) => ({ slug: item[0] }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = C.find((entry) => entry[0] === slug);
  if (!item) return { title: 'Product not found | Atul Electricals' };
  return {
    title: `${item[2]} & Brands | Atul Electricals`,
    description: `${item[2]} at Atul Electricals & Electronics, Raiwala. Explore brands: ${(BRANDS[slug] || []).join(', ')}. Call to check current availability.`
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const item = C.find((entry) => entry[0] === slug);
  if (!item) notFound();

  const brands = BRANDS[slug] || [];
  const detail = DETAILS[slug] || [item[3], item[4]];
  const hasPhoto = PHOTO_CATEGORIES.includes(slug);

  return (
    <main className="product-detail">
      <div className="w">
        <div className="crumb"><Link href="/#products">Products</Link> / {item[2]}</div>
        <div className="detail-layout">
          <div className="detail-image">
            {hasPhoto ? (
              <Image src={`/images/${slug}.jpg`} alt={item[2]} width={1024} height={1024} priority sizes="(max-width: 900px) 100vw, 48vw" />
            ) : (
              <div className="detail-icon"><Icon name={slug} /></div>
            )}
          </div>
          <div className="detail-content">
            <span className="eyebrow">{item[1]} • Atul Electricals & Electronics</span>
            <h1>{item[2]}</h1>
            <p className="detail-copy">{detail[0]}</p>
            <div className="brand-panel">
              <h2>Brands available in this category</h2>
              <div className="brand-list">
                {brands.map((brand) => {
                  const brandSlug = ({ 'Orient — Stella Series': 'orient', 'Orient': 'orient', 'Anchor Penta': 'anchor-penta', 'Indo Asian': 'indo-asian' }[brand]) || brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                  const themedBrand = ({ 'Orient — Stella Series': 'brand-orient', 'Orient': 'brand-orient', 'Anchor Penta': 'brand-anchor-penta', 'Indo Asian': 'brand-indo-asian', 'Havells': 'brand-havells' }[brand] || '');
                  return brandSlug ? <Link className={themedBrand} href={`/brands/${brandSlug}`} key={brand}>{brand}</Link> : <span className={themedBrand} key={brand}>{brand}</span>;
                })}
              </div>
              <p className="availability-note">Models and stock can change. Please call us to confirm current availability, variants and prices.</p>
            </div>
            <div className="detail-actions">
              <a className="btn" href="tel:+918279344070">Call 8279344070</a>
              <a className="btn alt" href={`https://wa.me/918279344070?text=${encodeURIComponent(`Hello Atul Electricals, I want to enquire about ${item[2]} and brands: ${brands.join(', ')}.`)}`}>Ask on WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="check-panel">
          <h2>What to compare before buying</h2>
          <ul>{detail[1].map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
        <Link className="back-link" href="/#products">← Back to all products</Link>
      </div>
    </main>
  );
}
