export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  license: string;
  specialization: string;
  specializations?: string[];
  languages: string[];
  experience: number;
  rating: number;
  reviews: number;
  listings: number;
  sold: number;
  propertiesSold?: number;
  responseTime: string;
  about: string;
  image: string;
  verified: boolean;
  featured: boolean;
  location: string;
  areas: string[];
  achievements?: string[];
}

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@premiumrealty.ae',
    phone: '+971 50 123 4567',
    company: 'Premium Realty',
    license: 'BRN-12345',
    specialization: 'Luxury Properties',
    specializations: ['Luxury Properties', 'Villas', 'Penthouses'],
    languages: ['English', 'Arabic', 'French'],
    experience: 8,
    rating: 4.9,
    reviews: 127,
    listings: 45,
    sold: 89,
    responseTime: 'Within 30 mins',
    about: 'Specializing in luxury properties across Dubai with over 8 years of experience. Expert in high-end residential and commercial real estate.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: true,
    location: 'Dubai',
    areas: ['Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Business Bay'],
    achievements: ['Top performer 2023', '100+ satisfied clients', 'Expert in luxury properties']
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@cityproperties.ae',
    phone: '+971 55 987 6543',
    company: 'City Properties',
    license: 'BRN-23456',
    specialization: 'Apartments',
    specializations: ['Apartments', 'Investment Properties', 'Off-plan'],
    languages: ['English', 'Mandarin', 'Cantonese'],
    experience: 6,
    rating: 4.8,
    reviews: 89,
    listings: 62,
    sold: 134,
    responseTime: 'Within 1 hour',
    about: 'Focused on investment opportunities and off-plan projects. Strong track record in helping investors maximize returns.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: true,
    location: 'Dubai',
    areas: ['Dubai Marina', 'JBR', 'Business Bay', 'Downtown Dubai'],
    achievements: ['Investment specialist', '50+ off-plan sales', 'Best customer service 2022']
  },
  {
    id: '3',
    name: 'Fatima Al-Mansoori',
    email: 'fatima.almansoori@gulfproperties.ae',
    phone: '+971 52 345 6789',
    company: 'Gulf Properties',
    license: 'BRN-34567',
    specialization: 'Family Homes',
    specializations: ['Family Homes', 'Townhouses', 'Communities'],
    languages: ['English', 'Arabic', 'Hindi'],
    experience: 10,
    rating: 4.9,
    reviews: 156,
    listings: 38,
    sold: 76,
    responseTime: 'Within 15 mins',
    about: 'Expert in family-friendly communities and residential properties. Deep understanding of school districts and family amenities.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: false,
    location: 'Dubai',
    areas: ['Dubai Hills', 'Arabian Ranches', 'Mirdif', 'Al Qusais'],
    achievements: ['Family home expert', '150+ families helped', 'Community specialist']
  },
  {
    id: '4',
    name: 'David Williams',
    email: 'david.williams@eliteproperties.ae',
    phone: '+971 56 789 0123',
    company: 'Elite Properties',
    license: 'BRN-45678',
    specialization: 'Commercial',
    specializations: ['Commercial', 'Retail', 'Office Spaces'],
    languages: ['English', 'German', 'Spanish'],
    experience: 12,
    rating: 4.7,
    reviews: 98,
    listings: 28,
    sold: 45,
    responseTime: 'Within 2 hours',
    about: 'Commercial real estate specialist with extensive experience in office spaces and retail properties across UAE.',
    image: 'https://images.unsplash.com/photo-1560250097-0f9f28545761?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: false,
    location: 'Dubai',
    areas: ['DIFC', 'Business Bay', 'JLT', 'Media City'],
    achievements: ['Commercial expert', '200+ commercial deals', 'Corporate specialist']
  },
  {
    id: '5',
    name: 'Aisha Patel',
    email: 'aisha.patel@familyhomes.ae',
    phone: '+971 54 567 8901',
    company: 'Family Homes Realty',
    license: 'BRN-56789',
    specialization: 'Apartments',
    specializations: ['Apartments', 'Studios', 'First-time Buyers'],
    languages: ['English', 'Hindi', 'Urdu', 'Gujarati'],
    experience: 4,
    rating: 4.6,
    reviews: 67,
    listings: 51,
    sold: 92,
    responseTime: 'Within 45 mins',
    about: 'Dedicated to helping first-time buyers find their perfect home. Patient, knowledgeable, and always available for clients.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    verified: false,
    featured: false,
    location: 'Dubai',
    areas: ['Deira', 'Bur Dubai', 'International City', 'Discovery Gardens'],
    achievements: ['First-time buyer specialist', '80+ first-time buyers', 'Patient guide award']
  },
  {
    id: '6',
    name: 'James Rodriguez',
    email: 'james.rodriguez@luxuryliving.ae',
    phone: '+971 50 234 5678',
    company: 'Luxury Living',
    license: 'BRN-67890',
    specialization: 'Waterfront Properties',
    specializations: ['Waterfront Properties', 'Beach Homes', 'Island Living'],
    languages: ['English', 'Spanish', 'Portuguese'],
    experience: 7,
    rating: 4.8,
    reviews: 112,
    listings: 33,
    sold: 58,
    responseTime: 'Within 30 mins',
    about: 'Waterfront property specialist with expertise in beach homes and island living. Knows the best waterfront locations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: true,
    location: 'Dubai',
    areas: ['Palm Jumeirah', 'Bluewaters Island', 'Dubai Marina', 'JBR'],
    achievements: ['Waterfront specialist', 'Luxury island expert', 'Beach home authority']
  },
  {
    id: '7',
    name: 'Leila Hassan',
    email: 'leila.hassan@urbanliving.ae',
    phone: '+971 55 345 6789',
    company: 'Urban Living',
    license: 'BRN-78901',
    specialization: 'Affordable Housing',
    specializations: ['Affordable Housing', 'Apartments', 'Quick Move-in'],
    languages: ['English', 'Arabic', 'Tagalog'],
    experience: 5,
    rating: 4.5,
    reviews: 78,
    listings: 44,
    sold: 67,
    responseTime: 'Within 1 hour',
    about: 'Specialist in affordable housing and quick move-in properties. Great for renters and first-time buyers.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
    verified: false,
    featured: false,
    location: 'Dubai',
    areas: ['International City', 'Discovery Gardens', 'JVC', 'Sports City'],
    achievements: ['Affordable housing expert', 'Quick move-in specialist', 'Budget-friendly solutions']
  },
  {
    id: '8',
    name: 'Robert Taylor',
    email: 'robert.taylor@propertyexperts.ae',
    phone: '+971 56 123 4567',
    company: 'Property Experts',
    license: 'BRN-89012',
    specialization: 'Land',
    specializations: ['Land', 'Development', 'Investment'],
    languages: ['English', 'French', 'Italian'],
    experience: 15,
    rating: 4.9,
    reviews: 145,
    listings: 18,
    sold: 34,
    responseTime: 'Within 3 hours',
    about: 'Land and development specialist with 15+ years of experience. Expert in large-scale investment opportunities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    verified: true,
    featured: false,
    location: 'Dubai',
    areas: ['Dubai South', 'Dubai Land', 'Industrial Areas', 'Free Zones'],
    achievements: ['Land development expert', 'Large-scale projects', 'Investment advisor']
  }
];

export const getFeaturedAgents = () => {
  return agents.filter(agent => agent.featured);
};

export const getAgentsByLocation = (location: string) => {
  return agents.filter(agent => 
    agent.location.toLowerCase().includes(location.toLowerCase()) ||
    agent.areas.some(area => area.toLowerCase().includes(location.toLowerCase()))
  );
};

export const getAgentsBySpecialization = (specialization: string) => {
  return agents.filter(agent => 
    agent.specialization.toLowerCase().includes(specialization.toLowerCase()) ||
    (agent.specializations && agent.specializations.some((spec: string) => spec.toLowerCase().includes(specialization.toLowerCase())))
  );
};

export const getVerifiedAgents = () => {
  return agents.filter(agent => agent.verified);
};

export const getAllAgents = () => {
  return agents;
};
