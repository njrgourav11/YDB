import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Shield, Award, Truck, RefreshCw, Heart, ShoppingCart, Download, Play, CheckCircle } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState('one-time');

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'PCOS Balance Formula',
    description: 'Clinically proven blend for hormonal balance and cycle regulation',
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 324,
    images: [
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badges: ['Best Seller', 'Lab Tested', 'Doctor Endorsed'],
    keyBenefits: [
      'Regulates menstrual cycles',
      'Reduces inflammation',
      'Supports healthy metabolism',
      'Balances hormones naturally'
    ],
    ingredients: [
      {
        name: 'Spearmint Extract',
        amount: '400mg',
        ayurveda: 'Known as "Pudina" in Ayurveda, traditionally used for digestive health and hormonal balance',
        clinical: 'Studies show 41% reduction in free testosterone levels in women with PCOS'
      },
      {
        name: 'Myo-Inositol',
        amount: '2000mg',
        ayurveda: 'Supports cellular energy and metabolic processes',
        clinical: 'Clinically proven to improve insulin sensitivity and ovulation rates'
      },
      {
        name: 'Cinnamon Extract',
        amount: '500mg',
        ayurveda: 'Called "Dalchini", used for centuries to support metabolism and circulation',
        clinical: 'Reduces insulin resistance and improves glucose metabolism'
      },
      {
        name: 'Fenugreek Seed',
        amount: '300mg',
        ayurveda: 'Known as "Methi", traditionally used for hormonal balance and digestive health',
        clinical: 'Helps regulate blood sugar and supports healthy hormone levels'
      }
    ],
    timeline: [
      { week: '0-2', title: 'Getting Started', description: 'Your body begins adapting to the natural ingredients. You may notice improved digestion.' },
      { week: '3-4', title: 'Early Changes', description: 'Energy levels start to stabilize. Some women report better sleep quality.' },
      { week: '5-8', title: 'Visible Progress', description: 'Hormonal balance improves. Cycle regularity begins to normalize.' },
      { week: '9-12', title: 'Optimal Results', description: 'Full benefits realized. Sustained hormonal balance and improved overall wellness.' }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        rating: 5,
        text: 'After 3 months, my cycles are finally regular. This product changed my life!',
        verified: true,
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      {
        name: 'Anjali Patel',
        rating: 5,
        text: 'The natural approach really works. No side effects and great results.',
        verified: true,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      }
    ]
  };

  const subscriptionOptions = [
    { id: 'one-time', label: 'One-time purchase', price: product.price, savings: 0 },
    { id: 'monthly', label: 'Monthly subscription', price: Math.round(product.price * 0.9), savings: 10 },
    { id: 'quarterly', label: 'Quarterly subscription', price: Math.round(product.price * 0.85), savings: 15 }
  ];

  const selectedOption = subscriptionOptions.find(opt => opt.id === subscriptionType);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    badge === 'Best Seller'
                      ? 'bg-emerald-100 text-emerald-700'
                      : badge === 'Lab Tested'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Options */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Purchase Options</h3>
              <div className="space-y-3">
                {subscriptionOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      subscriptionType === option.id
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="subscription"
                        value={option.id}
                        checked={subscriptionType === option.id}
                        onChange={(e) => setSubscriptionType(e.target.value)}
                        className="sr-only"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        {option.savings > 0 && (
                          <div className="text-sm text-emerald-600">Save {option.savings}%</div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        ₹{option.price.toLocaleString()}
                      </div>
                      {option.savings > 0 && (
                        <div className="text-sm text-gray-500 line-through">
                          ₹{product.price.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ₹{(selectedOption!.price * quantity).toLocaleString()}
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {subscriptionType !== 'one-time' && (
                <p className="text-sm text-gray-600">
                  Cancel or pause anytime. No commitments, full control.
                </p>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                Lab Tested
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-5 h-5 text-emerald-600 mr-2" />
                Certified
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-5 h-5 text-emerald-600 mr-2" />
                Free Shipping
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-emerald-600 mr-2" />
                30-Day Return
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'ingredients', label: 'Ingredients' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'evidence', label: 'Evidence' },
              { id: 'reviews', label: 'Reviews' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  selectedTab === tab.id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {selectedTab === 'overview' && (
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h3>
              <p className="text-gray-700 mb-6">
                Our PCOS Balance Formula is a carefully crafted blend of traditional Ayurvedic herbs and clinically proven ingredients. 
                Each capsule contains therapeutic doses of natural compounds that work synergistically to support hormonal balance, 
                regulate menstrual cycles, and improve overall wellness in women with PCOS.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reduces excess androgen production</li>
                    <li>• Improves insulin sensitivity</li>
                    <li>• Supports healthy ovulation</li>
                    <li>• Reduces inflammation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommended For</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Irregular menstrual cycles</li>
                    <li>• Hormonal acne</li>
                    <li>• Weight management challenges</li>
                    <li>• Insulin resistance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ingredients' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ingredients Breakdown</h3>
              <div className="space-y-8">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{ingredient.name}</h4>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {ingredient.amount}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-purple-700 mb-2">Ayurvedic Wisdom</h5>
                        <p className="text-gray-700">{ingredient.ayurveda}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-emerald-700 mb-2">Clinical Evidence</h5>
                        <p className="text-gray-700">{ingredient.clinical}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'timeline' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your 12-Week Journey</h3>
              <div className="space-y-6">
                {product.timeline.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                      Week {phase.week}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h4>
                      <p className="text-gray-700">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'evidence' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scientific Evidence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Clinical Studies</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Download className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Spearmint Tea Study</p>
                        <p className="text-sm text-gray-600">41% reduction in free testosterone levels</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Download className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Inositol Research</p>
                        <p className="text-sm text-gray-600">Improved ovulation rates by 62%</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Download className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Cinnamon Extract Trial</p>
                        <p className="text-sm text-gray-600">Significant insulin sensitivity improvement</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Lab Reports</h4>
                  <p className="text-gray-700 mb-4">
                    All our products undergo rigorous third-party testing for purity, potency, and safety.
                  </p>
                  <button className="flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                    <Download className="w-5 h-5 mr-2" />
                    Download Lab Certificate
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {product.testimonials.map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      {review.verified && (
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;