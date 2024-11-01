import { StaticImageData } from 'next/image'

// Import Images

import ChestGuard from '../../../public/images/Justiciar_chestguard_detail.webp'
import Perll from '../../../public/images/pearll.png'
import Shield from '../../../public/images/pngegg.png'
import Person from '../../../public/images/sinbg.png'
import Papyrus from '../../../public/images/papiro.png'



export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: StaticImageData;
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
    image: Papyrus,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 2,
    name: 'Dragon Scimitar',
    price: 100.00,
    originalPrice: 150.00,
    image: Papyrus,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 3,
    name: 'Abyssal Whip',
    price: 300.00,
    originalPrice: 300.00,
    image: Papyrus,
    onSale: false,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 4,
    name: 'Bandos Chestplate',
    price: 550.00,
    originalPrice: 600.00,
    image: Perll,
    onSale: true,
    inStock: false,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 5,
    name: 'Saradomin Godsword',
    price: 800.00,
    originalPrice: 800.00,
    image: Perll,
    onSale: false,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 6,
    name: 'Armadyl Crossbow',
    price: 725.00,
    originalPrice: 850.00,
    image: Perll,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 7,
    name: 'Dragon Claws',
    price: 500.00,
    originalPrice: 500.00,
    image: Shield,
    onSale: false,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 8,
    name: 'Infinity Boots',
    price: 200.00,
    originalPrice: 250.00,
    image: Shield,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 9,
    name: 'Dharok\'s Armor Set',
    price: 1000.00,
    originalPrice: 1200.00,
    image: Shield,
    onSale: true,
    inStock: false,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 10,
    name: 'Elysian Spirit Shield',
    price: 1500.00,
    originalPrice: 1500.00,
    image: Person,
    onSale: false,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 11,
    name: 'Twisted Bow',
    price: 2000.00,
    originalPrice: 2500.00,
    image: Person,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 12,
    name: 'Ancestral Robes Set',
    price: 1200.00,
    originalPrice: 1200.00,
    image: Person,
    onSale: false,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 13,
    name: 'Dragonfire Shield',
    price: 400.00,
    originalPrice: 450.00,
    image: ChestGuard,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 14,
    name: 'Primordial Boots',
    price: 350.00,
    originalPrice: 400.00,
    image: ChestGuard,
    onSale: true,
    inStock: false,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  },
  {
    id: 15,
    name: 'Scythe of Vitur',
    price: 1800.00,
    originalPrice: 2000.00,
    image: ChestGuard,
    onSale: true,
    inStock: true,
    description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.'
  }
];