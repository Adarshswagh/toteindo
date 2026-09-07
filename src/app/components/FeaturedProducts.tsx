import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '../lib/data';
import ProductGrid from './ProductGrid';

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-[#F7F3EC]" aria-label="Featured products">
      <div className="site-wrap">
        <div className="section-head is-center">
          <div className="section-kicker is-center">
            <span className="gold-divider" />
            <span className="eyebrow">Our Collection</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title mb-2 text-[#1D1F1F]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 44px)' }}
          >
            Carry What Matters
          </h2>
          <p className="mx-auto max-w-md font-ui text-[15px] font-light leading-relaxed text-[#5a5c5c]">
            Every piece designed with intention for your everyday journey.
          </p>
        </div>

        <ProductGrid products={products.slice(0, 4)} />

        <div className="mt-10 text-center lg:mt-12">
          <Link href="/shop" className="btn-outline" id="view-all-products">
            View Full Collection
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
