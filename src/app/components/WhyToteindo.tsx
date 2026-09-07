import { features } from '../lib/data';
import React from 'react';

const featureIcons: Record<string, React.ReactNode> = {
  f1: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <rect x="4" y="12" width="32" height="24" rx="1" />
      <path d="M14 12V8a6 6 0 0112 0v4" />
      <path d="M4 20h32" />
    </svg>
  ),
  f2: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <circle cx="20" cy="20" r="14" />
      <path d="M13 20l5 5 9-10" />
    </svg>
  ),
  f3: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M20 4c0 0-12 8-12 18a12 12 0 0024 0C32 12 20 4 20 4z" />
      <path d="M20 18v8M16 22h8" />
    </svg>
  ),
  f4: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M8 28l4-8 6 4 6-10 4 6" />
      <path d="M6 34h28M6 6h28" />
    </svg>
  ),
  f5: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <rect x="8" y="8" width="24" height="24" />
      <rect x="13" y="13" width="14" height="14" />
    </svg>
  ),
  f6: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M20 6l2 8h8l-6.5 5 2.5 8L20 22l-6.5 5 2.5-8L10 14h8z" />
    </svg>
  ),
};

export default function WhyToteindo() {
  return (
    <section className="section-padding bg-[#1D1F1F]" aria-label="Why Toteindo">
      <div className="site-wrap">
        <div className="section-head is-center">
          <div className="section-kicker is-center">
            <span className="gold-divider" />
            <span className="eyebrow">Why Choose Us</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title text-white"
            style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
          >
            Designed with intention.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="group bg-[#1D1F1F] p-8 transition-colors duration-300 hover:bg-[#252828] sm:p-10">
              <div className="mb-5 text-[#B38A4D]">{featureIcons[feature.id]}</div>
              <h3 className="mb-3 font-display text-[22px] leading-tight text-white">
                {feature.title}
              </h3>
              <p className="font-ui text-sm font-light leading-[1.8] text-white/55">
                {feature.description}
              </p>
              <div className="mt-6 h-px w-6 bg-[#B38A4D]/50 transition-all duration-300 group-hover:w-10 group-hover:bg-[#B38A4D]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
