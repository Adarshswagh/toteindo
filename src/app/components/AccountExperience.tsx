'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageHero from './PageHero';
import HandGesture from './HandGesture';

export default function AccountExperience() {
  const [tab, setTab] = useState<'signin' | 'join'>('signin');
  const [done, setDone] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="Welcome"
        accent="back."
        description="Your saved pieces, orders and notes — all in one quiet place."
        image="/images/story/brand-intro.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Your Space</span>
            </div>
            <h2 className="display-title mb-4 text-[#1D1F1F]" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              A quieter way to shop.
            </h2>
            <p className="section-copy mb-6 max-w-md">
              Sign in to keep a wishlist, move faster at checkout, and hear about new canvas drops first.
            </p>
            <div className="flex items-center gap-3">
              <HandGesture pose="ok" className="h-11 w-11" />
              <p className="font-ui text-sm text-[#8B6B4E]">Made in India. Saved for you.</p>
            </div>
          </motion.div>

          <motion.div
            className="account-card border border-[#e8e2d8] bg-white p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {done ? (
              <div className="py-6 text-center">
                <div className="mb-4 flex justify-center">
                  <HandGesture pose="wave" className="h-12 w-12" />
                </div>
                <Check className="mx-auto mb-3 text-[#7E1323]" size={22} />
                <p className="mb-2 font-display text-2xl">You are in.</p>
                <p className="section-copy">This is a preview account. Your likes and bag stay on this device.</p>
              </div>
            ) : (
              <>
                <div className="mb-6 grid grid-cols-2 gap-2">
                  {(['signin', 'join'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTab(item)}
                      className={`py-3 font-ui text-[11px] uppercase tracking-[2px] ${
                        tab === item ? 'bg-[#7E1323] text-white' : 'bg-[#F7F3EC] text-[#3a3c3c]'
                      }`}
                    >
                      {item === 'signin' ? 'Sign In' : 'Join'}
                    </button>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {tab === 'join' && (
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
                    />
                  )}
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
                  />
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
                  />
                  <button type="submit" className="btn-primary w-full">
                    {tab === 'signin' ? 'Sign In' : 'Create Account'}
                    <HandGesture pose="point" tone="cream" className="h-5 w-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
