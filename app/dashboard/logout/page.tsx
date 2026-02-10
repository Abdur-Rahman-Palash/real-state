'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  LogOut, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Shield, 
  Clock, 
  Activity, 
  Settings, 
  Home,
  MessageSquare,
  Heart,
  Building,
  FileText,
  ChevronRight,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      setIsLoggingOut(true);
      
      // Simulate API call
      setTimeout(() => {
        // Clear any stored tokens/user data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        setIsSuccess(true);
        setIsLoggingOut(false);
        
        // Redirect to home after successful logout
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }, 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Logged Out Successfully</h1>
              <p className="text-green-100">You have been securely logged out of your account</p>
            </div>
            
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-6">Redirecting to homepage...</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-center">
              <LogOut className="w-12 h-12 text-white mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Sign Out</h1>
              <p className="text-primary-100">Are you sure you want to sign out of your account?</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-red-700 text-sm">{error}</div>
                </div>
              )}

              {/* User Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
                    <p className="text-sm text-gray-600">alex.johnson@example.com</p>
                    <p className="text-xs text-gray-500">Member since January 2024</p>
                  </div>
                </div>
              </div>

              {/* Session Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Current Session</span>
                  </div>
                  <span className="text-xs text-blue-600">Active</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <span>Session started: 2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span>Device: Chrome on Windows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Location: Dubai, UAE</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Home className="w-4 h-4 text-gray-400" />
                    <span>Viewed 3 properties</span>
                    <span className="text-gray-400">•</span>
                    <span>1 hour ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-gray-400" />
                    <span>Saved 2 properties</span>
                    <span className="text-gray-400">•</span>
                    <span>2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span>Received 1 message</span>
                    <span className="text-gray-400">•</span>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Back to Dashboard
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Account Settings
                  </Link>
                  <Link
                    href="/dashboard/saved-properties"
                    className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Saved Properties
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Messages
                  </Link>
                </div>
              </div>

              {/* Logout Button */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsLoggingOut(true);
                    // The logout process is handled in the useEffect
                  }}
                  disabled={isLoggingOut}
                  className="w-full flex justify-center items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isLoggingOut ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Signing out...
                    </>
                  ) : (
                    <>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </>
                  )}
                </button>
                
                <Link
                  href="/dashboard"
                  className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Cancel
                </Link>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Keep me signed in
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogoutPage;
