'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Grid, List, MapPin, Star, Phone, Mail, ChevronDown, Check, Award, Languages, Clock } from 'lucide-react';
import { getAllAgents, getFeaturedAgents, getAgentsByLocation, getAgentsBySpecialization, getVerifiedAgents } from '@/data/agents';

const AgentListingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [filters, setFilters] = useState({
    location: 'all',
    specialization: 'all',
    experience: 'all',
    verified: false,
    languages: 'all'
  });

  const agents = getAllAgents();
  const [filteredAgents, setFilteredAgents] = useState(agents);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...agents];

    // Apply location filter
    if (filters.location !== 'all') {
      filtered = getAgentsByLocation(filters.location);
    }

    // Apply specialization filter
    if (filters.specialization !== 'all') {
      filtered = getAgentsBySpecialization(filters.specialization);
    }

    // Apply experience filter
    if (filters.experience !== 'all') {
      const [min, max] = filters.experience.split('-').map(Number);
      filtered = filtered.filter(a => a.experience >= min && a.experience <= max);
    }

    // Apply verified filter
    if (filters.verified) {
      filtered = getVerifiedAgents();
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (a.specializations && a.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'experience':
        filtered.sort((a, b) => b.experience - a.experience);
        break;
      case 'listings':
        filtered.sort((a, b) => b.listings - a.listings);
        break;
      case 'sold':
        filtered.sort((a, b) => b.sold - a.sold);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredAgents(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters, sortBy, searchQuery]);

  const AgentCard = ({ agent }: { agent: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {agent.verified && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Check className="w-3 h-3 mr-1" />
            Verified
          </div>
        )}
        {agent.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
              {agent.name}
            </h3>
            <div className="text-gray-600 font-medium">{agent.company}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-yellow-500 mb-1">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span className="font-semibold">{agent.rating}</span>
            </div>
            <div className="text-xs text-gray-500">({agent.reviews} reviews)</div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{agent.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {agent.specializations ? (
            <>
              {agent.specializations.slice(0, 2).map((spec: string, index: number) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {spec}
                </span>
              ))}
              {agent.specializations.length > 2 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  +{agent.specializations.length - 2} more
                </span>
              )}
            </>
          ) : (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {agent.specialization}
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-gray-900">{agent.experience}</div>
            <div className="text-gray-600 text-xs">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{agent.listings}</div>
            <div className="text-gray-600 text-xs">Listings</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{agent.sold}</div>
            <div className="text-gray-600 text-xs">Sold</div>
          </div>
        </div>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <Clock className="w-3 h-3 mr-1" />
          <span>{agent.responseTime}</span>
          <span className="mx-2">•</span>
          <Languages className="w-3 h-3 mr-1" />
          <span>{agent.languages.length} languages</span>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium flex items-center justify-center">
            <Phone className="w-4 h-4 mr-1" />
            Contact
          </button>
          <button className="flex-1 px-3 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium flex items-center justify-center">
            <Mail className="w-4 h-4 mr-1" />
            Email
          </button>
        </div>
      </div>
    </div>
  );

  const AgentListItem = ({ agent }: { agent: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-64 md:h-full object-cover"
          />
          {agent.verified && (
            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Check className="w-3 h-3 mr-1" />
              Verified
            </div>
          )}
          {agent.featured && (
            <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{agent.name}</h3>
              <div className="text-gray-600 font-medium mb-2">{agent.company}</div>
              <div className="flex items-center text-yellow-500">
                <Star className="w-5 h-5 mr-1 fill-current" />
                <span className="font-semibold text-lg">{agent.rating}</span>
                <span className="text-gray-500 ml-1">({agent.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </button>
              <button className="px-4 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{agent.location}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{agent.responseTime}</span>
            <span className="mx-2">•</span>
            <Languages className="w-4 h-4 mr-2" />
            <span>{agent.languages.join(', ')}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {agent.specializations ? (
              agent.specializations.map((spec: string, index: number) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                  {spec}
                </span>
              ))
            ) : (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                {agent.specialization}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {agent.about}
          </p>

          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-gray-900">{agent.experience}</div>
              <div className="text-gray-600">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{agent.listings}</div>
              <div className="text-gray-600">Listings</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{agent.sold}</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{agent.license}</div>
              <div className="text-gray-600">License</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const specializations = Array.from(new Set(agents.flatMap(a => a.specializations || [a.specialization])));
  const locations = Array.from(new Set(agents.map(a => a.location)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Real Estate Agents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced and verified real estate agents across UAE
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{agents.length}</div>
            <div className="text-gray-600">Active Agents</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{getVerifiedAgents().length}</div>
            <div className="text-gray-600">Verified Agents</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{agents.reduce((sum, a) => sum + a.sold, 0)}</div>
            <div className="text-gray-600">Properties Sold</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
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
                  placeholder="Search by name, company, or specialization..."
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
              </div>
            </div>
          </div>

          {/* Filters Sidebar */}
          {showFilters && (
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                  <select
                    value={filters.specialization}
                    onChange={(e) => setFilters({...filters, specialization: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Specializations</option>
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({...filters, experience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Any Experience</option>
                    <option value="0-3">0-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5-10">5-10 Years</option>
                    <option value="10-999">10+ Years</option>
                  </select>
                </div>

                {/* Verified Filter */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="verified"
                    checked={filters.verified}
                    onChange={(e) => setFilters({...filters, verified: e.target.checked})}
                    className="mr-2"
                  />
                  <label htmlFor="verified" className="text-sm font-medium text-gray-700">
                    Verified Agents Only
                  </label>
                </div>

                {/* Apply Filters Button */}
                <div className="flex items-end">
                  <button
                    onClick={applyFilters}
                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sort and Results */}
          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {filteredAgents.length} Agents Found
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="rating">Rating</option>
                <option value="experience">Experience</option>
                <option value="listings">Listings</option>
                <option value="sold">Properties Sold</option>
                <option value="reviews">Reviews</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Agents Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
          {filteredAgents.map((agent) => (
            viewMode === 'grid' ? (
              <AgentCard key={agent.id} agent={agent} />
            ) : (
              <AgentListItem key={agent.id} agent={agent} />
            )
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Load More Agents
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentListingPage;
