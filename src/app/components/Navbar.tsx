'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoImage from './LogoImage';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { useStore } from '../lib/store';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Bulk Orders', href: '/bulk-orders' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlistCount } = useStore();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="relative z-40 border-b border-[#ede9e0] bg-[#FDFAF6]" aria-label="Primary">
        <div className="site-wrap flex h-[64px] items-center justify-between sm:h-[70px] lg:h-[76px]">
          <div className="flex min-w-0 items-center gap-3 lg:gap-10">
            <button
              onClick={() => setMobileOpen(true)}
              className="icon-btn -ml-2 inline-flex lg:hidden"
              aria-label="Open menu"
              id="mobile-menu-open"
            >
              <Menu size={22} strokeWidth={1.75} />
            </button>

            <Link href="/" className="logo-link flex shrink-0 items-center" aria-label="Toteindo home">
              <LogoImage className="h-9 w-[124px] sm:h-10 sm:w-[145px] lg:h-11 lg:w-[160px]" />
            </Link>

            <div className="hidden items-center gap-7 lg:flex xl:gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <IconLink href="/search" label="Search" id="search-button">
              <Search size={18} strokeWidth={1.75} />
            </IconLink>
            <IconLink href="/account" label="Profile" id="account-button">
              <User size={18} strokeWidth={1.75} />
            </IconLink>
            <IconLink href="/wishlist" label="Wishlist" id="wishlist-button" badge={wishlistCount}>
              <Heart size={18} strokeWidth={1.75} />
            </IconLink>
            <IconLink href="/cart" label="Cart" id="cart-button" badge={cartCount}>
              <ShoppingBag size={18} strokeWidth={1.75} />
            </IconLink>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1D1F1F]/60 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 bottom-0 left-0 flex w-[min(320px,85vw)] flex-col justify-between bg-[#FDFAF6] shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex h-[64px] items-center justify-between border-b border-[#ede9e0] px-6">
              <span className="font-display text-xl font-bold tracking-[0.18em] text-[#7E1323]">TOTEINDO</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="icon-btn -mr-2"
                aria-label="Close menu"
                id="mobile-menu-close"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>
            <div className="flex flex-col space-y-1 px-4 py-4">
              {[
                ...navLinks,
                { label: 'Search', href: '/search' },
                { label: 'Profile', href: '/account' },
                { label: 'Wishlist', href: '/wishlist' },
                { label: 'Cart', href: '/cart' },
                { label: 'Sustainability', href: '/sustainability' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-md px-3 py-3 font-ui text-[12px] font-bold uppercase tracking-[2px] text-[#1D1F1F] transition-all duration-200 hover:bg-[#7E1323]/5 hover:text-[#7E1323]"
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    size={15}
                    className="text-[#1D1F1F]/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#7E1323]"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#ede9e0] bg-[#F7F3EC]/50 p-6">
            <p className="mb-3 font-ui text-[10px] font-bold uppercase tracking-[2px] text-[#B38A4D]">
              Conscious Luxury
            </p>
            <p className="font-ui text-xs leading-relaxed text-[#1D1F1F]/70">
              Premium handcrafted canvas totes & lifestyle essentials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center py-2 font-ui text-[12px] font-bold uppercase tracking-[2px] transition-colors duration-200 ${
        active ? 'text-[#7E1323]' : 'text-[#1D1F1F] hover:text-[#7E1323]'
      }`}
    >
      <span>{children}</span>
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-[#7E1323] transition-all duration-300 ease-out ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}

function IconLink({
  href,
  children,
  label,
  id,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  id?: string;
  badge?: number;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`icon-btn relative inline-flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10 ${
        active ? 'bg-[#7E1323]/8 text-[#7E1323]' : ''
      }`}
      aria-label={label}
      id={id}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute top-1 right-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#7E1323] px-1 font-ui text-[9px] font-bold text-white ring-2 ring-[#FDFAF6]">
          {badge}
        </span>
      )}
    </Link>
  );
}
