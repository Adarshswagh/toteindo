import { Target, Compass, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { brandValues } from '../lib/data';

const missionGoals = [
  'Promote sustainable living',
  'Reduce single-use plastic usage',
  'Create premium reusable products',
  'Offer stylish everyday essentials',
  'Support handmade and thoughtfully designed products',
];

export default function MissionVisionPromise() {
  return (
    <section className="section-padding bg-[#F7F3EC]" aria-label="Mission, Vision and Promise">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="section-head is-center mb-12 sm:mb-16">
          <div className="section-kicker is-center">
            <span className="gold-divider" />
            <span className="eyebrow">Our Philosophy</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title text-[#1D1F1F] mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}
          >
            Guided by purpose,
            <br />
            <em className="italic text-[#7E1323]">crafted with responsibility.</em>
          </h2>
          <p className="mx-auto max-w-2xl font-ui text-[15px] font-light leading-relaxed text-[#5a5c5c]">
            Toteindo is more than a brand—it is a conscious movement towards replacing disposable convenience with lasting, stylish utility.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">
          {/* Mission Card */}
          <div className="border border-[#e8e2d8] bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center bg-[#7E1323]/8 text-[#7E1323]">
                  <Target size={24} strokeWidth={1.5} />
                </span>
                <span className="font-ui text-[10px] font-bold uppercase tracking-[2.5px] text-[#B38A4D]">
                  Our Mission
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#1D1F1F] mb-4 leading-snug">
                Mindful living through beautiful, functional design.
              </h3>
              <p className="font-ui text-[15px] font-light leading-[1.8] text-[#5a5c5c] mb-6">
                To inspire people to choose reusable, eco-friendly products while promoting mindful living through functional and beautifully designed tote bags.
              </p>
            </div>
            <div className="border-t border-[#ede9e0] pt-6 space-y-2.5">
              <p className="font-ui text-[11px] font-medium uppercase tracking-[1.8px] text-[#7E1323] mb-3">
                Key Objectives
              </p>
              {missionGoals.map((goal) => (
                <div key={goal} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#B38A4D] shrink-0" />
                  <span className="font-ui text-sm font-light text-[#3a3c3c]">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="border border-[#e8e2d8] bg-[#1D1F1F] text-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center bg-white/10 text-[#B38A4D]">
                  <Compass size={24} strokeWidth={1.5} />
                </span>
                <span className="font-ui text-[10px] font-bold uppercase tracking-[2.5px] text-[#B38A4D]">
                  Our Vision
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-4 leading-snug">
                India&apos;s most loved sustainable lifestyle brand.
              </h3>
              <p className="font-ui text-[15px] font-light leading-[1.8] text-white/75 mb-6">
                To build India&apos;s most loved sustainable lifestyle brand by creating products that people proudly carry every day while making a positive impact on the environment.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-none">
                <p className="font-display text-lg italic text-[#F3D194] mb-1">
                  &ldquo;Carry Better. Live Better. Carry Toteindo.&rdquo;
                </p>
                <p className="font-ui text-xs font-light text-white/60">
                  A daily reminder that conscious luxury and everyday simplicity can exist together harmoniously.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise Banner */}
        <div className="relative overflow-hidden bg-[#7E1323] text-white p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake size={22} className="text-[#B38A4D]" />
              <span className="font-ui text-[11px] font-bold uppercase tracking-[2.5px] text-[#F3D194]">
                Our Promise
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
              A greener future in every step, in every carry.
            </h3>
            <p className="font-ui text-[15px] sm:text-base font-light leading-[1.8] text-white/85 mb-4">
              At Toteindo, every bag represents a small step toward a greener future. We are committed to creating products that are practical, stylish, and environmentally responsible—helping people carry more while leaving a smaller footprint on the planet.
            </p>
            <p className="font-display italic text-lg sm:text-xl text-[#F3D194]">
              Carry Better. Live Better. Carry Toteindo.
            </p>
          </div>
        </div>

        {/* Brand Values (7 Values) */}
        <div>
          <div className="section-head is-center mb-10">
            <div className="section-kicker is-center">
              <span className="gold-divider" />
              <span className="eyebrow">Guiding Principles</span>
              <span className="gold-divider" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#1D1F1F]">
              Our 7 Core Brand Values
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandValues.map((value, idx) => (
              <div
                key={value.title}
                className={`border border-[#e8e2d8] bg-white p-6 transition-all duration-300 hover:shadow-md ${
                  idx === brandValues.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-2xl text-[#7E1323] leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <Sparkles size={14} className="text-[#B38A4D]" />
                </div>
                <h4 className="font-display text-lg text-[#1D1F1F] mb-2">{value.title}</h4>
                <p className="font-ui text-xs font-light leading-relaxed text-[#5a5c5c]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
