import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import SustainabilitySection from '../components/SustainabilitySection';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Sustainability — Toteindo',
  description: 'Reusable canvas, natural materials and long-lasting design. Small choices, meaningful impact.',
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitment"
        title="Small choices."
        accent="Meaningful impact."
        description="Every reusable Toteindo piece is a step away from disposable bags."
        image="/images/story/craft.jpg"
      />
      <section className="section-padding bg-[#FDFAF6]">
        <div className="site-wrap max-w-3xl">
          <p className="section-copy mb-6">
            We design for reuse first. Natural canvas, careful stitching and simple shapes mean a bag
            can stay in rotation for years — not weeks.
          </p>
          <p className="section-copy">
            That is the whole idea: fewer throwaway bags, more pieces people actually want to carry.
          </p>
        </div>
      </section>
      <SustainabilitySection />
      <Newsletter />
    </>
  );
}
