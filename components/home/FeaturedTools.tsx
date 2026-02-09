'use client';

import React from 'react';
import { Bot, Calculator, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedTools } from '@/data/tools';
import { fadeInUp, fadeInLeft, cardHover, staggerContainer } from '@/lib/animations';

const FeaturedTools = () => {
  const tools = getFeaturedTools();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-8 h-8" />;
      case 'calculator':
        return <Calculator className="w-8 h-8" />;
      case 'trending-up':
        return <TrendingUp className="w-8 h-8" />;
      default:
        return <div className="w-8 h-8 bg-gray-300 rounded" />;
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Real Estate Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology and AI-powered tools to make smarter property decisions
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(tool.icon)}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {tool.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* CTA */}
                <a
                  href={tool.link}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Discover all our powerful tools and features
          </p>
          <motion.a
            href="/tools"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700"
          >
            View All Tools
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedTools;
