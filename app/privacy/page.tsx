'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Database, Lock, Mail, Users, Cookie, CheckCircle, AlertCircle, Globe } from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center text-gray-600">
            <Eye className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-primary-600" />
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                At RealEstate.ae, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our real estate platform.
              </p>
              <p>
                This policy applies to all users of RealEstate.ae, including property buyers, sellers, renters, real estate agents, and visitors to our website. By using our platform, you consent to the practices described in this policy.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-600" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <p className="mb-4">We collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name, email address, phone number</li>
                  <li>Physical address and location preferences</li>
                  <li>Account credentials and security information</li>
                  <li>Professional information for agents and developers</li>
                  <li>Payment information for premium services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Property Information</h3>
                <p className="mb-4">When you list or inquire about properties, we collect:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Property details, photos, and descriptions</li>
                  <li>Location and neighborhood information</li>
                  <li>Pricing and availability information</li>
                  <li>Property preferences and search history</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                <p className="mb-4">We automatically collect technical information about your device and usage, including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our platform</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Service Provision:</strong> To provide and maintain our real estate platform services</li>
                <li><strong>Property Matching:</strong> To match you with relevant properties and opportunities</li>
                <li><strong>Communication:</strong> To respond to your inquiries and send important updates</li>
                <li><strong>Personalization:</strong> To personalize your experience and provide relevant recommendations</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our services</li>
                <li><strong>Marketing:</strong> To send promotional communications (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Security:</strong> To protect against fraud and ensure platform security</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              Information Sharing
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">We Share Information With:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Real Estate Professionals:</strong> Agents, brokers, and developers when you inquire about properties</li>
                  <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Partners:</strong> For joint marketing or service offerings (with consent)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">We Never Sell Your Personal Information</h3>
                <p>
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-red-600" />
              Data Security
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">We implement comprehensive security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Compliance with UAE data protection regulations</li>
              </ul>
              <p>
                While we take reasonable measures to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Cookie className="w-6 h-6 mr-3 text-orange-600" />
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how our platform is used</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized advertising (with consent)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Managing Cookies:</h3>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may affect your experience on our platform.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-teal-600" />
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">Under UAE data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@realestate.ae. We will respond to your request within 30 days.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-indigo-600" />
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="mb-4">
                Factors we consider when determining retention periods include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>The purpose for which we collected the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Business needs and legitimate interests</li>
                <li>Your preferences and consent</li>
              </ul>
              <p>
                When we delete your information, we take reasonable steps to ensure it is permanently removed from our systems.
              </p>
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-cyan-600" />
              International Data Transfers
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                Your personal information may be transferred to and processed in countries outside the UAE. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
              </p>
              <p>
                These safeguards may include standard contractual clauses, binding corporate rules, or other legally recognized mechanisms for international data transfers.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-pink-600" />
              Children's Privacy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our platform is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information immediately.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-gray-600" />
              Changes to Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our platform</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-primary-600" />
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Email:</strong> privacy@realestate.ae</p>
                <p><strong>Phone:</strong> +971 4 123 4567</p>
                <p><strong>Address:</strong> Office 1201, Burj Khalifa, Downtown Dubai, UAE</p>
              </div>
            </div>
          </section>
        </div>

        {/* Acceptance Notice */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
              <p>
                By using RealEstate.ae, you acknowledge that you have read and understood this Privacy Policy. We are committed to protecting your privacy and will continue to enhance our privacy practices in line with evolving standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
