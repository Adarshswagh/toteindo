'use client';

import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const perks = [
  'Early access to new collections',
  'Exclusive offers for subscribers',
  'Stories from our artisans',
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-[#7E1323]" aria-label="Newsletter subscription">
      <div className="site-wrap section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Newsletter</span>
            </div>
            <h2
              className="display-title mb-4 text-white"
              style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
            >
              Stay in the loop.
            </h2>
            <p className="max-w-sm font-ui text-[15px] font-light leading-[1.8] text-white/70">
              New collections, thoughtful stories, and occasional things worth carrying — straight to your inbox.
            </p>
            <div className="mt-7 flex flex-col gap-2.5">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <Check size={14} strokeWidth={2.2} className="text-[#B38A4D]" />
                  <span className="font-ui text-sm font-light text-white/65">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div>
                <Sparkles size={22} className="mb-4 text-[#B38A4D]" />
                <p className="mb-1 font-display text-2xl italic text-white">Thank you!</p>
                <p className="font-ui text-sm font-light text-white/65">You&apos;re on the list. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full border border-white/20 bg-white/10 px-5 py-4 font-ui text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#B38A4D]"
                  aria-label="Email address for newsletter"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#B38A4D] px-8 py-4 font-ui text-[11px] font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-[#c9a366] disabled:opacity-60 sm:w-auto"
                  id="newsletter-submit"
                  aria-label="Subscribe to newsletter"
                >
                  {status === 'loading' ? (
                    <span className="h-4 w-4 animate-spin rounded-full border border-white/40 border-t-white" />
                  ) : (
                    <>
                      Subscribe <ArrowRight size={13} />
                    </>
                  )}
                </button>
                <p className="pt-1 font-ui text-[11px] font-light text-white/40">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
