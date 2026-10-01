import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import BrandIntro from '../components/BrandIntro';
import MissionVisionPromise from '../components/MissionVisionPromise';
import CraftSection from '../components/CraftSection';
import WhyToteindo from '../components/WhyToteindo';
import UpcomingProducts from '../components/UpcomingProducts';
import BrandStatement from '../components/BrandStatement';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'About Us — Toteindo | Sustainable Indian Lifestyle Brand',
  description:
    'Toteindo is an Indian lifestyle brand that celebrates sustainability, creativity, and conscious living through thoughtfully designed canvas tote bags. Carry Better. Live Better.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Everyday essentials,"
        accent="thoughtfully reimagined."
        description="Born from 'Tote' + 'Indo' (India) — creating sustainable, minimal canvas companions for modern living."
        image="/images/story/brand-intro.jpg"
      />
      <BrandIntro />
      <MissionVisionPromise />
      <CraftSection />
      <WhyToteindo />
      <UpcomingProducts />
      <BrandStatement />
      <Newsletter />
    </>
  );
}
