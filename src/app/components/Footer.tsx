import Link from 'next/link';
import LogoImage from './LogoImage';
import { Mail, MessageCircle } from 'lucide-react';
import HandGesture from './HandGesture';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z"/>
  </svg>
);

const footerLinks = {
  SHOP: [
    { label: 'All Products', href: '/shop' },
    { label: 'Tote Bags', href: '/collections/everyday-totes' },
    { label: 'Designer Totes', href: '/collections/designer-totes' },
    { label: 'Sling Bags', href: '/collections/sling-bags' },
    { label: 'Pouches', href: '/collections/drawstring-pouches' },
  ],
  ABOUT: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Craftsmanship', href: '/craftsmanship' },
  ],
  HELP: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'Contact', href: '/contact' },
  ],
  BUSINESS: [
    { label: 'Bulk Orders', href: '/bulk-orders' },
    { label: 'Corporate Gifting', href: '/bulk-orders#corporate' },
    { label: 'Custom Orders', href: '/bulk-orders#custom' },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, href: 'https://instagram.com/toteindo', label: 'Instagram' },
  { icon: <FacebookIcon />, href: 'https://facebook.com/toteindo', label: 'Facebook' },
  { icon: <TwitterIcon />, href: 'https://twitter.com/toteindo', label: 'Twitter / X' },
  { icon: <YoutubeIcon />, href: 'https://youtube.com/@toteindo', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1F1F] text-white" aria-label="Footer">
      {/* Main Footer */}
      <div className="site-wrap pb-10 pt-14 sm:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <LogoImage width={130} height={48} inverted />
            </div>
            <p className="font-ui text-white/50 text-sm font-light leading-[1.8] mb-4 max-w-md lg:max-w-xs">
              Premium canvas products for modern everyday life. Designed with Indian creativity, crafted to perfection.
            </p>
            <div className="mb-6">
              <HandGesture pose="wave" tone="gold" className="h-8 w-8" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#B38A4D] hover:text-[#B38A4D] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:hello@toteindo.com"
                className="flex items-center gap-2 text-white/40 hover:text-[#B38A4D] transition-colors font-ui text-xs"
                id="footer-email"
              >
                <Mail size={12} strokeWidth={1.5} />
                hello@toteindo.com
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-[#B38A4D] transition-colors font-ui text-xs"
                id="footer-whatsapp"
              >
                <MessageCircle size={12} strokeWidth={1.5} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="font-ui text-[10px] font-medium tracking-[3px] uppercase text-[#B38A4D] mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-ui text-white/45 text-sm font-light hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-wrap py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-ui text-white/30 text-xs font-light">
              © {new Date().getFullYear()} Toteindo. All rights reserved. Made with ♥ in India.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Shipping Policy', href: '/shipping' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-ui text-white/30 text-xs font-light hover:text-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
