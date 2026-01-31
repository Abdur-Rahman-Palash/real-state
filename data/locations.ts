export interface Location {
  id: string;
  name: string;
  emirate: string;
  propertyCount: number;
  averagePrice: number;
  currency: string;
  image: string;
  popular: boolean;
  description: string;
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'Dubai Marina',
    emirate: 'Dubai',
    propertyCount: 2847,
    averagePrice: 1850000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea265f8dd36?w=800&h=600&fit=crop',
    popular: true,
    description: 'Vibrant waterfront community with stunning skyline views'
  },
  {
    id: '2',
    name: 'Downtown Dubai',
    emirate: 'Dubai',
    propertyCount: 1923,
    averagePrice: 3200000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1518684079-3c81559ce435?w=800&h=600&fit=crop',
    popular: true,
    description: 'Heart of Dubai featuring Burj Khalifa and Dubai Mall'
  },
  {
    id: '3',
    name: 'Palm Jumeirah',
    emirate: 'Dubai',
    propertyCount: 1567,
    averagePrice: 4500000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    popular: true,
    description: 'Luxury island living with private beaches and world-class amenities'
  },
  {
    id: '4',
    name: 'Business Bay',
    emirate: 'Dubai',
    propertyCount: 2134,
    averagePrice: 1450000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    popular: true,
    description: 'Modern business district with residential and commercial properties'
  },
  {
    id: '5',
    name: 'Arabian Ranches',
    emirate: 'Dubai',
    propertyCount: 987,
    averagePrice: 2800000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    popular: false,
    description: 'Family-friendly gated community with golf course and schools'
  },
  {
    id: '6',
    name: 'Abu Dhabi City',
    emirate: 'Abu Dhabi',
    propertyCount: 3456,
    averagePrice: 1650000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    popular: true,
    description: 'UAE capital with cultural landmarks and modern developments'
  },
  {
    id: '7',
    name: 'Al Reem Island',
    emirate: 'Abu Dhabi',
    propertyCount: 1876,
    averagePrice: 1950000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
    popular: false,
    description: 'Modern island community with waterfront living'
  },
  {
    id: '8',
    name: 'Sharjah City',
    emirate: 'Sharjah',
    propertyCount: 2234,
    averagePrice: 950000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    popular: true,
    description: 'Cultural hub with affordable housing options'
  },
  {
    id: '9',
    name: 'Ajman',
    emirate: 'Ajman',
    propertyCount: 1456,
    averagePrice: 650000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    popular: false,
    description: 'Emerging real estate market with investment potential'
  },
  {
    id: '10',
    name: 'Ras Al Khaimah',
    emirate: 'Ras Al Khaimah',
    propertyCount: 876,
    averagePrice: 750000,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
    popular: false,
    description: 'Scenic emirate with mountain and coastal properties'
  }
];

export const getPopularLocations = () => {
  return locations.filter(location => location.popular);
};

export const getLocationsByEmirate = (emirate: string) => {
  return locations.filter(location => location.emirate === emirate);
};
