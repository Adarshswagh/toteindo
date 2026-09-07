import PageHero from './PageHero';

type Block = {
  heading: string;
  body: string;
};

export default function ContentPage({
  eyebrow,
  title,
  accent,
  description,
  image,
  blocks,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image?: string;
  blocks: Block[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        description={description}
        image={image}
      />
      <section className="section-padding bg-[#FDFAF6]">
        <div className="site-wrap max-w-3xl space-y-8">
          {blocks.map((block) => (
            <article key={block.heading}>
              <h2 className="mb-3 font-display text-2xl text-[#1D1F1F]">{block.heading}</h2>
              <p className="section-copy">{block.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
