'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { formatPrice, type Product } from '../lib/data';
import { useStore } from '../lib/store';

export default function ProductGrid({ products }: { products: Product[] }) {
  const { toggleWishlist, isWishlisted, addToCart } = useStore();

  if (products.length === 0) {
    return (
      <p className="section-copy py-10 text-center">
        No pieces in this collection yet. Explore the rest of the shop.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.article
          key={product.id}
          className="product-card group flex flex-col"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
        >
          <div className="relative mb-3 aspect-[3/4] overflow-hidden bg-[#ede9e0]">
            <Link
              href={`/products/${product.slug}`}
              className="absolute inset-0 block"
              aria-label={product.name}
            >
              <Image
                src={product.image}
                alt={`${product.name} — Premium canvas bag by Toteindo`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </Link>
            {product.badge && (
              <span className="absolute top-3 left-3 z-10 bg-[#7E1323] px-2 py-1 font-ui text-[9px] uppercase tracking-[1.6px] text-white">
                {product.badge}
              </span>
            )}
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center bg-white"
              aria-label={`${isWishlisted(product.id) ? 'Remove from' : 'Add to'} wishlist`}
            >
              <Heart
                size={14}
                strokeWidth={1.5}
                className={
                  isWishlisted(product.id)
                    ? 'fill-[#7E1323] stroke-[#7E1323]'
                    : 'stroke-[#1D1F1F]'
                }
              />
            </button>
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              className="product-overlay absolute inset-x-0 bottom-0 hidden items-center justify-center gap-2 bg-[#1D1F1F] py-3 text-white lg:flex"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              <span className="font-ui text-[10px] uppercase tracking-[1.8px]">Quick Add</span>
            </button>
          </div>
          <Link href={`/products/${product.slug}`} className="flex min-h-[88px] flex-col">
            <p className="mb-1 font-ui text-[9px] uppercase tracking-[1.8px] text-[#B38A4D]">
              {product.category}
            </p>
            <h3 className="mb-2 font-display text-base leading-snug text-[#1D1F1F] transition-colors group-hover:text-[#7E1323] sm:text-[18px]">
              {product.name}
            </h3>
            <p className="mt-auto font-ui text-sm text-[#7E1323]">
              {formatPrice(product.price)}
              {product.originalPrice && (
                <span className="ml-2 text-xs text-[#8B6B4E] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </p>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
