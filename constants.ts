import { Watch } from './types';

export const WATCHES: Watch[] = [
  {
    id: 'discovery-gent',
    name: 'Discovery Gent',
    collection: 'Discovery',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1524592091273-0d66755a69d4?auto=format&fit=crop&q=80&w=800',
    description: 'A timeless expression of architectural design, featuring the iconic EBEL bracelet.',
    specs: {
      case: '41mm Stainless Steel',
      movement: 'Swiss Automatic',
      waterResistance: '100m'
    }
  },
  {
    id: 'wave-diamond',
    name: 'Wave Lady Diamond',
    collection: 'Wave',
    price: '$3,800',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
    description: 'The essence of elegance. Sparkling diamonds meet the fluid lines of the Wave collection.',
    specs: {
      case: '30mm 18K Yellow Gold',
      movement: 'Swiss Quartz',
      waterResistance: '50m'
    }
  },
  {
    id: 'sport-classic',
    name: 'Sport Classic',
    collection: 'Heritage',
    price: '$2,100',
    image: 'https://images.unsplash.com/photo-1623991985630-81478f7b8241?auto=format&fit=crop&q=80&w=800',
    description: 'The watch that defined an era. A perfect balance of sportiness and luxury.',
    specs: {
      case: '40mm Two-Tone',
      movement: 'Swiss Automatic',
      waterResistance: '50m'
    }
  },
  {
    id: 'brasila-chrono',
    name: 'Brasilia Chronograph',
    collection: 'Brasilia',
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
    description: 'Bold rectangular design inspired by the energy of the Brazilian capital.',
    specs: {
      case: '43mm Stainless Steel',
      movement: 'Chronograph Automatic',
      waterResistance: '50m'
    }
  }
];