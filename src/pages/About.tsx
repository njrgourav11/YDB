import React from 'react';
import { Heart, Target, Users, Award, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      description: 'We understand the unique challenges women face and approach every interaction with genuine care and understanding.'
    },
    {
      icon: Target,
      title: 'Science-Backed',
      description: 'Every product and recommendation is grounded in rigorous research, clinical studies, and evidence-based practices.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of shared experiences and create spaces for women to support each other.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in sourcing, formulation, and manufacturing of all our products.'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      background: 'Former McKinsey consultant with personal PCOS journey',
      image: 'review1.webp',
      story: 'After struggling with PCOS for years and finding limited solutions, Priya founded YDB to create the support system she wished she had.'
    },
    {
      name: 'Dr. Anjali Patel',
      role: 'Chief Medical Officer',
      background: 'BAMS, MD in Ayurveda, 15+ years experience',
      image: 'review2.jpg',
      story: 'Dr. Patel bridges ancient Ayurvedic wisdom with modern medical practices, ensuring our formulations are both traditional and scientifically sound.'
    },
    {
      name: 'Meera Reddy',
      role: 'Head of Community',
      background: 'Psychology background, community building expert',
      image: 'review3.jpg',
      story: 'Meera creates safe spaces for women to share their journeys, ensuring every voice is heard and supported in our community.'
    },
    {
      name: 'Dr. Kavya Singh',
      role: 'Head of Research',
      background: 'PhD in Reproductive Biology, Clinical Research',
      image: 'review4.jpg',
      story: 'Dr. Singh leads our research initiatives, ensuring every product is backed by solid scientific evidence and clinical validation.'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Sunita Verma',
      role: 'Senior Gynecologist',
      credentials: 'MD, 25+ years experience',
      hospital: 'Apollo Hospitals'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Endocrinologist',
      credentials: 'DM Endocrinology',
      hospital: 'AIIMS Delhi'
    },
    {
      name: 'Dr. Lakshmi Nair',
      role: 'Ayurveda Expert',
      credentials: 'BAMS, PhD',
      hospital: 'Kerala Ayurveda'
    }
  ];

  const milestones = [
    { year: '2022', event: 'YDB founded with a vision to transform women\'s wellness' },
    { year: '2022', event: 'First PCOS formula launched after 18 months of research' },
    { year: '2023', event: 'Reached 10,000 women in our community' },
    { year: '2023', event: 'Launched perimenopause support line' },
    { year: '2024', event: 'Expanded to 50,000+ community members' },
    { year: '2024', event: 'Opened state-of-the-art research facility' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About YouDeserveBetter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize women's wellness by combining ancient Ayurvedic wisdom 
              with cutting-edge science, creating a supportive community where every woman can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  YouDeserveBetter was born from a deeply personal journey. Our founder, Priya, spent years 
                  struggling with PCOS, navigating a healthcare system that offered limited solutions and 
                  little understanding of the unique challenges women face.
                </p>
                <p>
                  Frustrated by generic treatments and one-size-fits-all approaches, she embarked on a mission 
                  to create something different - a brand that truly understands women's health, combines the 
                  best of traditional and modern medicine, and builds a community of support.
                </p>
                <p>
                  Today, YDB stands as a testament to what's possible when science meets empathy, 
                  tradition meets innovation, and women support women.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="story.jpg"
                alt="Women supporting each other"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50K+</div>
                  <div className="text-sm text-gray-600">Women Empowered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower women to take control of their health through personalized, science-backed, 
                and naturally-derived solutions. We bridge the gap between ancient Ayurvedic wisdom and 
                modern medical research to create products that truly work for women's unique needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every woman has access to personalized, effective wellness solutions and 
                a supportive community. We envision a future where women's health is understood, 
                prioritized, and addressed with the care and attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to transforming women's wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.background}</p>
                    <p className="text-gray-700 text-sm italic">"{member.story}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medical Advisory Board
            </h2>
            <p className="text-xl text-gray-600">
              Leading healthcare professionals guiding our medical approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-emerald-600 font-semibold mb-1">{advisor.role}</p>
                <p className="text-gray-600 text-sm mb-2">{advisor.credentials}</p>
                <p className="text-gray-500 text-sm">{advisor.hospital}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform women's wellness
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-gray-800">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              The difference we're making in women's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Women Supported' },
              { number: '2,341', label: 'Success Stories' },
              { number: '15+', label: 'Clinical Studies' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking to transform your health, join our community, 
            or partner with us, we'd love to have you on this journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;