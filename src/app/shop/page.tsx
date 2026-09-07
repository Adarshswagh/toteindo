import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import ShopCatalog from '../components/ShopCatalog';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Shop — Toteindo Premium Canvas Bags',
  description: 'Shop Toteindo canvas totes, designer bags, slings and pouches. Made in India, built for everyday carry.',
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Carry what"
        accent="matters."
        description="Premium canvas essentials for work, travel, college and everyday living."
        image="/images/lifestyle/hero.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          <ShopCatalog />
        </div>
      </section>
      <Newsletter />
    </>
  );
}
