'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { slideInFromTop, fadeInLeft, buttonHover } from '@/lib/animations';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Buy', href: '/properties' },
    { name: 'Rent', href: '/rent' },
    { name: 'New Projects', href: '/new-projects' },
    { name: 'Property Prices', href: '/market-insights' },
    { name: 'Find an Agent', href: '/agents' },
    { name: 'Sell My Property', href: '/dashboard/add-listing' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'العربية' }
  ];

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="flex items-center"
          >
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RealEstate</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setIsLanguageOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Login Button */}
            <Link
                  href="/auth/login"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>

                <Link
                  href="/auth/signup"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
                >
                  Sign Up
                </Link>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="border-t border-gray-200 mt-3 pt-3 space-y-1">
                  <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200">
                    🌐 Language: English
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200">
                    🔍 Search
                  </button>
                  <Link
                    href="/404"
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                  >
                    🏠 404 Error
                  </Link>
                  <Link
                    href="/auth/login"
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                  >
                    👤 Login
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block w-full text-left px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors duration-200"
                  >
                    🏠 Dashboard
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
