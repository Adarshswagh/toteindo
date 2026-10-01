import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import SustainabilitySection from '../components/SustainabilitySection';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Sustainability — Toteindo | Replace Single-Use Plastic with Canvas',
  description:
    'At Toteindo, every bag represents a small step toward a greener future. Made to replace single-use plastic with a stylish, durable, reusable alternative.',
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitment"
        title="Small choices."
        accent="A greener future."
        description="We believe that sustainability should never compromise style. That's why our collections blend modern design with timeless simplicity."
        image="/images/story/craft.jpg"
      />
      <section className="section-padding bg-[#FDFAF6]">
        <div className="site-wrap max-w-4xl">
          <div className="border-l-2 border-[#7E1323] pl-6 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-[#1D1F1F] mb-3">
              Replacing single-use plastic with conscious design.
            </h2>
            <p className="font-ui text-[16px] font-light leading-[1.8] text-[#5a5c5c]">
              Every tote is designed with a minimalist aesthetic, crafted using durable natural canvas, and made to replace single-use plastic with a stylish, reusable alternative. Whether you&apos;re heading to work, college, a café, the market, or traveling, Toteindo bags are designed to be your everyday companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="border border-[#e8e2d8] bg-white p-6 sm:p-8">
              <span className="font-display text-xl text-[#7E1323] block mb-2">Our Promise</span>
              <p className="font-ui text-sm font-light leading-relaxed text-[#5a5c5c]">
                At Toteindo, every bag represents a small step toward a greener future. We are committed to creating products that are practical, stylish, and environmentally responsible—helping people carry more while leaving a smaller footprint on the planet.
              </p>
            </div>
            <div className="border border-[#e8e2d8] bg-white p-6 sm:p-8">
              <span className="font-display text-xl text-[#B38A4D] block mb-2">No Compromise on Style</span>
              <p className="font-ui text-sm font-light leading-relaxed text-[#5a5c5c]">
                We believe that eco-friendly habits stick only when products are a joy to use. By combining premium natural canvas with thoughtful Indian craft accents, each bag is something you proudly carry every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SustainabilitySection />
      <Newsletter />
    </>
  );
}
