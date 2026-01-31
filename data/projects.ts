export interface Project {
  id: string;
  name: string;
  developer: string;
  location: string;
  startingPrice: number;
  currency: string;
  propertyTypes: string[];
  propertyType: string;
  completionDate: string;
  completionQuarter: string;
  completionYear: string;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
  rating: number;
  unitsAvailable: number;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Dubai Creek Harbour',
    developer: 'Emaar Properties',
    location: 'Dubai Creek Harbour, Dubai',
    startingPrice: 1200000,
    currency: 'AED',
    propertyTypes: ['Apartments', 'Townhouses', 'Villas'],
    propertyType: 'apartment',
    completionDate: 'Q4 2025',
    completionQuarter: 'Q4',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    featured: true,
    description: 'A spectacular waterfront development offering unparalleled views of the Dubai skyline.',
    amenities: ['Marina', 'Retail District', 'Parks', 'Schools', 'Healthcare'],
    rating: 4.8,
    unitsAvailable: 150
  },
  {
    id: '2',
    name: 'Palm Jebel Ali Villas',
    developer: 'Nakheel',
    location: 'Palm Jebel Ali, Dubai',
    startingPrice: 3500000,
    currency: 'AED',
    propertyTypes: ['Villas', 'Beach Houses'],
    propertyType: 'villa',
    completionDate: 'Q2 2025',
    completionQuarter: 'Q2',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    featured: true,
    description: 'Luxury beachfront villas with private beach access and stunning sea views.',
    amenities: ['Private Beach', 'Swimming Pool', 'Garden', 'Garage', 'Maid Room'],
    rating: 4.9,
    unitsAvailable: 75
  },
  {
    id: '3',
    name: 'Downtown Views II',
    developer: 'Emaar Properties',
    location: 'Downtown Dubai, Dubai',
    startingPrice: 1800000,
    currency: 'AED',
    propertyTypes: ['Apartments', 'Penthouses'],
    propertyType: 'apartment',
    completionDate: 'Q3 2024',
    completionQuarter: 'Q3',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    featured: true,
    description: 'Modern residential tower with breathtaking views of Burj Khalifa and Dubai Fountain.',
    amenities: ['Gym', 'Pool', 'Concierge', 'Security', 'Parking'],
    rating: 4.7,
    unitsAvailable: 200
  },
  {
    id: '4',
    name: 'Bluewaters Island',
    developer: 'Meraas',
    location: 'Bluewaters Island, Dubai',
    startingPrice: 2800000,
    currency: 'AED',
    propertyTypes: ['Apartments', 'Penthouses', 'Townhouses'],
    propertyType: 'apartment',
    completionDate: 'Q1 2024',
    completionQuarter: 'Q1',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    featured: false,
    description: 'An innovative island destination featuring the world\'s largest observation wheel.',
    amenities: ['Ain Dubai', 'Beach Access', 'Retail', 'Dining', 'Entertainment'],
    rating: 4.6,
    unitsAvailable: 95
  },
  {
    id: '5',
    name: 'Marina Gate',
    developer: 'Select Group',
    location: 'Dubai Marina, Dubai',
    startingPrice: 1500000,
    currency: 'AED',
    propertyTypes: ['Apartments'],
    propertyType: 'apartment',
    completionDate: 'Q4 2024',
    completionQuarter: 'Q4',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    featured: false,
    description: 'Luxury apartments in the heart of Dubai Marina with premium amenities.',
    amenities: ['Gym', 'Pool', 'Sauna', 'Steam Room', 'BBQ Area'],
    rating: 4.5,
    unitsAvailable: 180
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
