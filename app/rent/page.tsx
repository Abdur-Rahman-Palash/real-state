'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, MapPin, Bed, Bath, Square, Heart, Calendar, TrendingUp, DollarSign, Home, Building, Car } from 'lucide-react';
import Link from 'next/link';

// Mock rental data
const rentalProperties = [
  {
    id: 1,
    title: "Modern 2BR Apartment in Downtown",
    location: "Downtown Dubai",
    price: 85000,
    currency: "AED",
    period: "yearly",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    furnished: true,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-15",
    views: 245,
    rating: 4.8,
    amenities: ["Parking", "Pool", "Gym", "Security"],
    landlord: "Dubai Properties",
    contact: "+971-4-123-4567"
  },
  {
    id: 2,
    title: "Luxury Villa with Private Pool",
    location: "Palm Jumeirah",
    price: 350000,
    currency: "AED",
    period: "yearly",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    furnished: false,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-20",
    views: 189,
    rating: 4.9,
    amenities: ["Private Pool", "Garden", "Maid's Room", "Parking"],
    landlord: "Elite Homes",
    contact: "+971-4-987-6543"
  },
  {
    id: 3,
    title: "Studio Apartment near Metro",
    location: "Business Bay",
    price: 45000,
    currency: "AED",
    period: "yearly",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    furnished: true,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-18",
    views: 312,
    rating: 4.6,
    amenities: ["Metro Access", "Gym", "Security", "Parking"],
    landlord: "City Rentals",
    contact: "+971-4-555-1234"
  },
  {
    id: 4,
    title: "3BR Townhouse in Community",
    location: "Arabian Ranches",
    price: 180000,
    currency: "AED",
    period: "yearly",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    furnished: false,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-22",
    views: 156,
    rating: 4.7,
    amenities: ["Community Pool", "Park", "Security", "Parking"],
    landlord: "Community Living",
    contact: "+971-4-777-8888"
  },
  {
    id: 5,
    title: "Penthouse with City Views",
    location: "Dubai Marina",
    price: 280000,
    currency: "AED",
    period: "yearly",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    furnished: true,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-25",
    views: 203,
    rating: 4.9,
    amenities: ["Balcony", "Jacuzzi", "Gym", "Concierge"],
    landlord: "Marina Luxury",
    contact: "+971-4-333-9999"
  },
  {
    id: 6,
    title: "1BR Apartment in JLT",
    location: "Jumeirah Lake Towers",
    price: 65000,
    currency: "AED",
    period: "yearly",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    furnished: false,
    image: "/api/placeholder/400/300",
    listedDate: "2024-01-28",
    views: 178,
    rating: 4.5,
    amenities: ["Lake View", "Gym", "Security", "Parking"],
    landlord: "JLT Rentals",
    contact: "+971-4-222-5555"
  }
];

const RentPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [selectedFurnished, setSelectedFurnished] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProperties = useMemo(() => {
    return rentalProperties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || property.type === selectedType;
      const matchesBedrooms = selectedBedrooms === 'all' || property.bedrooms === parseInt(selectedBedrooms);
      const matchesFurnished = selectedFurnished === 'all' || 
                              (selectedFurnished === 'furnished' && property.furnished) ||
                              (selectedFurnished === 'unfurnished' && !property.furnished);
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];

      return matchesSearch && matchesType && matchesBedrooms && matchesFurnished && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedBedrooms, selectedFurnished, priceRange]);

  const sortedProperties = useMemo(() => {
    const sorted = [...filteredProperties];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
      case 'popular':
        return sorted.sort((a, b) => b.views - a.views);
      default:
        return sorted;
    }
  }, [filteredProperties, sortBy]);

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
          FOR RENT
        </div>
        <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
        {property.furnished && (
          <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs">
            Furnished
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
          <div className="text-right">
            <div className="text-xl font-bold text-primary-600">
              AED {property.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">/{property.period}</div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{property.bedrooms}</span>
              </div>
            )}
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
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{property.rating}</span>
            </div>
            <div className="text-sm text-gray-500">
              ({property.views} views)
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {property.type}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="text-sm text-gray-600">
            <div className="font-medium">{property.landlord}</div>
            <div className="text-xs">{property.contact}</div>
          </div>
          <Link 
            href={`/rent/${property.id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Rental</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover the best rental properties in Dubai
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search by location, property name, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Searching for:', searchTerm);
                    }
                  }}
                  className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
                />
                <button 
                  onClick={() => {
                    // Search is already reactive due to searchTerm state, 
                    // but we can add any additional search logic here if needed
                    console.log('Searching for:', searchTerm);
                  }}
                  className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <Filter className="w-5 h-5 text-gray-600" />
              </div>
              
              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Studio">Studio</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              
              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={selectedBedrooms}
                  onChange={(e) => setSelectedBedrooms(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Any</option>
                  <option value="0">Studio</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>
              
              {/* Furnished */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Furnished
                </label>
                <select
                  value={selectedFurnished}
                  onChange={(e) => setSelectedFurnished(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Any</option>
                  <option value="furnished">Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (AED/year)
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>AED {priceRange[0].toLocaleString()}</span>
                    <span>AED {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Rental Properties ({sortedProperties.length})
                  </h2>
                  <p className="text-gray-600">Find your perfect rental home</p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  
                  {/* View Mode */}
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
            </div>
            
            {/* Properties Grid */}
            {sortedProperties.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {sortedProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No rental properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedBedrooms('all');
                    setSelectedFurnished('all');
                    setPriceRange([0, 500000]);
                  }}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
