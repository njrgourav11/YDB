import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BlogSkeleton } from '../components/Skeleton';
import {
  Calendar,
  User,
  Clock,
  Search,
  TrendingUp,
  Heart,
  Plus,
  X,
  SlidersHorizontal,
  Tag as TagIcon,
} from 'lucide-react';
import { collection, getDocs, orderBy, query, addDoc, serverTimestamp, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/Toast';

// Helper to safely read Firestore Timestamp
const getTime = (item: any): number => {
  const t = item?.createdAt;
  // Firestore Timestamp
  if (t?.toDate) return t.toDate().getTime?.() ?? 0;
  if (typeof t?.seconds === 'number') return t.seconds * 1000;
  return 0;
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { currentUser } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    // Reset pagination when filters change
    setVisibleCount(8);
  }, [selectedCategory, searchTerm, sortBy]);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Dynamic categories from data
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => b?.category && set.add(String(b.category)));
    const ordered = Array.from(set).sort((a, b) => a.localeCompare(b));
    return [
      { id: 'all', name: 'All Articles', count: blogs.length },
      ...ordered.map((c) => ({ id: c, name: c, count: blogs.filter((b) => b.category === c).length })),
    ];
  }, [blogs]);

  // Featured article (still shows at top), but grid now includes ALL articles including the featured one
  const featuredArticle = blogs[0] || null;

  // Dynamic trending topics based on tags
  const trendingTopics = useMemo(() => {
    const counts: Record<string, number> = {};
    blogs.forEach((b) => {
      const t: string[] = Array.isArray(b?.tags) ? b.tags : [];
      t.forEach((tag) => {
        const key = String(tag).trim();
        if (!key) return;
        counts[key] = (counts[key] || 0) + 1;
      });
    });
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([t]) => t);

    return sorted.length
      ? sorted
      : ['PCOS', 'Nutrition', 'Ayurveda', 'Lifestyle', 'Perimenopause', 'Mental Health'];
  }, [blogs]);

  const filteredArticles = useMemo(() => {
    const list = blogs.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        article.title?.toLowerCase().includes(term) ||
        article.excerpt?.toLowerCase().includes(term) ||
        (Array.isArray(article.tags) && article.tags.some((t: string) => String(t).toLowerCase().includes(term)));
      return matchesCategory && matchesSearch;
    });

    const sorted = [...list].sort((a, b) => {
      if (sortBy === 'title') {
        return String(a.title || '').localeCompare(String(b.title || ''));
      }
      const ta = getTime(a);
      const tb = getTime(b);
      return sortBy === 'newest' ? tb - ta : ta - tb;
    });

    return sorted;
  }, [blogs, searchTerm, selectedCategory, sortBy]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const canLoadMore = visibleArticles.length < filteredArticles.length;

  const handleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const checkSubscription = async (emailToCheck: string) => {
    if (!emailToCheck) return false;
    try {
      const q = query(collection(db, 'newsletter'), where('email', '==', emailToCheck));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking subscription:', error);
      return false;
    }
  };

  const handleSubscribe = async () => {
    if (!email || subscribing) return;
    
    setSubscribing(true);
    try {
      const alreadySubscribed = await checkSubscription(email);
      if (alreadySubscribed) {
        showToast({ variant: 'info', title: 'Already subscribed', description: 'You already subscribed to our newsletter!' });
        setIsSubscribed(true);
        return;
      }
      
      await addDoc(collection(db, 'newsletter'), {
        email,
        subscribedAt: serverTimestamp(),
        status: 'active'
      });
      setEmail('');
      setIsSubscribed(true);
      showToast({ variant: 'success', title: 'Subscribed!', description: 'You have been added to our newsletter.' });
    } catch (error) {
      console.error('Error subscribing:', error);
      showToast({ variant: 'error', title: 'Subscription failed', description: 'Please try again later.' });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Wellness Resources & Insights
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                  Evidence-based articles, expert insights, and practical guides to support
                  your wellness journey. Written by healthcare professionals and wellness experts.
                </p>
              </div>
              {currentUser && (
                <Link
                  to="/create-blog"
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors inline-flex items-center shadow-sm hover:shadow"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Blog
                </Link>
              )}
            </div>
          </div>

          {/* Search + Sort */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-11 pr-11 py-4 text-base md:text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm bg-white/90 backdrop-blur"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-sm text-gray-600">Sort</span>
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent text-sm text-gray-700 focus:outline-none"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="title">Title A–Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
       

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-white/80 text-purple-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                  Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(topic)}
                      className="px-3 py-1.5 text-sm text-gray-700 bg-gray-50 hover:bg-purple-50 hover:text-purple-700 rounded-full transition-colors border border-gray-200"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-2xl p-6 ring-1 ring-emerald-100/60">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest wellness insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm bg-white/90"
                  />
                  <button 
                    onClick={handleSubscribe}
                    disabled={subscribing || !email || isSubscribed}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm shadow-sm hover:shadow disabled:opacity-50"
                  >
                    {subscribing ? 'Subscribing...' : isSubscribed ? 'Already Subscribed' : 'Subscribe'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            {/* Mobile category chips */}
            <div className="md:hidden -mt-2 mb-6 overflow-x-auto">
              <div className="flex gap-2 w-max pr-4">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                      selectedCategory === c.id
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all'
                  ? 'All Articles'
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {visibleArticles.length} of {filteredArticles.length} articles
              </p>
            </div>

            {/* Loading state - skeleton cards */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <BlogSkeleton key={i} />
                ))}
              </div>
            ) : filteredArticles.length === 0 ? (
              // Empty state
              <div className="text-center py-16 bg-white rounded-2xl ring-1 ring-gray-100">
                <div className="mx-auto w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                  <Search className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters.</p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700"
                  >
                    Clear search
                  </button>
                  {selectedCategory !== 'all' && (
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                    >
                      Reset category
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {visibleArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group block ring-1 ring-gray-100"
                    >
                      <div className="relative">
                        <img
                          src={
                            article.imageUrl ||
                            'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
                          }
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          {article.category && (
                            <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                              {article.category}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLike(article.id);
                          }}
                          aria-pressed={liked.has(article.id)}
                          className={`absolute top-4 right-4 p-2 rounded-full transition-colors shadow-sm ${
                            liked.has(article.id)
                              ? 'bg-white text-red-500'
                              : 'bg-white/90 text-gray-600 hover:bg-white'
                          }`}
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                        )}

                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{article.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">
                            {article.createdAt?.toDate?.()?.toLocaleDateString() || 'Recent'}
                          </span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>5 min read</span>
                        </div>

                        {article.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 4).map((tag: string, index: number) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSearchTerm(String(tag));
                                }}
                                className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs border border-gray-200 hover:bg-purple-50 hover:text-purple-700 inline-flex items-center gap-1"
                              >
                                <TagIcon className="w-3.5 h-3.5" />
                                #{tag}
                              </button>
                            ))}
                          </div>
                        )}

                        <span className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <button
                    disabled={!canLoadMore}
                    onClick={() => setVisibleCount((v) => v + 8)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm ${
                      canLoadMore
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-200 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {canLoadMore ? 'Load More Articles' : 'No More Articles'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;