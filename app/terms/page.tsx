'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, Calendar, Shield, Users, AlertCircle, CheckCircle } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary-600" />
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Welcome to RealEstate.ae. These Terms and Conditions govern your use of our website, services, and platform. By accessing or using RealEstate.ae, you agree to be bound by these terms.
              </p>
              <p>
                RealEstate.ae is a real estate platform operating in the United Arab Emirates, connecting property buyers, sellers, renters, and real estate professionals. Our platform provides property listings, market insights, agent directories, and related services.
              </p>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
              Acceptance of Terms
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                By accessing and using RealEstate.ae, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                These terms apply to all users of our platform, including but not limited to property buyers, sellers, renters, real estate agents, property developers, and visitors to our website.
              </p>
            </div>
          </section>

          {/* User Accounts */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              User Accounts
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Account Registration</h3>
                <p className="mb-4">
                  To access certain features of RealEstate.ae, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Account Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
                </p>
              </div>
            </div>
          </section>

          {/* Property Listings */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Property Listings
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Listing Accuracy</h3>
                <p className="mb-4">
                  Property owners and agents are responsible for ensuring the accuracy of all information provided in property listings. RealEstate.ae does not guarantee the accuracy or completeness of listing information.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Listing Fees</h3>
                <p className="mb-4">
                  We offer various listing packages with different features and visibility levels. Listing fees are non-refundable unless otherwise specified. All fees are clearly outlined in our pricing section.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Content Guidelines</h3>
                <p>
                  All property listings must comply with UAE laws and regulations. We reserve the right to remove any listing that violates our content guidelines or applicable laws.
                </p>
              </div>
            </div>
          </section>

          {/* User Conduct */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-indigo-600" />
              User Conduct
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Prohibited Activities</h3>
                <p className="mb-4">
                  Users agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Posting false, misleading, or fraudulent information</li>
                  <li>Engaging in spam or unsolicited communications</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with the proper functioning of our platform</li>
                  <li>Using our platform for illegal or unethical purposes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Conduct</h3>
                <p>
                  Real estate agents and professionals using our platform must adhere to professional standards and UAE real estate regulations. Any violation may result in account suspension or termination.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-red-600" />
              Privacy and Data Protection
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                Your privacy is important to us. Our use of personal information is governed by our Privacy Policy, which forms part of these Terms and Conditions.
              </p>
              <p className="mb-4">
                By using our platform, you consent to the collection, use, and sharing of your information as described in our Privacy Policy and as necessary to provide our services.
              </p>
              <p>
                We implement appropriate security measures to protect your personal information in accordance with UAE data protection laws and international best practices.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-orange-600" />
              Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                All content on RealEstate.ae, including but not limited to text, graphics, logos, images, software, and data, is the property of RealEstate.ae or our content providers and is protected by intellectual property laws.
              </p>
              <p className="mb-4">
                Users may not reproduce, distribute, modify, or create derivative works of any content from our platform without prior written permission from RealEstate.ae.
              </p>
              <p>
                By submitting content to our platform, users grant RealEstate.ae a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for the purpose of operating and promoting our services.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-yellow-600" />
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                RealEstate.ae operates as a platform connecting users with real estate opportunities. We do not act as a real estate broker, agent, or legal advisor.
              </p>
              <p className="mb-4">
                We are not responsible for the accuracy of property listings, the conduct of users on our platform, or any transactions that may occur between users.
              </p>
              <p className="mb-4">
                To the fullest extent permitted by law, RealEstate.ae shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform.
              </p>
              <p>
                Users are encouraged to conduct their own due diligence and seek professional advice before making any real estate decisions.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-teal-600" />
              Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                Any disputes arising from the use of RealEstate.ae shall be governed by the laws of the United Arab Emirates.
              </p>
              <p className="mb-4">
                We encourage users to resolve disputes amicably through direct communication. For unresolved disputes, parties may seek mediation or legal recourse through UAE courts.
              </p>
              <p>
                RealEstate.ae reserves the right to suspend or terminate accounts involved in disputes pending resolution.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-gray-600" />
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our platform.
              </p>
              <p>
                Users are responsible for reviewing these terms periodically. Continued use of our platform after changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary-600" />
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Email:</strong> legal@realestate.ae</p>
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
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p>
                By continuing to use RealEstate.ae, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our platform immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
