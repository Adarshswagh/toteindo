import Image from 'next/image';
import Link from 'next/link';
import { socialImages } from '../lib/data';

const InstagramSvg = ({ size = 24 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    width={size}
    height={size}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function SocialSection() {
  return (
    <section className="section-padding bg-[#FDFAF6]" aria-label="Social media gallery">
      <div className="site-wrap">
        <div className="section-head is-center">
          <div className="section-kicker is-center">
            <span className="gold-divider" />
            <span className="eyebrow">@toteindo</span>
            <span className="gold-divider" />
          </div>
          <h2
            className="display-title italic text-[#1D1F1F]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}
          >
            Carry Toteindo.
          </h2>
          <p className="mt-3 font-ui text-sm font-light text-[#8B6B4E]">Share your look with #Toteindo</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {socialImages.map((img) => (
            <Link
              key={img.id}
              href="https://instagram.com/toteindo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
              aria-label={`View ${img.alt} on Instagram`}
              id={`social-image-${img.id}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#7E1323]/0 transition-colors duration-300 group-hover:bg-[#7E1323]/50">
                <span className="flex flex-col items-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramSvg size={22} />
                  <span className="font-ui text-[10px] uppercase tracking-[2px]">View Post</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://instagram.com/toteindo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="instagram-follow"
          >
            <InstagramSvg size={13} />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
