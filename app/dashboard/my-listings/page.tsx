'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Eye,
  Edit,
  Trash2,
  Star,
  TrendingUp,
  Users,
  ArrowUpDown,
  MoreVertical,
  FileText,
  Check,
  X
} from 'lucide-react';
import Link from 'next/link';

const MyListingsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedListings, setSelectedListings] = useState<Set<string>>(new Set());
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  // Mock listings data
  const listings = [
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
      status: 'active',
      listedDate: '2024-01-15',
      views: 1234,
      inquiries: 23,
      featured: true,
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
      status: 'active',
      listedDate: '2024-01-12',
      views: 892,
      inquiries: 45,
      featured: false,
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
      status: 'pending',
      listedDate: '2024-01-10',
      views: 567,
      inquiries: 12,
      featured: false,
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
      status: 'sold',
      listedDate: '2024-01-08',
      views: 445,
      inquiries: 34,
      featured: false,
      agent: {
        name: 'David Williams',
        phone: '+971 54 321 9876',
        email: 'david@agent.ae'
      },
      amenities: ['Gym', 'Pool', 'Parking', 'Security', 'City View', 'Storage'],
      description: 'Spacious 2-bedroom apartment in Business Bay with excellent city views.'
    }
  ];

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectListing = (listingId: string) => {
    const newSelected = new Set(selectedListings);
    if (newSelected.has(listingId)) {
      newSelected.delete(listingId);
    } else {
      newSelected.add(listingId);
    }
    setSelectedListings(newSelected);
  };

  const handleStatusChange = (listingId: string, newStatus: string) => {
    console.log(`Changing status of listing ${listingId} to ${newStatus}`);
  };

  const handleDeleteListing = (listingId: string) => {
    console.log(`Deleting listing ${listingId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'sold': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'pending': return 'Pending';
      case 'sold': return 'Sold';
      default: return status;
    }
  };

  const ListingCard = ({ listing }: { listing: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            listing.type === 'sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {listing.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
          {listing.featured && (
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelectListing(listing.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              selectedListings.has(listing.id)
                ? 'bg-primary-600 text-white'
                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
            }`}
          >
            {selectedListings.has(listing.id) ? <Check className="w-4 h-4" /> : <div className="w-4 h-4 border-2 border-gray-300 rounded" />}
          </button>
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(showDropdown === listing.id ? null : listing.id);
              }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            {showDropdown === listing.id && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Listing
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(listing.id, 'pending');
                    setShowDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Stats
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteListing(listing.id);
                    setShowDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {listing.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
            {getStatusText(listing.status)}
          </span>
        </div>
        
        <div className="text-lg font-bold text-primary-600 mb-3">
          AED {listing.price.toLocaleString()}
          <span className="text-sm text-gray-500 font-normal">
            {listing.type === 'rent' ? '/year' : ''}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{listing.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-3">
            <span>{listing.bedrooms} beds</span>
            <span>{listing.bathrooms} baths</span>
            <span>{listing.area} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {listing.amenities.slice(0, 3).map((amenity: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {amenity}
            </span>
          ))}
          {listing.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{listing.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Listed {new Date(listing.listedDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{listing.views}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{listing.inquiries}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/dashboard/edit-listing/${listing.id}`}
            className="flex-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium text-center"
          >
            Edit
          </Link>
          <button className="flex-1 px-3 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium flex items-center justify-center">
            <Eye className="w-4 h-4 mr-1" />
            Stats
          </button>
        </div>
      </div>
    </div>
  );

  const ListingListItem = ({ listing }: { listing: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              listing.type === 'sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {listing.type === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
            {listing.featured && (
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            )}
          </div>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{listing.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Listed {new Date(listing.listedDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                AED {listing.price.toLocaleString()}
                <span className="text-sm text-gray-500 font-normal">
                  {listing.type === 'rent' ? '/year' : ''}
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                {getStatusText(listing.status)}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span>{listing.bedrooms} beds</span>
            <span>{listing.bathrooms} baths</span>
            <span>{listing.area} sqft</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{listing.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {listing.amenities.map((amenity: string, index: number) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {amenity}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{listing.views} views</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{listing.inquiries} inquiries</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/dashboard/edit-listing/${listing.id}`}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Edit
              </Link>
              <button className="px-4 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium">
                Stats
              </button>
            </div>
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Listings</h1>
            <p className="text-gray-600">
              Manage and track all your property listings
            </p>
          </div>
          <Link
            href="/dashboard/add-listing"
            className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Listing
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 text-sm">Total Listings</div>
              <div className="text-2xl font-bold text-gray-900">{listings.length}</div>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+12% this month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 text-sm">Active Listings</div>
              <div className="text-2xl font-bold text-gray-900">
                {listings.filter(l => l.status === 'active').length}
              </div>
            </div>
            <div className="flex items-center text-blue-600">
              <Eye className="w-4 h-4 mr-1" />
              <span className="text-sm">High visibility</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 text-sm">Total Views</div>
              <div className="text-2xl font-bold text-gray-900">
                {listings.reduce((sum, l) => sum + l.views, 0)}
              </div>
            </div>
            <div className="flex items-center text-purple-600">
              <Eye className="w-4 h-4 mr-1" />
              <span className="text-sm">+24% this week</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 text-sm">Total Inquiries</div>
              <div className="text-2xl font-bold text-gray-900">
                {listings.reduce((sum, l) => sum + l.inquiries, 0)}
              </div>
            </div>
            <div className="flex items-center text-orange-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">+8% this month</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search listings..."
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
                <option value="recent">Recently Listed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="views">Most Viewed</option>
                <option value="inquiries">Most Inquiries</option>
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
          {selectedListings.size > 0 && (
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <span className="text-blue-700 font-medium">
                  {selectedListings.size} {selectedListings.size === 1 ? 'listing' : 'listings'} selected
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedListings(new Set())}
                  className="px-4 py-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  Clear Selection
                </button>
                <button
                  onClick={() => {
                    selectedListings.forEach(id => handleStatusChange(id, 'pending'));
                    setSelectedListings(new Set());
                  }}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Mark as Pending
                </button>
                <button
                  onClick={() => {
                    selectedListings.forEach(id => handleDeleteListing(id));
                    setSelectedListings(new Set());
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Selected
                </button>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredListings.length} Listings
            </h2>
            {searchQuery && (
              <p className="text-gray-600 text-sm">
                Searching for "{searchQuery}"
              </p>
            )}
          </div>
        </div>

        {/* Listings Grid/List */}
        {filteredListings.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {filteredListings.map((listing) => (
              viewMode === 'grid' ? (
                <ListingCard key={listing.id} listing={listing} />
              ) : (
                <ListingListItem key={listing.id} listing={listing} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Listings Yet</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'No listings match your search criteria.' : 'Start adding your property listings to see them here.'}
            </p>
            <Link
              href="/dashboard/add-listing"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Listing
            </Link>
          </div>
        )}

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Load More Listings
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyListingsPage;
