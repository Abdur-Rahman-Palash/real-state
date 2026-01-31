export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  featured: boolean;
}

export const tools: Tool[] = [
  {
    id: '1',
    title: 'BayutGPT',
    description: 'AI-powered property search assistant that understands your preferences and finds the perfect home.',
    icon: 'bot',
    color: 'bg-blue-500',
    link: '/ai-search',
    featured: true
  },
  {
    id: '2',
    title: 'TruEstimate™',
    description: 'Get accurate property valuations using advanced algorithms and market data analysis.',
    icon: 'calculator',
    color: 'bg-green-500',
    link: '/property-valuation',
    featured: true
  },
  {
    id: '3',
    title: 'Dubai Transactions',
    description: 'Real-time market insights and transaction data to make informed investment decisions.',
    icon: 'trending-up',
    color: 'bg-purple-500',
    link: '/market-insights',
    featured: true
  },
  {
    id: '4',
    title: 'Mortgage Calculator',
    description: 'Calculate your monthly payments and explore financing options for your dream property.',
    icon: 'home',
    color: 'bg-orange-500',
    link: '/mortgage-calculator',
    featured: false
  },
  {
    id: '5',
    title: 'Area Guide',
    description: 'Comprehensive information about neighborhoods, schools, amenities, and lifestyle.',
    icon: 'map',
    color: 'bg-teal-500',
    link: '/area-guide',
    featured: false
  },
  {
    id: '6',
    title: 'Virtual Tours',
    description: 'Experience properties from anywhere with immersive 360° virtual tours.',
    icon: 'eye',
    color: 'bg-pink-500',
    link: '/virtual-tours',
    featured: false
  }
];

export const getFeaturedTools = () => {
  return tools.filter(tool => tool.featured);
};
