import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  { value: 'Tote + Indo', label: 'Origin & Meaning' },
  { value: '100%', label: 'Natural Canvas' },
  { value: 'Eco-Friendly', label: 'Plastic Alternative' },
  { value: 'Handcrafted', label: 'Made In India' },
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
            <div className="space-y-4 font-ui text-[15px] font-light leading-[1.8] text-[#5a5c5c] mb-8">
              <p>
                <strong className="font-medium text-[#1D1F1F]">Toteindo</strong> is an Indian lifestyle brand that celebrates sustainability, creativity, and conscious living through thoughtfully designed canvas tote bags.
              </p>
              <p>
                Born from the idea of combining <strong className="font-medium text-[#7E1323]">&ldquo;Tote&rdquo;</strong> and <strong className="font-medium text-[#7E1323]">&ldquo;Indo&rdquo; (India)</strong>, Toteindo creates products that are more than just everyday bags—they are an expression of individuality, culture, and responsible choices.
              </p>
              <p>
                Every tote is crafted using durable natural canvas, designed with a minimalist aesthetic, and made to replace single-use plastic with a stylish, reusable alternative. Whether you&apos;re heading to work, college, a café, the market, or traveling, Toteindo bags are made to be your everyday companion.
              </p>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="stat-chip">
                  <p className="font-display text-lg leading-none text-[#7E1323] sm:text-xl font-medium">{pillar.value}</p>
                  <p className="mt-2 font-ui text-[10px] font-medium uppercase tracking-[1.4px] text-[#8B6B4E]">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-link">
                Read Full Story
                <span aria-hidden="true">→</span>
              </Link>
              <span className="font-display italic text-[#B38A4D] text-sm">
                Carry Better. Live Better.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ede9e0] img-zoom">
              <Image
                src="/images/story/brand-intro.jpg"
                alt="Toteindo handcrafted canvas bags lifestyle"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#7E1323] px-5 py-3 text-white">
              <p className="font-display text-lg leading-none">Crafted With Care</p>
              <p className="mt-1.5 font-ui text-[9px] uppercase tracking-[2.2px] text-white/85">Made In India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
