import React from 'react';
import { TrendingUp, Users, Globe, Award, Target, BarChart3, DollarSign, Lightbulb } from 'lucide-react';

const Investors = () => {
  const marketStats = [
    { label: 'Global Women\'s Health Market', value: '$50.1B', growth: '+5.8% CAGR' },
    { label: 'PCOS Market Size', value: '$3.2B', growth: '+6.2% CAGR' },
    { label: 'Perimenopause Market', value: '$2.8B', growth: '+7.1% CAGR' },
    { label: 'Ayurveda Market', value: '$8.2B', growth: '+9.8% CAGR' }
  ];

  const traction = [
    { metric: 'Revenue Growth', value: '340%', period: 'YoY' },
    { metric: 'Customer Base', value: '50K+', period: 'Active Users' },
    { metric: 'Retention Rate', value: '89%', period: '12-month' },
    { metric: 'NPS Score', value: '72', period: 'Industry Leading' }
  ];

  const fundingRounds = [
    {
      round: 'Seed',
      amount: '$2M',
      date: 'Q2 2023',
      investors: ['Sequoia Capital India', 'Matrix Partners'],
      status: 'Completed'
    },
    {
      round: 'Series A',
      amount: '$8M',
      date: 'Q4 2023',
      investors: ['Accel Partners', 'Lightspeed Ventures'],
      status: 'Completed'
    },
    {
      round: 'Series B',
      amount: '$25M',
      date: 'Q2 2024',
      investors: ['Tiger Global', 'General Catalyst'],
      status: 'In Progress'
    }
  ];

  const keyMetrics = [
    { title: 'Monthly Recurring Revenue', value: '$1.2M', change: '+45%' },
    { title: 'Customer Acquisition Cost', value: '$28', change: '-23%' },
    { title: 'Lifetime Value', value: '$340', change: '+67%' },
    { title: 'Gross Margin', value: '78%', change: '+12%' }
  ];

  const competitiveAdvantages = [
    {
      title: 'Unique Positioning',
      description: 'Only brand combining Ayurveda + Science + Community for women\'s health',
      icon: Target
    },
    {
      title: 'Clinical Validation',
      description: '15+ published studies validating our formulations and approach',
      icon: Award
    },
    {
      title: 'Strong Community',
      description: '50K+ engaged community members with 89% retention rate',
      icon: Users
    },
    {
      title: 'Scalable Technology',
      description: 'AI-powered personalization and telemedicine platform',
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join us in revolutionizing women's wellness. We're building the future of 
              personalized healthcare with massive market opportunity and proven traction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Download Pitch Deck
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traction.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{item.value}</div>
                <div className="text-gray-900 font-semibold mb-1">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-gray-600">
              Positioned at the intersection of multiple high-growth markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
                <div className="text-emerald-600 text-sm font-semibold">{stat.growth}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Dynamics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Drivers</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rising awareness of women's health issues</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Increasing preference for natural solutions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Growing acceptance of telemedicine</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Underserved market with limited solutions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Addressable Market</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700">TAM (Total Addressable)</span>
                    <span className="font-bold text-emerald-600">$15.2B</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">SAM (Serviceable Addressable)</span>
                    <span className="font-bold text-purple-600">$3.8B</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">SOM (Serviceable Obtainable)</span>
                    <span className="font-bold text-blue-600">$380M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model & Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strong Unit Economics
            </h2>
            <p className="text-xl text-gray-600">
              Proven business model with healthy margins and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-700 font-medium mb-2">{metric.title}</div>
                <div className={`text-sm font-semibold ${
                  metric.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {metric.change} vs last quarter
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Streams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Product Sales</h4>
                <p className="text-gray-600 mb-3">Subscription-based supplement sales with high retention</p>
                <div className="text-2xl font-bold text-emerald-600">65%</div>
                <div className="text-sm text-gray-600">of total revenue</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultations</h4>
                <p className="text-gray-600 mb-3">Expert consultations and wellness programs</p>
                <div className="text-2xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-gray-600">of total revenue</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">B2B Partnerships</h4>
                <p className="text-gray-600 mb-3">Corporate wellness and healthcare partnerships</p>
                <div className="text-2xl font-bold text-blue-600">10%</div>
                <div className="text-sm text-gray-600">of total revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Competitive Advantages
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in the crowded wellness market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Funding History
            </h2>
            <p className="text-xl text-gray-600">
              Backed by leading investors who believe in our vision
            </p>
          </div>

          <div className="space-y-6">
            {fundingRounds.map((round, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">{round.round}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        round.status === 'Completed' 
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {round.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Amount Raised</span>
                        <div className="text-xl font-bold text-emerald-600">{round.amount}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Date</span>
                        <div className="text-lg font-semibold text-gray-900">{round.date}</div>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Lead Investors</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {round.investors.map((investor, idx) => (
                          <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            {investor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Growth Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Our roadmap to becoming the leading women's wellness platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Market Leadership in India',
                timeline: '2024-2025',
                goals: ['Reach 200K customers', 'Launch 10 new products', 'Expand to 5 cities']
              },
              {
                phase: 'Phase 2',
                title: 'International Expansion',
                timeline: '2025-2026',
                goals: ['Enter SEA markets', 'Localize products', 'Build regional partnerships']
              },
              {
                phase: 'Phase 3',
                title: 'Platform Expansion',
                timeline: '2026-2027',
                goals: ['Launch B2B solutions', 'AI-powered diagnostics', 'Marketplace model']
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-emerald-600 font-semibold">{phase.timeline}</p>
                </div>
                <ul className="space-y-2">
                  {phase.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with Us
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join us in building the future of women's wellness. 
            We're looking for strategic investors who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Investment Deck
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Schedule Investor Call
            </button>
          </div>
          <p className="text-emerald-100 text-sm mt-6">
            For partnership inquiries: investors@youdeservebetter.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Investors;