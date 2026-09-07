import type { Metadata } from 'next';
import WishlistExperience from '../components/WishlistExperience';

export const metadata: Metadata = {
  title: 'Wishlist — Toteindo',
  description: 'Pieces you have liked and saved at Toteindo.',
};

export default function WishlistPage() {
  return <WishlistExperience />;
}
