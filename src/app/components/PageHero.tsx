import Image from 'next/image';
import HandGesture from './HandGesture';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image = '/images/lifestyle/editorial.jpg',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1D1F1F]" aria-label={title}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#1D1F1F]/72" />
      </div>
      <div className="relative z-10 site-wrap py-16 sm:py-20 lg:py-24">
        <div className="section-kicker">
          <span className="gold-divider" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1
          className="display-title max-w-3xl text-white"
          style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}
        >
          {title}
          {accent ? (
            <>
              {' '}
              <em className="italic text-[#B38A4D]">{accent}</em>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl font-ui text-[15px] font-light leading-relaxed text-white/75">
            {description}
          </p>
        ) : null}
        <div className="absolute right-6 bottom-6 hidden sm:block lg:right-10 lg:bottom-8">
          <HandGesture pose="wave" tone="cream" className="h-12 w-12" />
        </div>
      </div>
    </section>
  );
}
