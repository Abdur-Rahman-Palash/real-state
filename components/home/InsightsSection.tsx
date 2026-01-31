'use client';

import React from 'react';
import { TrendingUp, Calendar, Clock, ArrowRight, BarChart3, FileText } from 'lucide-react';
import { getFeaturedInsights } from '@/data/insights';

const InsightsSection = () => {
  const insights = getFeaturedInsights();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'market':
        return <BarChart3 className="w-5 h-5" />;
      case 'prices':
        return <TrendingUp className="w-5 h-5" />;
      case 'trends':
        return <FileText className="w-5 h-5" />;
      case 'investment':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'market':
        return 'bg-blue-100 text-blue-700';
      case 'prices':
        return 'bg-green-100 text-green-700';
      case 'trends':
        return 'bg-purple-100 text-purple-700';
      case 'investment':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Market Insights & Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate trends, market analysis, and investment opportunities
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
            >
              {/* Insight Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(insight.category)}`}>
                    {getCategoryIcon(insight.category)}
                    <span className="ml-1 capitalize">{insight.category}</span>
                  </span>
                </div>
              </div>

              {/* Insight Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {insight.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(insight.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime} min read</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span>By {insight.author}</span>
                  </div>
                  
                  {/* Read More */}
                  <button className="flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors duration-200 group">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="/insights"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            Explore More Insights
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
