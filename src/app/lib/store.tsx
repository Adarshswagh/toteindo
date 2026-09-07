'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products, type Product } from './data';

export type CartItem = { id: string; qty: number };

type StoreContextValue = {
  wishlist: string[];
  cart: CartItem[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  cartCount: number;
  wishlistCount: number;
  cartProducts: Array<Product & { qty: number }>;
  wishlistProducts: Product[];
  cartTotal: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const WISHLIST_KEY = 'toteindo-wishlist';
const CART_KEY = 'toteindo-cart';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem(WISHLIST_KEY);
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch {
      // ignore broken storage
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const value = useMemo<StoreContextValue>(() => {
    const wishlistProducts = products.filter((product) => wishlist.includes(product.id));
    const cartProducts = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return product ? { ...product, qty: item.qty } : null;
      })
      .filter((item): item is Product & { qty: number } => item !== null);

    return {
      wishlist,
      cart,
      toggleWishlist: (id) =>
        setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])),
      isWishlisted: (id) => wishlist.includes(id),
      addToCart: (id, qty = 1) =>
        setCart((prev) => {
          const existing = prev.find((item) => item.id === id);
          if (existing) {
            return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + qty } : item));
          }
          return [...prev, { id, qty }];
        }),
      removeFromCart: (id) => setCart((prev) => prev.filter((item) => item.id !== id)),
      setQty: (id, qty) =>
        setCart((prev) =>
          qty < 1 ? prev.filter((item) => item.id !== id) : prev.map((item) => (item.id === id ? { ...item, qty } : item))
        ),
      cartCount: cart.reduce((sum, item) => sum + item.qty, 0),
      wishlistCount: wishlist.length,
      cartProducts,
      wishlistProducts,
      cartTotal: cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0),
    };
  }, [wishlist, cart]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
}
