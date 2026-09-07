import type { Metadata } from 'next';
import ContentPage from '../components/ContentPage';

export const metadata: Metadata = {
  title: 'FAQs — Toteindo',
  description: 'Answers about Toteindo canvas bags, shipping, care and bulk orders.',
};

export default function FaqsPage() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Frequently asked"
      accent="questions."
      description="A short guide to shopping, shipping and looking after your bag."
      blocks={[
        {
          heading: 'What are the bags made of?',
          body: 'Natural canvas, with selected Indian fabrics on designer styles. No plastic outer shell.',
        },
        {
          heading: 'How do I care for canvas?',
          body: 'Spot clean with mild soap. Air dry. Avoid harsh bleach so the fabric keeps its colour and strength.',
        },
        {
          heading: 'Do you offer bulk or custom orders?',
          body: 'Yes. Minimum 25 pieces. Visit Bulk Orders and share your quantity, logo and timeline.',
        },
        {
          heading: 'When will my order ship?',
          body: 'Most ready-to-ship orders leave within 2–4 working days. You will get a note when it is on the way.',
        },
      ]}
    />
  );
}
