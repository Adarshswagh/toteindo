import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { upcomingProducts } from '../lib/data';

export default function UpcomingProducts() {
  return (
    <section className="section-padding bg-[#FDFAF6] border-t border-[#ede9e0]" aria-label="Upcoming products">
      <div className="site-wrap">
        <div className="section-head flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">In The Studio</span>
              <span className="gold-divider sm:hidden" />
            </div>
            <h2
              className="display-title text-[#1D1F1F]"
              style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
            >
              Expanding Our
              <br />
              <em className="italic text-[#7E1323]">Conscious Horizon.</em>
            </h2>
          </div>
          <p className="max-w-md font-ui text-[14px] font-light leading-relaxed text-[#5a5c5c]">
            Toteindo is expanding beyond totes into an all-encompassing sustainable lifestyle brand. Here is a glimpse of what our design team is crafting next.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {upcomingProducts.map((item, index) => (
            <div
              key={item.name}
              className="group border border-[#e8e2d8] bg-white p-5 transition-all duration-300 hover:border-[#B38A4D] hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-ui text-[9px] font-semibold uppercase tracking-[1.8px] text-[#B38A4D]">
                  {item.category}
                </span>
                <span className="font-ui text-[9px] uppercase tracking-[1.4px] text-[#7E1323] bg-[#7E1323]/8 px-2 py-0.5">
                  Soon
                </span>
              </div>
              <h3 className="font-display text-lg text-[#1D1F1F] mb-1.5 group-hover:text-[#7E1323] transition-colors">
                {item.name}
              </h3>
              <p className="font-ui text-xs font-light leading-relaxed text-[#5a5c5c]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-[#e8e2d8] bg-[#F7F3EC] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl text-[#1D1F1F] mb-1">
              Have a custom piece or category in mind?
            </h4>
            <p className="font-ui text-sm font-light text-[#5a5c5c]">
              We craft custom collections for boutiques, brands, and corporate clients.
            </p>
          </div>
          <Link href="/bulk-orders" className="btn-primary shrink-0">
            Discuss Custom Orders
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
