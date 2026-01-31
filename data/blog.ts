export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  category: string;
  tags: string[];
  image: string;
  publishedDate: string;
  readTime: number;
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Investment Areas in Dubai for 2024',
    slug: 'top-10-investment-areas-dubai-2024',
    excerpt: 'Discover the most promising areas in Dubai for real estate investment in 2024, with detailed analysis of ROI potential and market trends.',
    content: `Dubai's real estate market continues to attract investors from around the world. As we move into 2024, several areas stand out for their exceptional investment potential. This comprehensive guide explores the top 10 investment areas, analyzing factors like rental yields, capital appreciation, infrastructure development, and future growth prospects.

From the established luxury markets of Downtown Dubai and Palm Jumeirah to emerging hotspots like Dubai South and Dubai Creek Harbour, each area offers unique advantages for different types of investors. Whether you're looking for high rental yields, long-term capital appreciation, or a balanced portfolio, Dubai has options to suit every investment strategy.

Key factors to consider include proximity to major business hubs, upcoming infrastructure projects, rental demand trends, and historical price appreciation. Our analysis incorporates data from the past 5 years and expert predictions for market trends through 2025.`,
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Senior Real Estate Analyst with 10+ years of experience in UAE market analysis',
    category: 'investment',
    tags: ['investment', 'dubai', 'roi', '2024', 'market analysis'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    publishedDate: '2024-01-15',
    readTime: 8,
    featured: true,
    views: 1254,
    likes: 89,
    comments: 23
  },
  {
    id: '2',
    title: 'Complete Guide to Buying Property in UAE',
    slug: 'complete-guide-buying-property-uae',
    excerpt: 'Everything you need to know about buying property in the UAE, from legal requirements to financing options and step-by-step process.',
    content: `Buying property in the UAE can be an exciting but complex process. This comprehensive guide covers everything you need to know, from understanding the legal framework to navigating the buying process smoothly.

The UAE offers several attractive visa options for property buyers, including the Golden Visa program for investments over AED 2 million. Understanding these benefits can significantly impact your investment decisions.

We'll cover the complete buying process: property search, due diligence, offer submission, transfer of ownership, and registration. We'll also explore financing options, including mortgage products from UAE banks and developer payment plans for off-plan properties.

Legal considerations are crucial when buying property in the UAE. We'll explain the role of the Dubai Land Department, the importance of proper documentation, and how to work effectively with real estate agents and legal consultants.`,
    author: 'Michael Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Real Estate Consultant specializing in UAE property transactions',
    category: 'guides',
    tags: ['buying', 'uae', 'legal', 'process', 'financing'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    publishedDate: '2024-01-12',
    readTime: 12,
    featured: true,
    views: 987,
    likes: 67,
    comments: 15
  },
  {
    id: '3',
    title: 'Rental Market Trends: What to Expect in 2024',
    slug: 'rental-market-trends-2024',
    excerpt: 'Analysis of current rental market trends and predictions for 2024, including rental yields, popular areas, and tenant preferences.',
    content: `The UAE rental market has shown remarkable resilience and growth in recent years. As we enter 2024, several key trends are shaping the rental landscape across major cities like Dubai, Abu Dhabi, and Sharjah.

Rental yields remain attractive, particularly in established areas like Dubai Marina, Downtown Dubai, and Business Bay. However, emerging areas are offering competitive yields with the potential for capital appreciation.

We're seeing increased demand for family-friendly communities, with amenities like schools, parks, and healthcare facilities becoming major decision factors for tenants. The rise of remote work has also influenced rental preferences, with more people seeking larger spaces with dedicated home offices.

This analysis examines rental trends by property type, area, and price segment, providing valuable insights for both investors and tenants looking to navigate the rental market in 2024.`,
    author: 'Fatima Al-Mansoori',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Market Research Analyst specializing in UAE rental markets',
    category: 'rental',
    tags: ['rental', 'trends', '2024', 'market analysis', 'yields'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c2c6d37f9d8?w=800&h=600&fit=crop',
    publishedDate: '2024-01-10',
    readTime: 6,
    featured: false,
    views: 756,
    likes: 45,
    comments: 12
  },
  {
    id: '4',
    title: 'Off-Plan vs. Secondary Market: Pros and Cons',
    slug: 'offplan-vs-secondary-market-pros-cons',
    excerpt: 'Detailed comparison of buying off-plan properties versus secondary market properties, helping investors make informed decisions.',
    content: `One of the most common questions from UAE property investors is whether to buy off-plan (new construction) or secondary market (resale) properties. Each option has distinct advantages and considerations that can significantly impact your investment returns.

Off-plan properties offer attractive payment plans, lower entry prices, and the potential for capital appreciation before completion. However, they come with risks related to construction delays and market uncertainties.

Secondary market properties provide immediate possession and established communities, but typically require larger upfront payments and may have less appreciation potential.

This comprehensive guide breaks down the pros and cons of each option, helping you make an informed decision based on your investment goals, timeline, and risk tolerance. We'll also explore hybrid strategies that combine the benefits of both markets.`,
    author: 'David Williams',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0f9f28545761?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Investment Advisor with expertise in UAE property markets',
    category: 'investment',
    tags: ['offplan', 'secondary market', 'investment', 'comparison'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    publishedDate: '2024-01-08',
    readTime: 10,
    featured: false,
    views: 623,
    likes: 38,
    comments: 8
  },
  {
    id: '5',
    title: 'Mortgage Guide for UAE Property Buyers',
    slug: 'mortgage-guide-uae-property-buyers',
    excerpt: 'Complete guide to getting a mortgage in the UAE, including eligibility criteria, documentation, and best practices for approval.',
    content: `Getting a mortgage in the UAE can be straightforward if you understand the process and requirements. This guide covers everything you need to know about UAE mortgages, from eligibility criteria to documentation and approval tips.

UAE banks offer competitive mortgage products for both UAE residents and non-residents, with loan-to-value ratios typically ranging from 70% to 80% of the property value. Understanding these options can help you maximize your purchasing power.

We'll cover the complete mortgage application process, including pre-approval, property valuation, and final approval. We'll also explore special programs like the Dubai Mortgage Initiative, which offers favorable terms for Emiratis and expats.

Documentation requirements are crucial for mortgage approval. We'll provide a comprehensive checklist of required documents, from salary certificates to bank statements, and explain how to prepare a strong mortgage application.`,
    author: 'Aisha Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Mortgage Specialist with 8 years of experience in UAE banking',
    category: 'financing',
    tags: ['mortgage', 'financing', 'banking', 'guidelines'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    publishedDate: '2024-01-05',
    readTime: 9,
    featured: false,
    views: 892,
    likes: 56,
    comments: 14
  },
  {
    id: '6',
    title: 'Sustainable Living: Green Buildings in UAE',
    slug: 'sustainable-living-green-buildings-uae',
    excerpt: 'Exploring the rise of sustainable and green buildings in the UAE, including LEED-certified projects and eco-friendly communities.',
    content: `Sustainability has become a key focus in UAE real estate development, with increasing demand for green buildings and eco-friendly communities. This trend reflects both global environmental concerns and the UAE's commitment to sustainable development.

Green buildings in the UAE are designed to minimize environmental impact through energy-efficient systems, water conservation, and sustainable materials. Many new developments are pursuing LEED certification and other international green building standards.

We'll explore notable sustainable projects across the UAE, from Dubai Sustainable City to Masdar City in Abu Dhabi. These developments showcase innovative approaches to sustainable urban living, including solar power integration, waste management systems, and green transportation options.

The benefits of green buildings extend beyond environmental impact to include lower operating costs, healthier living environments, and higher property values. We'll analyze the financial benefits of sustainable properties and their growing appeal to environmentally conscious buyers and tenants.`,
    author: 'James Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    authorBio: 'Sustainability Consultant specializing in green buildings',
    category: 'sustainability',
    tags: ['sustainability', 'green buildings', 'environment', 'leed'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    publishedDate: '2024-01-03',
    readTime: 7,
    featured: false,
    views: 445,
    likes: 29,
    comments: 7
  }
];

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentBlogPosts = (limit: number = 5) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};

export const getAllBlogPosts = () => {
  return blogPosts;
};

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};
