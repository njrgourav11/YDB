import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Download, ExternalLink, Calendar, Users, Clock } from 'lucide-react';
import { ResearchSkeleton } from '../components/Skeleton';

interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: string;
  participants: number;
  duration: string;
  keyFinding: string;
  status: 'Published' | 'In Review' | 'Draft';
  downloadUrl: string;
  abstract: string;
  authors: string;
  category: string;
  createdAt: any;
}

const ResearchPapers = () => {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const q = query(collection(db, 'research-papers'), orderBy('year', 'desc'));
      const querySnapshot = await getDocs(q);
      const papersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ResearchPaper[];
      setPapers(papersData);
    } catch (error) {
      console.error('Error fetching papers:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(papers.map(p => p.category).filter(Boolean)))];
  const statuses = ['all', 'Published', 'In Review', 'Draft'];

  const filteredPapers = papers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || paper.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Research Papers & Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Peer-reviewed research validating our formulations and approach to women's health.
            Explore our published studies and ongoing research initiatives.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Statuses' : status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Papers List */}
        {loading ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <ResearchSkeleton key={i} />
            ))}
          </div>
        ) : filteredPapers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No papers found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mr-4">{paper.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        paper.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : paper.status === 'In Review'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {paper.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{paper.journal}</span> • {paper.year}
                      </div>
                      {paper.authors && (
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{paper.authors}</span>
                        </div>
                      )}
                    </div>

                    {paper.abstract && (
                      <p className="text-gray-700 mb-4 leading-relaxed">{paper.abstract}</p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-gray-500">Participants</span>
                        <div className="font-semibold text-gray-900">{paper.participants}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-gray-500">Duration</span>
                        <div className="font-semibold text-gray-900">{paper.duration}</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <span className="text-sm text-purple-600">Key Finding</span>
                        <div className="font-semibold text-purple-700">{paper.keyFinding}</div>
                      </div>
                    </div>

                    {paper.category && (
                      <div className="mb-4">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {paper.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 lg:ml-6">
                    {paper.downloadUrl && (
                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    )}
                    <button className="flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Journal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Research Impact</h2>
            <p className="text-purple-100">Our commitment to evidence-based women's health solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{papers.filter(p => p.status === 'Published').length}</div>
              <div className="text-purple-100">Published Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{papers.filter(p => p.status === 'In Review').length}</div>
              <div className="text-purple-100">Under Review</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {papers.reduce((sum, p) => sum + (p.participants || 0), 0).toLocaleString()}
              </div>
              <div className="text-purple-100">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-purple-100">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;