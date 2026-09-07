'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../lib/data';
import { useStore } from '../lib/store';
import PageHero from './PageHero';
import HandGesture from './HandGesture';

export default function CartExperience() {
  const { cartProducts, setQty, removeFromCart, cartTotal } = useStore();

  return (
    <>
      <PageHero
        eyebrow="Cart"
        title="Your"
        accent="carry."
        description="Review what you have chosen, then take it home."
        image="/images/lifestyle/hero.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          {cartProducts.length === 0 ? (
            <motion.div
              className="mx-auto max-w-lg py-8 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-5 flex justify-center">
                <HandGesture pose="wave" className="h-16 w-16" />
              </div>
              <h2 className="display-title mb-3 text-[#1D1F1F]" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
                Your bag is empty.
              </h2>
              <p className="section-copy mb-8">
                Add a tote, a sling, or a pouch — we will hold it here.
              </p>
              <Link href="/shop" className="btn-primary">
                Start Shopping
                <HandGesture pose="point" tone="cream" className="h-5 w-5" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12">
              <div className="space-y-4">
                {cartProducts.map((item, index) => (
                  <motion.article
                    key={item.id}
                    className="bag-card flex gap-4 border border-[#e8e2d8] bg-white p-4 sm:gap-5 sm:p-5"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link href={`/products/${item.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden bg-[#ede9e0] sm:h-32 sm:w-28">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="120px" />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="font-ui text-[10px] uppercase tracking-[1.8px] text-[#B38A4D]">{item.category}</p>
                      <Link href={`/products/${item.slug}`} className="mt-1 font-display text-xl text-[#1D1F1F]">
                        {item.name}
                      </Link>
                      <p className="mt-1 font-ui text-sm text-[#7E1323]">{formatPrice(item.price)}</p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                        <div className="flex items-center border border-[#e8e2d8]">
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center"
                            onClick={() => setQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center font-ui text-sm">{item.qty}</span>
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center"
                            onClick={() => setQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#8B6B4E] hover:text-[#7E1323]"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.aside
                className="border border-[#e8e2d8] bg-white p-6 sm:p-7"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-display text-2xl">Summary</h2>
                  <HandGesture pose="ok" className="h-8 w-8" />
                </div>
                <div className="mb-3 flex justify-between font-ui text-sm text-[#5a5c5c]">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="mb-6 flex justify-between font-ui text-sm text-[#5a5c5c]">
                  <span>Shipping</span>
                  <span>{cartTotal >= 999 ? 'Free' : formatPrice(99)}</span>
                </div>
                <div className="mb-6 flex justify-between border-t border-[#e8e2d8] pt-4 font-ui text-[#1D1F1F]">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal + (cartTotal >= 999 ? 0 : 99))}</span>
                </div>
                <button type="button" className="btn-primary w-full">
                  Checkout
                  <HandGesture pose="point" tone="cream" className="h-5 w-5" />
                </button>
                <Link href="/shop" className="mt-4 block text-center text-link justify-center w-full">
                  Keep shopping
                </Link>
              </motion.aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
