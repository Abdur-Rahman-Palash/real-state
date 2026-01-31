'use client';

import React from 'react';
import { Calendar, MapPin, ArrowRight, Building } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

const NewProjectsSection = () => {
  const projects = getFeaturedProjects();

  const formatPrice = (price: number, currency: string) => {
    return `Starting from ${currency} ${price.toLocaleString()}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Projects & Developments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the latest off-plan projects and upcoming developments across the UAE
          </p>
        </div>

        {/* Projects Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Completion Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.completionDate}
                  </span>
                </div>

                {/* Developer Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-900 flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {project.developer}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Property Types */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.propertyTypes.slice(0, 3).map((type, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {type}
                    </span>
                  ))}
                  {project.propertyTypes.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      +{project.propertyTypes.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-primary-600 mb-4">
                  {formatPrice(project.startingPrice, project.currency)}
                </div>

                {/* CTA */}
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="/new-projects"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            View All New Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;
