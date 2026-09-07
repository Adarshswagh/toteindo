import type { Metadata } from 'next';
import ContentPage from '../components/ContentPage';

export const metadata: Metadata = {
  title: 'Shipping — Toteindo',
  description: 'Toteindo shipping across India. Free shipping on orders above ₹999.',
};

export default function ShippingPage() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Shipping"
      accent="policy."
      description="How we pack and send Toteindo pieces across India."
      blocks={[
        {
          heading: 'Delivery time',
          body: 'Metro cities usually take 3–6 working days. Other pin codes may take 5–9 working days.',
        },
        {
          heading: 'Free shipping',
          body: 'Orders above ₹999 ship free within India. Below that, a small delivery charge is added at checkout.',
        },
        {
          heading: 'Packing',
          body: 'Each bag is packed to travel well — no extra plastic when we can avoid it.',
        },
      ]}
    />
  );
}
