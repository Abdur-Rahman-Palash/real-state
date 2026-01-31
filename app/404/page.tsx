'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Home, Search, ArrowLeft, AlertCircle, RefreshCw, Mail } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-9xl font-bold text-primary-200">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertCircle className="w-32 h-32 text-primary-600" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's help you find what you're looking for.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for properties, agents, or articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <button className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <Home className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">Go Home</span>
            </button>
            
            <button className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <Search className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">Browse Properties</span>
            </button>
            
            <button className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <ArrowLeft className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">Go Back</span>
            </button>
          </div>

          {/* Popular Links */}
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Property Search</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/properties" className="text-primary-600 hover:text-primary-700 transition-colors">
                      All Properties
                    </a>
                  </li>
                  <li>
                    <a href="/properties?purpose=rent" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Properties for Rent
                    </a>
                  </li>
                  <li>
                    <a href="/properties?purpose=sale" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Properties for Sale
                    </a>
                  </li>
                  <li>
                    <a href="/new-projects" className="text-primary-600 hover:text-primary-700 transition-colors">
                      New Projects
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/agents" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Find Agents
                    </a>
                  </li>
                  <li>
                    <a href="/market-insights" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Market Insights
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Real Estate Blog
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Help & FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 bg-primary-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you find the perfect property or answer any questions you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </button>
              
              <button className="flex items-center justify-center px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
            </div>
          </div>

          {/* Error Details (for development) */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Error Code: 404 | Page Not Found
            </p>
            <p className="text-xs text-gray-400 mt-2">
              If you believe this is an error, please contact our technical support team.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
