'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Grid, List, MapPin, Calendar, Building, Home, Star, ChevronDown } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

const NewProjectsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    city: 'all',
    developer: 'all',
    priceRange: 'all',
    propertyType: 'all',
    completion: 'all'
  });

  const projects = getFeaturedProjects();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...projects];

    if (filters.city !== 'all') {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(filters.city.toLowerCase()));
    }

    if (filters.developer !== 'all') {
      filtered = filtered.filter(p => p.developer === filters.developer);
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.startingPrice >= min && p.startingPrice <= max);
    }

    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.propertyType === filters.propertyType);
    }

    if (filters.completion !== 'all') {
      filtered = filtered.filter(p => p.completionQuarter === filters.completion);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case 'completion':
        filtered.sort((a, b) => a.completionDate.localeCompare(b.completionDate));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProjects(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {project.completionQuarter} {project.completionYear}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {project.name}
          </h3>
          <div className="text-right">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-xl font-bold text-primary-600">
              AED {project.startingPrice.toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{project.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <Building className="w-4 h-4 mr-2" />
          <span className="text-sm">by {project.developer}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span>{project.propertyType}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.completionQuarter} {project.completionYear}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Star className="w-3 h-3 mr-1 text-yellow-500" />
            <span>{project.rating}</span>
            <span className="mx-1">•</span>
            <span>{project.unitsAvailable} units available</span>
          </div>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
            View Project
          </button>
        </div>
      </div>
    </div>
  );

  const developers = Array.from(new Set(projects.map(p => p.developer)));
  const cities = Array.from(new Set(projects.map(p => p.location.split(',')[1]?.trim() || p.location.split(',')[0])));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Projects & Developments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest off-plan projects and upcoming developments across UAE
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{developers.length}</div>
            <div className="text-gray-600">Top Developers</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">2024-2025</div>
            <div className="text-gray-600">Completion Timeline</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">AED 500K+</div>
            <div className="text-gray-600">Starting Price</div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <select
                value={filters.city}
                onChange={(e) => setFilters({...filters, city: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Developer Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Developer</label>
              <select
                value={filters.developer}
                onChange={(e) => setFilters({...filters, developer: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Developers</option>
                {developers.map(dev => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
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
                <option value="0-1000000">Under AED 1M</option>
                <option value="1000000-2000000">AED 1M - 2M</option>
                <option value="2000000-5000000">AED 2M - 5M</option>
                <option value="5000000-999999999">Above AED 5M</option>
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
                <option value="apartment">Apartments</option>
                <option value="villa">Villas</option>
                <option value="townhouse">Townhouses</option>
                <option value="penthouse">Penthouses</option>
              </select>
            </div>

            {/* Completion Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Completion</label>
              <select
                value={filters.completion}
                onChange={(e) => setFilters({...filters, completion: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">Any Time</option>
                <option value="Q1">Q1 2024</option>
                <option value="Q2">Q2 2024</option>
                <option value="Q3">Q3 2024</option>
                <option value="Q4">Q4 2024</option>
                <option value="Q1">Q1 2025</option>
                <option value="Q2">Q2 2025</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={applyFilters}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Projects
            </button>

            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="completion">Completion Date</option>
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
                  onClick={() => setViewMode('carousel')}
                  className={`p-2 rounded ${viewMode === 'carousel' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredProjects.length} Projects Found
          </h2>
          <p className="text-gray-600">
            Browse our selection of new developments
          </p>
        </div>

        {/* Projects Grid */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Load More Projects
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewProjectsPage;
