export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  onSale: boolean;
  inStock: boolean;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Blue PartyHat',
    price: 450.00,
    originalPrice: 622.50,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Rare and stylish blue party hat for special occasions.'
  },
  {
    id: 2,
    name: 'Dragon Scimitar',
    price: 100.00,
    originalPrice: 150.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Powerful melee weapon with dragon-slaying capabilities.'
  },
  {
    id: 3,
    name: 'Abyssal Whip',
    price: 300.00,
    originalPrice: 300.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: false,
    inStock: true,
    description: 'Fast attacking weapon from the Abyssal demons.'
  },
  {
    id: 4,
    name: 'Bandos Chestplate',
    price: 550.00,
    originalPrice: 600.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: false,
    description: 'High-level melee armor offering great protection.'
  },
  {
    id: 5,
    name: 'Saradomin Godsword',
    price: 800.00,
    originalPrice: 800.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: false,
    inStock: true,
    description: 'Legendary godsword with healing capabilities.'
  },
  {
    id: 6,
    name: 'Armadyl Crossbow',
    price: 725.00,
    originalPrice: 850.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Powerful ranged weapon blessed by Armadyl.'
  },
  {
    id: 7,
    name: 'Dragon Claws',
    price: 500.00,
    originalPrice: 500.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: false,
    inStock: true,
    description: 'Deadly claws known for their special attack.'
  },
  {
    id: 8,
    name: 'Infinity Boots',
    price: 200.00,
    originalPrice: 250.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Magical boots offering enhanced spell casting.'
  },
  {
    id: 9,
    name: 'Dharok\'s Armor Set',
    price: 1000.00,
    originalPrice: 1200.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: false,
    description: 'Complete set of Dharok\'s armor, deadly at low health.'
  },
  {
    id: 10,
    name: 'Elysian Spirit Shield',
    price: 1500.00,
    originalPrice: 1500.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: false,
    inStock: true,
    description: 'Extremely rare and powerful defensive shield.'
  },
  {
    id: 11,
    name: 'Twisted Bow',
    price: 2000.00,
    originalPrice: 2500.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Incredibly powerful bow effective against magical creatures.'
  },
  {
    id: 12,
    name: 'Ancestral Robes Set',
    price: 1200.00,
    originalPrice: 1200.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: false,
    inStock: true,
    description: 'Powerful magical robes enhancing spell damage.'
  },
  {
    id: 13,
    name: 'Dragonfire Shield',
    price: 400.00,
    originalPrice: 450.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Shield offering protection against dragon breath.'
  },
  {
    id: 14,
    name: 'Primordial Boots',
    price: 350.00,
    originalPrice: 400.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: false,
    description: 'Best-in-slot melee boots for maximum strength.'
  },
  {
    id: 15,
    name: 'Scythe of Vitur',
    price: 1800.00,
    originalPrice: 2000.00,
    image: '/placeholder.svg?height=100&width=100',
    onSale: true,
    inStock: true,
    description: 'Powerful two-handed weapon from the Theatre of Blood.'
  }
];