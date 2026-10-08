import { Bricolage_Grotesque, Hind } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--f-d', display: 'swap' });
const body = Hind({ subsets: ['latin', 'devanagari'], weight: ['400', '500', '600'], variable: '--f-b', display: 'swap' });

export const metadata = {
  title: 'Atul Electricals & Electronics | Raiwala, Dehradun',
  description:
    'Atul Electricals & Electronics near Shiv Chowk, Raiwala. Wires, switches, MCBs, fans, lighting, LED TVs, refrigerators, washing machines, ACs and home appliances. Authorised dealer of Indo Asian products.',
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
