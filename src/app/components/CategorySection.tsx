import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories } from '../lib/data';

export default function CategorySection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section-padding bg-[#FDFAF6]" aria-label="Shop by category">
      <div className="site-wrap">
        <div className="section-head flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Shop By Category</span>
            </div>
            <h2
              className="display-title text-[#1D1F1F]"
              style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
            >
              Find Your
              <br />
              <em className="italic text-[#7E1323]">Perfect Carry.</em>
            </h2>
          </div>
          {showLink ? (
            <Link href="/collections" className="text-link shrink-0 self-start sm:self-auto">
              All Collections
              <ArrowRight size={12} />
            </Link>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Link
              key={category.id}
              href={`/collections/${category.slug}`}
              className="category-card group"
              id={`category-${category.id}`}
            >
              <Image
                src={category.image}
                alt={`${category.name} — ${category.description}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                <p className="mb-2 font-display text-4xl leading-none text-white/20">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl leading-tight text-white">{category.name}</h3>
                <p className="mt-1.5 mb-3 font-ui text-xs font-light leading-relaxed text-white/75">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[2px] text-[#D4B37A]">
                  Shop Now
                  <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
