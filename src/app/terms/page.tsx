import type { Metadata } from 'next';
import ContentPage from '../components/ContentPage';

export const metadata: Metadata = {
  title: 'Terms — Toteindo',
  description: 'Terms of use for the Toteindo website and store.',
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of"
      accent="use."
      blocks={[
        {
          heading: 'Using this site',
          body: 'Toteindo content is for personal, non-commercial use. Product photos and words belong to the brand.',
        },
        {
          heading: 'Orders',
          body: 'Placing an order is an offer to buy. We confirm by email. Prices are in Indian rupees and may change.',
        },
        {
          heading: 'Contact',
          body: 'For anything unclear, email hello@toteindo.com. These terms are governed by the laws of India.',
        },
      ]}
    />
  );
}
