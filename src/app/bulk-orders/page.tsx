import type { Metadata } from 'next';
import { Briefcase, Tag, CalendarHeart, Coffee } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import Newsletter from '../components/Newsletter';

export const metadata: Metadata = {
  title: 'Bulk Orders — Toteindo',
  description: 'Corporate gifting, custom branding, weddings and café orders. Minimum 25 pieces.',
};

const options = [
  {
    id: 'corporate',
    icon: <Briefcase size={22} strokeWidth={1.4} />,
    title: 'Corporate Gifting',
    desc: 'Premium branded canvas bags for employee welcomes, clients, and annual summits.',
  },
  {
    id: 'custom',
    icon: <Tag size={22} strokeWidth={1.4} />,
    title: 'Small Businesses & Custom Branding',
    desc: 'Your logo and artwork screen-printed on premium natural canvas packaging.',
  },
  {
    id: 'events',
    icon: <CalendarHeart size={22} strokeWidth={1.4} />,
    title: 'Events & Wedding Planners',
    desc: 'Thoughtful, reusable aesthetic keepsakes and gift hampers for celebrations.',
  },
  {
    id: 'cafes',
    icon: <Coffee size={22} strokeWidth={1.4} />,
    title: 'Cafés, Boutiques & Stores',
    desc: 'Artisanal merchandise and tote bags that carry your brand into daily life.',
  },
];

export default function BulkOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Bulk & Custom"
        title="Made for more"
        accent="than one."
        description="Thoughtful canvas products for teams, events, businesses and celebrations. Minimum 25 pieces."
        image="/images/lifestyle/campaign.jpg"
      />

      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {options.map((option) => (
              <div
                key={option.id}
                id={option.id}
                className="border border-[#e8e2d8] bg-white p-6 sm:p-7"
              >
                <div className="mb-4 text-[#B38A4D]">{option.icon}</div>
                <h2 className="mb-2 font-display text-xl text-[#1D1F1F]">{option.title}</h2>
                <p className="font-ui text-sm font-light leading-relaxed text-[#8B6B4E]">{option.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="section-kicker">
                <span className="gold-divider" />
                <span className="eyebrow">Enquire</span>
              </div>
              <h2
                className="display-title mb-4 text-[#1D1F1F]"
                style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}
              >
                Tell us what you need.
              </h2>
              <p className="section-copy mb-6">
                Share quantity, timeline and branding details. We will send a custom quote.
              </p>
              <ol className="space-y-3">
                {['Share your requirements', 'We create a custom quote', 'Approve & we deliver'].map(
                  (step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center bg-[#7E1323] font-ui text-[10px] font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="font-ui text-sm text-[#3a3c3c]">{step}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
            <EnquiryForm submitLabel="Enquire for Bulk Orders" />
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
