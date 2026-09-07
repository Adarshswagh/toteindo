import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding bg-[#FDFAF6]">
      <div className="site-wrap max-w-xl py-10 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1
          className="display-title mb-4 text-[#1D1F1F]"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          This page
          <br />
          <em className="italic text-[#7E1323]">is not here.</em>
        </h1>
        <p className="section-copy mb-8">
          The link may be old, or the bag wandered off. Head back to the shop.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop Collection
        </Link>
      </div>
    </section>
  );
}
