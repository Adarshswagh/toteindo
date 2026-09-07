import type { Metadata } from 'next';
import CartExperience from '../components/CartExperience';

export const metadata: Metadata = {
  title: 'Cart — Toteindo',
  description: 'Your Toteindo bag. Review pieces and continue to checkout.',
};

export default function CartPage() {
  return <CartExperience />;
}
