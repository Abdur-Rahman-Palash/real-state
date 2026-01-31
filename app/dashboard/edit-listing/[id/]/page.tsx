'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Edit, 
  Trash2, 
  Star, 
  TrendingUp, 
  Users, 
  Calendar,
  MapPin,
  Bed,
  Bath,
  Square,
  DollarSign,
  Home,
  Building,
  Info,
  Camera,
  FileText,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  Plus,
  Check
} from 'lucide-react';
import Link from 'next/link';

interface EditListingPageProps {
  params: {
    id: string;
  };
}

const EditListingPage: React.FC<EditListingPageProps> = ({ params }) => {
  const [listing, setListing] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'sale',
    price: '',
    currency: 'AED',
    bedrooms: '',
    bathrooms: '',
    area: '',
    location: '',
    city: 'Dubai',
    areaName: '',
    propertyType: 'apartment',
    yearBuilt: '',
    amenities: [] as string[],
    images: [] as string[],
    featured: false,
    status: 'active'
  });

  // Mock listing data
  const mockListing = {
    id: '1',
    title: 'Luxury 3BR Apartment Dubai Marina',
    description: 'Luxurious 3-bedroom apartment in the heart of Dubai Marina with stunning views and premium amenities.',
    type: 'sale',
    price: 2500000,
    currency: 'AED',
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    location: 'Dubai Marina, Dubai',
    city: 'Dubai',
    areaName: 'Dubai Marina',
    propertyType: 'apartment',
    yearBuilt: '2020',
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Balcony', 'Storage'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    featured: true,
    status: 'active',
    listedDate: '2024-01-15',
    views: 1234,
    inquiries: 23,
    agent: {
      name: 'Sarah Johnson',
      phone: '+971 50 123 4567',
      email: 'sarah@agent.ae'
    }
  };

  const propertyTypes = [
    'apartment', 'villa', 'townhouse', 'penthouse', 'studio', 'land', 'commercial'
  ];

  const cities = [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'
  ];

  const commonAmenities = [
    'Swimming Pool', 'Gym', 'Parking', 'Security', 'Balcony', 'Storage', 'Garden', 'Maid Room',
    'Concierge', 'Elevator', 'Central AC', 'Built-in Wardrobes', 'Kitchen Appliances',
    'Laundry Room', 'Study Room', 'Play Area', 'BBQ Area', 'Sea View', 'City View', 'Lake View'
  ];

  useEffect(() => {
    // Simulate loading and fetching listing data
    const timer = setTimeout(() => {
      setListing(mockListing);
      setFormData({
        title: mockListing.title,
        description: mockListing.description,
        type: mockListing.type,
        price: mockListing.price.toString(),
        currency: mockListing.currency,
        bedrooms: mockListing.bedrooms.toString(),
        bathrooms: mockListing.bathrooms.toString(),
        area: mockListing.area.toString(),
        location: mockListing.location,
        city: mockListing.city,
        areaName: mockListing.areaName,
        propertyType: mockListing.propertyType,
        yearBuilt: mockListing.yearBuilt,
        amenities: mockListing.amenities,
        images: mockListing.images,
        featured: mockListing.featured,
        status: mockListing.status
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? !(prev as any)[name] : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle image upload
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Property title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.type) newErrors.type = 'Property type is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.currency) newErrors.currency = 'Currency is required';
    if (!formData.bedrooms) newErrors.bedrooms = 'Number of bedrooms is required';
    if (!formData.bathrooms) newErrors.bathrooms = 'Number of bathrooms is required';
    if (!formData.area) newErrors.area = 'Area is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (formData.images.length === 0) newErrors.images = 'At least one image is required';
    if (formData.amenities.length === 0) newErrors.amenities = 'At least one amenity is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (err) {
      setErrors({ submit: 'Failed to update listing. Please try again.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteListing = async () => {
    if (confirm('Are you sure you want to delete this listing? This action cannot be undone.')) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Deleting listing:', params.id);
        // Redirect to listings page
        window.location.href = '/dashboard/my-listings';
      } catch (err) {
        console.error('Error deleting listing:', err);
      }
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(prev => ({ ...prev, status: newStatus }));
      console.log('Changing status to:', newStatus);
    } catch (err) {
      console.error('Error changing status:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-300 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading listing...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
            <p className="text-gray-600 mb-8">The listing you're trying to edit doesn't exist or has been removed.</p>
            <Link
              href="/dashboard/my-listings"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Back to My Listings
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-center">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">Listing Updated Successfully!</h1>
                <p className="text-green-100">Your property listing has been updated successfully</p>
              </div>

              <div className="p-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-green-700 text-sm">
                      <p className="font-medium mb-1">Your listing has been updated</p>
                      <p>Property: {formData.title}</p>
                      <p>Location: {formData.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/dashboard/listings/${params.id}`}
                    className="block w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center font-medium"
                  >
                    View Listing
                  </Link>
                  
                  <Link
                    href="/dashboard/my-listings"
                    className="block w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
                  >
                    Back to My Listings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/dashboard" className="hover:text-primary-600">Dashboard</Link>
          <span className="mx-2">/</span>
          <Link href="/dashboard/my-listings" className="hover:text-primary-600">My Listings</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Edit Listing</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/dashboard/my-listings"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-xl font-bold text-white">Edit Listing</h1>
                <div className="w-5"></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Error Message */}
              {errors.submit && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-red-700 text-sm">{errors.submit}</div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => handleStatusChange('active')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    formData.status === 'active'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {formData.status === 'active' ? 'Active' : 'Draft'}
                </button>
                <button
                  onClick={() => handleStatusChange('pending')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    formData.status === 'pending'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {formData.status === 'pending' ? 'Pending' : 'Active'}
                </button>
                <button
                  onClick={handleDeleteListing}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Delete Listing
                </button>
              </div>

              {/* Basic Information */}
              <div className="space-y-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.title ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter property title"
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.description ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Describe your property"
                    ></textarea>
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Listing Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.type ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                    {errors.type && (
                      <p className="mt-1 text-sm text-red-600">{errors.type}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      required
                      value={formData.price}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.price ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter price"
                    />
                    {errors.price && (
                      <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                      Currency *
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      required
                      value={formData.currency}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.currency ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="AED">AED</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                    {errors.currency && (
                      <p className="mt-1 text-sm text-red-600">{errors.currency}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                    Feature this listing
                  </label>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Property Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms *
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      required
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.bedrooms ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Number of bedrooms"
                    />
                    {errors.bedrooms && (
                      <p className="mt-1 text-sm text-red-600">{errors.bedrooms}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Bathrooms *
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      required
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.bathrooms ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Number of bathrooms"
                    />
                    {errors.bathrooms && (
                      <p className="mt-1 text-sm text-red-600">{errors.bathrooms}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                      Area (sqft) *
                    </label>
                    <input
                      type="number"
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.area ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Area in square feet"
                    />
                    {errors.area && (
                      <p className="mt-1 text-sm text-red-600">{errors.area}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Year built"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.location ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter location"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.city ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.propertyType ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                  </select>
                  {errors.propertyType && (
                    <p className="mt-1 text-sm text-red-600">{errors.propertyType}</p>
                  )}
                </div>
              </div>

              {/* Images */}
              <div className="space-y-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Property Images</h2>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <div className="text-gray-600">
                      <p className="font-medium mb-2">Upload Property Images</p>
                      <p className="text-sm">Drag and drop or click to upload</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Images
                    </label>
                  </div>
                </div>

                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Property image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {errors.images && (
                  <p className="mt-2 text-sm text-red-600">{errors.images}</p>
                )}
              </div>

              {/* Amenities */}
              <div className="space-y-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Amenities</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {commonAmenities.map((amenity) => (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => handleAmenityToggle(amenity)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        formData.amenities.includes(amenity)
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {formData.amenities.includes(amenity) && <Check className="w-4 h-4 mr-2" />}
                      {amenity}
                    </button>
                  ))}
                </div>

                {errors.amenities && (
                  <p className="mt-2 text-sm text-red-600">{errors.amenities}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSaving ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Updating...
                    </>
                  ) : (
                    'Update Listing'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditListingPage;
