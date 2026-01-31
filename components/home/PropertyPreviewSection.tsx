'use client';

import React, { useState } from 'react';
import { Bed, Bath, Square, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { getPropertiesByType } from '@/data/properties';

const PropertyPreviewSection = () => {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');
  const [savedProperties, setSavedProperties] = useState<string[]>([]);

  const saleProperties = getPropertiesByType('sale').slice(0, 6);
  const rentProperties = getPropertiesByType('rent').slice(0, 6);
  const currentProperties = activeTab === 'sale' ? saleProperties : rentProperties;

  const toggleSaveProperty = (propertyId: string) => {
    setSavedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    if (type === 'sale') {
      return `AED ${price.toLocaleString()}`;
    } else {
      return `AED ${price.toLocaleString()}/year`;
    }
  };

  const formatArea = (area: number, unit: string) => {
    return `${area.toLocaleString()} ${unit}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover handpicked properties for {activeTab === 'sale' ? 'sale' : 'rent'} across the UAE
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setActiveTab('sale')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'sale'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'rent'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Property Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.featured && (
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {property.verified && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Save Button */}
                <button
                  onClick={() => toggleSaveProperty(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      savedProperties.includes(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Property Type Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-900">
                    {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-1">
                  {property.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <span className="truncate">{property.address}</span>
                </p>

                {/* Price */}
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {formatPrice(property.price, property.type)}
                </div>

                {/* Property Features */}
                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'Studio'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{formatArea(property.area, property.areaUnit)}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <a
            href={`/${activeTab}`}
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            View More {activeTab === 'sale' ? 'Properties for Sale' : 'Properties for Rent'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyPreviewSection;
