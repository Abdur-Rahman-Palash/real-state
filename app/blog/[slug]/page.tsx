'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog';
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  MessageSquare, 
  Star, 
  Share2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Link
} from 'lucide-react';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ params }) => {
  const post = getBlogPostBySlug(params.slug);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'comments' | 'related'>('related');

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <a href="/blog" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Back to Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock comments
  const comments = [
    {
      id: '1',
      name: 'Ahmed Mohammed',
      date: '2024-01-16',
      comment: 'Great article! This really helped me understand the Dubai investment landscape. Looking forward to more insights.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      likes: 12
    },
    {
      id: '2',
      name: 'Emily Johnson',
      date: '2024-01-15',
      comment: 'Very comprehensive analysis. I particularly appreciate the detailed ROI calculations and market trends.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      likes: 8
    },
    {
      id: '3',
      name: 'Michael Chen',
      date: '2024-01-14',
      comment: 'This is exactly what I was looking for. The information about off-plan vs secondary market is invaluable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      likes: 15
    }
  ];

  // Mock related posts
  const relatedPosts = getAllBlogPosts()
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    // Handle social media sharing
    console.log(`Sharing to ${platform}: ${window.location.href}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/blog" className="hover:text-primary-600">Blog</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Hero Image */}
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            {post.featured && (
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-medium capitalize">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorBio}</div>
                </div>
              </div>

              {/* Share and Like */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-600 border-red-200' 
                      : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('link')}
                    className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Link className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {post.content}
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  <span>{post.likes + (isLiked ? 1 : 0)} likes</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>{post.comments} comments</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Comments and Related Posts */}
        <div className="mt-8">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('comments')}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'comments' 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Comments ({post.comments})
                </button>
                <button
                  onClick={() => setActiveTab('related')}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'related' 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Related Articles
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'comments' && (
                <div className="space-y-6">
                  {/* Comment Form */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h3>
                    <form className="space-y-4">
                      <textarea
                        placeholder="Share your thoughts..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        rows={3}
                      ></textarea>
                      <div className="flex justify-end">
                        <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={comment.avatar}
                            alt={comment.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-gray-900">{comment.name}</div>
                                <div className="text-sm text-gray-500">{comment.date}</div>
                              </div>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Heart className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-gray-700">{comment.comment}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span>{comment.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'related' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium capitalize">
                              {relatedPost.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(relatedPost.publishedDate).toLocaleDateString()}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-500">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{relatedPost.readTime} min read</span>
                            </div>
                            <button className="text-primary-600 font-medium hover:text-primary-700">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
