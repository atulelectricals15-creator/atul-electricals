import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Atul Electricals & Electronics',
  description: 'Terms and conditions for using the Atul Electricals & Electronics website.'
};

const sections = [
['1. About the Website', <>This Website provides information about our shop, product categories and brands, buying guidance, and contact details. It helps you plan your purchase. <strong>Sales are completed at our store or through direct conversation with our team by phone or WhatsApp, not through online checkout on this Website.</strong></>],
['2. Product Information', <>Product names, categories, brands, images and descriptions are for general information and illustration only. Actual products may differ in colour, model, design, packaging or specifications. Brand names and logos belong to their respective owners. Mention of a brand does not mean we are affiliated with it, except where we state that we are an authorised dealer, such as for Indo Asian products. Please confirm model, specifications, size and capacity with our team before buying.</>],
['3. Availability', <>Stock, models, colours and sizes change often. A product shown or mentioned on the Website may not be in stock. Please call or visit the store to confirm availability and alternatives.</>],
['4. Prices and Payment', <>The Website does not guarantee prices. Prices are confirmed only at the store or by our team at the time of purchase. Prices, offers and discounts may change without prior notice and may vary by brand, model and time. Applicable taxes, such as GST, will be shown on the bill. Payment is made at purchase using the modes accepted by the store. A valid bill will be provided for every sale.</>],
['5. Warranty and Service', <>Warranty is provided by the respective brand or manufacturer, and terms vary by product. Keep your purchase bill and warranty card safe, as they are usually required for warranty claims. Warranty exclusions may include misuse, incorrect installation, voltage fluctuation, physical damage, unauthorised repair or normal wear and tear. Check the brand’s warranty card for details. We can guide you on the service process; repairs and replacements are handled according to the manufacturer’s policy.</>],
['6. Returns, Exchange and Cancellation', <>Returns, exchanges or refunds depend on the product, brand policy and item condition. Used, damaged-after-sale or installed products may not be eligible. Special-order and custom items may not be cancellable once ordered. Please ask about the policy for your product before payment.</>],
['7. Delivery and Installation', <>Delivery and installation, where available, depend on the product and location. Please enquire before purchase. Delivery times are estimates and may vary. ACs, geysers, inverters and similar items may be installed by the brand’s technician or an authorised installer.</>],
['8. Electrical Safety', <>Website guidance, including wire size, MCB rating, AC tonnage or inverter capacity, is general information and not a substitute for professional advice. For fixed wiring, distribution boards and high-load appliances, use a qualified electrician for assessment and installation. We are not responsible for loss or damage resulting from improper installation or reliance only on general Website information, to the extent permitted by law.</>],
['9. Use of the Website', <>You agree not to use the Website for unlawful purposes; attempt to hack, disrupt or damage the Website or its servers; copy, scrape or misuse Website content without permission; or send false, misleading or abusive messages.</>],
['10. Intellectual Property', <>Website content, including text, design, layout, logos and photographs created by us, belongs to Atul Electricals & Electronics unless otherwise stated. Do not copy, reproduce or republish it without written permission. Third-party brand names, logos and images belong to their respective owners.</>],
['11. Customer Reviews', <>Customer reviews and ratings shown on the Website, including Google reviews, represent the personal opinions of those customers and are for information. They do not guarantee any particular experience.</>],
['12. Third-Party Links and Services', <>The Website may link to third-party services such as Google Maps and WhatsApp. We do not control these services and are not responsible for their content, availability or privacy practices. Their own terms apply to your use of them.</>],
['13. Privacy', <>If you contact us by phone, WhatsApp or a form, we may collect details such as your name, phone number and requirements to respond to your enquiry and serve you better. We do not sell your personal information. We do not knowingly share it except as needed to complete a purchase, delivery or service, or where required by law.</>],
['14. Limitation of Liability', <>We try to keep the Website accurate and up to date, but do not guarantee it is free from errors, delays or interruptions. To the extent permitted by law, Atul Electricals & Electronics is not liable for indirect or consequential loss arising from Website use or reliance on its content.</>],
['15. Changes to These Terms', <>We may update these Terms from time to time. The updated version will be posted on this page with a new “Last updated” date. Continued use of the Website means you accept the updated terms.</>],
['16. Governing Law', <>These Terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the courts in Dehradun, Uttarakhand.</>]
];

export default function TermsPage() {
  return <main className="legal-page"><div className="w">
    <div className="crumb"><Link href="/">Home</Link> / Terms &amp; Conditions</div>
    <header className="legal-heading"><span className="eyebrow">Atul Electricals &amp; Electronics</span><h1>Terms &amp; Conditions</h1><p>Near Shiv Chowk, Raiwala, Dehradun, Uttarakhand – 249205</p><p><strong>Last updated:</strong> 21 October 2026</p></header>
    <p>Welcome to the website of Atul Electricals &amp; Electronics (“we”, “us”, “our”). By visiting or using <a href="https://atulelectricals.in">atulelectricals.in</a> (the “Website”), you agree to these Terms &amp; Conditions. If you do not agree, please do not use the Website.</p>
    {sections.map(([heading, body]) => <section className="legal-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
    <section className="legal-section"><h2>17. Contact Us</h2><p><strong>Atul Electricals &amp; Electronics</strong><br/>Near Shiv Chowk, Raiwala, Dehradun, Uttarakhand – 249205<br/><strong>Phone / WhatsApp:</strong> <a href="tel:+918279344070">8279344070</a><br/><strong>Store hours:</strong> Open daily, closes 9:30 PM<br/><strong>Email:</strong> Please contact us by phone or WhatsApp until an official email address is added.</p><a className="btn" href="https://wa.me/918279344070">Contact us on WhatsApp</a></section>
  </div></main>;
}
