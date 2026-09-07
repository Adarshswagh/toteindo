import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import BrandIntro from '../components/BrandIntro';
import CraftSection from '../components/CraftSection';
import WhyToteindo from '../components/WhyToteindo';
import BrandStatement from '../components/BrandStatement';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'About — Toteindo',
  description:
    'Toteindo is a Made-in-India canvas brand. Everyday essentials, thoughtfully reimagined for modern living.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Everyday essentials,"
        accent="thoughtfully reimagined."
        description="A canvas brand from India — designed for how people actually live, work and wander."
        image="/images/story/brand-intro.jpg"
      />
      <BrandIntro />
      <CraftSection />
      <WhyToteindo />
      <BrandStatement />
      <Newsletter />
    </>
  );
}
