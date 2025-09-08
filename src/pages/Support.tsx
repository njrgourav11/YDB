import React, { useState } from 'react';
import { Search, Package, RefreshCw, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, Truck } from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('help');
  const [trackingId, setTrackingId] = useState('');

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'We offer free shipping across India with delivery in 3-5 business days for most locations. Metro cities typically receive orders within 2-3 days.'
        },
        {
          q: 'Can I track my order?',
          a: 'Yes! Once your order ships, you\'ll receive a tracking number via email and SMS. You can also track your order in the "Track Order" section above.'
        },
        {
          q: 'What if my order is damaged or incorrect?',
          a: 'We\'re sorry this happened! Please contact us within 48 hours of delivery with photos of the issue, and we\'ll send a replacement immediately.'
        }
      ]
    },
    {
      category: 'Products & Usage',
      questions: [
        {
          q: 'How long before I see results?',
          a: 'Most customers notice initial improvements within 2-4 weeks, with significant results typically seen by 8-12 weeks of consistent use. Individual results may vary.'
        },
        {
          q: 'Are your products safe during pregnancy?',
          a: 'Please consult with your healthcare provider before taking any supplements during pregnancy or while breastfeeding. We recommend discussing our ingredient list with your doctor.'
        },
        {
          q: 'Can I take multiple YDB products together?',
          a: 'Our products are designed to work synergistically. However, we recommend starting with one product and consulting our experts for personalized combinations.'
        }
      ]
    },
    {
      category: 'Subscriptions',
      questions: [
        {
          q: 'How do I pause or cancel my subscription?',
          a: 'You can easily manage your subscription in your account dashboard. Click "Manage Subscription" to pause, skip, or cancel anytime - no questions asked!'
        },
        {
          q: 'When will I be charged for my subscription?',
          a: 'You\'ll be charged on the same date each month/quarter based on your subscription frequency. You\'ll receive a reminder email 3 days before each charge.'
        },
        {
          q: 'Can I change my subscription frequency?',
          a: 'Absolutely! You can switch between monthly and quarterly subscriptions anytime in your account settings.'
        }
      ]
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, return the unused portion for a full refund - no questions asked.'
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our support team or use the "Return Request" form in your account. We\'ll provide a prepaid return label and process your refund within 5-7 business days.'
        },
        {
          q: 'Do I need to return opened products?',
          a: 'No! We understand you need to try our products. You can return even opened products within 30 days for a full refund.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our wellness experts',
      availability: 'Available 9 AM - 9 PM IST',
      action: 'Start Chat',
      color: 'purple'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: '+91 98765 43210',
      action: 'Call Now',
      color: 'purple'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions anytime',
      availability: 'hello@youdeservebetter.com',
      action: 'Send Email',
      color: 'blue'
    }
  ];

  const orderStatuses = [
    { status: 'Order Confirmed', icon: CheckCircle, color: 'purple', completed: true },
    { status: 'Processing', icon: Clock, color: 'yellow', completed: true },
    { status: 'Shipped', icon: Truck, color: 'blue', completed: true },
    { status: 'Out for Delivery', icon: Truck, color: 'purple', completed: false },
    { status: 'Delivered', icon: CheckCircle, color: 'purple', completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're here to support your wellness journey every step of the way. 
            Find answers, track orders, or get in touch with our expert team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, order tracking, returns..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'help', label: 'Help Center', icon: MessageCircle },
              { id: 'track', label: 'Track Order', icon: Package },
              { id: 'returns', label: 'Returns & Refunds', icon: RefreshCw },
              { id: 'contact', label: 'Contact Us', icon: Phone }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'help' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find quick answers to common questions</p>
            </div>

            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-50 px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'track' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h2>
              <p className="text-xl text-gray-600">Enter your order ID or tracking number to see the latest updates</p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter Order ID (e.g., YDB123456)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Track Order
                  </button>
                </div>
              </div>
            </div>

            {/* Sample Order Tracking */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Order #YDB123456</h3>
                    <p className="text-gray-600">Placed on March 10, 2024</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-purple-600">Shipped</div>
                    <div className="text-sm text-gray-600">Expected delivery: March 15</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {orderStatuses.map((status, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        status.completed 
                          ? `bg-${status.color}-100` 
                          : 'bg-gray-100'
                      }`}>
                        <status.icon className={`w-5 h-5 ${
                          status.completed 
                            ? `text-${status.color}-600` 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          status.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {status.status}
                        </div>
                        {status.completed && (
                          <div className="text-sm text-gray-600">
                            {index === 0 && 'March 10, 2024 at 2:30 PM'}
                            {index === 1 && 'March 11, 2024 at 10:15 AM'}
                            {index === 2 && 'March 12, 2024 at 4:45 PM'}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'returns' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Returns & Refunds</h2>
              <p className="text-xl text-gray-600">Easy returns with our 30-day money-back guarantee</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Return Policy</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    No questions asked returns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    Free return shipping
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    Refund processed in 5-7 days
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Return</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Contact our support team or use your account dashboard
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Receive prepaid return shipping label
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Pack items and drop off at any courier location
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Receive refund confirmation within 5-7 days
                  </li>
                </ol>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Return Request
              </button>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Our wellness experts are here to help you succeed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className={`w-8 h-8 text-${method.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.availability}</p>
                  <button className={`bg-${method.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${method.color}-700 transition-colors`}>
                    {method.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Order Issue</option>
                      <option>Subscription Help</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;