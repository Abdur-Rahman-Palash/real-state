'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  Search,
  MapPin,
  DollarSign,
  Home,
  Building,
  Eye,
  Clock,
  ChevronRight,
  Star
} from 'lucide-react';
import { getFeaturedInsights } from '@/data/insights';

const MarketInsightsPage = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'reports' | 'analysis'>('trends');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const insights = getFeaturedInsights();

  // Mock market data
  const marketTrends = [
    {
      title: 'Average Property Prices',
      value: 'AED 1,250,000',
      change: '+5.2%',
      trend: 'up',
      description: 'Average price across all property types in Dubai'
    },
    {
      title: 'Rental Yield',
      value: '6.8%',
      change: '+0.3%',
      trend: 'up',
      description: 'Average annual rental yield for residential properties'
    },
    {
      title: 'Transaction Volume',
      value: '3,847',
      change: '-2.1%',
      trend: 'down',
      description: 'Number of property transactions this month'
    },
    {
      title: 'New Listings',
      value: '1,293',
      change: '+12.4%',
      trend: 'up',
      description: 'New properties listed in the market this month'
    }
  ];

  const priceTrends = [
    { area: 'Downtown Dubai', avgPrice: 1850000, change: '+3.2%', trend: 'up' },
    { area: 'Dubai Marina', avgPrice: 1450000, change: '+2.8%', trend: 'up' },
    { area: 'Palm Jumeirah', avgPrice: 3200000, change: '+4.1%', trend: 'up' },
    { area: 'Business Bay', avgPrice: 980000, change: '-1.2%', trend: 'down' },
    { area: 'JBR', avgPrice: 1680000, change: '+1.9%', trend: 'up' },
    { area: 'Arabian Ranches', avgPrice: 2100000, change: '+2.5%', trend: 'up' }
  ];

  const categories = ['all', 'prices', 'trends', 'investment', 'market', 'analysis'];

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const InsightCard = ({ insight }: { insight: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={insight.image}
          alt={insight.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            insight.category === 'prices' ? 'bg-green-100 text-green-700' :
            insight.category === 'trends' ? 'bg-blue-100 text-blue-700' :
            insight.category === 'investment' ? 'bg-purple-100 text-purple-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {insight.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
          {insight.readTime} min read
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {insight.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {insight.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(insight.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{Math.floor(Math.random() * 1000) + 100} views</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <span>By {insight.author}</span>
          </div>
          <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Insights & Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate trends, market analysis, and investment opportunities
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketTrends.map((trend, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-medium">{trend.title}</h3>
                <div className={`flex items-center ${trend.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  <span className="font-semibold">{trend.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{trend.value}</div>
              <p className="text-gray-600 text-sm">{trend.description}</p>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('trends')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'trends' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <BarChart3 className="w-4 h-4 mr-2 inline" />
                Price Trends
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'reports' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FileText className="w-4 h-4 mr-2 inline" />
                Reports
              </button>
              <button
                onClick={() => setActiveTab('analysis')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'analysis' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-2 inline" />
                Analysis
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'trends' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Area Price Trends</h3>
                  <select 
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="month">Last Month</option>
                    <option value="quarter">Last Quarter</option>
                    <option value="year">Last Year</option>
                  </select>
                </div>

                <div className="space-y-4">
                  {priceTrends.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <div className="font-semibold text-gray-900">{area.area}</div>
                          <div className="text-sm text-gray-600">Average Price</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">AED {area.avgPrice.toLocaleString()}</div>
                        <div className={`flex items-center text-sm ${area.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {area.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                          <span>{area.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Reports</h3>
                  <p className="text-gray-600 mb-6">
                    Download comprehensive market reports with detailed analysis and forecasts
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Q4 2023 Market Report</h4>
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Comprehensive analysis of Q4 2023 real estate market performance</p>
                      <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">2024 Market Outlook</h4>
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Predictions and trends for the 2024 real estate market</p>
                      <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Investment Guide</h4>
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Complete guide for real estate investment in UAE</p>
                      <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Rental Market Analysis</h4>
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3">In-depth analysis of rental yields and trends</p>
                      <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analysis' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Supply & Demand</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Supply</span>
                        <span className="font-semibold">45,000 units</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Demand Index</span>
                        <span className="font-semibold text-green-600">High</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Vacancy Rate</span>
                        <span className="font-semibold">8.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Time on Market</span>
                        <span className="font-semibold">45 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Investment Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI</span>
                        <span className="font-semibold">6.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Capital Appreciation</span>
                        <span className="font-semibold text-green-600">+5.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Rental Yield</span>
                        <span className="font-semibold">7.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Price Growth</span>
                        <span className="font-semibold text-green-600">+3.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights, reports, and analysis..."
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
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Load More Insights
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketInsightsPage;
