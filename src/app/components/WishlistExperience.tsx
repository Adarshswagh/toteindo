'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useStore } from '../lib/store';
import ProductGrid from './ProductGrid';
import PageHero from './PageHero';
import HandGesture from './HandGesture';

export default function WishlistExperience() {
  const { wishlistProducts } = useStore();

  return (
    <>
      <PageHero
        eyebrow="Liked"
        title="Saved with"
        accent="a like."
        description="Tap the heart on any bag. Your favourites live here."
        image="/images/lifestyle/campaign.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          {wishlistProducts.length > 0 ? (
            <ProductGrid products={wishlistProducts} />
          ) : (
            <motion.div
              className="mx-auto max-w-lg py-8 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-5 flex justify-center">
                <HandGesture pose="point" className="h-16 w-16" />
              </div>
              <h2 className="display-title mb-3 text-[#1D1F1F]" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
                Nothing liked yet.
              </h2>
              <p className="section-copy mb-8">
                Wander the shop and tap the heart when a bag feels like yours.
              </p>
              <Link href="/shop" className="btn-primary">
                Browse the Shop
                <HandGesture pose="wave" tone="cream" className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
