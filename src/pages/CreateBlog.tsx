import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Save, Eye } from 'lucide-react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [draft, setDraft] = useState(false);
  const [localTags, setLocalTags] = useState<string[]>([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const categories = [
    'PCOS', 'Perimenopause', 'Ayurveda', 'Nutrition', 'Lifestyle', 'Mental Health'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'blogs'), {
        title: title.trim(),
        content,
        excerpt: excerpt.trim(),
        category,
        tags: (localTags.length ? localTags : tags.split(',')).map((tag) => tag.trim()).filter(Boolean),
        imageUrl:
          imageUrl ||
          'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
        author: currentUser.email,
        authorId: currentUser.uid,
        createdAt: serverTimestamp(),
        published: !draft,
      });
      navigate('/blog');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
    setLoading(false);
  };

  if (preview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Preview</h1>
            <button
              onClick={() => setPreview(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Edit
            </button>
          </div>
          
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 md:h-96 object-cover"
              />
            )}
            <div className="p-8 md:p-12">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                {category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{excerpt}</p>
              <div className="prose prose-lg max-w-none">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter blog title..."
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Brief description of your blog post..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Type a tag and press Add"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const next = tags.trim();
                      if (!next) return;
                      setLocalTags((prev) => (prev.includes(next) ? prev : [...prev, next]));
                      setTags('');
                    }}
                    className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Add
                  </button>
                </div>
                {localTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {localTags.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border border-gray-200">
                        {t}
                        <button
                          type="button"
                          onClick={() => setLocalTags((prev) => prev.filter((x) => x !== t))}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL (optional)
              </label>
              <div className="flex gap-3">
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {imageUrl && (
                <div className="mt-3">
                  <img src={imageUrl} alt="Preview" className="w-full h-56 object-cover rounded-lg border" />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Write your blog content here..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPreview(true)}
                  className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </button>
                <label className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={draft}
                    onChange={(e) => setDraft(e.target.checked)}
                  />
                  Save as draft
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Save className="w-5 h-5 mr-2" />
                {loading ? (draft ? 'Saving Draft...' : 'Publishing...') : draft ? 'Save Draft' : 'Publish Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;