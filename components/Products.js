'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRANDS } from '../lib/data';
import Icon from './Icon';
import { C } from '../lib/data';

const FILTERS = ['All', 'Electrical', 'Cooling', 'Appliances', 'Electronics'];
const PHOTOS = ['sw', 'fan', 'ac', 'tv', 'fr', 'wm', 'geyser', 'groom', 'inv'];

export default function Products() {
  const [cur, setCur] = useState('All');
  const list = C.filter(
    (c) => cur === 'All' || c[1] === cur || (cur === 'Electrical' && (c[1] === 'Safety' || c[1] === 'Lighting'))
  );
  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f} className="f" aria-pressed={f === cur} onClick={() => setCur(f)}>{f}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((c) => (
          <div className="cat" key={c[0]}>
            {PHOTOS.includes(c[0]) ? (
              <div className="im">
                <em>{c[1]}</em>
                <Image src={`/images/${c[0]}.jpg`} alt={c[2]} width={1024} height={1024} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 360px" />
              </div>
            ) : (
              <div className="im ico"><em>{c[1]}</em><Icon name={c[0]} /></div>
            )}
            <div className="bd">
              <h3><Link className="cat-title-link" href={`/products/${c[0]}`}>{c[2]}</Link></h3>
              <p>{c[3]}</p>
              <ul>{c[4].map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="brand-tags"><strong>Brands:</strong> {(BRANDS[c[0]] || []).map((brand) => {
                const brandSlug = c[0] === 'sw' ? ({ 'Orient': 'orient', 'Anchor Penta': 'anchor-penta', 'Indo Asian': 'indo-asian' }[brand]) : null;
                return brandSlug ? <Link className="brand-chip-link" href={`/brands/${brandSlug}`} key={brand}>{brand}</Link> : <span key={brand}>{brand}</span>;
              })}</div>
              <Link className="cat-more" href={`/products/${c[0]}`}>View product details <b aria-hidden="true">↗</b></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
