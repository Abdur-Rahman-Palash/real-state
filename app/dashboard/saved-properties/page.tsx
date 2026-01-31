'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Heart, 
  Search, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  ArrowUpDown,
  X,
  Eye,
  Share2,
  Phone,
  Mail,
  Star,
  Check
} from 'lucide-react';
import Link from 'next/link';

const SavedPropertiesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperties, setSelectedProperties] = useState<Set<string>>(new Set());

  // Mock saved properties data
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
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      savedDate: '2024-01-15',
      views: 1234,
      rating: 4.8,
      agent: {
        name: 'Sarah Johnson',
        phone: '+971 50 123 4567',
        email: 'sarah@agent.ae'
      },
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Balcony', 'Storage'],
      description: 'Luxurious 3-bedroom apartment in the heart of Dubai Marina with stunning views and premium amenities.'
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
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      savedDate: '2024-01-12',
      views: 892,
      rating: 4.9,
      agent: {
        name: 'Michael Chen',
        phone: '+971 55 987 6543',
        email: 'michael@agent.ae'
      },
      amenities: ['Private Pool', 'Garden', 'Maid Room', 'Storage', 'Garage', 'Security'],
      description: 'Stunning modern villa with private pool, perfect for families seeking luxury living.'
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
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      savedDate: '2024-01-10',
      views: 567,
      rating: 4.7,
      agent: {
        name: 'Fatima Al-Mansoori',
        phone: '+971 52 456 7890',
        email: 'fatima@agent.ae'
      },
      amenities: ['Gym', 'Parking', 'Security', 'Balcony', 'Concierge', 'Retail'],
      description: 'Modern 1-bedroom apartment in Downtown Dubai with world-class amenities.'
    },
    {
      id: '4',
      title: 'Spacious 2BR in Business Bay',
      location: 'Business Bay, Dubai',
      price: 1800000,
      type: 'sale',
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      savedDate: '2024-01-08',
      views: 445,
      rating: 4.6,
      agent: {
        name: 'David Williams',
        phone: '+971 54 321 9876',
        email: 'david@agent.ae'
      },
      amenities: ['Gym', 'Pool', 'Parking', 'Security', 'City View', 'Storage'],
      description: 'Spacious 2-bedroom apartment in Business Bay with excellent city views.'
    },
    {
      id: '5',
      title: 'Beachfront Villa JBR',
      location: 'Jumeirah Beach Residence, Dubai',
      price: 3200000,
      type: 'sale',
      bedrooms: 4,
      bathrooms: 4,
      area: 3200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      savedDate: '2024-01-05',
      views: 789,
      rating: 4.8,
      agent: {
        name: 'Emily Rodriguez',
        phone: '+971 56 654 3210',
        email: 'emily@agent.ae'
      },
      amenities: ['Beach Access', 'Pool', 'Gym', 'Parking', 'Security', 'Maid Room'],
      description: 'Beautiful beachfront villa with direct beach access and stunning sea views.'
    },
    {
      id: '6',
      title: 'Studio Apartment in JLT',
      location: 'Jumeirah Lake Towers, Dubai',
      price: 65000,
      type: 'rent',
      bedrooms: 0,
      bathrooms: 1,
      area: 450,
      image: 'https://images.unsplash.com/photo-1600607687937-ce5d6b81bbac?w=800&h=600&fit=crop',
      savedDate: '2024-01-03',
      views: 234,
      rating: 4.5,
      agent: {
        name: 'Ahmed Mohammed',
        phone: '+971 58 123 7890',
        email: 'ahmed@agent.ae'
      },
      amenities: ['Gym', 'Pool', 'Parking', 'Security', 'Lake View', 'Retail'],
      description: 'Cozy studio apartment in JLT with lake views and great amenities.'
    }
  ];

  const filteredProperties = savedProperties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectProperty = (propertyId: string) => {
    const newSelected = new Set(selectedProperties);
    if (newSelected.has(propertyId)) {
      newSelected.delete(propertyId);
    } else {
      newSelected.add(propertyId);
    }
    setSelectedProperties(newSelected);
  };

  const handleRemoveSelected = () => {
    // Handle bulk removal
    console.log('Removing properties:', Array.from(selectedProperties));
    setSelectedProperties(new Set());
  };

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            property.type === 'sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelectProperty(property.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              selectedProperties.has(property.id)
                ? 'bg-primary-600 text-white'
                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
            }`}
          >
            {selectedProperties.has(property.id) ? <Check className="w-4 h-4" /> : <Heart className="w-4 h-4 fill-current" />}
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {property.title}
        </h3>
        
        <div className="text-lg font-bold text-primary-600 mb-3">
          AED {property.price.toLocaleString()}
          <span className="text-sm text-gray-500 font-normal">
            {property.type === 'rent' ? '/year' : ''}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-3">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.area} sqft</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
            <span>{property.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Saved {new Date(property.savedDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{property.views} views</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium text-center"
          >
            View Details
          </Link>
          <button className="flex-1 px-3 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium flex items-center justify-center">
            <Phone className="w-4 h-4 mr-1" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  const PropertyListItem = ({ property }: { property: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              property.type === 'sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {property.type === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectProperty(property.id);
              }}
              className={`p-2 rounded-full transition-colors ${
                selectedProperties.has(property.id)
                  ? 'bg-primary-600 text-white'
                  : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
              }`}
            >
              {selectedProperties.has(property.id) ? <Check className="w-4 h-4" /> : <Heart className="w-4 h-4 fill-current" />}
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Saved {new Date(property.savedDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                AED {property.price.toLocaleString()}
                <span className="text-sm text-gray-500 font-normal">
                  {property.type === 'rent' ? '/year' : ''}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                <span>{property.rating}</span>
                <span className="ml-2">({property.views} views)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.area} sqft</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.map((amenity: string, index: number) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {amenity}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <Link
              href={`/properties/${property.id}`}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
            >
              View Details
            </Link>
            <button className="flex-1 px-4 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Agent
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Properties</h1>
          <p className="text-gray-600">
            Manage and view your favorite properties in one place
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search saved properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="recent">Recently Saved</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>
              
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

          {/* Bulk Actions */}
          {selectedProperties.size > 0 && (
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <span className="text-blue-700 font-medium">
                  {selectedProperties.size} {selectedProperties.size === 1 ? 'property' : 'properties'} selected
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProperties(new Set())}
                  className="px-4 py-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  Clear Selection
                </button>
                <button
                  onClick={handleRemoveSelected}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove Selected
                </button>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProperties.length} Saved Properties
            </h2>
            {searchQuery && (
              <p className="text-gray-600 text-sm">
                Searching for "{searchQuery}"
              </p>
            )}
          </div>
        </div>

        {/* Properties Grid/List */}
        {filteredProperties.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {filteredProperties.map((property) => (
              viewMode === 'grid' ? (
                <PropertyCard key={property.id} property={property} />
              ) : (
                <PropertyListItem key={property.id} property={property} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Saved Properties</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'No saved properties match your search criteria.' : 'Start saving properties to see them here.'}
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              Browse Properties
            </Link>
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Load More Properties
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SavedPropertiesPage;
