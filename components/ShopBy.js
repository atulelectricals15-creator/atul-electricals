'use client';
import { useState } from 'react';
import { T } from '../lib/data';

export default function ShopBy() {
  const [i, setI] = useState(0);
  const t = T[i];
  return (
    <>
      <div className="tabs" role="tablist">
        {T.map((x, j) => (
          <button key={x[0]} className="tab" role="tab" aria-selected={i === j} onClick={() => setI(j)}>{x[0]}</button>
        ))}
      </div>
      <div className="tp">
        <div><h3>{t[0]}</h3><p>{t[1]}</p></div>
        <ul>{t[2].map((y) => <li key={y}>{y}</li>)}</ul>
      </div>
    </>
  );
}
