const stats = [
  { value: '500+', unit: 'Washes', label: 'Reusable' },
  { value: '5+', unit: 'Years', label: 'Durable' },
  { value: '100%', unit: 'Cotton', label: 'Natural Canvas' },
  { value: 'Zero', unit: 'Waste Design', label: 'Long-lasting' },
];

const tags = ['Reusable', 'Durable', 'Natural Canvas', 'Long-lasting', 'Thoughtfully Designed'];

export default function SustainabilitySection() {
  return (
    <section className="section-padding bg-[#F7F3EC]" aria-label="Sustainability">
      <div className="site-wrap">
        <div className="section-head is-center">
          <div className="section-kicker is-center">
            <span className="gold-divider" />
            <span className="eyebrow">Our Commitment</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title mb-4 text-[#1D1F1F]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
          >
            Small choices.
            <br />
            <em className="italic text-[#7E1323]">Meaningful impact.</em>
          </h2>
          <p className="section-copy mx-auto max-w-lg">
            Every reusable Toteindo product is a step towards reducing our dependence on disposable alternatives.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-px bg-[#d4c9b4] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#F7F3EC] px-5 py-8 text-center sm:px-8 sm:py-10">
              <p
                className="font-display leading-none text-[#7E1323]"
                style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
              >
                {stat.value}
              </p>
              <p className="mt-2 font-ui text-[10px] uppercase tracking-[2px] text-[#8B6B4E]">{stat.unit}</p>
              <p className="mt-1 font-ui text-sm text-[#1D1F1F]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#7E1323]/25 px-4 py-2 font-ui text-[10px] uppercase tracking-[2px] text-[#7E1323]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
