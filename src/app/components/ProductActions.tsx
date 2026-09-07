'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useStore } from '../lib/store';

export default function ProductActions({ productId }: { productId: string }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(productId);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="btn-primary" id="add-to-bag" onClick={handleAdd}>
        {added ? 'Added to Bag' : 'Add to Bag'}
      </button>
      <button
        type="button"
        className="btn-outline"
        onClick={() => toggleWishlist(productId)}
        aria-label="Save to wishlist"
      >
        <Heart
          size={14}
          className={isWishlisted(productId) ? 'fill-[#7E1323] stroke-[#7E1323]' : ''}
        />
        {isWishlisted(productId) ? 'Saved' : 'Save'}
      </button>
      <Link href="/shop" className="text-link">
        Continue Shopping
      </Link>
    </div>
  );
}
