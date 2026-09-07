'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '../lib/data';
import ProductGrid from './ProductGrid';

export default function ShopCatalog({ initialCategory }: { initialCategory?: string }) {
  const [active, setActive] = useState(initialCategory ?? 'All');

  const filtered = useMemo(() => {
    if (active === 'All') return products;
    return products.filter((product) => product.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {['All', ...categories.map((category) => category.name)].map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            className={`px-4 py-2 font-ui text-[10px] uppercase tracking-[1.8px] transition-colors ${
              active === name
                ? 'bg-[#7E1323] text-white'
                : 'border border-[#e8e2d8] bg-white text-[#3a3c3c] hover:border-[#7E1323]/40'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
