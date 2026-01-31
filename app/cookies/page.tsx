'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cookie, Settings, CheckCircle, AlertCircle, Shield, Eye, Lock, Mail, Clock } from 'lucide-react';

const CookiePage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              How we use cookies and similar technologies on RealEstate.ae
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center text-gray-600">
            <Cookie className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Cookie Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Cookie className="w-6 h-6 mr-3 text-primary-600" />
              What Are Cookies?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow websites to remember your actions and preferences over time, providing a more personalized and efficient browsing experience.
              </p>
              <p>
                At RealEstate.ae, we use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide relevant content and advertisements. This policy explains how we use cookies and how you can manage them.
              </p>
            </div>
          </section>

          {/* Types of Cookies We Use */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-blue-600" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                <p className="mb-3">These cookies are necessary for the website to function properly and cannot be disabled in our systems.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Maintain user sessions and authentication</li>
                  <li>Remember your preferences and settings</li>
                  <li>Enable shopping cart and booking functionality</li>
                  <li>Provide security features</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                <p className="mb-3">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Identify popular pages and features</li>
                  <li>Detect and fix technical issues</li>
                  <li>Improve website performance</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                <p className="mb-3">These cookies enable enhanced functionality and personalization, such as videos and live chats.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Remember your property search preferences</li>
                  <li>Save your favorite properties and searches</li>
                  <li>Provide personalized recommendations</li>
                  <li>Enable social media sharing features</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                <p className="mb-3">These cookies are used to deliver advertisements that are relevant to you and your interests.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Display personalized property recommendations</li>
                  <li>Track ad campaign effectiveness</li>
                  <li>Retargeting across websites</li>
                  <li>Partnership marketing analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              How We Use Cookies
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Essential Functionality:</strong> To provide core website features and services</li>
                <li><strong>User Experience:</strong> To remember your preferences and provide a personalized experience</li>
                <li><strong>Analytics:</strong> To understand how our platform is used and improve our services</li>
                <li><strong>Security:</strong> To protect against fraud and ensure platform security</li>
                <li><strong>Marketing:</strong> To show relevant advertisements and content</li>
                <li><strong>Research:</strong> To conduct research and development for new features</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">We work with trusted third-party services that may place cookies on your device:</p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="font-semibold">Analytics Services</h4>
                  <p className="text-sm">Google Analytics and similar tools to analyze website usage</p>
                </div>
                <div>
                  <h4 className="font-semibold">Advertising Partners</h4>
                  <p className="text-sm">Google Ads, Facebook Ads, and other advertising platforms</p>
                </div>
                <div>
                  <h4 className="font-semibold">Social Media</h4>
                  <p className="text-sm">Facebook, Twitter, LinkedIn for social sharing and engagement</p>
                </div>
                <div>
                  <h4 className="font-semibold">Payment Processors</h4>
                  <p className="text-sm">Secure payment processing for premium services</p>
                </div>
              </div>
              
              <p>
                These third parties have their own privacy policies and cookie policies. We are not responsible for their practices.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-orange-600" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cookie Consent Banner</h3>
                <p className="mb-4">
                  When you first visit RealEstate.ae, you'll see a cookie consent banner where you can:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accept all cookies for the best experience</li>
                  <li>Customize your cookie preferences by category</li>
                  <li>Decline non-essential cookies</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                <p className="mb-4">
                  You can manage cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Block all cookies or only third-party cookies</li>
                  <li>Delete existing cookies from your device</li>
                  <li>Set notifications when cookies are sent</li>
                  <li>View and manage cookie permissions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Impact of Disabling Cookies</h3>
                <p>
                  Please note that disabling cookies may affect your experience on our platform. Some features may not function properly, and you may need to re-enter preferences or login information frequently.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-indigo-600" />
              Cookie Duration
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">Different types of cookies have different lifespans:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Session Cookies</h4>
                  <p className="text-sm">Deleted when you close your browser</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                  <p className="text-sm">Remain on your device for a set period</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm">Typically 30 days to 1 year</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm">Typically 2 years</p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-teal-600" />
              Your Rights Regarding Cookies
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Choose:</strong> Decide which cookies to accept or reject</li>
                <li><strong>Withdraw Consent:</strong> Change your cookie preferences at any time</li>
                <li><strong>Delete:</strong> Remove cookies from your device</li>
                <li><strong>Block:</strong> Prevent cookies from being placed</li>
                <li><strong>Information:</strong> Know what cookies are being used and why</li>
              </ul>
            </div>
          </section>

          {/* Updates to Cookie Policy */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-gray-600" />
              Updates to This Policy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. Changes will be effective immediately upon posting.
              </p>
              <p>
                We encourage you to review this policy periodically to stay informed about our use of cookies and your choices.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-primary-600" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Email:</strong> privacy@realestate.ae</p>
                <p><strong>Phone:</strong> +971 4 123 4567</p>
                <p><strong>Address:</strong> Office 1201, Burj Khalifa, Downtown Dubai, UAE</p>
              </div>
            </div>
          </section>
        </div>

        {/* Cookie Settings Notice */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <h3 className="font-semibold mb-2">Your Privacy Choices</h3>
              <p>
                You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website or by adjusting your browser settings. We respect your privacy choices and are committed to providing transparent information about our cookie practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePage;
