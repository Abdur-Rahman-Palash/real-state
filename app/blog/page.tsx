'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Calendar, Clock, User, Heart, MessageSquare, ChevronRight, Star } from 'lucide-react';
import { getFeaturedBlogPosts, getBlogPostsByCategory, getRecentBlogPosts, getAllBlogPosts } from '@/data/blog';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'investment', label: 'Investment' },
    { value: 'guides', label: 'Guides' },
    { value: 'rental', label: 'Rental' },
    { value: 'financing', label: 'Financing' },
    { value: 'sustainability', label: 'Sustainability' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'views', label: 'Most Viewed' },
    { value: 'comments', label: 'Most Discussed' }
  ];

  const getFilteredPosts = () => {
    let posts = getAllBlogPosts();

    // Apply category filter
    if (selectedCategory !== 'all') {
      posts = getBlogPostsByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'popular':
        posts.sort((a, b) => b.likes - a.likes);
        break;
      case 'views':
        posts.sort((a, b) => b.views - a.views);
        break;
      case 'comments':
        posts.sort((a, b) => b.comments - a.comments);
        break;
    }

    return posts;
  };

  const filteredPosts = getFilteredPosts();
  const featuredPosts = getFeaturedBlogPosts();

  const BlogCard = ({ post }: { post: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {post.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {Math.ceil(post.readTime)} min read
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium capitalize">
            {post.category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <div>
              <div className="font-medium text-gray-700">{post.author}</div>
              <div className="text-xs">{post.authorBio}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>

        <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  const FeaturedPostCard = ({ post }: { post: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {Math.ceil(post.readTime)} min read
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-sm font-medium capitalize">
            {post.category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <div className="font-medium text-gray-700">{post.author}</div>
              <div className="text-xs">{post.authorBio}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>

        <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
          Read Full Article
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              Expert insights, market analysis, and guides to help you make informed real estate decisions in UAE
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, tags, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              {filteredPosts.length} Articles Found
            </h3>
            <p className="text-gray-600 text-sm">
              {searchQuery && `Searching for "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-primary-50 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Get the latest real estate insights, market trends, and expert advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
