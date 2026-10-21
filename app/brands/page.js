import Link from 'next/link';
export const metadata = { title: 'Brands | Atul Electricals & Electronics' };
const brands = [['Havells','/brands/havells'],['KEI','/brands/kei'],['Kunthcab','/brands/kunthcab'],['Orient — Stella Series','/brands/orient'],['Anchor Penta','/brands/anchor-penta'],['Indo Asian','/brands/indo-asian']];
export default function BrandsPage(){return <main className="brand-page"><div className="w"><div className="crumb"><Link href="/">Home</Link> / Brands</div><h1>Explore Brands</h1><div className="brand-index-grid">{brands.map(([name,url])=><Link className="brand-index-card" href={url} key={url}><strong>{name}</strong><span>View products →</span></Link>)}</div></div></main>}
