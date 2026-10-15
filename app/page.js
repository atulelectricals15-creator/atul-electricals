import Image from 'next/image';
import Products from '../components/Products';
import ShopBy from '../components/ShopBy';
import Guide from '../components/Guide';

export default function Home() {
  return (
    <>
<header><div className="tb"><div className="w"><span>📍 Near Shiv Chowk, Raiwala, Dehradun, Uttarakhand</span><a href="tel:+918279344070">📞 Call us: 8279344070</a></div></div><div className="w nav"><a className="logo" href="#top"><i>⚡</i><span>Atul Electricals<small>& Electronics</small></span></a>
<nav><a href="#products">Products</a><a href="#shop-by">Shop by need</a><a href="#guide">Buying guide</a><a href="#about">About</a><a href="#faq">FAQ</a><a className="btn" href="tel:+918279344070">Call now</a></nav></div></header>
<main id="top">
<section className="hero"><div className="bg" aria-hidden="true"><span className="orb o1"></span><span className="orb o2"></span><svg className="ckt" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice"><g fill="none" strokeWidth="2" strokeLinecap="round"><path className="p" d="M0 130H220L260 170H520L560 130H900L940 90H1200"/><path className="p d2" d="M0 570H180L230 520H480L520 560H820L870 610H1200"/><path className="p d3" d="M300 700V570M700 0V130M1000 700V610"/><path className="p d4" d="M0 350H120L160 310H380M760 350H1040L1080 390H1200"/></g><g fill="#0b8fd9"><circle cx="220" cy="130" r="4"/><circle cx="520" cy="170" r="4"/><circle cx="900" cy="130" r="4"/><circle cx="480" cy="520" r="4"/><circle cx="820" cy="560" r="4"/><circle cx="160" cy="310" r="4"/><circle cx="1040" cy="350" r="4"/></g></svg><span className="bi b1"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg></span><span className="bi b2"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg></span><span className="bi b3"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg></span><span className="bi b4"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg></span></div><div className="w"><div>
<span className="pill">📍 Raiwala, Dehradun • Uttarakhand</span>
<h1>Everything Electrical & <em>Electronic</em>, Under One Roof</h1>
<p className="hi">अतुल इलेक्ट्रिकल्स – वायर से लेकर AC तक, सब एक जगह</p>
<p className="lead">Welcome to <b>Atul Electricals & Electronics</b>, your trusted neighbourhood shop for wires, switches, fans, lighting, home appliances and personal grooming gadgets. Quality products, honest prices and friendly service.</p>
<div className="cta"><a className="btn blue" href="#products">Browse Products</a><a className="btn wh" href="https://www.google.com/maps/search/?api=1&query=Atul+Electricals+Raiwala+Rishikesh">Get Directions</a></div>
<div className="tr"><span><i>🛡</i>Genuine Products</span><span><i>✓</i>Indo Asian Dealer</span><span><i>★</i>5.0 on Google</span></div></div>
<div className="hg"><div className="hc"><div className="hp"><Image src="/images/tv.jpg" alt="LED TV" width={1024} height={1024} /></div><div className="hp"><Image src="/images/wm.jpg" alt="Washing machine" width={1024} height={1024} /></div></div>
<div className="hc off"><div className="hp"><Image src="/images/fan.jpg" alt="Ceiling fan" width={1024} height={1024} /></div><div className="hp"><Image src="/images/ac.jpg" alt="Air conditioner" width={1024} height={1024} /></div></div></div>
</div></section>
<div className="strip"><div className="w"><span>✓ Genuine products</span><span>✓ Warranty guidance</span><span>✓ Options for every budget</span><span>✓ Advice for electricians</span></div></div>
<section className="brands" aria-label="Brands"><div className="w"><p>Trusted brands we carry</p></div><div className="mq"><div className="mt"><div className="mg"><span className="hl">Indo Asian</span><span>Havells</span><span>Anchor</span><span>Polycab</span><span>Bajaj</span><span>Crompton</span><span>V-Guard</span><span>Sujata</span></div><div className="mg" aria-hidden="true"><span className="hl">Indo Asian</span><span>Havells</span><span>Anchor</span><span>Polycab</span><span>Bajaj</span><span>Crompton</span><span>V-Guard</span><span>Sujata</span></div></div></div></section>

<section className="sec" id="products"><div className="w">
<h2>Everything electrical and electronic under one roof</h2>
<p className="sub">A complete range for homes, offices and projects. Stock and models change, so call or visit to check what is available today.</p>
<Products /></div></section>

<section className="sec" style={{paddingTop:'0'}}><div className="w"><div className="feat">
<div className="tx"><h2>Beat the Raiwala summer</h2><p>Compare fans, ACs and refrigerators by room size, power use and star rating. Tell us your room and budget, and we will help you pick.</p><a className="btn" href="#visit">Ask in store</a></div>
<div className="im"><Image src="/images/ac.jpg" alt="Air conditioner" width={1024} height={1024} /><Image src="/images/fr.jpg" alt="Refrigerator" width={1024} height={1024} /></div></div></div></section>

<section className="sec band" id="shop-by"><div className="w"><h2>Useful choices for every customer</h2>
<p className="sub">Start with your item list, room sizes, electrical load and budget.</p>
<ShopBy /></div></section>

<section className="sec" id="guide"><div className="w"><h2>What to check before you choose</h2>
<p className="sub">A few clear details help you avoid the wrong size, capacity or specification.</p>
<Guide />
<div className="note">For fixed wiring, distribution boards and high-load appliances, use a qualified electrician for assessment and installation.</div></div></section>

<section className="sec" style={{paddingTop:'0'}}><div className="w"><h2>A simpler way to shop</h2><p className="sub">A little preparation narrows the choices quickly.</p>
<div className="steps"><div className="st"><b>Step 1</b><h3>Prepare</h3><p>Note your items, quantities, sizes and budget. Bring the old part or a photo.</p></div>
<div className="st"><b>Step 2</b><h3>Compare</h3><p>Check specifications, energy use, dimensions and features with our team.</p></div>
<div className="st"><b>Step 3</b><h3>Confirm</h3><p>Ask about stock, warranty, delivery and installation before you pay.</p></div></div></div></section>

<section className="sec band"><div className="w"><h2>A shop you can rely on</h2><p className="sub">Simple, safe buying through practical product comparison.</p>
<div className="why"><div><h3>Quality-focused range</h3><p>Ask about specifications, safety markings and warranty options.</p></div><div><h3>Every budget</h3><p>Everyday essentials, premium finishes and energy-saving models.</p></div><div><h3>Helpful guidance</h3><p>Compare wattage, capacity, size and features before you buy.</p></div><div><h3>Local convenience</h3><p>Near Shiv Chowk, Raiwala. Open until 9:30 pm.</p></div></div></div></section>

<section className="sec" id="about"><div className="w about">
<div><h2>Serving Raiwala & Dehradun With Pride</h2>
<p className="ap">Atul Electricals & Electronics is a trusted electrical shop near Shiv Chowk in Raiwala. We stock a complete range, from wiring and switchgear to home appliances and personal grooming products, all in one place.</p>
<p className="ap">We believe in offering genuine products from brands you can trust, and we are an authorised dealer of Indo Asian products. Our focus is on quality, honest pricing and personal service for homeowners, electricians, builders and businesses across the area.</p>
<p className="ap">Whether you are setting up a new home, renovating an office or just need a replacement bulb, our team is here to guide you. Visit us in Raiwala and see the difference of shopping at a store that cares.</p>
<div className="acs"><div className="ac"><i><svg className="ic" viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg></i><div><b>Customer First</b><span>Your satisfaction is our priority</span></div></div><div className="ac"><i><svg className="ic" viewBox="0 0 24 24"><path d="M7 11v9H4v-9zM7 11l4-7c2 0 3 1 3 3v3h5a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2H7"/></svg></i><div><b>Honest Pricing</b><span>Fair, transparent prices always</span></div></div><div className="ac"><i><svg className="ic" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6"/></svg></i><div><b>Expert Team</b><span>Experience you can ask questions</span></div></div><div className="ac"><i><svg className="ic" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></i><div><b>Quality Assured</b><span>Genuine, warranted products</span></div></div></div></div>
<div className="ai"><div className="ph"><Image src="/images/sw.jpg" alt="Modular switches and sockets at the shop" width={1024} height={1024} /></div>
<div className="ab"><i><svg className="ic" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/></svg></i><div><b>5.0 ★ on Google</b><span>Trusted by local customers</span></div></div></div>
</div></section>

<section className="sec" style={{paddingTop:'0'}}><div className="w"><h2>Rated 5.0 on Google</h2><p className="sub">From customers who shopped with us.</p>
<div className="revs"><div className="rev"><div className="s">★★★★★</div><p>A good place to purchase electricals items. Authorised dealer of Indo Asian products.</p><b>Pravindra Kumar</b><span>Google review</span></div>
<div className="rev"><div className="s">★★★★★</div><p>Best quality products in market.</p><b>Rohan Joshi</b><span>Local Guide, Google review</span></div>
<div className="rev"><div className="s">★★★★★</div><p>Good service here.</p><b>Harry Nautiyal</b><span>Google review</span></div></div></div></section>

<section className="sec" id="faq" style={{paddingTop:'0'}}><div className="w"><h2>Helpful answers before you visit</h2><p className="sub">Prepare your requirements and ask the right questions.</p>
<details><summary>Can I bring an electrician&apos;s material list?</summary><p>Yes. Bring your list, room plan or a product photo so categories, sizes and alternatives can be discussed clearly.</p></details>
<details><summary>How should I choose between two appliance models?</summary><p>Compare capacity, dimensions, daily power use, features, service availability and warranty, not only the price.</p></details>
<details><summary>Are all products always available?</summary><p>Models, colours and sizes change. Call or visit to check current availability and alternatives.</p></details>
<details><summary>What should I carry for a replacement?</summary><p>Bring the old part or a clear photo with any visible rating, size or model details.</p></details>
<details><summary>How do warranties work?</summary><p>Terms vary by brand and model. Ask about the bill, warranty card and service process before purchase.</p></details>
<details><summary>Can I ask about delivery or installation?</summary><p>Yes, please enquire at the shop for the options available for your product and location.</p></details></div></section>

<section className="sec" id="visit"><div className="w"><div className="vc">
<div className="vl"><h2>Visit Our Store Today</h2>
<p className="vs">Come see our full range in person. Our team is always happy to help you pick the right product for your home or project.</p>
<div className="vr"><i><svg className="ic" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></i><div><b>Address</b><span>Near Shiv Chowk, Raiwala, Dehradun, Uttarakhand 249205</span></div></div>
<div className="vr"><i><svg className="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></i><div><b>Store Hours</b><span>Open daily, closes 9:30 PM</span></div></div>
<div className="vr"><i><svg className="ic" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></i><div><b>Call / WhatsApp</b><span><a href="tel:+918279344070">8279344070</a></span></div></div>
<div className="cta" style={{marginTop:'26px'}}><a className="btn" href="https://www.google.com/maps/search/?api=1&query=Atul+Electricals+Raiwala+Rishikesh">📍 Open in Google Maps</a><a className="btn alt" href="https://wa.me/918279344070">WhatsApp</a></div></div>
<div className="vm"><iframe title="Atul Electricals location" src="https://www.google.com/maps?q=Atul+Electricals+Raiwala+Rishikesh&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
</div></div></section>
</main>
<footer><div className="w"><span>© 2026 Atul Electricals & Electronics, Raiwala</span><span>Authorised dealer of Indo Asian products</span></div></footer>
<a className="btn fab" href="tel:+918279344070">📞 Call</a>
    </>
  );
}
