'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Grid, List, ChevronDown, Heart, Bed, Bath, Square, MapPin, Star } from 'lucide-react';
import { getAllProperties, getPropertiesByType, getPropertiesByLocation, getPropertiesByPriceRange } from '@/data/properties';

const PropertyListingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [filters, setFilters] = useState({
    location: '',
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    size: 'all'
  });

  const properties = getAllProperties();
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...properties];

    if (filters.location) {
      filtered = getPropertiesByLocation(filters.location);
    }

    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (filters.bedrooms !== 'all') {
      filtered = filtered.filter(p => p.bedrooms === parseInt(filters.bedrooms));
    }

    if (filters.bathrooms !== 'all') {
      filtered = filtered.filter(p => p.bathrooms === parseInt(filters.bathrooms));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
    }

    setFilteredProperties(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        {property.featured && (
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="text-right">
            <div className="text-xl font-bold text-primary-600">
              AED {property.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">
              {property.type === 'rent' ? '/year' : ''}
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{property.address}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Star className="w-3 h-3 mr-1 text-yellow-500" />
            <span>{property.rating}</span>
            <span className="mx-1">•</span>
            <span>{property.views} views</span>
          </div>
          <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const PropertyListItem = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 md:h-full object-cover"
          />
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          {property.featured && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
              Featured
            </div>
          )}
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
              {property.title}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">
                AED {property.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {property.type === 'rent' ? '/year' : ''}
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.address}</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{property.area} sqft</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {property.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Star className="w-3 h-3 mr-1 text-yellow-500" />
              <span>{property.rating}</span>
              <span className="mx-1">•</span>
              <span>{property.views} views</span>
              <span className="mx-1">•</span>
              <span>Listed {new Date(property.listedDate).toLocaleDateString()}</span>
            </div>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
          <p className="text-gray-600">Find your perfect property from our extensive collection</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Locations</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Business Bay">Business Bay</option>
                <option value="JBR">JBR</option>
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">Any Price</option>
                <option value="0-500000">Under AED 500K</option>
                <option value="500000-1000000">AED 500K - 1M</option>
                <option value="1000000-2000000">AED 1M - 2M</option>
                <option value="2000000-5000000">AED 2M - 5M</option>
                <option value="5000000-999999999">Above AED 5M</option>
              </select>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">Any</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bathrooms Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
              <select
                value={filters.bathrooms}
                onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">Any</option>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>
            </div>

            {/* Size Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size (sqft)</label>
              <select
                value={filters.size}
                onChange={(e) => setFilters({...filters, size: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">Any Size</option>
                <option value="0-1000">Under 1,000</option>
                <option value="1000-2000">1,000 - 2,000</option>
                <option value="2000-3000">2,000 - 3,000</option>
                <option value="3000-5000">3,000 - 5,000</option>
                <option value="5000-999999">Above 5,000</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={applyFilters}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Search Properties
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <p className="text-gray-600">Browse our selection of properties</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredProperties.map((property) => (
            viewMode === 'grid' ? (
              <PropertyCard key={property.id} property={property} />
            ) : (
              <PropertyListItem key={property.id} property={property} />
            )
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyListingPage;
