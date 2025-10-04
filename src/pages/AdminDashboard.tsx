import  { useState } from 'react';
import { FileText, BookOpen, BarChart3, HelpCircle, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import BlogManager from '../components/admin/BlogManager';
import ResearchManager from '../components/admin/ResearchManager';
import ScienceContentManager from '../components/admin/ScienceContentManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const tabs = [
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
    { id: 'research', label: 'Research Papers', icon: BookOpen },
    { id: 'science', label: 'Science Content', icon: BarChart3 },
    { id: 'instructions', label: 'Instructions', icon: HelpCircle },
  ];

  const getInitials = (email: string) => {
    return email.split('@')[0].substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                  <p className="text-slate-400 text-sm">Content Management</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${
                    activeTab === tab.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`} />
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* User Info & Logout */}
          <div className="p-4 border-t border-slate-700">
            <div className="bg-slate-800 rounded-xl p-4 mb-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {currentUser?.email ? getInitials(currentUser.email) : 'AD'}
                  </span>
                </div>
                <div className="ml-3 min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {currentUser?.email?.split('@')[0] || 'Admin'}
                  </p>
                  <p className="text-xs text-slate-400">Administrator</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-0">
        {/* Mobile Header */}
        <header className="md:hidden bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg border-b border-slate-700 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>

          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {currentUser?.email ? getInitials(currentUser.email) : 'AD'}
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <p className="text-slate-600 text-sm md:text-base">
                Manage your content and settings
              </p>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200">
              <div className="p-4 md:p-6">
                {activeTab === 'blogs' && <BlogManager />}
                {activeTab === 'research' && <ResearchManager />}
                {activeTab === 'science' && <ScienceContentManager />}
                {activeTab === 'instructions' && (
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                          <FileText className="w-6 h-6 mr-2" />
                          Blog Posts Management
                        </h3>
                        <div className="space-y-3 text-slate-700">
                          <p><strong>Create:</strong> Add new blog posts with title, content, author, and category</p>
                          <p><strong>Affects:</strong> Blog page (/blog) - displays all published posts</p>
                          <p><strong>Features:</strong> Draft/Published status, categories (PCOS, Perimenopause, Wellness, etc.)</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                          <BookOpen className="w-6 h-6 mr-2" />
                          Research Papers Management
                        </h3>
                        <div className="space-y-3 text-slate-700">
                          <p><strong>Create:</strong> Add research papers with journal info, participants, findings</p>
                          <p><strong>Affects:</strong> Science page (/science) Clinical Studies section & Research Papers page (/research-papers)</p>
                          <p><strong>Features:</strong> PDF upload, status tracking (Draft/In Review/Published), download links</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                          <BarChart3 className="w-6 h-6 mr-2" />
                          Science Content Management
                        </h3>
                        <div className="space-y-3 text-slate-700">
                          <p><strong>Research Areas:</strong> Manage focus areas with study counts and participant numbers</p>
                          <p><strong>Team Members:</strong> Add researcher profiles with credentials and photos</p>
                          <p><strong>Affects:</strong> Science page (/science) - Research Focus and Research Team sections</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">Quick Tips</h3>
                        <ul className="space-y-2 text-slate-700 list-disc list-inside">
                          <li>Always preview content before publishing</li>
                          <li>Use high-quality images for better engagement</li>
                          <li>Keep research paper abstracts concise but informative</li>
                          <li>Update team member photos regularly</li>
                          <li>Organize content with proper categories</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;