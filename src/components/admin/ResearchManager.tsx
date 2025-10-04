import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { Plus, Edit, Trash2, Download, Upload } from 'lucide-react';
import { useToast } from '../Toast';

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

const ResearchManager = () => {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPaper, setEditingPaper] = useState<ResearchPaper | null>(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    journal: '',
    year: '',
    participants: 0,
    duration: '',
    keyFinding: '',
    status: 'Draft' as 'Published' | 'In Review' | 'Draft',
    downloadUrl: '',
    abstract: '',
    authors: '',
    category: ''
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'research-papers'));
      const papersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ResearchPaper[];
      setPapers(papersData.sort((a, b) => parseInt(b.year) - parseInt(a.year)));
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPaper) {
        await updateDoc(doc(db, 'research-papers', editingPaper.id), {
          ...formData,
          updatedAt: new Date()
        });
        showToast({ variant: 'success', title: 'Success', description: 'Research paper updated successfully!' });
      } else {
        await addDoc(collection(db, 'research-papers'), {
          ...formData,
          createdAt: new Date()
        });
        showToast({ variant: 'success', title: 'Success', description: 'Research paper added successfully!' });
      }
      setFormData({
        title: '', journal: '', year: '', participants: 0, duration: '',
        keyFinding: '', status: 'Draft', downloadUrl: '', abstract: '', authors: '', category: ''
      });
      setShowForm(false);
      setEditingPaper(null);
      fetchPapers();
    } catch (error) {
      console.error('Error saving paper:', error);
      showToast({ variant: 'error', title: 'Error', description: 'Error saving research paper. Please try again.' });
    }
  };

  const handleEdit = (paper: ResearchPaper) => {
    setEditingPaper(paper);
    setFormData({
      title: paper.title,
      journal: paper.journal,
      year: paper.year,
      participants: paper.participants,
      duration: paper.duration,
      keyFinding: paper.keyFinding,
      status: paper.status,
      downloadUrl: paper.downloadUrl,
      abstract: paper.abstract,
      authors: paper.authors,
      category: paper.category
    });
    setShowForm(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      showToast({ variant: 'error', title: 'Invalid File', description: 'Please select a PDF file' });
      return;
    }

    setUploading(true);
    try {
      const storageRef = ref(storage, `research-papers/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      setFormData({ ...formData, downloadUrl: downloadURL });
      showToast({ variant: 'success', title: 'Success', description: 'PDF uploaded successfully!' });
    } catch (error) {
      console.error('Error uploading file:', error);
      showToast({ variant: 'error', title: 'Upload Failed', description: 'Error uploading PDF. Please try again.' });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this research paper?')) {
      try {
        await deleteDoc(doc(db, 'research-papers', id));
        showToast({ variant: 'success', title: 'Success', description: 'Research paper deleted successfully!' });
        fetchPapers();
      } catch (error) {
        console.error('Error deleting paper:', error);
        showToast({ variant: 'error', title: 'Error', description: 'Error deleting research paper. Please try again.' });
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Manage Research Papers</h3>
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Research Paper
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4">
            {editingPaper ? 'Edit Research Paper' : 'Add New Research Paper'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Paper Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Journal Name"
                value={formData.journal}
                onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
                className="border rounded-lg px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Year"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="border rounded-lg px-3 py-2"
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="border rounded-lg px-3 py-2"
                required
              >
                <option value="Draft">Draft</option>
                <option value="In Review">In Review</option>
                <option value="Published">Published</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Participants"
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
                className="border rounded-lg px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Duration (e.g., 12 weeks)"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="border rounded-lg px-3 py-2"
                required
              />
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="border rounded-lg px-3 py-2"
                required
              >
                <option value="">Select Category</option>
                <option value="PCOS Research">PCOS Research</option>
                <option value="Perimenopause Studies">Perimenopause Studies</option>
                <option value="Ayurvedic Integration">Ayurvedic Integration</option>
                <option value="Clinical Trials">Clinical Trials</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Authors (comma separated)"
              value={formData.authors}
              onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Key Finding"
              value={formData.keyFinding}
              onChange={(e) => setFormData({ ...formData, keyFinding: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
            <div className="space-y-2">
              <input
                type="url"
                placeholder="Download URL (optional)"
                value={formData.downloadUrl}
                onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                className="border rounded-lg px-3 py-2 w-full"
              />
              <div className="text-center text-gray-500 text-sm">OR</div>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="pdf-upload"
                />
                <label
                  htmlFor="pdf-upload"
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? 'Uploading...' : 'Upload PDF'}
                </label>
                {uploading && <div className="text-sm text-gray-500">Please wait...</div>}
              </div>
            </div>
            <textarea
              placeholder="Abstract"
              value={formData.abstract}
              onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full h-32"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                {editingPaper ? 'Update' : 'Add'} Research Paper
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingPaper(null);
                  setFormData({
                    title: '', journal: '', year: '', participants: 0, duration: '',
                    keyFinding: '', status: 'Draft', downloadUrl: '', abstract: '', authors: '', category: ''
                  });
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Journal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {papers.map((paper) => (
                <tr key={paper.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{paper.title}</div>
                    <div className="text-sm text-gray-500">{paper.keyFinding}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paper.journal}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paper.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      paper.status === 'Published' ? 'bg-green-100 text-green-800' :
                      paper.status === 'In Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {paper.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(paper)}
                        className="text-purple-600 hover:text-purple-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(paper.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResearchManager;