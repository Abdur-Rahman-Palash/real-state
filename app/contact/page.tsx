'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building,
  Users,
  Globe,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: 'Dubai',
      address: 'Office 1201, Burj Khalifa, Downtown Dubai',
      phone: '+971 4 123 4567',
      email: 'dubai@realestate.ae',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      map: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      city: 'Abu Dhabi',
      address: 'Office 505, Al Maryah Tower, Abu Dhabi',
      phone: '+971 2 987 6543',
      email: 'abudhabi@realestate.ae',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      map: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    },
    {
      city: 'Sharjah',
      address: 'Office 301, Al Zahra Building, Sharjah',
      phone: '+971 6 456 7890',
      email: 'sharjah@realestate.ae',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      map: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    }
  ];

  const team = [
    {
      name: 'Customer Support',
      description: 'Get help with property search, listings, and account issues',
      email: 'support@realestate.ae',
      phone: '+971 4 123 4567',
      responseTime: 'Within 2 hours'
    },
    {
      name: 'Agent Relations',
      description: 'For agents looking to join our platform or partnership inquiries',
      email: 'agents@realestate.ae',
      phone: '+971 4 123 4568',
      responseTime: 'Within 24 hours'
    },
    {
      name: 'Marketing & Advertising',
      description: 'For advertising opportunities and media partnerships',
      email: 'marketing@realestate.ae',
      phone: '+971 4 123 4569',
      responseTime: 'Within 48 hours'
    },
    {
      name: 'Technical Support',
      description: 'For website issues, app problems, and technical assistance',
      email: 'tech@realestate.ae',
      phone: '+971 4 123 4570',
      responseTime: 'Within 4 hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I list my property on your platform?',
      answer: 'Simply create an account, click "List Property" and fill in the required details. Our team will review and approve your listing within 24 hours.'
    },
    {
      question: 'What are your service fees?',
      answer: 'We offer various packages starting from AED 299 for basic listings. Premium packages include additional features like highlighted listings and priority support.'
    },
    {
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'Our average response time is 2 hours during business hours. For urgent matters, please call our hotline directly.'
    },
    {
      question: 'Do you provide property valuation services?',
      answer: 'Yes, we offer free property valuations for registered users. Contact our agent relations team for more information.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              We're here to help you find your perfect property. Reach out to our team for any questions or assistance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">We'll get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Alex Johnson"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="property">Property Information</option>
                        <option value="agent">Agent Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Hotline</div>
                    <div className="text-gray-600">+971 4 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">info@realestate.ae</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Contacts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Our Teams</h3>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="font-medium text-gray-900 mb-1">{member.name}</div>
                    <p className="text-sm text-gray-600 mb-2">{member.description}</p>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Mail className="w-3 h-3 mr-1" />
                        {member.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {member.phone}
                      </div>
                      <div className="text-primary-600 mt-1">{member.responseTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={office.map}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-600 flex-shrink-0" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary-600" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-primary-600" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary-600" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
