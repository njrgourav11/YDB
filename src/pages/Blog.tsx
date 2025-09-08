import React, { useState } from 'react';
import { Calendar, User, Clock, Tag, Search, TrendingUp, Heart } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 45 },
    { id: 'pcos', name: 'PCOS', count: 18 },
    { id: 'perimenopause', name: 'Perimenopause', count: 12 },
    { id: 'ayurveda', name: 'Ayurveda', count: 8 },
    { id: 'nutrition', name: 'Nutrition', count: 15 },
    { id: 'lifestyle', name: 'Lifestyle', count: 10 },
    { id: 'mental-health', name: 'Mental Health', count: 7 }
  ];

  const featuredArticle = {
    id: 1,
    title: 'The Complete Guide to Managing PCOS Naturally: Evidence-Based Strategies That Work',
    excerpt: 'Discover the most effective natural approaches to managing PCOS symptoms, backed by the latest research and thousands of success stories from our community.',
    author: 'Dr. Priya Sharma',
    date: 'March 12, 2024',
    readTime: '12 min read',
    category: 'PCOS',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: 'Understanding Perimenopause: What Every Woman Should Know',
      excerpt: 'Navigate the transition with confidence. Learn about symptoms, timeline, and natural management strategies.',
      author: 'Dr. Anjali Patel',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Perimenopause',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['hormones', 'menopause', 'women\'s health']
    },
    {
      id: 3,
      title: 'Ayurvedic Herbs for Hormonal Balance: Ancient Wisdom Meets Modern Science',
      excerpt: 'Explore how traditional Ayurvedic herbs like Shatavari and Ashwagandha support women\'s hormonal health.',
      author: 'Dr. Meera Reddy',
      date: 'March 8, 2024',
      readTime: '10 min read',
      category: 'Ayurveda',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['ayurveda', 'herbs', 'natural healing']
    },
    {
      id: 4,
      title: 'PCOS-Friendly Meal Planning: 7-Day Guide with Recipes',
      excerpt: 'Transform your relationship with food with our comprehensive meal planning guide designed specifically for PCOS.',
      author: 'Nutritionist Kavya Singh',
      date: 'March 6, 2024',
      readTime: '15 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['nutrition', 'meal planning', 'recipes']
    },
    {
      id: 5,
      title: 'The Mind-Body Connection: Managing PCOS-Related Anxiety and Depression',
      excerpt: 'Address the emotional aspects of PCOS with evidence-based strategies for mental wellness.',
      author: 'Dr. Riya Sharma',
      date: 'March 4, 2024',
      readTime: '9 min read',
      category: 'Mental Health',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['mental health', 'anxiety', 'depression']
    },
    {
      id: 6,
      title: 'Exercise for PCOS: The Best Workouts for Hormonal Balance',
      excerpt: 'Discover which types of exercise are most beneficial for women with PCOS and how to create an effective routine.',
      author: 'Fitness Expert Priya Nair',
      date: 'March 2, 2024',
      readTime: '11 min read',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['exercise', 'fitness', 'lifestyle']
    },
    {
      id: 7,
      title: 'Sleep and Hormones: Why Quality Rest is Crucial for Women\'s Health',
      excerpt: 'Learn how sleep affects your hormones and discover strategies for better rest and recovery.',
      author: 'Dr. Anjali Patel',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tags: ['sleep', 'hormones', 'wellness']
    }
  ];

  const trendingTopics = [
    'PCOS Diet Plans',
    'Natural Hormone Balance',
    'Perimenopause Symptoms',
    'Ayurvedic Remedies',
    'Stress Management',
    'Weight Loss with PCOS'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Wellness Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based articles, expert insights, and practical guides to support 
              your wellness journey. Written by healthcare professionals and wellness experts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles, topics, or keywords..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredArticle.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredArticle.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredArticle.readTime}</span>
                </div>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                  Trending Topics
                </h3>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest wellness insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  />
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredArticles.length} articles found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-90 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>

                    {article.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;