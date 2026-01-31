'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllAgents } from '@/data/agents';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Languages, 
  Clock, 
  Check,
  Building,
  Home,
  TrendingUp,
  Calendar,
  MessageSquare,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square
} from 'lucide-react';

interface AgentProfilePageProps {
  params: {
    id: string;
  };
}

const AgentProfilePage: React.FC<AgentProfilePageProps> = ({ params }) => {
  const agents = getAllAgents();
  const agent = agents.find(a => a.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'listings' | 'reviews'>('about');

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
            <p className="text-gray-600 mb-8">The agent you're looking for doesn't exist or has been removed.</p>
            <a href="/agents" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Browse Agents
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock agent gallery images
  const agentImages = [
    agent.image,
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c2c6d37f9d8?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1573497614334-78450b1561d1?w=800&h=600&fit=crop'
  ];

  // Mock agent listings
  const agentListings = [
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
      featured: true
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
      featured: false
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
      featured: false
    }
  ];

  // Mock reviews
  const reviews = [
    {
      id: '1',
      name: 'Ahmed Mohammed',
      date: '2024-01-15',
      rating: 5,
      comment: 'Excellent service! Sarah helped us find our dream home. Very professional and knowledgeable about the Dubai market.',
      property: 'Dubai Marina Villa'
    },
    {
      id: '2',
      name: 'Emily Johnson',
      date: '2024-01-10',
      rating: 5,
      comment: 'Outstanding agent. Very responsive and patient. Made the entire process smooth and stress-free.',
      property: 'Downtown Dubai Apartment'
    },
    {
      id: '3',
      name: 'Michael Chen',
      date: '2024-01-05',
      rating: 4,
      comment: 'Great experience overall. Very knowledgeable about investment properties. Would recommend to friends.',
      property: 'Business Bay Office'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % agentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + agentImages.length) % agentImages.length);
  };

  const PropertyCard = ({ listing }: { listing: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        {listing.featured && (
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{listing.title}</h3>
        <div className="text-lg font-bold text-primary-600 mb-2">
          AED {listing.price.toLocaleString()}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{listing.location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <span>{listing.bedrooms} beds</span>
            <span>{listing.bathrooms} baths</span>
            <span>{listing.area} sqft</span>
          </div>
          <button className="text-primary-600 font-medium hover:text-primary-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const ReviewCard = ({ review }: { review: any }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
          <div>
            <div className="font-semibold text-gray-900">{review.name}</div>
            <div className="text-sm text-gray-600">{review.date}</div>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 mb-3">{review.comment}</p>
      <div className="text-sm text-gray-500">
        Property: {review.property}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/agents" className="hover:text-primary-600">Agents</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{agent.name}</span>
        </nav>

        {/* Agent Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Agent Image Gallery */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-square">
                  <img
                    src={agentImages[currentImageIndex]}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Verification Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {agent.verified && (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                  {agent.featured && (
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 p-4 overflow-x-auto">
                {agentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
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

            {/* Agent Info */}
            <div className="lg:col-span-2 p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{agent.name}</h1>
                  <div className="text-lg text-gray-600 mb-4">{agent.company}</div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-1 text-yellow-500 fill-current" />
                      <span className="font-semibold text-lg">{agent.rating}</span>
                      <span className="text-gray-500 ml-1">({agent.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-1" />
                      <span>{agent.experience} years experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.specialization.map((spec: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{agent.listings}</div>
                  <div className="text-sm text-gray-600">Active Listings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{agent.sold}</div>
                  <div className="text-sm text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{agent.responseTime}</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{agent.languages.length}</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {agent.phone}
                </button>
                <button className="flex-1 px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'about' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('listings')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'listings' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Listings ({agent.listings})
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'reviews' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews ({agent.reviews})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About {agent.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {agent.about}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <div className="font-medium">Company</div>
                        <div className="text-gray-600">{agent.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <div className="font-medium">License</div>
                        <div className="text-gray-600">{agent.license}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-gray-600">{agent.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <div className="font-medium">Response Time</div>
                        <div className="text-gray-600">{agent.responseTime}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.areas.map((area: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((language: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm flex items-center">
                        <Languages className="w-3 h-3 mr-1" />
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'listings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Current Listings</h3>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>All Properties</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agentListings.map((listing) => (
                    <PropertyCard key={listing.id} listing={listing} />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Load More Listings
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Client Reviews</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-1 text-yellow-500 fill-current" />
                      <span className="font-semibold text-lg">{agent.rating}</span>
                      <span className="text-gray-500 ml-1">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  {/* Rating Distribution */}
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <span className="text-sm text-gray-600 w-12">{rating}★</span>
                        <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-500 h-2 rounded-full" 
                            style={{ width: `${rating === 5 ? 80 : rating === 4 ? 15 : 5}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {rating === 5 ? 80 : rating === 4 ? 15 : 5}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentProfilePage;
