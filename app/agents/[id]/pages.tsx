import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { getAllAgents } from '@/data/agents';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Languages, 
  Check,
  Building,
  MessageSquare,
  Heart,
  Share2
} from 'lucide-react';

interface AgentProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

const AgentProfilePage = async ({ params }: AgentProfilePageProps) => {
  const { id } = await params;
  const agents = getAllAgents();
  const agent = agents.find(a => a.id === id);

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
            <p className="text-gray-600 mb-8">The agent you're looking for doesn't exist.</p>
            <Link href="/agents" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Back to Agents
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Agent Image */}
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="lg:w-2/3">
              <div className="mb-4">
                <h1 className="text-4xl font-bold mb-2">{agent.name}</h1>
                <p className="text-xl text-primary-100">{agent.specialization}</p>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{agent.rating}</span>
                  <span className="text-primary-100 ml-1">({agent.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  <span>{agent.propertiesSold || 0} properties sold</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>{agent.experience} years experience</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-200" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-200" />
                  <span>{agent.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary-200" />
                  <span>{agent.location}</span>
                </div>
                <div className="flex items-center">
                  <Languages className="w-5 h-5 mr-3 text-primary-200" />
                  <span>{agent.languages.join(', ')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Contact Agent
                </button>
                <button className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors font-semibold">
                  <Heart className="w-5 h-5 inline mr-2" />
                  Save Agent
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  <Share2 className="w-5 h-5 inline mr-2" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {agent.name}</h2>
              <p className="text-gray-700 mb-6">{agent.about || 'Experienced real estate agent dedicated to helping clients find their dream properties.'}</p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specializations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {(agent.specializations || []).map((spec, index) => (
                  <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                    {spec}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-4 mb-8">
                {(agent.achievements || ['Top performer 2023', '100+ satisfied clients', 'Expert in luxury properties']).map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Properties Sold</span>
                    <span className="font-semibold">{agent.propertiesSold || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Response Time</span>
                    <span className="font-semibold">{agent.responseTime || '2 hours'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-semibold">{agent.languages.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">{agent.experience} years</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{agent.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{agent.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentProfilePage;
