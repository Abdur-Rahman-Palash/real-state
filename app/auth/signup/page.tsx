'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, Check, AlertCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SignupPage = () => {
  const [accountType, setAccountType] = useState<'buyer' | 'agent'>('buyer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    licenseNumber: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (step === 2) {
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    if (step === 3 && accountType === 'agent') {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    }

    if (step === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle signup logic here
      console.log('Signup attempt:', { ...formData, accountType });
    } catch (err) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const totalSteps = accountType === 'agent' ? 4 : 3;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Account Type Selection */}
          {currentStep === 0 && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-2">Join RealEstate.ae</h1>
                <p className="text-primary-100">Choose your account type to get started</p>
              </div>

              <div className="p-6 space-y-4">
                <button
                  onClick={() => { setAccountType('buyer'); setCurrentStep(1); }}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-center">
                    <User className="w-8 h-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">Buyer/Renter</div>
                      <div className="text-sm text-gray-600">Search properties, save favorites, and connect with agents</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                
                <button
                  onClick={() => { setAccountType('agent'); setCurrentStep(1); }}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-center">
                    <Building className="w-8 h-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">Agent/Developer</div>
                      <div className="text-sm text-gray-600">List properties, manage listings, and grow your business</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="px-6 pb-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* Registration Form */}
          {currentStep > 0 && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handleBack}
                    className="text-white hover:text-primary-200 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h1 className="text-xl font-bold text-white">Create Account</h1>
                  <div className="w-5"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          index + 1 <= currentStep
                            ? 'bg-white text-primary-600'
                            : 'bg-primary-400 text-primary-200'
                        }`}
                      >
                        {index + 1 <= currentStep ? <Check className="w-4 h-4" /> : index + 1}
                      </div>
                      {index < totalSteps - 1 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            index < currentStep ? 'bg-white' : 'bg-primary-400'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Error Message */}
                {errors.submit && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-red-700 text-sm">{errors.submit}</div>
                  </div>
                )}

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.firstName ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.lastName ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.phone ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Password */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.password ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                      )}
                      <p className="mt-2 text-xs text-gray-500">
                        Password must be at least 8 characters long
                      </p>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          name="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Professional Information (Agent Only) */}
                {currentStep === 3 && accountType === 'agent' && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.companyName ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Your Real Estate Company"
                        />
                      </div>
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        RERA License Number *
                      </label>
                      <input
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        required
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.licenseNumber ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="1234567"
                      />
                      {errors.licenseNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.licenseNumber}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Terms & Conditions */}
                {currentStep === totalSteps && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Terms & Conditions</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        By creating an account, you agree to our Terms of Service and Privacy Policy. 
                        You'll receive email communications from us and can opt out at any time.
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            I agree to the{' '}
                            <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                              Terms and Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                              Privacy Policy
                            </Link>
                          </span>
                        </label>
                        
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            id="subscribeNewsletter"
                            name="subscribeNewsletter"
                            checked={formData.subscribeNewsletter}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Subscribe to our newsletter for property updates and market insights
                          </span>
                        </label>
                      </div>
                      {errors.agreeToTerms && (
                        <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Next
                      <ChevronRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? (
                        <>
                          <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                  )}
                </div>
              </form>

              {/* Sign In Link */}
              <div className="px-6 pb-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignupPage;
