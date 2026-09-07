'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Leaf } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'Happy Customers', icon: Users },
  { value: '100% Canvas', label: 'Natural Materials', icon: Leaf },
  { value: 'Made in India', label: 'Thoughtfully Crafted', icon: Sparkles },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const wordDropVariants: Variants = {
  hidden: { y: -28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemSlideDownVariants: Variants = {
  hidden: { y: -18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const doorOpenVariants: Variants = {
  hidden: { rotateY: 48, opacity: 0, scale: 0.98, transformOrigin: 'right center' },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformOrigin: 'right center',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const doorShutterVariants: Variants = {
  hidden: { scaleX: 1, transformOrigin: 'left center' },
  visible: {
    scaleX: 0,
    transformOrigin: 'left center',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

export default function Hero() {
  const line1Words = ['Carry', 'Better.'];
  const line2Words = ['Live', 'Better.'];

  return (
    <section className="bg-[#1D1F1F] overflow-hidden" aria-label="Hero" style={{ perspective: '1400px' }}>
      <div className="relative min-h-[82vh] lg:min-h-[86vh] flex flex-col">
        <motion.div
          variants={doorOpenVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/images/lifestyle/hero.jpg"
            alt="Young Indian woman carrying a premium Toteindo canvas tote bag in a warm sunlit café"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] sm:object-[60%_top]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161717]/85 via-transparent to-transparent" />
          <motion.div
            variants={doorShutterVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 bg-[#161717] z-10 pointer-events-none"
          />
        </motion.div>

        <div className="relative z-20 site-wrap flex flex-1 flex-col justify-center py-16 sm:py-20">
          <motion.div
            variants={containerVariants}
            initial="visible"
            animate="visible"
            className="max-w-[560px]"
          >
            <motion.div variants={itemSlideDownVariants} className="section-kicker mb-6">
              <span className="block w-8 h-[2px] bg-[#E5C07B]" />
              <span className="eyebrow text-[#E5C07B]">Consciously Crafted</span>
            </motion.div>

            <h1
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.2 }}
            >
              <span className="flex flex-wrap gap-x-4 overflow-hidden">
                {line1Words.map((word, i) => (
                  <motion.span key={`l1-${word}-${i}`} variants={wordDropVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="mt-1 flex flex-wrap gap-x-4 overflow-hidden">
                {line2Words.map((word, i) => (
                  <motion.span
                    key={`l2-${word}-${i}`}
                    variants={wordDropVariants}
                    className="inline-block italic text-[#F3D194]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={itemSlideDownVariants}
              className="mt-6 max-w-[440px] font-ui text-[15px] sm:text-base font-medium leading-[1.75] text-white/88"
            >
              Thoughtfully designed canvas essentials for everyday living — beautifully made, built to last.
            </motion.p>

            <motion.div variants={itemSlideDownVariants} className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link href="/shop" className="btn-primary" id="hero-shop-cta">
                Shop Collection
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link href="/about" className="btn-outline-light" id="hero-story-cta">
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-20 border-t border-white/10 bg-black/35 backdrop-blur-sm">
          <div className="site-wrap grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3 py-4 sm:px-5 sm:py-5">
                  <Icon size={18} strokeWidth={1.5} className="shrink-0 text-[#E5C07B]" />
                  <div>
                    <p className="font-display text-[18px] leading-none text-white">{stat.value}</p>
                    <p className="mt-1 font-ui text-[10px] tracking-[1.6px] uppercase text-white/60">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
