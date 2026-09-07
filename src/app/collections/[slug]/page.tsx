import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories, getCategoryBySlug, getProductsByCategory } from '../../lib/data';
import PageHero from '../../components/PageHero';
import ProductGrid from '../../components/ProductGrid';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Collection — Toteindo' };
  return {
    title: `${category.name} — Toteindo`,
    description: category.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.name);

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={category.name}
        description={category.description}
        image={category.image}
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap">
          <ProductGrid products={items} />
          <div className="mt-12 text-center">
            <Link href="/shop" className="btn-outline">
              View All Products
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
