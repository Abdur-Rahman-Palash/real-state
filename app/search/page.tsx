'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Grid, List, Map, ChevronDown, Heart, Bed, Bath, Square, MapPin, Star, X } from 'lucide-react';
import { getAllProperties, getPropertiesByLocation, getPropertiesByType } from '@/data/properties';

const SearchResultsContent = () => {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get search parameters from URL
  const location = searchParams.get('location') || '';
  const propertyType = searchParams.get('type') || '';
  const purpose = searchParams.get('purpose') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const bedrooms = searchParams.get('bedrooms') || '';

  const [filters, setFilters] = useState({
    location: location,
    propertyType: propertyType || 'all',
    purpose: purpose || 'all',
    priceRange: minPrice && maxPrice ? `${minPrice}-${maxPrice}` : 'all',
    bedrooms: bedrooms || 'all',
    bathrooms: 'all',
    area: 'all',
    furnished: 'all'
  });

  const properties = getAllProperties();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [isLoading, setIsLoading] = useState(true);

  // Apply filters and search
  const applyFilters = () => {
    setIsLoading(true);
    let filtered = [...properties];

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.address.toLowerCase().includes(filters.location.toLowerCase()) ||
        p.title.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply property type filter
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.propertyType === filters.propertyType);
    }

    // Apply purpose filter (sale/rent)
    if (filters.purpose !== 'all') {
      filtered = filtered.filter(p => p.type === filters.purpose);
    }

    // Apply price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Apply bedrooms filter
    if (filters.bedrooms !== 'all') {
      filtered = filtered.filter(p => p.bedrooms === parseInt(filters.bedrooms));
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProperties(filtered);
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy, searchQuery]);

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
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
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
              
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
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded ${viewMode === 'map' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.location && (
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                Location: {filters.location}
                <button
                  onClick={() => setFilters({...filters, location: ''})}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.propertyType !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                Type: {filters.propertyType}
                <button
                  onClick={() => setFilters({...filters, propertyType: 'all'})}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.purpose !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                Purpose: {filters.purpose}
                <button
                  onClick={() => setFilters({...filters, purpose: 'all'})}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Purpose */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                  <select
                    value={filters.purpose}
                    onChange={(e) => setFilters({...filters, purpose: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>

                {/* Property Type */}
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
                    <option value="studio">Studio</option>
                  </select>
                </div>

                {/* Price Range */}
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

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Any</option>
                    <option value="0">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>

                {/* Bathrooms */}
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

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (sqft)</label>
                  <select
                    value={filters.area}
                    onChange={(e) => setFilters({...filters, area: e.target.value})}
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

                {/* Apply Filters Button */}
                <button
                  onClick={applyFilters}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-900">
                  {isLoading ? 'Searching...' : `${filteredProperties.length} Properties Found`}
                </h2>
                <p className="text-gray-600">
                  {searchQuery && `Searching for "${searchQuery}"`}
                  {location && ` in ${location}`}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Map View */}
            {viewMode === 'map' ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Map className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map View</p>
                    <p className="text-sm">Map integration would show property locations</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Properties Grid/List */
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {isLoading ? (
                  // Loading skeleton
                  Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="h-48 bg-gray-200 animate-pulse"></div>
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  ))
                ) : filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    viewMode === 'grid' ? (
                      <PropertyCard key={property.id} property={property} />
                    ) : (
                      <PropertyListItem key={property.id} property={property} />
                    )
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-500 mb-4">
                      <Search className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-lg font-medium">No properties found</p>
                      <p>Try adjusting your search criteria or filters</p>
                    </div>
                    <button
                      onClick={() => {
                        setFilters({
                          location: '',
                          propertyType: 'all',
                          purpose: 'all',
                          priceRange: 'all',
                          bedrooms: 'all',
                          bathrooms: 'all',
                          area: 'all',
                          furnished: 'all'
                        });
                        setSearchQuery('');
                      }}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && filteredProperties.length > 0 && (
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SearchResultsPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
};

export default SearchResultsPage;
