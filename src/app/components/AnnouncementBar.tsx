'use client';

const messages = [
  'Free Shipping on Orders Above ₹999',
  '100% Natural Canvas',
  'Made in India',
  'Reusable & Sustainable',
  'Handcrafted with Care',
];

export default function AnnouncementBar() {
  const repeated = [...messages, ...messages];

  return (
    <div className="overflow-hidden bg-[#7E1323] py-2.5 text-white">
      <div className="marquee-track">
        {repeated.map((msg, i) => (
          <span key={i} className="flex items-center font-ui text-[10px] uppercase tracking-[2.5px] sm:text-[11px]">
            {msg}
            <span className="mx-6 text-[#B38A4D] opacity-70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
