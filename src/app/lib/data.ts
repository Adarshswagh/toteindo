export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  slug: string;
  description: string;
  details: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Canvas Tote',
    category: 'Everyday Totes',
    price: 1299,
    originalPrice: 1699,
    image: '/images/products/canvas-tote.jpg',
    hoverImage: '/images/products/canvas-tote.jpg',
    badge: 'Bestseller',
    slug: 'premium-canvas-tote',
    description:
      'A roomy everyday tote in natural canvas — made for office, college, markets and weekend plans.',
    details: ['100% natural canvas', 'Inner pocket', 'Reinforced handles', 'Fits a 15" laptop'],
  },
  {
    id: 'p2',
    name: 'Designer Fabric Tote',
    category: 'Designer Totes',
    price: 1799,
    image: '/images/products/designer-tote.jpg',
    badge: 'New',
    slug: 'designer-fabric-tote',
    description:
      'Contemporary silhouette with Indian fabric details — block prints and handloom textures, made for daily wear.',
    details: ['Canvas body with fabric panel', 'Magnetic closure', 'Wide comfortable straps'],
  },
  {
    id: 'p3',
    name: 'Canvas Sling Bag',
    category: 'Sling Bags',
    price: 999,
    image: '/images/products/sling-bag.jpg',
    slug: 'canvas-sling-bag',
    description:
      'A light crossbody for keys, phone and everyday essentials — hands-free and built to last.',
    details: ['Adjustable strap', 'Secure zip pocket', 'Compact everyday size'],
  },
  {
    id: 'p4',
    name: 'Drawstring Pouch',
    category: 'Pouches',
    price: 499,
    image: '/images/products/drawstring-pouch.jpg',
    slug: 'drawstring-pouch',
    description:
      'A reusable organizer for travel, gym or desk — small, sturdy and easy to pack.',
    details: ['Drawstring close', 'Natural canvas', 'Machine-friendly care'],
  },
  {
    id: 'p5',
    name: 'Office Carry Tote',
    category: 'Everyday Totes',
    price: 1499,
    image: '/images/products/canvas-tote.jpg',
    slug: 'office-carry-tote',
    description:
      'Structured enough for workdays, soft enough for everyday — a taller tote with extra room.',
    details: ['Laptop sleeve', 'Key clip', 'Water-resistant base'],
  },
  {
    id: 'p6',
    name: 'Ikat Designer Tote',
    category: 'Designer Totes',
    price: 1999,
    image: '/images/products/designer-tote.jpg',
    badge: 'Limited',
    slug: 'ikat-designer-tote',
    description:
      'A limited run with ikat-inspired fabric — each piece carries a little Indian craft into the everyday.',
    details: ['Handloom fabric accent', 'Cotton lining', 'Gift-ready finish'],
  },
  {
    id: 'p7',
    name: 'Everyday Sling',
    category: 'Sling Bags',
    price: 899,
    image: '/images/products/sling-bag.jpg',
    slug: 'everyday-sling',
    description:
      'Minimal sling for errands and travel days — sits close to the body and stays out of the way.',
    details: ['Front slip pocket', 'Soft canvas', 'Lightweight hardware'],
  },
  {
    id: 'p8',
    name: 'Travel Pouch Set',
    category: 'Pouches',
    price: 699,
    image: '/images/products/drawstring-pouch.jpg',
    slug: 'travel-pouch-set',
    description:
      'Two pouches for cables, cosmetics or snacks — a small swap for disposable bags.',
    details: ['Set of two', 'Different sizes', 'Reusable and washable'],
  },
];

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Everyday Totes',
    description: 'Office, college, shopping and everyday carry.',
    image: '/images/categories/everyday-totes.jpg',
    slug: 'everyday-totes',
    aspectRatio: 'tall',
  },
  {
    id: 'c2',
    name: 'Designer Totes',
    description: 'Indian fabric details with contemporary design.',
    image: '/images/categories/designer-totes.jpg',
    slug: 'designer-totes',
    aspectRatio: 'wide',
  },
  {
    id: 'c3',
    name: 'Sling Bags',
    description: 'Minimal everyday crossbody essentials.',
    image: '/images/categories/sling-bags.jpg',
    slug: 'sling-bags',
    aspectRatio: 'square',
  },
  {
    id: 'c4',
    name: 'Drawstring Pouches',
    description: 'Reusable organizers for everyday essentials.',
    image: '/images/categories/drawstring-pouches.jpg',
    slug: 'drawstring-pouches',
    aspectRatio: 'square',
  },
];

export const features = [
  {
    id: 'f1',
    title: 'Premium Canvas',
    description: 'Durable natural canvas designed for everyday use.',
  },
  {
    id: 'f2',
    title: 'Thoughtfully Crafted',
    description: 'Attention to detail in every stitch.',
  },
  {
    id: 'f3',
    title: 'Reusable by Design',
    description: 'A stylish alternative to disposable bags.',
  },
  {
    id: 'f4',
    title: 'Everyday Functionality',
    description: 'Designed for work, travel, college and daily life.',
  },
  {
    id: 'f5',
    title: 'Minimal Aesthetic',
    description: 'Timeless designs for modern lifestyles.',
  },
  {
    id: 'f6',
    title: 'Built to Last',
    description: 'Durable construction for repeated use.',
  },
];

export const socialImages = [
  { id: 's1', src: '/images/lifestyle/social-1.jpg', alt: 'Toteindo lifestyle at café' },
  { id: 's2', src: '/images/lifestyle/social-2.jpg', alt: 'Toteindo canvas tote with marigolds' },
  { id: 's3', src: '/images/lifestyle/social-3.jpg', alt: 'Toteindo at a bookstore' },
  { id: 's4', src: '/images/lifestyle/social-4.jpg', alt: 'Toteindo in a reading nook' },
  { id: 's5', src: '/images/lifestyle/social-5.jpg', alt: 'Toteindo lifestyle' },
  { id: 's6', src: '/images/lifestyle/social-6.jpg', alt: 'Toteindo product detail' },
];

export function formatPrice(price: number) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categoryName: string) {
  return products.filter((product) => product.category === categoryName);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category
  );
  const rest = products.filter(
    (product) => product.slug !== slug && product.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
