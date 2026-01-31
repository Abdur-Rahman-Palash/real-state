'use client';

import React from 'react';
import { MapPin, Home, TrendingUp } from 'lucide-react';
import { getPopularLocations } from '@/data/locations';

const PopularLocationsSection = () => {
  const locations = getPopularLocations();

  const formatPrice = (price: number, currency: string) => {
    if (price >= 1000000) {
      return `Avg: ${currency} ${(price / 1000000).toFixed(1)}M`;
    }
    return `Avg: ${currency} ${(price / 1000).toFixed(0)}K`;
  };

  const formatPropertyCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k Properties`;
    }
    return `${count} Properties`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore properties in the most sought-after neighborhoods across the UAE
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {locations.map((location) => (
            <a
              key={location.id}
              href={`/locations/${location.id}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                {/* Location Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Location Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {location.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {location.emirate}
                    </p>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {location.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Home className="w-4 h-4 mr-1" />
                        <span>{formatPropertyCount(location.propertyCount)}</span>
                      </div>
                      <div className="flex items-center text-primary-600 font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{formatPrice(location.averagePrice, location.currency)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-3 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Explore Properties</span>
                    <MapPin className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="/locations"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            Browse All Locations
            <MapPin className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularLocationsSection;
