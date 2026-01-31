'use client';

import React from 'react';
import { Home, ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their perfect property through our platform
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg">
                <span>Start Your Search</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Contact an Agent</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  50K+
                </div>
                <div className="text-white/80">
                  Properties Listed
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  25K+
                </div>
                <div className="text-white/80">
                  Happy Customers
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-white/80">
                  Expert Agents
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  4.8★
                </div>
                <div className="text-white/80">
                  Customer Rating
                </div>
              </div>
            </div>

            {/* Secondary CTA - List Property */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                List Your Property with Us
              </h3>
              <p className="text-white/90 mb-6">
                Reach thousands of potential buyers and renters. Get your property listed today and sell or rent faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                  <Home className="w-4 h-4" />
                  <span>List Property</span>
                </button>
                
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
