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
    name: 'Premium Canvas Tote Bags',
    description: 'Daily use reusable canvas tote bags for office, college, shopping, travel & everyday carry.',
    image: '/images/categories/everyday-totes.jpg',
    slug: 'everyday-totes',
    aspectRatio: 'tall',
  },
  {
    id: 'c2',
    name: 'Designer Fabric Tote Bags',
    description: 'Canvas tote bags enhanced with handcrafted Indian fabric details & traditional accents.',
    image: '/images/categories/designer-totes.jpg',
    slug: 'designer-totes',
    aspectRatio: 'wide',
  },
  {
    id: 'c3',
    name: 'Canvas Sling Bags',
    description: 'Minimal crossbody bags with comfortable straps for casual outings and daily essentials.',
    image: '/images/categories/sling-bags.jpg',
    slug: 'sling-bags',
    aspectRatio: 'square',
  },
  {
    id: 'c4',
    name: 'Drawstring Pouches',
    description: 'Reusable canvas pouches with drawstring closure for jewellery, cosmetics, and organizers.',
    image: '/images/categories/drawstring-pouches.jpg',
    slug: 'drawstring-pouches',
    aspectRatio: 'square',
  },
];

export const features = [
  {
    id: 'f1',
    title: 'Premium Natural Canvas',
    description: 'Durable, high-grade natural cotton canvas designed for daily longevity and heavy loads.',
  },
  {
    id: 'f2',
    title: 'Reusable & Eco-Friendly',
    description: 'Made to replace single-use plastic with a stylish, reusable alternative for everyday living.',
  },
  {
    id: 'f3',
    title: 'Lightweight Yet Durable',
    description: 'Effortless to carry throughout the day with reinforced stitching built to withstand daily use.',
  },
  {
    id: 'f4',
    title: 'Minimal & Timeless Design',
    description: 'Understated aesthetics that blend modern simplicity with timeless versatility for every wardrobe.',
  },
  {
    id: 'f5',
    title: 'Made for Everyday Use',
    description: 'Your dependable companion for work, college campus, coffee shops, farmer markets, and travel.',
  },
  {
    id: 'f6',
    title: 'Indian Creativity & Craft',
    description: 'Rooted in Indian textile heritage, thoughtfully combining traditional details with modern design.',
  },
];

export const brandValues = [
  { title: 'Sustainability', desc: 'Promoting mindful living and reducing single-use plastic with natural, reusable materials.' },
  { title: 'Quality', desc: 'Premium cotton canvas, reinforced seams, and meticulous attention in every stitch.' },
  { title: 'Simplicity', desc: 'Minimalist aesthetics and functional silhouettes that fit effortlessly into your routine.' },
  { title: 'Functionality', desc: 'Spacious compartments and comfortable carry designed for real-world everyday life.' },
  { title: 'Creativity', desc: 'Celebrating Indian design, artisanal textures, and contemporary artistic expressions.' },
  { title: 'Durability', desc: 'Long-lasting construction engineered to endure hundreds of washes and years of use.' },
  { title: 'Conscious Living', desc: 'Encouraging mindful choices that look beautiful while leaving a smaller planetary footprint.' },
];

export const upcomingProducts = [
  { name: 'Laptop Sleeves', category: 'Tech & Work', desc: 'Padded natural canvas sleeves for 13" & 15" laptops.' },
  { name: 'Cosmetic Pouches', category: 'Personal Care', desc: 'Water-resistant lined cotton pouches for makeup & skincare.' },
  { name: 'Desk Organizers', category: 'Workspaces', desc: 'Structured canvas bins for tidy work desks and studios.' },
  { name: 'Travel Accessories', category: 'Journeys', desc: 'Compact packing cubes and passport essentials.' },
  { name: 'Stationery Cases', category: 'Creative Tools', desc: 'Minimal zippered rollups for pens, brushes, and notebooks.' },
  { name: 'Gift Hampers', category: 'Celebrations', desc: 'Curated reusable bags for mindful gifting and weddings.' },
  { name: 'Storage Bags', category: 'Home & Living', desc: 'Breathable canvas baskets for wardrobes and clean living.' },
  { name: 'Home Essentials', category: 'Lifestyle', desc: 'Eco-conscious accents crafted with Indian textile charm.' },
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
