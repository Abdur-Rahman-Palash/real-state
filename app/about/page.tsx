'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Building,
  Heart,
  CheckCircle,
  Calendar,
  Briefcase
} from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Ahmed Al-Mansoori',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0f9f28545761?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years of real estate expertise, committed to revolutionizing property search in UAE.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Operations expert focused on delivering exceptional customer experiences and streamlined processes.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Tech innovator driving our digital transformation and cutting-edge property search technology.'
    },
    {
      name: 'Fatima Hassan',
      position: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      bio: 'Marketing strategist passionate about connecting people with their dream homes through innovative campaigns.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a vision to simplify real estate search in UAE',
      icon: <Building className="w-6 h-6" />
    },
    {
      year: '2019',
      title: 'First 1000 Properties',
      description: 'Reached milestone of 1000 listed properties',
      icon: <Target className="w-6 h-6" />
    },
    {
      year: '2020',
      title: 'Mobile App Launch',
      description: 'Launched our mobile application for on-the-go property search',
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: '2021',
      title: '50,000+ Users',
      description: 'Celebrated serving over 50,000 happy customers',
      icon: <Users className="w-6 h-6" />
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Introduced AI-powered property recommendations',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became one of UAE\'s leading real estate platforms',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and strive to exceed their expectations at every touchpoint.',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate and embrace technology to provide the best real estate experience.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our dealings with customers and partners.',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering excellence in everything we do, from user experience to customer service.',
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RealEstate</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-primary-100">
              Your trusted partner in finding the perfect property in UAE. We combine cutting-edge technology with exceptional service to make your real estate journey seamless and successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Our Mission
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To revolutionize the real estate experience in UAE by providing innovative technology-driven solutions that make property search, buying, and selling seamless, transparent, and enjoyable for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to empowering our users with comprehensive information, expert guidance, and cutting-edge tools to make informed real estate decisions with confidence.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become the most trusted and innovative real estate platform in UAE, setting new standards for customer experience, technological advancement, and market transparency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every real estate transaction is simple, secure, and satisfying, powered by data-driven insights and human expertise working in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-primary-600">{milestone.icon}</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary-600 font-semibold">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Expert Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-primary-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Imam</h2>
            <p className="text-xl text-gray-600">The passionate people behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.position}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our services? We'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-700">+971 4 123 4567</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-700">info@realestate.ae</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-700">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
