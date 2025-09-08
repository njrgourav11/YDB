import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star, Heart, ShoppingCart } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'pcos', name: 'PCOS Support', count: 6 },
    { id: 'perimenopause', name: 'Perimenopause', count: 4 },
    { id: 'wellness', name: 'General Wellness', count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: 'PCOS Balance Kit',
      category: 'pcos',
      description: 'Clinically proven blend for hormonal balance and cycle regulation',
      price: 2499,
      originalPrice: 2999,
      rating: 4.8,
      reviews: 324,
      image: 'pcosBalanceKit.jpeg',
      badges: ['Best Seller', 'Lab Tested'],
      ingredients: ['Spearmint', 'Inositol', 'Cinnamon', 'Fenugreek'],
      benefits: ['Regulates cycles', 'Reduces inflammation', 'Supports metabolism']
    },
    {
      id: 2,
      name: 'Perimenopause Support',
      category: 'perimenopause',
      description: 'Natural relief for hot flashes, mood swings, and sleep issues',
      price: 2799,
      originalPrice: 3299,
      rating: 4.9,
      reviews: 198,
      image: 'PerimenopauseSupport.jpeg',
      badges: ['New', 'Doctor Recommended'],
      ingredients: ['Black Cohosh', 'Red Clover', 'Ashwagandha', 'Shatavari'],
      benefits: ['Reduces hot flashes', 'Improves sleep', 'Mood support']
    },
    {
      id: 3,
      name: 'Hormone Harmony Blend',
      category: 'pcos',
      description: 'Advanced formula for comprehensive hormonal support',
      price: 3199,
      originalPrice: 3699,
      rating: 4.7,
      reviews: 156,
      image: 'HormoneHarmonyBlend.jpeg',
      badges: ['Premium'],
      ingredients: ['Vitex', 'DIM', 'Turmeric', 'Zinc'],
      benefits: ['Balances hormones', 'Reduces acne', 'Supports fertility']
    },
    {
      id: 4,
      name: 'Energy & Vitality Boost',
      category: 'wellness',
      description: 'Combat fatigue and boost natural energy levels',
      price: 2299,
      originalPrice: 2699,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      badges: ['Organic'],
      ingredients: ['Rhodiola', 'Ginseng', 'B-Complex', 'Iron'],
      benefits: ['Increases energy', 'Reduces fatigue', 'Improves focus']
    },
    {
      id: 5,
      name: 'Sleep & Stress Relief',
      category: 'perimenopause',
      description: 'Promote restful sleep and manage stress naturally',
      price: 2199,
      originalPrice: 2599,
      rating: 4.8,
      reviews: 267,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      badges: ['Bestseller'],
      ingredients: ['Melatonin', 'Chamomile', 'Magnesium', 'L-Theanine'],
      benefits: ['Better sleep', 'Stress relief', 'Relaxation']
    },
    {
      id: 6,
      name: 'Wellness Starter Kit',
      category: 'wellness',
      description: 'Complete 30-day wellness journey with multiple supplements',
      price: 4999,
      originalPrice: 6499,
      rating: 4.9,
      reviews: 445,
      image: 'WellnessStarterKit.jpeg',
      badges: ['Value Pack', 'Most Popular'],
      ingredients: ['Multi-vitamin', 'Omega-3', 'Probiotics', 'Antioxidants'],
      benefits: ['Complete nutrition', 'Immune support', 'Overall wellness']
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop Wellness Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover science-backed, plant-based solutions for your wellness journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
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

              {/* Sort */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            badge === 'Best Seller' || badge === 'Bestseller'
                              ? 'bg-purple-600 text-white'
                              : badge === 'New'
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-900 text-white'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    {product.originalPrice > product.price && (
                      <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Save ₹{product.originalPrice - product.price}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <span
                            key={index}
                            className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-purple-600">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="ml-2 text-lg text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex-1 bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;