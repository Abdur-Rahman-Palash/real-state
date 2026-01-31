'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-center">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">Email Sent!</h1>
                <p className="text-primary-100">Check your inbox for password reset instructions</p>
              </div>

              <div className="p-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-green-700 text-sm">
                      <p className="font-medium mb-1">Password reset link sent to:</p>
                      <p className="font-mono">{email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                    <p>
                      The link will expire in 30 minutes for security reasons. If you don't receive the email, check your spam folder.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                    <p>
                      If you still don't receive the email, you can request a new reset link or contact our support team.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Send Another Email
                  </button>
                  
                  <Link
                    href="/auth/login"
                    className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
                  >
                    Back to Login
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Didn't receive the email?{' '}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Try again
                    </button>
                  </p>
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          {/* Forgot Password Form */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
              <p className="text-primary-100">Enter your email to receive a password reset link</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-red-700 text-sm">{error}</div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  We'll send a password reset link to this email address
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center px-4 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>

            {/* Back to Login */}
            <div className="px-6 pb-6">
              <Link
                href="/auth/login"
                className="flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <p>
                  Make sure to check your spam folder if you don't receive the email within a few minutes.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <p>
                  The reset link is valid for 30 minutes. If it expires, you can request a new one.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <p>
                  If you're still having trouble, contact our support team for assistance.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Contact Support:</p>
              <div className="space-y-1 text-sm">
                <p className="text-primary-600">support@realestate.ae</p>
                <p className="text-primary-600">+971 4 123 4567</p>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div className="text-blue-700 text-sm">
                <p className="font-medium mb-1">Security Notice</p>
                <p>
                  For your security, we'll never ask for your password via email. Always verify you're on the official RealEstate.ae website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
