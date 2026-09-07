import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden" aria-label="Brand statement">
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle/campaign.jpg"
          alt="Toteindo brand campaign"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1D1F1F]/78" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="site-wrap flex flex-col items-center py-8 text-center sm:py-12">
          <div className="section-kicker is-center mb-8">
            <span className="gold-divider" />
            <span className="eyebrow">Toteindo</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title mb-6"
            style={{ fontSize: 'clamp(42px, 8vw, 88px)' }}
          >
            <span className="block text-white">Carry Better.</span>
            <span className="block italic text-[#B38A4D]">Live Better.</span>
          </h2>
          <p className="mb-8 font-display text-xl italic text-white/55 sm:text-2xl">
            Carry Toteindo.
          </p>
          <Link href="/shop" className="btn-primary" id="brand-statement-cta">
            Shop Now
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
