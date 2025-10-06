// Static data for Mustafa Brothers mobile shop

export interface Owner {
  id: string;
  name: string;
  photo?: string;
  phone: string;
  about: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  brand?: string;
  image?: string;
  tags?: string[];
}

export interface Repair {
  id: string;
  title: string;
  ETA?: string;
  priceFrom?: number;
  description?: string;
  icon?: string;
}

import ownerPhoto from '@assets/generated_images/Owner_portrait_photo_36796be4.png';
import chargerImage from '@assets/generated_images/Phone_charger_product_f976d628.png';
import protectorImage from '@assets/generated_images/Screen_protector_product_285abcbd.png';
import caseImage from '@assets/generated_images/Phone_case_product_4d3b3a77.png';

export const owner: Owner = {
  id: 'owner1',
  name: 'Zahid',
  photo: ownerPhoto, // todo: remove mock functionality
  phone: '+91 7006304625',
  about: 'Owner & Head Technician — 10+ years repairing mobile devices. Passionate about providing quality service and genuine parts.'
};

export const products: Product[] = [
  // todo: remove mock functionality
  {
    id: 'p1',
    title: 'Wireless Phone Charger',
    price: 1299,
    category: 'Chargers',
    brand: 'Samsung',
    image: chargerImage,
    tags: ['Fast Charging', 'Qi Compatible']
  },
  {
    id: 'p2',
    title: 'Tempered Glass Screen Protector',
    price: 399,
    category: 'Protection',
    brand: 'Universal',
    image: protectorImage,
    tags: ['9H Hardness', 'Crystal Clear']
  },
  {
    id: 'p3',
    title: 'Silicone Phone Case',
    price: 599,
    category: 'Cases',
    brand: 'Apple',
    image: caseImage,
    tags: ['Drop Protection', 'Camera Guard']
  },
  {
    id: 'p4',
    title: 'USB-C Fast Charger',
    price: 899,
    category: 'Chargers',
    brand: 'OnePlus',
    tags: ['30W', 'Quick Charge']
  },
  {
    id: 'p5',
    title: 'Bluetooth Earphones',
    price: 2499,
    category: 'Audio',
    brand: 'Xiaomi',
    tags: ['Wireless', 'Long Battery']
  },
  {
    id: 'p6',
    title: 'Power Bank 10000mAh',
    price: 1899,
    category: 'Power',
    brand: 'Mi',
    tags: ['Fast Charging', 'Compact']
  },
  {
    id: 'p7',
    title: 'Car Phone Mount',
    price: 799,
    category: 'Accessories',
    brand: 'Universal',
    tags: ['360° Rotation', 'Secure Grip']
  },
  {
    id: 'p8',
    title: 'Lightning Cable',
    price: 699,
    category: 'Cables',
    brand: 'Apple',
    tags: ['MFi Certified', '1.5M Length']
  }
];

export const repairs: Repair[] = [
  // todo: remove mock functionality
  {
    id: 'r1',
    title: 'Screen Replacement',
    ETA: '1-2 hours',
    priceFrom: 2500,
    description: 'Professional screen replacement with genuine parts and warranty',
    icon: 'Smartphone'
  },
  {
    id: 'r2',
    title: 'Battery Replacement',
    ETA: '30-45 minutes',
    priceFrom: 1500,
    description: 'High-quality battery replacement to restore your phone\'s performance',
    icon: 'Battery'
  },
  {
    id: 'r3',
    title: 'Water Damage Repair',
    ETA: '1-2 days',
    priceFrom: 3000,
    description: 'Complete water damage assessment and repair service',
    icon: 'Droplets'
  },
  {
    id: 'r4',
    title: 'Charging Port Fix',
    ETA: '2-3 hours',
    priceFrom: 1200,
    description: 'Repair or replacement of damaged charging ports',
    icon: 'Zap'
  },
  {
    id: 'r5',
    title: 'Software Issues',
    ETA: '1-2 hours',
    priceFrom: 800,
    description: 'Software troubleshooting, updates, and virus removal',
    icon: 'Settings'
  }
];