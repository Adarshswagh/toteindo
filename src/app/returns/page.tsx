import type { Metadata } from 'next';
import ContentPage from '../components/ContentPage';

export const metadata: Metadata = {
  title: 'Returns — Toteindo',
  description: 'Toteindo returns and exchanges within 7 days of delivery.',
};

export default function ReturnsPage() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Returns &"
      accent="exchanges."
      description="If something is not right, we will make it right."
      blocks={[
        {
          heading: '7-day window',
          body: 'Write to hello@toteindo.com within 7 days of delivery for unused items in original condition.',
        },
        {
          heading: 'What we can take back',
          body: 'Unworn bags with tags. Custom or bulk-branded pieces are made to order and cannot be returned.',
        },
        {
          heading: 'How refunds work',
          body: 'Once we receive the piece, refunds go back to the original payment method in 5–7 working days.',
        },
      ]}
    />
  );
}
