export interface Insight {
  id: string;
  title: string;
  description: string;
  category: 'market' | 'prices' | 'trends' | 'investment';
  image: string;
  date: string;
  readTime: number;
  featured: boolean;
  author: string;
  tags: string[];
}

export const insights: Insight[] = [
  {
    id: '1',
    title: 'Dubai Property Prices Surge 15% in Q3 2024',
    description: 'Latest market analysis shows significant growth in villa and apartment prices across key areas.',
    category: 'prices',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    date: '2024-10-15',
    readTime: 5,
    featured: true,
    author: 'Market Analysis Team',
    tags: ['Dubai', 'Prices', 'Q3 2024', 'Market Report']
  },
  {
    id: '2',
    title: 'Top 5 Investment Areas in UAE for 2025',
    description: 'Discover the most promising real estate investment opportunities across the Emirates.',
    category: 'investment',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    date: '2024-10-10',
    readTime: 7,
    featured: true,
    author: 'Investment Advisory',
    tags: ['Investment', '2025', 'UAE', 'ROI']
  },
  {
    id: '3',
    title: 'Mortgage Rates Drop to 3.5% - Best Time to Buy?',
    description: 'Central bank policy changes create favorable conditions for property buyers.',
    category: 'market',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    date: '2024-10-08',
    readTime: 4,
    featured: false,
    author: 'Financial Experts',
    tags: ['Mortgage', 'Interest Rates', 'Buying', 'Finance']
  },
  {
    id: '4',
    title: 'Sustainable Living: Green Buildings on the Rise',
    description: 'Eco-friendly properties gaining popularity among environmentally conscious buyers.',
    category: 'trends',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    date: '2024-10-05',
    readTime: 6,
    featured: true,
    author: 'Sustainability Desk',
    tags: ['Sustainability', 'Green Buildings', 'Eco-friendly', 'Trends']
  },
  {
    id: '5',
    title: 'Rental Market Analysis: Yields Remain Strong',
    description: 'Rental yields in prime locations continue to attract investors seeking steady returns.',
    category: 'investment',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    date: '2024-10-01',
    readTime: 5,
    featured: false,
    author: 'Rental Market Team',
    tags: ['Rental', 'Yields', 'Investment', 'ROI']
  },
  {
    id: '6',
    title: 'New Project Launches Surge in Q4 2024',
    description: 'Developers announce major new projects across Dubai and Abu Dhabi.',
    category: 'market',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    date: '2024-09-28',
    readTime: 4,
    featured: false,
    author: 'Development News',
    tags: ['New Projects', 'Q4 2024', 'Launches', 'Developers']
  }
];

export const getFeaturedInsights = () => {
  return insights.filter(insight => insight.featured);
};

export const getInsightsByCategory = (category: string) => {
  return insights.filter(insight => insight.category === category);
};

export const getLatestInsights = (limit: number = 3) => {
  return insights
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
