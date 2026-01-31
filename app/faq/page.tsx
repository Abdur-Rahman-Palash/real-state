'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Phone, Mail, Building, User, FileText, CreditCard, Shield, Globe } from 'lucide-react';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const categories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'buying',
      name: 'Buying Property',
      icon: <Building className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'renting',
      name: 'Renting Property',
      icon: <User className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'selling',
      name: 'Selling Property',
      icon: <FileText className="w-5 h-5" />,
      color: 'orange'
    },
    {
      id: 'payment',
      name: 'Payment & Financing',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'red'
    },
    {
      id: 'legal',
      name: 'Legal & Documentation',
      icon: <Shield className="w-5 h-5" />,
      color: 'indigo'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: <Globe className="w-5 h-5" />,
      color: 'gray'
    }
  ];

  const faqs = [
    {
      id: '1',
      category: 'general',
      question: 'What is RealEstate.ae?',
      answer: 'RealEstate.ae is a comprehensive real estate platform in the UAE that connects buyers, sellers, renters, and agents. We provide property listings, market insights, agent directories, and tools to make your real estate journey seamless and successful.'
    },
    {
      id: '2',
      category: 'general',
      question: 'Is RealEstate.ae free to use?',
      answer: 'Yes, browsing properties, searching for agents, and accessing market insights is completely free for users. However, we offer premium listing packages for agents and property owners who want enhanced visibility and additional features.'
    },
    {
      id: '3',
      category: 'general',
      question: 'How do I create an account?',
      answer: 'Creating an account is simple! Click on the "Sign Up" button in the top right corner, fill in your details, and verify your email. Once registered, you can save properties, contact agents, and access personalized recommendations.'
    },
    {
      id: '4',
      category: 'buying',
      question: 'How do I buy property through your platform?',
      answer: 'Browse our extensive property listings, use filters to narrow your search, and contact agents directly through our platform. Our agents will guide you through the entire buying process, from property viewings to final documentation and transfer of ownership.'
    },
    {
      id: '5',
      category: 'buying',
      question: 'What documents do I need to buy property in UAE?',
      answer: 'Required documents typically include: valid passport/EID, proof of income, bank statements, and for non-residents, a valid visa. Your agent will provide a complete checklist based on your specific situation and the property type.'
    },
    {
      id: '6',
      category: 'buying',
      question: 'Can foreigners buy property in UAE?',
      answer: 'Yes, foreigners can buy property in designated freehold areas in Dubai, Abu Dhabi, Sharjah, and other emirates. These areas include popular locations like Dubai Marina, Downtown Dubai, Palm Jumeirah, and many more.'
    },
    {
      id: '7',
      category: 'renting',
      question: 'How do I rent a property through RealEstate.ae?',
      answer: 'Search for rental properties using our filters, contact landlords or agents directly, schedule viewings, and complete the rental agreement. We provide templates for standard rental contracts and can connect you with legal advisors if needed.'
    },
    {
      id: '8',
      category: 'renting',
      question: 'What is the typical rental process in UAE?',
      answer: 'The typical process includes: property search, viewing, submitting an offer, signing the tenancy contract (Ejari in Dubai), paying security deposit (usually 5% of annual rent), and post-dated checks for rent payments.'
    },
    {
      id: '9',
      category: 'renting',
      question: 'How much security deposit is required?',
      answer: 'Security deposits typically range from 5% to 10% of the annual rent, depending on the emirate and property type. This deposit is refundable at the end of the tenancy, subject to property condition and any outstanding payments.'
    },
    {
      id: '10',
      category: 'selling',
      question: 'How do I list my property for sale?',
      answer: 'Create an account, click "List Property," fill in all required details including photos, price, and property specifications. Choose a listing package, and your property will be live on our platform. Our team will review and approve your listing within 24 hours.'
    },
    {
      id: '11',
      category: 'selling',
      question: 'What documents do I need to sell property?',
      answer: 'Required documents include: title deed, original purchase agreement, passport/EID copies, NOC from developer (for apartments), and any existing mortgage details. Your agent will provide a comprehensive list based on your property.'
    },
    {
      id: '12',
      category: 'selling',
      question: 'How is the selling price determined?',
      answer: 'Property prices are determined by factors like location, property type, size, condition, amenities, and current market conditions. Our agents provide free property valuations based on recent comparable sales and market analysis.'
    },
    {
      id: '13',
      category: 'payment',
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including bank transfers, credit cards (for listing fees), and secure online payment gateways. For property purchases, payments are typically made through bank transfers as per the sale agreement.'
    },
    {
      id: '14',
      category: 'payment',
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in complete transparency. All fees are clearly listed in our pricing section. For property transactions, additional costs may include agency fees (typically 2% for buyers, 2% for sellers), registration fees, and other government charges.'
    },
    {
      id: '15',
      category: 'payment',
      question: 'Can I get financing through your platform?',
      answer: 'While we don\'t directly provide financing, we partner with leading UAE banks and financial institutions. We can connect you with mortgage advisors who will help you explore financing options and pre-approval processes.'
    },
    {
      id: '16',
      category: 'legal',
      question: 'Do you provide legal assistance?',
      answer: 'We partner with qualified real estate lawyers who can assist with legal documentation, contract reviews, and ensure compliance with UAE real estate laws. Legal assistance is available at additional cost.'
    },
    {
      id: '17',
      category: 'legal',
      question: 'What is Ejari registration?',
      answer: 'Ejari is Dubai\'s online rental registration system that legally registers all rental contracts. It protects both landlords and tenants by ensuring contracts comply with Dubai\'s rental laws. Similar systems exist in other emirates.'
    },
    {
      id: '18',
      category: 'legal',
      question: 'How are disputes resolved?',
      answer: 'Real estate disputes in UAE are typically resolved through the Real Estate Regulatory Agency (RERA) in Dubai or similar authorities in other emirates. We recommend consulting with our legal partners for dispute resolution assistance.'
    },
    {
      id: '19',
      category: 'technical',
      question: 'Is there a mobile app available?',
      answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The app offers all the features of our website plus additional mobile-specific functionalities.'
    },
    {
      id: '20',
      category: 'technical',
      question: 'How do I report technical issues?',
      answer: 'If you encounter any technical issues, please contact our support team at tech@realestate.ae or call our hotline. You can also use the "Report Issue" feature in your account dashboard for quick assistance.'
    },
    {
      id: '21',
      category: 'technical',
      question: 'Is my personal information secure?',
      answer: 'Absolutely! We use industry-standard encryption and security measures to protect your personal information. We comply with UAE data protection laws and never share your information with third parties without your consent.'
    }
  ];

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !expandedCategory || faq.category === expandedCategory;
    return matchesSearch && matchesCategory;
  });

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              Find answers to common questions about real estate in UAE
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                      expandedCategory === category.id
                        ? getColorClasses(category.color)
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {category.icon}
                      <span className="ml-2 font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm">
                      {faqs.filter(faq => faq.category === category.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
                  <p className="text-gray-600">Try adjusting your search or browse different categories.</p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {expandedQuestions.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    {expandedQuestions.has(faq.id) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Contact Support */}
            <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help you with any additional questions you may have.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <MessageSquare className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                    <p className="text-gray-600 text-sm mb-3">Chat with our support team</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700 text-sm">
                      Start Chat
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600 text-sm mb-3">+971 4 123 4567</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700 text-sm">
                      Call Now
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-gray-600 text-sm mb-3">support@realestate.ae</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700 text-sm">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
