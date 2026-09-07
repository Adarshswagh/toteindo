'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { products } from '../lib/data';
import ProductGrid from './ProductGrid';
import HandGesture from './HandGesture';
import PageHero from './PageHero';

export default function SearchExperience() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return products;
    return products.filter((product) =>
      [product.name, product.category, product.description].join(' ').toLowerCase().includes(value)
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find your"
        accent="next carry."
        description="Type a name, a mood, or a category — we will point you to the right bag."
        image="/images/lifestyle/editorial.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          <motion.div
            className="relative mx-auto mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-[#B38A4D]" size={18} />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search totes, slings, pouches..."
              className="w-full border border-[#e8e2d8] bg-white py-4 pr-14 pl-12 font-ui text-sm outline-none transition-colors focus:border-[#7E1323]"
              aria-label="Search products"
              id="search-input"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <HandGesture pose="point" className="h-8 w-8" />
            </div>
          </motion.div>

          <p className="mb-6 text-center font-ui text-[12px] uppercase tracking-[2px] text-[#8B6B4E]">
            {results.length} {results.length === 1 ? 'piece' : 'pieces'} found
          </p>

          {results.length > 0 ? (
            <ProductGrid products={results} />
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 flex justify-center">
                <HandGesture pose="wave" className="h-14 w-14" />
              </div>
              <p className="section-copy">Nothing matches that yet. Try “tote”, “sling”, or “pouch”.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
