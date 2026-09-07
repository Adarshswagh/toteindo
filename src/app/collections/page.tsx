import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Collections — Toteindo',
  description: 'Explore Toteindo collections: everyday totes, designer totes, sling bags and pouches.',
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Find your"
        accent="perfect carry."
        description="Four collections, one idea — canvas pieces that work as hard as you do."
        image="/images/lifestyle/campaign.jpg"
      />
      <CategorySection showLink={false} />
      <Newsletter />
    </>
  );
}
