'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getFeaturedProjects } from '@/data/projects';
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Building, 
  Phone, 
  Mail, 
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Home,
  Car,
  Dumbbell,
  Waves,
  TreePine,
  Shield,
  Wifi,
  Tv,
  Wind,
  Bed,
  Bath,
  Square,
  Users,
  DollarSign
} from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
  const projects = getFeaturedProjects();
  const project = projects.find(p => p.id === params.slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <a href="/new-projects" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Browse Projects
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock additional images for carousel
  const projectImages = [
    project.image,
    'https://images.unsplash.com/photo-1600566753376-12c8ac7fcba0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
  ];

  const amenities = [
    { icon: Home, name: 'Fully Furnished' },
    { icon: Car, name: 'Parking Space' },
    { icon: Dumbbell, name: 'Gym & Fitness' },
    { icon: Waves, name: 'Swimming Pool' },
    { icon: TreePine, name: 'Landscaped Gardens' },
    { icon: Shield, name: '24/7 Security' },
    { icon: Wifi, name: 'High-Speed WiFi' },
    { icon: Tv, name: 'Smart Home Features' },
    { icon: Wind, name: 'Central Air Conditioning' }
  ];

  const paymentPlans = [
    {
      name: '60/40 Payment Plan',
      downPayment: '60%',
      duringConstruction: '0%',
      onHandover: '40%',
      duration: '3 Years'
    },
    {
      name: '50/50 Payment Plan',
      downPayment: '50%',
      duringConstruction: '0%',
      onHandover: '50%',
      duration: '2 Years'
    },
    {
      name: 'Easy Installment Plan',
      downPayment: '20%',
      duringConstruction: '60%',
      onHandover: '20%',
      duration: '4 Years'
    }
  ];

  const propertyTypes = [
    { type: 'Studio', size: '450-550 sqft', price: 'AED 800K - 1.2M' },
    { type: '1 Bedroom', size: '750-950 sqft', price: 'AED 1.2M - 1.8M' },
    { type: '2 Bedrooms', size: '1,200-1,500 sqft', price: 'AED 1.8M - 2.5M' },
    { type: '3 Bedrooms', size: '1,800-2,200 sqft', price: 'AED 2.5M - 3.5M' },
    { type: 'Penthouse', size: '3,000-5,000 sqft', price: 'AED 5M - 8M' }
  ];

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/new-projects" className="hover:text-primary-600">New Projects</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{project.name}</span>
        </nav>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {project.featured && (
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                )}
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Available
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{project.name}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  <span className="font-medium">{project.developer}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  <span className="font-medium">{project.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="font-medium">{project.unitsAvailable} units available</span>
                </div>
              </div>
            </div>

            <div className="text-right mt-4 lg:mt-0">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                AED {project.startingPrice.toLocaleString()}
              </div>
              <div className="text-gray-600 mb-4">Starting Price</div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-lg border transition-colors ${
                    isSaved 
                      ? 'bg-primary-600 text-white border-primary-600' 
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">{project.completionDate}</div>
                <div className="text-sm text-gray-600">Completion</div>
              </div>
            </div>
            <div className="flex items-center">
              <Home className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg capitalize">{project.propertyType}</div>
                <div className="text-sm text-gray-600">Property Type</div>
              </div>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">AED {project.startingPrice.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Starting Price</div>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">{project.unitsAvailable}</div>
                <div className="text-sm text-gray-600">Units Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="relative">
            <div className="aspect-video">
              <img
                src={projectImages[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {projectImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                This exceptional development represents the pinnacle of modern living, combining cutting-edge architecture with sustainable design principles. Located in one of the most sought-after areas, this project offers residents an unparalleled lifestyle experience with world-class amenities and breathtaking views.
              </p>
            </div>

            {/* Property Types */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Property Types</h2>
              <div className="space-y-4">
                {propertyTypes.map((ptype, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                    <div>
                      <h3 className="font-semibold text-gray-900">{ptype.type}</h3>
                      <p className="text-sm text-gray-600">{ptype.size}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary-600">{ptype.price}</div>
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">World-Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Plans */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Flexible Payment Plans</h2>
              <div className="space-y-4">
                {paymentPlans.map((plan, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">{plan.name}</h3>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Down Payment</div>
                        <div className="font-semibold">{plan.downPayment}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">During Construction</div>
                        <div className="font-semibold">{plan.duringConstruction}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">On Handover</div>
                        <div className="font-semibold">{plan.onHandover}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Duration</div>
                        <div className="font-semibold">{plan.duration}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Prime Location</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Map integration would show project location</p>
                </div>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">
                  <strong>Address:</strong> {project.location}
                </p>
                <p>
                  <strong>Neighborhood:</strong> Strategically located with easy access to major highways, business districts, shopping centers, schools, and healthcare facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Developer */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Developer</h3>
              
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-gray-900">{project.developer}</div>
                    <div className="text-sm text-gray-600">Leading Developer</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Developer
                </button>
                <button className="w-full px-4 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Inquiry
                </button>
                <button className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Visit
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Project ID:</span>
                  <span className="font-medium">{project.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Developer:</span>
                  <span className="font-medium">{project.developer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion:</span>
                  <span className="font-medium">{project.completionDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">Under Construction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Units Available:</span>
                  <span className="font-medium">{project.unitsAvailable}</span>
                </div>
              </div>
            </div>

            {/* Download Brochure */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Download Brochure</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get detailed information about this project including floor plans, pricing, and specifications.
              </p>
              <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{relatedProject.name}</h3>
                    <div className="text-lg font-bold text-primary-600 mb-2">
                      AED {relatedProject.startingPrice.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="line-clamp-1">{relatedProject.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        <span>{relatedProject.developer}</span>
                      </div>
                      <a href={`/new-projects/${relatedProject.id}`} className="text-primary-600 font-medium hover:text-primary-700">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
