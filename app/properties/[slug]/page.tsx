'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllProperties } from '@/data/properties';
import { 
  Heart, 
  Share2, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
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
  Wind
} from 'lucide-react';

interface PropertyDetailPageProps {
  params: {
    slug: string;
  };
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ params }) => {
  const properties = getAllProperties();
  const property = properties.find(p => p.id === params.slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
            <a href="/properties" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Browse Properties
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock additional images for carousel
  const propertyImages = [
    property.image,
    'https://images.unsplash.com/photo-1600566753376-12c8ac7fcba0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
  ];

  const amenities = [
    { icon: Home, name: 'Fully Furnished' },
    { icon: Car, name: 'Parking Space' },
    { icon: Dumbbell, name: 'Gym' },
    { icon: Waves, name: 'Swimming Pool' },
    { icon: TreePine, name: 'Garden' },
    { icon: Shield, name: '24/7 Security' },
    { icon: Wifi, name: 'High-Speed WiFi' },
    { icon: Tv, name: 'Smart TV' },
    { icon: Wind, name: 'Air Conditioning' }
  ];

  const relatedProperties = properties.filter(p => p.id !== property.id && p.propertyType === property.propertyType).slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/properties" className="hover:text-primary-600">Properties</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{property.title}</span>
        </nav>

        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {property.featured && (
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                {property.verified && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.address}</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{property.views} views</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Listed {new Date(property.listedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="text-right mt-4 lg:mt-0">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                AED {property.price.toLocaleString()}
              </div>
              <div className="text-gray-600 mb-4">
                {property.type === 'rent' ? 'per year' : 'for sale'}
              </div>
              
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

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">{property.bedrooms}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">{property.bathrooms}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
            </div>
            <div className="flex items-center">
              <Square className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg">{property.area}</div>
                <div className="text-sm text-gray-600">sqft</div>
              </div>
            </div>
            <div className="flex items-center">
              <Home className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <div className="font-semibold text-lg capitalize">{property.propertyType}</div>
                <div className="text-sm text-gray-600">Property Type</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="relative">
            <div className="aspect-video">
              <img
                src={propertyImages[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
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
              {propertyImages.map((_, index) => (
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
            {propertyImages.map((image, index) => (
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description || 'This stunning property offers an exceptional living experience with modern amenities and premium finishes. Located in one of the most sought-after areas, this property combines luxury, comfort, and convenience. The spacious layout is perfect for families and professionals alike, with plenty of natural light and beautiful views.'}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The property features high-end finishes throughout, including marble flooring, custom cabinetry, and state-of-the-art appliances. The building offers excellent amenities including a swimming pool, fitness center, and 24/7 security. Conveniently located near shopping centers, restaurants, and major transportation links.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">
                  <strong>Address:</strong> {property.address}
                </p>
                <p>
                  <strong>Neighborhood:</strong> Prime location with easy access to schools, shopping centers, and public transportation.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
              {property.agent && (
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">{property.agent.name}</div>
                      <div className="text-sm text-gray-600">{property.agent.company}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Agent
                </button>
                <button className="w-full px-4 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>

              {property.agent && (
                <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <p className="mb-1">
                    <strong>Phone:</strong> {property.agent.phone}
                  </p>
                  <p>
                    <strong>Company:</strong> {property.agent.company}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID:</span>
                  <span className="font-medium">{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium capitalize">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProperties.map((relatedProperty) => (
                <div key={relatedProperty.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={relatedProperty.image}
                    alt={relatedProperty.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{relatedProperty.title}</h3>
                    <div className="text-lg font-bold text-primary-600 mb-2">
                      AED {relatedProperty.price.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="line-clamp-1">{relatedProperty.address}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-3">
                        <span>{relatedProperty.bedrooms} beds</span>
                        <span>{relatedProperty.bathrooms} baths</span>
                      </div>
                      <a href={`/properties/${relatedProperty.id}`} className="text-primary-600 font-medium hover:text-primary-700">
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

export default PropertyDetailPage;
