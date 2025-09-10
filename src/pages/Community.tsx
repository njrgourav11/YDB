import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Users, Calendar, Award, Search, Filter } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('stories');

  const stories = [
    {
      id: 1,
      author: 'Priya S.',
      condition: 'PCOS',
      title: 'My 6-month transformation journey',
      excerpt: 'From irregular cycles to balanced hormones - here\'s how YDB changed my life...',
      image: 'beforeAndAfter.webp',
      likes: 234,
      comments: 45,
      timeAgo: '2 days ago',
      verified: true
    },
    {
      id: 2,
      author: 'Anjali M.',
      condition: 'Perimenopause',
      title: 'Finding peace during perimenopause',
      excerpt: 'Hot flashes were controlling my life until I discovered this natural approach...',
      image: 'findingpeace.jpeg',
      likes: 189,
      comments: 32,
      timeAgo: '4 days ago',
      verified: true
    },
    {
      id: 3,
      author: 'Meera R.',
      condition: 'PCOS',
      title: 'Weight loss success with PCOS',
      excerpt: 'Lost 15kg naturally while managing PCOS symptoms. Here\'s my complete story...',
      image: 'weightloss.jpg',
      likes: 456,
      comments: 78,
      timeAgo: '1 week ago',
      verified: true
    }
  ];

  const forumTopics = [
    {
      id: 1,
      title: 'Best diet tips for PCOS management?',
      author: 'Sarah K.',
      replies: 23,
      lastActivity: '2 hours ago',
      category: 'PCOS',
      pinned: true
    },
    {
      id: 2,
      title: 'Natural remedies for hot flashes',
      author: 'Lisa P.',
      replies: 18,
      lastActivity: '4 hours ago',
      category: 'Perimenopause',
      pinned: false
    },
    {
      id: 3,
      title: 'Exercise routines that actually work',
      author: 'Maya S.',
      replies: 34,
      lastActivity: '6 hours ago',
      category: 'General',
      pinned: false
    },
    {
      id: 4,
      title: 'Dealing with mood swings - your tips?',
      author: 'Riya T.',
      replies: 15,
      lastActivity: '8 hours ago',
      category: 'Mental Health',
      pinned: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'PCOS Nutrition Workshop',
      date: 'March 15, 2024',
      time: '7:00 PM IST',
      expert: 'Dr. Priya Sharma',
      attendees: 156,
      type: 'Workshop'
    },
    {
      id: 2,
      title: 'Perimenopause Support Group',
      date: 'March 18, 2024',
      time: '6:30 PM IST',
      expert: 'Dr. Anjali Patel',
      attendees: 89,
      type: 'Support Group'
    },
    {
      id: 3,
      title: 'Ask Me Anything: Hormonal Health',
      date: 'March 22, 2024',
      time: '8:00 PM IST',
      expert: 'Dr. Meera Reddy',
      attendees: 234,
      type: 'AMA'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Community Champion', description: 'Helped 50+ women in forums' },
    { icon: '💪', title: 'Transformation Star', description: 'Shared inspiring journey' },
    { icon: '🌟', title: 'Wellness Warrior', description: '6 months consistent tracking' },
    { icon: '❤️', title: 'Support Angel', description: 'Most helpful community member' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Community Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with thousands of women on similar wellness journeys. 
            Share experiences, get support, and celebrate victories together.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-emerald-600 mr-2" />
              <span>50K+ Members</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-purple-600 mr-2" />
              <span>1K+ Daily Conversations</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <span>Safe & Supportive</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'stories', label: 'Success Stories', count: '2.3K' },
              { id: 'forum', label: 'Community Forum', count: '856' },
              { id: 'events', label: 'Events & AMAs', count: '12' },
              { id: 'resources', label: 'Resources', count: '145' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'stories' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Women's Wall of Stories</h2>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Share Your Story
                  </button>
                </div>
                
                <div className="space-y-6">
                  {stories.map((story) => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center mb-3">
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-900">{story.author}</span>
                              {story.verified && (
                                <Award className="w-4 h-4 text-emerald-600 ml-2" />
                              )}
                            </div>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                              {story.condition}
                            </span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-gray-500 text-sm">{story.timeAgo}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                          <p className="text-gray-600 mb-4">{story.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                              <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                                <Heart className="w-5 h-5 mr-1" />
                                <span>{story.likes}</span>
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
                                <MessageCircle className="w-5 h-5 mr-1" />
                                <span>{story.comments}</span>
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors">
                                <Share2 className="w-5 h-5 mr-1" />
                                <span>Share</span>
                              </button>
                            </div>
                            <button className="text-emerald-600 font-medium hover:text-emerald-700">
                              Read Full Story
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'forum' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Community Discussions</h2>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Start Discussion
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search discussions..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Filter className="w-5 h-5 mr-2" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {forumTopics.map((topic) => (
                    <div key={topic.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {topic.pinned && (
                              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium mr-3">
                                Pinned
                              </span>
                            )}
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                              {topic.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 cursor-pointer">
                            {topic.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>Started by {topic.author}</span>
                            <span className="mx-2">•</span>
                            <span>{topic.replies} replies</span>
                            <span className="mx-2">•</span>
                            <span>Last activity {topic.lastActivity}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-600">{topic.replies}</div>
                          <div className="text-sm text-gray-500">replies</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    View Calendar
                  </button>
                </div>

                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              event.type === 'Workshop' 
                                ? 'bg-emerald-100 text-emerald-700'
                                : event.type === 'AMA'
                                ? 'bg-purple-100 text-purple-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex items-center text-gray-600 mb-4">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
                            <Users className="w-5 h-5 mr-2" />
                            <span>With {event.expert} • {event.attendees} attending</span>
                          </div>
                        </div>
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                          Join Event
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'PCOS Diet Guide', type: 'PDF', downloads: '2.3K' },
                    { title: 'Perimenopause Symptom Tracker', type: 'Template', downloads: '1.8K' },
                    { title: 'Meditation for Hormonal Balance', type: 'Audio', downloads: '3.1K' },
                    { title: 'Exercise Routines for PCOS', type: 'Video', downloads: '2.7K' }
                  ].map((resource, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{resource.type} • {resource.downloads} downloads</span>
                        <button className="text-emerald-600 font-medium hover:text-emerald-700">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Community Stats */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Members</span>
                    <span className="font-semibold text-emerald-600">50,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Today</span>
                    <span className="font-semibold text-purple-600">2,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-semibold text-blue-600">2,341</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expert Sessions</span>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Badges</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Share Your Story
                  </button>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Ask a Question
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                    Browse Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;