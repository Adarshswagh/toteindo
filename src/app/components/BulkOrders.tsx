import { ArrowRight, Briefcase, Tag, CalendarHeart, Coffee } from 'lucide-react';
import Link from 'next/link';

const bulkOptions = [
  {
    icon: <Briefcase size={22} strokeWidth={1.4} />,
    title: 'Corporate Gifting',
    desc: 'Premium branded canvas bags for employee welcomes, clients, and annual summits.',
  },
  {
    icon: <Tag size={22} strokeWidth={1.4} />,
    title: 'Small Businesses & Brands',
    desc: 'Custom screen-printed logos on natural canvas for packaging and promotions.',
  },
  {
    icon: <CalendarHeart size={22} strokeWidth={1.4} />,
    title: 'Events & Wedding Planners',
    desc: 'Thoughtful, reusable aesthetic keepsakes and hampers for celebrations.',
  },
  {
    icon: <Coffee size={22} strokeWidth={1.4} />,
    title: 'Cafés & Boutiques',
    desc: 'Artisanal merchandise and tote packaging that carry your brand into daily life.',
  },
];

const steps = [
  'Share your requirements',
  'We create a custom quote',
  'Approve & we deliver',
];

export default function BulkOrders() {
  return (
    <section className="section-padding bg-[#F7F3EC]" aria-label="Bulk and custom orders">
      <div className="site-wrap">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Bulk & Custom</span>
            </div>
            <h2
              className="display-title mb-5 text-[#1D1F1F]"
              style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}
            >
              Made for more
              <br />
              <em className="italic text-[#7E1323]">than one.</em>
            </h2>
            <p className="section-copy mb-8">
              Create thoughtful canvas products for your team, event, business, or special occasion.
              Minimum quantities start at 25 pieces.
            </p>
            <div className="mb-8 space-y-3 border-t border-[#e8e2d8] pt-6">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#7E1323] font-ui text-[10px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="font-ui text-sm font-light text-[#3a3c3c]">{step}</span>
                </div>
              ))}
            </div>
            <Link href="/bulk-orders" className="btn-primary" id="bulk-orders-cta">
              Enquire for Bulk Orders
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bulkOptions.map((option) => (
              <div key={option.title} className="border border-[#e8e2d8] bg-white p-6 sm:p-7">
                <div className="mb-4 text-[#B38A4D]">{option.icon}</div>
                <h3 className="mb-2 font-display text-xl leading-tight text-[#1D1F1F]">{option.title}</h3>
                <p className="font-ui text-sm font-light leading-relaxed text-[#8B6B4E]">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
