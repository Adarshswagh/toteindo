import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import CraftSection from '../components/CraftSection';
import WhyToteindo from '../components/WhyToteindo';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Craftsmanship — Toteindo',
  description: 'Natural canvas, Indian fabrics and precision stitching. Rooted in India, designed for today.',
};

export default function CraftsmanshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Craft"
        title="Rooted in India."
        accent="Designed for today."
        description="Contemporary simplicity with the richness of Indian craftsmanship."
        image="/images/story/craft.jpg"
      />
      <CraftSection />
      <WhyToteindo />
      <Newsletter />
    </>
  );
}
