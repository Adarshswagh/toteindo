import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  { value: '2020', label: 'Founded' },
  { value: '100%', label: 'Natural Canvas' },
  { value: 'India', label: 'Handcrafted' },
  { value: 'Zero', label: 'Waste Design' },
];

export default function BrandIntro() {
  return (
    <section className="section-padding bg-[#FDFAF6]" aria-label="About Toteindo">
      <div className="site-wrap">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">About Toteindo</span>
            </div>
            <h2
              className="display-title text-[#1D1F1F] mb-5"
              style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}
            >
              Everyday essentials,
              <br />
              <em className="italic font-normal text-[#7E1323]">thoughtfully reimagined.</em>
            </h2>
            <p className="section-copy mb-8 max-w-[490px]">
              Toteindo creates premium canvas products designed for the modern Indian lifestyle —
              combining timeless aesthetics, durable craftsmanship, and conscious choices that
              make a difference.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="stat-chip">
                  <p className="font-display text-xl leading-none text-[#7E1323] sm:text-2xl">{pillar.value}</p>
                  <p className="mt-2 font-ui text-[10px] font-medium uppercase tracking-[1.4px] text-[#8B6B4E]">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/about" className="text-link">
              Discover Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ede9e0] img-zoom">
              <Image
                src="/images/story/brand-intro.jpg"
                alt="Toteindo handcrafted canvas bags lifestyle"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#7E1323] px-5 py-3 text-white">
              <p className="font-display text-lg leading-none">Crafted</p>
              <p className="mt-1.5 font-ui text-[9px] uppercase tracking-[2.2px] text-white/85">To Perfection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
