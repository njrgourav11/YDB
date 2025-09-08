import React from 'react';
import { Microscope, FlaskConical, Award, Users, Download, ExternalLink } from 'lucide-react';

const Science = () => {
  const researchAreas = [
    {
      title: 'PCOS Research',
      description: 'Understanding the complex hormonal pathways and developing targeted interventions',
      studies: 15,
      participants: 2400,
      icon: Microscope,
      color: 'purple'
    },
    {
      title: 'Perimenopause Studies',
      description: 'Investigating natural approaches to manage transition symptoms effectively',
      studies: 8,
      participants: 1200,
      icon: FlaskConical,
      color: 'purple'
    },
    {
      title: 'Ayurvedic Integration',
      description: 'Bridging ancient wisdom with modern scientific validation',
      studies: 12,
      participants: 1800,
      icon: Award,
      color: 'blue'
    }
  ];

  const clinicalStudies = [
    {
      title: 'Spearmint Extract in PCOS Management',
      journal: 'Journal of Women\'s Health',
      year: '2023',
      participants: 120,
      duration: '12 weeks',
      keyFinding: '41% reduction in free testosterone levels',
      status: 'Published',
      downloadUrl: '#'
    },
    {
      title: 'Inositol Supplementation for Ovulation',
      journal: 'Reproductive Sciences',
      year: '2023',
      participants: 200,
      duration: '16 weeks',
      keyFinding: '62% improvement in ovulation rates',
      status: 'Published',
      downloadUrl: '#'
    },
    {
      title: 'Cinnamon Extract and Insulin Sensitivity',
      journal: 'Metabolism & Diabetes',
      year: '2024',
      participants: 150,
      duration: '8 weeks',
      keyFinding: 'Significant improvement in insulin sensitivity',
      status: 'In Review',
      downloadUrl: null
    },
    {
      title: 'Ashwagandha in Perimenopause Symptoms',
      journal: 'Menopause International',
      year: '2024',
      participants: 180,
      duration: '12 weeks',
      keyFinding: '45% reduction in hot flash frequency',
      status: 'Published',
      downloadUrl: '#'
    }
  ];

  const labProcess = [
    {
      step: 1,
      title: 'Raw Material Testing',
      description: 'Every ingredient undergoes rigorous purity and potency testing before formulation'
    },
    {
      step: 2,
      title: 'Formulation Development',
      description: 'Our scientists create optimal blends based on clinical research and Ayurvedic principles'
    },
    {
      step: 3,
      title: 'Stability Testing',
      description: 'Products are tested under various conditions to ensure consistent quality and efficacy'
    },
    {
      step: 4,
      title: 'Third-Party Verification',
      description: 'Independent labs verify our claims and test for contaminants and heavy metals'
    },
    {
      step: 5,
      title: 'Continuous Monitoring',
      description: 'Ongoing quality checks throughout production and post-market surveillance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Science & Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Where ancient Ayurvedic wisdom meets cutting-edge research. 
            Every product is backed by rigorous clinical studies and laboratory testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              View Research Papers
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Lab Tour Video
            </button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Research Focus
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated research teams working on breakthrough solutions for women's health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${area.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <area.icon className={`w-8 h-8 text-${area.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{area.studies}</div>
                    <div className="text-sm text-gray-600">Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{area.participants.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Published Clinical Studies
            </h2>
            <p className="text-xl text-gray-600">
              Peer-reviewed research validating our formulations and approach
            </p>
          </div>

          <div className="space-y-6">
            {clinicalStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-4">{study.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        study.status === 'Published' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">{study.journal}</span> • {study.year}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Participants</span>
                        <div className="font-semibold text-gray-900">{study.participants}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Duration</span>
                        <div className="font-semibold text-gray-900">{study.duration}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Key Finding</span>
                        <div className="font-semibold text-purple-600">{study.keyFinding}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    {study.downloadUrl && (
                      <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </button>
                    )}
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Journal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Lab & R&D Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to consumer: How we ensure the highest quality and efficacy
            </p>
          </div>

          <div className="space-y-8">
            {labProcess.map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-8">
                  {process.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Research Team
            </h2>
            <p className="text-xl text-gray-600">
              Leading experts in women's health, Ayurveda, and clinical research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Priya Sharma',
                role: 'Chief Scientific Officer',
                credentials: 'PhD in Reproductive Endocrinology',
                image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
              },
              {
                name: 'Dr. Anjali Patel',
                role: 'Head of Ayurvedic Research',
                credentials: 'BAMS, MD in Ayurveda',
                image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
              },
              {
                name: 'Dr. Meera Reddy',
                role: 'Clinical Research Director',
                credentials: 'MD, Clinical Research Specialist',
                image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with Our Research
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Interested in collaborating on women's health research? 
            We welcome partnerships with academic institutions and healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Research Partnerships
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Clinical Trial Participation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;