import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const lifestylePanels = [
  { src: '/images/lifestyle/campaign.jpg', alt: 'Toteindo at a local market', label: 'The Market Run' },
  { src: '/images/lifestyle/hero.jpg', alt: 'Toteindo at a café', label: 'The Café Visit' },
  { src: '/images/story/brand-intro.jpg', alt: 'Toteindo lifestyle flatlay', label: 'The Reading Nook' },
];

export default function LifestyleSection() {
  return (
    <section className="section-padding bg-[#F7F3EC]" aria-label="Lifestyle editorial">
      <div className="site-wrap">
        <div className="section-head flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">The Toteindo Life</span>
            </div>
            <h2
              className="display-title italic text-[#1D1F1F]"
              style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
            >
              Made to go wherever
              <br />
              life takes you.
            </h2>
            <p className="mt-2 font-ui text-sm font-light text-[#5a5c5c]">
              From morning office desks to college campus walks, quiet corner cafés, and weekend farmer markets.
            </p>
          </div>
          <Link href="/collections" className="text-link shrink-0 self-start sm:self-auto">
            Explore All Bags
            <ArrowRight size={12} />
          </Link>
        </div>

        <div className="relative mb-4 overflow-hidden">
          <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6]">
            <Image
              src="/images/lifestyle/editorial.jpg"
              alt="Toteindo lifestyle — café, bookstore, market, travel"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F1F]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <p className="font-display text-2xl italic font-light leading-tight text-white sm:text-3xl lg:text-4xl">
                Work. Wander. Create. Repeat.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {lifestylePanels.map((panel) => (
            <div key={panel.src} className="group relative aspect-[4/5] overflow-hidden img-zoom">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-ui text-[10px] uppercase tracking-[2px] text-[#D4B37A]">{panel.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
