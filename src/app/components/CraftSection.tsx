import Image from 'next/image';

const craftPoints = [
  {
    label: 'Primary: 100% Premium Natural Canvas',
    desc: 'High-density, unbleached cotton canvas providing unmatched durability, breathability, and eco-friendly strength.',
  },
  {
    label: 'Handblock & Printed Cotton Accents',
    desc: 'Authentic Indian artisanal prints and decorative fabric details that celebrate regional textile heritage.',
  },
  {
    label: 'Cotton Rope & Reinforced Handles',
    desc: 'Ergonomically crafted handles designed for comfortable shoulder carry with heavy everyday loads.',
  },
  {
    label: 'Precision Stitching & Easy Maintenance',
    desc: 'Double-stitched stress points, clean seam finishes, and washable construction built for years of dependable use.',
  },
];

export default function CraftSection() {
  return (
    <section className="section-padding overflow-hidden bg-[#FDFAF6]" aria-label="Indian craftsmanship">
      <div className="site-wrap">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-3 lg:order-1 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden img-zoom">
              <Image
                src="/images/story/craft.jpg"
                alt="Indian block print fabric detail on Toteindo canvas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden img-zoom">
              <Image
                src="/images/products/designer-tote.jpg"
                alt="Toteindo designer tote with Indian craft details"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Materials & Craftsmanship</span>
            </div>
            <h2
              className="display-title mb-5 text-[#1D1F1F]"
              style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}
            >
              Rooted in India.
              <br />
              <em className="italic text-[#7E1323]">Designed for everyday living.</em>
            </h2>
            <p className="section-copy mb-8">
              Every Toteindo product is designed for people who appreciate minimal aesthetics, handcrafted details, and conscious living. We marry premium natural canvas with thoughtful Indian craft to make everyday essentials practical and long-lasting.
            </p>
            <div className="border-t border-[#e8e2d8]">
              {craftPoints.map((item, i) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-[#e8e2d8] py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#7E1323]/8">
                    <span className="font-ui text-[10px] font-medium text-[#7E1323]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <div>
                    <p className="mb-1 font-ui text-[12px] font-medium uppercase tracking-[1.5px] text-[#7E1323]">
                      {item.label}
                    </p>
                    <p className="font-ui text-xs sm:text-sm font-light leading-relaxed text-[#5a5c5c]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
