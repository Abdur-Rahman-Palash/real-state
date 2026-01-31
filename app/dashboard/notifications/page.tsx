'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Bell, 
  Check, 
  X, 
  Clock, 
  Calendar, 
  User, 
  Home, 
  MessageSquare, 
  Star, 
  Heart, 
  Eye, 
  Settings, 
  Filter, 
  Search, 
  ChevronRight, 
  AlertCircle,
  CheckCircle,
  Info,
  Mail,
  Phone,
  MapPin,
  Building,
  TrendingUp,
  Users,
  Archive,
  Trash2,
  ExternalLink,
  MoreVertical
} from 'lucide-react';
import Link from 'next/link';

const NotificationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState<Set<string>>(new Set());

  // Mock notifications data
  const notifications = [
    {
      id: '1',
      type: 'property',
      title: 'New property matching your criteria',
      message: 'A 3-bedroom apartment in Dubai Marina has been listed that matches your search criteria. Price: AED 2.5M',
      time: '2 hours ago',
      read: false,
      starred: false,
      priority: 'high',
      actionUrl: '/properties/dubai-marina-3br-apartment',
      icon: <Home className="w-5 h-5" />,
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      id: '2',
      type: 'message',
      title: 'New message from Sarah Johnson',
      message: 'Sarah Johnson sent you a message regarding your inquiry about the luxury villa in Palm Jumeirah.',
      time: '4 hours ago',
      read: false,
      starred: true,
      priority: 'medium',
      actionUrl: '/dashboard/messages',
      icon: <MessageSquare className="w-5 h-5" />,
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      id: '3',
      type: 'price',
      title: 'Price drop alert',
      'message': 'The price of the apartment you saved in Downtown Dubai has been reduced by 10% to AED 1.8M.',
      time: '1 day ago',
      read: true,
      starred: false,
      priority: 'high',
      actionUrl: '/properties/downtown-dubai-apartment',
      icon: <TrendingUp className="w-5 h-5" />,
      iconBg: 'bg-red-100 text-red-600'
    },
    {
      id: '4',
      type: 'viewing',
      title: 'Property viewing reminder',
      message: 'You have a property viewing scheduled for tomorrow at 3 PM for the apartment in Dubai Marina.',
      time: '1 day ago',
      read: true,
      starred: false,
      priority: 'medium',
      actionUrl: '/dashboard/calendar',
      icon: <Calendar className="w-5 h-5" />,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      id: '5',
      type: 'saved',
      title: 'Property saved to favorites',
      message: 'You have saved "Luxury Villa with Private Pool" to your favorites. The property is listed at AED 5.5M.',
      time: '2 days ago',
      read: true,
      starred: false,
      priority: 'low',
      actionUrl: '/dashboard/saved-properties',
      icon: <Heart className="w-5 h-5" />,
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      id: '6',
      type: 'system',
      title: 'Account verification required',
      message: 'Please verify your email address to continue using all features of RealEstate.ae.',
      time: '3 days ago',
      read: false,
      starred: false,
      priority: 'high',
      actionUrl: '/dashboard/settings',
      icon: <AlertCircle className="w-5 h-5" />,
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: '7',
      type: 'market',
      title: 'Market insights update',
      message: 'New market insights are available for Dubai real estate. Average prices increased by 5.2% this month.',
      time: '1 week ago',
      read: true,
      starred: false,
      priority: 'low',
      actionUrl: '/market-insights',
      icon: <Info className="w-5 h-5" />,
      iconBg: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: '8',
      type: 'listing',
      title: 'Listing published successfully',
      message: 'Your property listing "Modern 2BR Apartment" has been published successfully and is now live.',
      time: '1 week ago',
      read: true,
      starred: false,
      priority: 'medium',
      actionUrl: '/dashboard/my-listings',
      icon: <Building className="w-5 h-5" />,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      id: '9',
      type: 'inquiry',
      title: 'New inquiry received',
      message: 'You received a new inquiry for your property "Beachfront Villa JBR". The buyer is interested in scheduling a viewing.',
      time: '2 weeks ago',
      read: true,
      starred: false,
      priority: 'high',
      actionUrl: '/dashboard/messages',
      icon: <Users className="w-5 h-5" />,
      iconBg: 'bg-teal-100 text-teal-600'
    },
    {
      id: '10',
      type: 'newsletter',
      title: 'Weekly newsletter available',
      message: 'This week\'s newsletter features the top 5 investment opportunities in Dubai real estate.',
      time: '2 weeks ago',
      read: true,
      starred: false,
      priority: 'low',
      actionUrl: '/blog/weekly-newsletter',
      icon: <Mail className="w-5 h-5" />,
      iconBg: 'bg-gray-100 text-gray-600'
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'unread') return matchesSearch && !notification.read;
    if (filterType === 'starred') return matchesSearch && notification.starred;
    if (filterType === 'high') return matchesSearch && notification.priority === 'high';
    if (filterType === 'medium') return matchesSearch && notification.priority === 'medium';
    if (filterType === 'low') return matchesSearch && notification.priority === 'low';
    
    return matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (notificationId: string) => {
    console.log('Marking as read:', notificationId);
    // In a real app, this would update the notification via API
  };

  const handleMarkAllAsRead = () => {
    const unreadIds = notifications.filter(n => !n.read).map(n => n.id);
    console.log('Marking all as read:', unreadIds);
    // In a real app, this would update all notifications via API
  };

  const handleStarNotification = (notificationId: string) => {
    console.log('Starring notification:', notificationId);
    // In a real app, this would update the notification via API
  };

  const handleDeleteNotification = (notificationId: string) => {
    if (confirm('Are you sure you want to delete this notification?')) {
      console.log('Deleting notification:', notificationId);
      // In a real app, this would delete the notification via API
    }
  };

  const handleArchiveNotification = (notificationId: string) => {
    console.log('Archiving notification:', notificationId);
    // In a real app, this would archive the notification via API
  };

  const handleSelectNotification = (notificationId: string) => {
    const newSelected = new Set(selectedNotifications);
    if (newSelected.has(notificationId)) {
      newSelected.delete(notificationId);
    } else {
      newSelected.add(notificationId);
    }
    setSelectedNotifications(newSelected);
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action}`, Array.from(selectedNotifications));
    
    if (action === 'mark-read') {
      selectedNotifications.forEach(id => handleMarkAsRead(id));
    } else if (action === 'star') {
      selectedNotifications.forEach(id => handleStarNotification(id));
    } else if (action === 'archive') {
      selectedNotifications.forEach(id => handleArchiveNotification(id));
    } else if (action === 'delete') {
      if (confirm(`Are you sure you want to delete ${selectedNotifications.size} notifications?`)) {
        selectedNotifications.forEach(id => handleDeleteNotification(id));
      }
    }
    
    setSelectedNotifications(new Set());
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50';
      case 'medium': return 'bg-yellow-50';
      case 'low': return 'bg-gray-50';
      default: return 'bg-gray-50';
    }
  };

  const NotificationCard = ({ notification }: { notification: any }) => (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 cursor-pointer border ${
        !notification.read ? 'border-l-4 border-l-primary-500' : 'border-l-4 border-transparent'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${notification.iconBg}`}>
          {notification.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className={`font-semibold text-gray-900 ${!notification.read ? 'font-bold' : ''}`}>
                {notification.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityBg(notification.priority)} ${getPriorityColor(notification.priority)}`}>
                  {notification.priority}
                </span>
                {!notification.read && (
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStarNotification(notification.id);
                }}
                className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                  notification.starred ? 'text-yellow-500' : 'text-gray-400'
                }`}
              >
                <Star className={`w-4 h-4 ${notification.starred ? 'fill-current' : ''}`} />
              </button>
              
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle dropdown
                  }}
                  className="p-1 rounded hover:bg-gray-100 transition-colors text-gray-400"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{notification.message}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{notification.time}</span>
            
            <div className="flex items-center space-x-2">
              {!notification.read && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkAsRead(notification.id);
                  }}
                  className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                >
                  Mark as read
                </button>
              )}
              
              {notification.actionUrl && (
                <Link
                  href={notification.actionUrl}
                  className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  View
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              )}
            </div>
          </div>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your real estate activities</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread</option>
              <option value="starred">Starred</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Unread Count and Bulk Actions */}
        {unreadCount > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  {unreadCount} unread notification{unreadCount === 1 ? '' : 's'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleMarkAllAsRead}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bulk Selection Actions */}
        {selectedNotifications.size > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-600" />
                <span className="text-orange-700 font-medium">
                  {selectedNotifications.size} notification{selectedNotifications.size === 1 ? '' : 's'} selected
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleBulkAction('mark-read')}
                  className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors text-sm"
                >
                  Mark as read
                </button>
                <button
                  onClick={() => handleBulkAction('star')}
                  className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm"
                >
                  Star
                </button>
                <button
                  onClick={() => handleBulkAction('archive')}
                  className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                >
                  Archive
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedNotifications(new Set())}
                  className="px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm"
                >
                  Clear selection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.has(notification.id)}
                    onChange={() => handleSelectNotification(notification.id)}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <div className="flex-1">
                    <NotificationCard notification={notification} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">
                {searchQuery || filterType !== 'all' 
                  ? 'No notifications match your search or filters' 
                  : 'You\'re all caught up! Check back later for new notifications.'}
              </p>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Notification Settings</h3>
                <p className="text-sm text-gray-600">Manage how you receive notifications</p>
              </div>
            </div>
            
            <Link
              href="/dashboard/settings"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center"
            >
              Configure
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
