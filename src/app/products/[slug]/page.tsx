import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
  products,
} from '../../lib/data';
import ProductGrid from '../../components/ProductGrid';
import ProductActions from '../../components/ProductActions';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product — Toteindo' };
  return {
    title: `${product.name} — Toteindo`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <section className="section-padding bg-[#FDFAF6]">
        <div className="site-wrap">
          <p className="mb-8 font-ui text-[11px] uppercase tracking-[2px] text-[#8B6B4E]">
            <Link href="/shop" className="hover:text-[#7E1323]">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
          </p>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#ede9e0]">
              <Image
                src={product.image}
                alt={`${product.name} — Premium canvas bag by Toteindo`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[2px] text-[#B38A4D]">
                {product.category}
              </p>
              <h1
                className="display-title mb-4 text-[#1D1F1F]"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {product.name}
              </h1>
              <p className="mb-6 font-ui text-xl text-[#7E1323]">
                {formatPrice(product.price)}
                {product.originalPrice && (
                  <span className="ml-3 text-base text-[#8B6B4E] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </p>
              <p className="section-copy mb-8 max-w-lg">{product.description}</p>
              <ul className="mb-8 space-y-2 border-t border-[#e8e2d8] pt-6">
                {product.details.map((detail) => (
                  <li key={detail} className="font-ui text-sm font-light text-[#3a3c3c]">
                    — {detail}
                  </li>
                ))}
              </ul>
              <ProductActions productId={product.id} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          <div className="section-head">
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">You May Also Like</span>
            </div>
            <h2 className="display-title text-[#1D1F1F]" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
              More to carry.
            </h2>
          </div>
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
