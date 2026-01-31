'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Check, 
  CheckCircle, 
  AlertCircle, 
  MoreVertical, 
  Star, 
  Reply, 
  Forward, 
  Trash2, 
  Archive, 
  User,
  Building,
  Eye,
  Edit,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

const MessagesPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [replyText, setReplyText] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  // Mock messages data
  const messages = [
    {
      id: '1',
      sender: 'Sarah Johnson',
      senderAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      senderType: 'agent',
      subject: 'Re: Luxury 3BR Apartment Dubai Marina',
      preview: 'Hi John, I\'d be happy to schedule a viewing for this property. The apartment is available for viewing this weekend...',
      fullMessage: 'Hi John, I\'d be happy to schedule a viewing for this property. The apartment is available for viewing this weekend. It\'s a beautiful 3-bedroom unit with stunning marina views. The building offers excellent amenities including a swimming pool, gym, and 24/7 security. Please let me know what time works best for you.',
      time: '2 hours ago',
      unread: true,
      starred: false,
      property: {
        title: 'Luxury 3BR Apartment Dubai Marina',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop'
      },
      thread: [
        {
          sender: 'John Doe',
          message: 'Hi, I\'m interested in the 3BR apartment in Dubai Marina. Is it still available?',
          time: '3 hours ago',
          isMe: true
        },
        {
          sender: 'Sarah Johnson',
          message: 'Hi John, I\'d be happy to schedule a viewing for this property...',
          time: '2 hours ago',
          isMe: false
        }
      ]
    },
    {
      id: '2',
      sender: 'Michael Chen',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      senderType: 'agent',
      subject: 'New property matching your criteria',
      preview: 'I found a perfect property that matches your requirements. It\'s a 2-bedroom villa in Palm Jumeirah with a private pool...',
      fullMessage: 'I found a perfect property that matches your requirements. It\'s a 2-bedroom villa in Palm Jumeirah with a private pool and garden. The property is 3,500 sqft and listed at AED 4.5M. It has excellent sea views and is located in a prime area. Would you like me to arrange a viewing?',
      time: '1 day ago',
      unread: false,
      starred: true,
      property: {
        title: '2BR Villa Palm Jumeirah',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop'
      },
      thread: []
    },
    {
      id: '3',
      sender: 'Fatima Al-Mansoori',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      senderType: 'agent',
      subject: 'Property viewing confirmation',
      preview: 'Your viewing is confirmed for tomorrow at 3 PM. The property address is Dubai Marina, Marina Promenade...',
      fullMessage: 'Your viewing is confirmed for tomorrow at 3 PM. The property address is Dubai Marina, Marina Promenade. Please bring your ID card for security clearance. I\'ll be waiting for you at the main entrance. If you need to reschedule, please let me know at least 2 hours in advance.',
      time: '2 days ago',
      unread: false,
      starred: false,
      property: {
        title: 'Marina Promenade Apartment',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop'
      },
      thread: []
    },
    {
      id: '4',
      sender: 'David Williams',
      senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      senderType: 'buyer',
      subject: 'Question about property features',
      preview: 'Hi, I saw your listing for the villa in Palm Jumeirah. Does it have a maid\'s room and covered parking?',
      fullMessage: 'Hi, I saw your listing for the villa in Palm Jumeirah. Does it have a maid\'s room and covered parking? Also, is the community family-friendly with schools nearby?',
      time: '3 days ago',
      unread: false,
      starred: false,
      property: {
        title: 'Palm Jumeirah Villa',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop'
      },
      thread: []
    },
    {
      id: '5',
      sender: 'Emily Rodriguez',
      senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6466ffad8d80?w=400&h=400&fit=crop&crop=face',
      senderType: 'developer',
      subject: 'New project launch - Dubai Creek Harbour',
      preview: 'We\'re excited to announce our new luxury residential project in Dubai Creek Harbour. Pre-launch prices starting from AED 1.2M...',
      fullMessage: 'We\'re excited to announce our new luxury residential project in Dubai Creek Harbour. Pre-launch prices starting from AED 1.2M. The project features 1, 2, and 3-bedroom apartments with premium amenities. Construction is set to begin Q2 2024 with completion in Q4 2026. Would you like to receive the full brochure?',
      time: '1 week ago',
      unread: false,
      starred: false,
      property: {
        title: 'Dubai Creek Harbour Residences',
        image: 'https://images.unsplash.com/photo-1600607687937-ce5d6b81bbac?w=300&h=200&fit=crop'
      },
      thread: []
    }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.sender.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'unread') return matchesSearch && message.unread;
    if (filterType === 'starred') return matchesSearch && message.starred;
    if (filterType === 'agents') return matchesSearch && message.senderType === 'agent';
    if (filterType === 'buyers') return matchesSearch && message.senderType === 'buyer';
    if (filterType === 'developers') return matchesSearch && message.senderType === 'developer';
    return matchesSearch;
  });

  const handleSendMessage = () => {
    if (replyText.trim() && selectedMessage) {
      console.log('Sending message:', replyText);
      setReplyText('');
      // In a real app, this would send the message via API
    }
  };

  const handleMarkAsRead = (messageId: string) => {
    console.log('Marking as read:', messageId);
    // In a real app, this would update the message via API
  };

  const handleStarMessage = (messageId: string) => {
    console.log('Starring message:', messageId);
    // In a real app, this would update the message via API
  };

  const handleDeleteMessage = (messageId: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      console.log('Deleting message:', messageId);
      // In a real app, this would delete the message via API
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    }
  };

  const handleArchiveMessage = (messageId: string) => {
    console.log('Archiving message:', messageId);
    // In a real app, this would archive the message via API
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const MessageCard = ({ message }: { message: any }) => (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer border ${
        selectedMessage?.id === message.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
      }`}
      onClick={() => {
        setSelectedMessage(message);
        handleMarkAsRead(message.id);
      }}
    >
      <div className="flex items-start space-x-3">
        <img
          src={message.senderAvatar}
          alt={message.sender}
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-gray-900 truncate">{message.sender}</h4>
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                message.senderType === 'agent' ? 'bg-blue-100 text-blue-700' :
                message.senderType === 'buyer' ? 'bg-green-100 text-green-700' :
                'bg-purple-100 text-purple-700'
              }`}>
                {message.senderType}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">{message.time}</span>
              {message.unread && (
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
              )}
            </div>
          </div>
          <h5 className="text-sm font-medium text-gray-700 mb-1 truncate">{message.subject}</h5>
          <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
          
          {message.property && (
            <div className="flex items-center mt-2 p-2 bg-gray-50 rounded-lg">
              <img
                src={message.property.image}
                alt={message.property.title}
                className="w-12 h-12 rounded object-cover mr-2"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 truncate">{message.property.title}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
            <p className="text-gray-600">Manage your conversations with agents, buyers, and developers</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <MessageSquare className="w-4 h-4 mr-2" />
            New Message
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="starred">Starred</option>
                  <option value="agents">Agents</option>
                  <option value="buyers">Buyers</option>
                  <option value="developers">Developers</option>
                </select>
                
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="space-y-3">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => <MessageCard key={message.id} message={message} />)
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages found</h3>
                  <p className="text-gray-600">
                    {searchQuery || filterType !== 'all' 
                      ? 'Try adjusting your search or filters' 
                      : 'Start a conversation to see messages here'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
                {/* Message Header */}
                <div className="border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedMessage.senderAvatar}
                        alt={selectedMessage.sender}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedMessage.sender}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            selectedMessage.senderType === 'agent' ? 'bg-blue-100 text-blue-700' :
                            selectedMessage.senderType === 'buyer' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {selectedMessage.senderType}
                          </span>
                          <span className="text-xs text-gray-500">{selectedMessage.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleStarMessage(selectedMessage.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedMessage.starred ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${selectedMessage.starred ? 'fill-current' : ''}`} />
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowDropdown(showDropdown === selectedMessage.id ? null : selectedMessage.id)}
                          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        
                        {showDropdown === selectedMessage.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                            <button
                              onClick={() => {
                                setShowDropdown(null);
                                // Handle reply
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center"
                            >
                              <Reply className="w-4 h-4 mr-2" />
                              Reply
                            </button>
                            <button
                              onClick={() => {
                                setShowDropdown(null);
                                // Handle forward
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center"
                            >
                              <Forward className="w-4 h-4 mr-2" />
                              Forward
                            </button>
                            <button
                              onClick={() => {
                                setShowDropdown(null);
                                handleArchiveMessage(selectedMessage.id);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center"
                            >
                              <Archive className="w-4 h-4 mr-2" />
                              Archive
                            </button>
                            <button
                              onClick={() => {
                                setShowDropdown(null);
                                handleDeleteMessage(selectedMessage.id);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-semibold text-gray-900 mt-3">{selectedMessage.subject}</h2>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {/* Property Info */}
                  {selectedMessage.property && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={selectedMessage.property.image}
                          alt={selectedMessage.property.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{selectedMessage.property.title}</h4>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            View Property
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message Thread */}
                  <div className="space-y-4">
                    {selectedMessage.thread.map((threadMessage: any, index: number) => (
                      <div
                        key={index}
                        className={`flex ${threadMessage.isMe ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            threadMessage.isMe
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{threadMessage.message}</p>
                          <p className={`text-xs mt-1 ${
                            threadMessage.isMe ? 'text-primary-200' : 'text-gray-500'
                          }`}>
                            {threadMessage.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Current Message */}
                    <div className="flex justify-start">
                      <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gray-100 text-gray-900">
                        <p className="text-sm">{selectedMessage.fullMessage}</p>
                        <p className="text-xs text-gray-500 mt-1">{selectedMessage.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reply Form */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                      alt="You"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
                            <Paperclip className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
                            <Smile className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={handleSendMessage}
                          disabled={!replyText.trim()}
                          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a message</h3>
                  <p className="text-gray-600">Choose a message from the list to start reading</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MessagesPage;
