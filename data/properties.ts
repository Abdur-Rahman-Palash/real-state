export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  currency: string;
  type: 'sale' | 'rent';
  propertyType: 'apartment' | 'villa' | 'townhouse' | 'penthouse' | 'studio';
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  image: string;
  featured: boolean;
  verified: boolean;
  listedDate: string;
  views: number;
  rating: number;
  description?: string;
  agent?: {
    name: string;
    company: string;
    phone: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BR Apartment Dubai Marina',
    address: 'Dubai Marina, Dubai',
    price: 2500000,
    currency: 'AED',
    type: 'sale',
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    featured: true,
    verified: true,
    listedDate: '2024-01-15',
    views: 1234,
    rating: 4.8,
    description: 'Luxurious 3-bedroom apartment with stunning marina views and premium finishes.',
    agent: {
      name: 'John Smith',
      company: 'Premium Realty',
      phone: '+971 50 123 4567'
    }
  },
  {
    id: '2',
    title: 'Modern Villa with Private Pool',
    address: 'Palm Jumeirah, Dubai',
    price: 5500000,
    currency: 'AED',
    type: 'sale',
    propertyType: 'villa',
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    featured: true,
    verified: true,
    listedDate: '2024-01-20',
    views: 892,
    rating: 4.9,
    description: 'Stunning villa with private pool, garden, and panoramic sea views.',
    agent: {
      name: 'Sarah Johnson',
      company: 'Luxury Properties',
      phone: '+971 55 987 6543'
    }
  },
  {
    id: '3',
    title: 'Stunning 1BR Apartment Downtown',
    address: 'Downtown Dubai, Dubai',
    price: 120000,
    currency: 'AED',
    type: 'rent',
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    featured: false,
    verified: true,
    listedDate: '2024-01-10',
    views: 567,
    rating: 4.5,
    description: 'Modern 1-bedroom apartment in the heart of Downtown Dubai with Burj Khalifa views.',
    agent: {
      name: 'Mike Wilson',
      company: 'City Properties',
      phone: '+971 52 345 6789'
    }
  },
  {
    id: '4',
    title: 'Spacious 4BR Townhouse',
    address: 'Dubai Hills Estate, Dubai',
    price: 3500000,
    currency: 'AED',
    type: 'sale',
    propertyType: 'townhouse',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    featured: true,
    verified: true,
    listedDate: '2024-01-18',
    views: 445,
    rating: 4.7,
    description: 'Spacious townhouse with modern amenities and community facilities.',
    agent: {
      name: 'Emma Davis',
      company: 'Family Homes',
      phone: '+971 56 789 0123'
    }
  },
  {
    id: '5',
    title: 'Elegant Studio Apartment',
    address: 'Business Bay, Dubai',
    price: 75000,
    currency: 'AED',
    type: 'rent',
    propertyType: 'studio',
    bedrooms: 0,
    bathrooms: 1,
    area: 450,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
    featured: false,
    verified: false,
    listedDate: '2024-01-05',
    views: 234,
    rating: 4.2,
    description: 'Cozy studio apartment perfect for professionals in Business Bay.',
    agent: {
      name: 'Alex Brown',
      company: 'Urban Living',
      phone: '+971 54 567 8901'
    }
  },
  {
    id: '6',
    title: 'Penthouse with Burj Khalifa View',
    address: 'Downtown Dubai, Dubai',
    price: 8500000,
    currency: 'AED',
    type: 'sale',
    propertyType: 'penthouse',
    bedrooms: 5,
    bathrooms: 6,
    area: 5500,
    areaUnit: 'sqft',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    featured: true,
    verified: true,
    listedDate: '2024-01-22',
    views: 1567,
    rating: 5.0,
    description: 'Luxurious penthouse with breathtaking Burj Khalifa views and premium amenities.',
    agent: {
      name: 'David Lee',
      company: 'Elite Properties',
      phone: '+971 50 234 5678'
    }
  }
];

export const getPropertiesByType = (type: 'sale' | 'rent') => {
  return properties.filter(property => property.type === type);
};

export const getPropertiesByLocation = (location: string) => {
  return properties.filter(property => 
    property.address.toLowerCase().includes(location.toLowerCase())
  );
};

export const getPropertiesByPriceRange = (minPrice: number, maxPrice: number) => {
  return properties.filter(property => 
    property.price >= minPrice && property.price <= maxPrice
  );
};

export const getAllProperties = () => {
  return properties;
};

export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};
