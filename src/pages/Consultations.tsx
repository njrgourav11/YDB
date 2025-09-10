import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone, MessageSquare, Star, Award, CheckCircle } from 'lucide-react';

const Consultations = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const experts = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialization: 'PCOS & Reproductive Health',
      credentials: 'MD, PhD in Reproductive Endocrinology',
      experience: '15+ years',
      rating: 4.9,
      reviews: 324,
      languages: ['English', 'Hindi'],
      consultationFee: 1500,
      image: 'review1.webp',
      availability: 'Available today',
      expertise: ['PCOS Management', 'Fertility Planning', 'Hormonal Imbalance', 'Lifestyle Counseling']
    },
    {
      id: 2,
      name: 'Dr. Anjali Patel',
      specialization: 'Perimenopause & Ayurveda',
      credentials: 'BAMS, MD in Ayurveda',
      experience: '12+ years',
      rating: 4.8,
      reviews: 198,
      languages: ['English', 'Hindi', 'Gujarati'],
      consultationFee: 1200,
      image: 'review2.jpg',
      availability: 'Available tomorrow',
      expertise: ['Perimenopause Support', 'Ayurvedic Medicine', 'Stress Management', 'Natural Remedies']
    },
    {
      id: 3,
      name: 'Dr. Meera Reddy',
      specialization: 'Women\'s Wellness & Nutrition',
      credentials: 'MD, Certified Nutritionist',
      experience: '10+ years',
      rating: 4.9,
      reviews: 267,
      languages: ['English', 'Telugu', 'Tamil'],
      consultationFee: 1300,
      image: 'review3.jpg',
      availability: 'Available today',
      expertise: ['Nutritional Counseling', 'Weight Management', 'Metabolic Health', 'Supplement Guidance']
    }
  ];

  const programs = [
    {
      id: 1,
      name: 'PCOS Transformation Program',
      duration: '12 weeks',
      price: 15999,
      originalPrice: 19999,
      description: 'Comprehensive program combining medical guidance, nutrition planning, and lifestyle coaching',
      features: [
        '4 one-on-one consultations',
        'Personalized meal plans',
        'Exercise routines',
        'Supplement recommendations',
        '24/7 chat support',
        'Progress tracking tools'
      ],
      suitable: 'Women with PCOS seeking comprehensive lifestyle transformation'
    },
    {
      id: 2,
      name: 'Perimenopause Support Program',
      duration: '8 weeks',
      price: 12999,
      originalPrice: 15999,
      description: 'Navigate perimenopause with confidence through expert guidance and natural solutions',
      features: [
        '3 expert consultations',
        'Symptom management strategies',
        'Natural remedy protocols',
        'Stress management techniques',
        'Community support access',
        'Resource library'
      ],
      suitable: 'Women experiencing perimenopause symptoms'
    },
    {
      id: 3,
      name: 'Wellness Kickstart Program',
      duration: '4 weeks',
      price: 7999,
      originalPrice: 9999,
      description: 'Perfect introduction to holistic wellness with expert guidance',
      features: [
        '2 consultation sessions',
        'Basic health assessment',
        'Starter meal plans',
        'Wellness tracking tools',
        'Educational resources',
        'Email support'
      ],
      suitable: 'Women new to wellness journey or seeking general health improvement'
    }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Consultations & Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get personalized guidance from certified experts in women's health, 
            Ayurveda, and wellness. Book one-on-one consultations or join comprehensive programs.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Video className="w-5 h-5 text-purple-600 mr-2" />
              <span>Video Consultations</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-purple-600 mr-2" />
              <span>Certified Experts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span>Personalized Plans</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Expert Consultations */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Book Expert Consultations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with certified healthcare professionals specializing in women's wellness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                      <p className="text-purple-600 font-medium">{expert.specialization}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{expert.credentials}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{expert.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                      <span>{expert.rating} ({expert.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                      {expert.expertise.length > 2 && (
                        <span className="text-gray-500 text-sm">+{expert.expertise.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₹{expert.consultationFee}</span>
                      <span className="text-gray-600 text-sm ml-1">/session</span>
                    </div>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {expert.availability}
                    </span>
                  </div>

                  <button 
                    onClick={() => setSelectedExpert(expert)}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wellness Programs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Wellness Programs
            </h2>
            <p className="text-xl text-gray-600">
              Structured programs combining consultations, lifestyle plans, and ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-bold text-purple-600">₹{program.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">₹{program.originalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{program.duration} program</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-sm text-gray-700">{program.suitable}</p>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Consultations Work
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and effective - get the support you need from anywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Book Your Session',
                description: 'Choose your expert and preferred time slot',
                icon: Calendar
              },
              {
                step: 2,
                title: 'Complete Assessment',
                description: 'Fill out a brief health questionnaire',
                icon: CheckCircle
              },
              {
                step: 3,
                title: 'Join Video Call',
                description: 'Connect securely with your chosen expert',
                icon: Video
              },
              {
                step: 4,
                title: 'Get Your Plan',
                description: 'Receive personalized recommendations',
                icon: Award
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Booking Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Consultation with {selectedExpert.name}
                </h3>
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Choose time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Consultation Details</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>Video call</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee:</span>
                    <span className="font-semibold">₹{selectedExpert.consultationFee}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultations;