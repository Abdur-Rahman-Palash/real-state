'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Home, 
  Heart, 
  FileText, 
  MessageSquare, 
  Settings, 
  Bell, 
  TrendingUp, 
  Users, 
  Building,
  Eye,
  Calendar,
  DollarSign,
  Search,
  Plus,
  ArrowRight,
  Star,
  Clock,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'properties' | 'listings' | 'messages'>('overview');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    memberSince: '2023-06-15',
    accountType: 'buyer'
  };

  // Mock statistics
  const stats = {
    savedProperties: 12,
    viewedProperties: 48,
    messages: 5,
    searches: 23
  };

  // Mock recent activities
  const recentActivities = [
    {
      id: '1',
      type: 'saved',
      property: 'Luxury 3BR Apartment Dubai Marina',
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      type: 'viewed',
      property: 'Modern Villa with Private Pool',
      time: '5 hours ago',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      type: 'search',
      query: '2 bedroom apartments in Downtown Dubai',
      time: '1 day ago',
      image: null
    },
    {
      id: '4',
      type: 'contacted',
      property: 'Stunning 1BR Apartment Downtown',
      time: '2 days ago',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop'
    }
  ];

  // Mock saved properties
  const savedProperties = [
    {
      id: '1',
      title: 'Luxury 3BR Apartment Dubai Marina',
      location: 'Dubai Marina, Dubai',
      price: 2500000,
      type: 'sale',
      bedrooms: 3,
      bathrooms: 3,
      area: 2100,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      savedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Modern Villa with Private Pool',
      location: 'Palm Jumeirah, Dubai',
      price: 5500000,
      type: 'sale',
      bedrooms: 5,
      bathrooms: 6,
      area: 4500,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      savedDate: '2024-01-12'
    },
    {
      id: '3',
      title: 'Stunning 1BR Apartment Downtown',
      location: 'Downtown Dubai, Dubai',
      price: 120000,
      type: 'rent',
      bedrooms: 1,
      bathrooms: 1,
      area: 850,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      savedDate: '2024-01-10'
    }
  ];

  // Mock messages
  const messages = [
    {
      id: '1',
      sender: 'Sarah Johnson',
      senderAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      subject: 'Re: Luxury 3BR Apartment Dubai Marina',
      preview: 'Hi John, I\'d be happy to schedule a viewing for this property...',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      sender: 'Michael Chen',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      subject: 'New property matching your criteria',
      preview: 'I found a perfect property that matches your requirements...',
      time: '1 day ago',
      unread: false
    },
    {
      id: '3',
      sender: 'Fatima Al-Mansoori',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      subject: 'Property viewing confirmation',
      preview: 'Your viewing is confirmed for tomorrow at 3 PM...',
      time: '2 days ago',
      unread: false
    }
  ];

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>
        <div className="text-lg font-bold text-primary-600 mb-2">
          AED {property.price.toLocaleString()}
          <span className="text-sm text-gray-500 font-normal">
            {property.type === 'rent' ? '/year' : ''}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );

  const MessageCard = ({ message }: { message: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer">
      <div className="flex items-start space-x-3">
        <img
          src={message.senderAvatar}
          alt={message.sender}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900 truncate">{message.sender}</h4>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
          <h5 className="text-sm font-medium text-gray-700 mb-1 truncate">{message.subject}</h5>
          <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
        </div>
        {message.unread && (
          <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <div className="mt-3 text-xs text-gray-500">
                  Member since {new Date(user.memberSince).toLocaleDateString()}
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {user.accountType === 'buyer' ? 'Buyer' : 'Agent'}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'overview'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Home className="w-5 h-5 mr-3" />
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('properties')}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'properties'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    Saved Properties
                    <span className="ml-auto bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {stats.savedProperties}
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('listings')}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'listings'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <FileText className="w-5 h-5 mr-3" />
                    My Listings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'messages'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Messages
                    <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                      {messages.filter(m => m.unread).length}
                    </span>
                  </button>
                </li>
                <li>
                  <Link
                    href="/dashboard/settings"
                    className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/properties"
                  className="flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Properties
                </Link>
                <Link
                  href="/agents"
                  className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Find Agents
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Heart className="w-8 h-8 text-red-500" />
                      <span className="text-2xl font-bold text-gray-900">{stats.savedProperties}</span>
                    </div>
                    <div className="text-gray-600 text-sm">Saved Properties</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Eye className="w-8 h-8 text-blue-500" />
                      <span className="text-2xl font-bold text-gray-900">{stats.viewedProperties}</span>
                    </div>
                    <div className="text-gray-600 text-sm">Viewed Properties</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <MessageSquare className="w-8 h-8 text-green-500" />
                      <span className="text-2xl font-bold text-gray-900">{stats.messages}</span>
                    </div>
                    <div className="text-gray-600 text-sm">Messages</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Search className="w-8 h-8 text-purple-500" />
                      <span className="text-2xl font-bold text-gray-900">{stats.searches}</span>
                    </div>
                    <div className="text-gray-600 text-sm">Recent Searches</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 pb-4 border-b border-gray-200 last:border-0">
                        <div className="flex-shrink-0">
                          {activity.image ? (
                            <img
                              src={activity.image}
                              alt={activity.property}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                              <Search className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            {activity.type === 'saved' && 'Saved '}
                            {activity.type === 'viewed' && 'Viewed '}
                            {activity.type === 'searched' && 'Searched for '}
                            {activity.type === 'contacted' && 'Contacted agent about '}
                            <span className="font-medium">{activity.property || activity.query}</span>
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Insights */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Market Insights</h3>
                    <Link href="/market-insights" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View All
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-medium text-gray-900">Price Trends</span>
                      </div>
                      <p className="text-sm text-gray-600">Average prices in Dubai increased by 5.2% this month</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-medium text-gray-900">New Listings</span>
                      </div>
                      <p className="text-sm text-gray-600">1,293 new properties listed this week</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Saved Properties Tab */}
            {activeTab === 'properties' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Saved Properties</h2>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm">
                      Sort by: Recently Saved
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      <Plus className="w-4 h-4 mr-2 inline" />
                      New Message
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {messages.map((message) => (
                    <MessageCard key={message.id} message={message} />
                  ))}
                </div>
              </div>
            )}

            {/* Listings Tab */}
            {activeTab === 'listings' && (
              <div className="text-center py-12">
                <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Listings Yet</h3>
                <p className="text-gray-600 mb-6">Start listing your properties to reach potential buyers and renters.</p>
                <Link
                  href="/dashboard/add-listing"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
