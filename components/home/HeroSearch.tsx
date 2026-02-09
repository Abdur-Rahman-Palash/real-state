'use client';

import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, ChevronDown, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, buttonHover } from '@/lib/animations';

const HeroSearch = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState<'buy' | 'rent'>('buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'studio', label: 'Studio' }
  ];

  const priceRanges = {
    buy: [
      { value: 'all', label: 'Any Price' },
      { value: '0-500000', label: 'Under 500K AED' },
      { value: '500000-1000000', label: '500K - 1M AED' },
      { value: '1000000-2000000', label: '1M - 2M AED' },
      { value: '2000000-5000000', label: '2M - 5M AED' },
      { value: '5000000+', label: '5M+ AED' }
    ],
    rent: [
      { value: 'all', label: 'Any Price' },
      { value: '0-30000', label: 'Under 30K AED' },
      { value: '30000-50000', label: '30K - 50K AED' },
      { value: '50000-80000', label: '50K - 80K AED' },
      { value: '80000-150000', label: '80K - 150K AED' },
      { value: '150000+', label: '150K+ AED' }
    ]
  };

  const bedroomOptions = [
    { value: 'all', label: 'Any Beds' },
    { value: 'studio', label: 'Studio' },
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
    { value: '3', label: '3 Bedrooms' },
    { value: '4', label: '4 Bedrooms' },
    { value: '5+', label: '5+ Bedrooms' }
  ];

  const popularLocations = [
    'Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 
    'Business Bay', 'Arabian Ranches', 'Dubai Hills'
  ];

  const handleSearch = () => {
    // Build search query parameters
    const params = new URLSearchParams();
    
    if (location) params.append('location', location);
    if (propertyType !== 'all') params.append('type', propertyType);
    if (priceRange !== 'all') params.append('price', priceRange);
    if (bedrooms !== 'all') params.append('beds', bedrooms);
    
    const queryString = params.toString();
    const searchUrl = searchType === 'buy' 
      ? `/properties${queryString ? '?' + queryString : ''}`
      : `/rent${queryString ? '?' + queryString : ''}`;
    
    console.log('Navigating to:', searchUrl);
    router.push(searchUrl);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-700/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Find Your Dream Home in UAE
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Discover thousands of properties for sale and rent across Dubai, Abu Dhabi, and beyond
          </motion.p>
        </motion.div>

        {/* Search Container */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
        >
          {/* Buy/Rent Toggle */}
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSearchType('buy')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  searchType === 'buy'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Buy
              </motion.button>
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSearchType('rent')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  searchType === 'rent'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Rent
              </motion.button>
            </div>
          </motion.div>

          {/* Search Form */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6"
          >
            {/* Location Input */}
            <div className="lg:col-span-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter location, area, or project"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              {/* Popular Locations */}
              <div className="mt-2 flex flex-wrap gap-2">
                {popularLocations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocation(loc)}
                    className="text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-200"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Price Range */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              >
                {priceRanges[searchType].map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              >
                {bedroomOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              onClick={handleSearch}
              className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Search Properties</span>
            </motion.button>
            
            <motion.button 
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center justify-center space-x-2 px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <Filter className="w-5 h-5" />
              <span>Advanced Filters</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="mt-6 flex flex-wrap justify-center gap-4 text-sm"
          >
            {['Map Search', 'New Projects', 'Off-Plan Properties', 'Mortgage Calculator'].map((link, index) => (
              <React.Fragment key={link}>
                <motion.button 
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    if (link === 'Map Search') router.push('/search');
                    else if (link === 'New Projects') router.push('/new-projects');
                    else if (link === 'Off-Plan Properties') router.push('/properties');
                    else if (link === 'Mortgage Calculator') router.push('/#mortgage-calculator');
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {link}
                </motion.button>
                {index < 3 && <span className="text-gray-400">•</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
