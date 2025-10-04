import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Plus, Edit, Trash2, Users } from 'lucide-react';
import { useToast } from '../Toast';

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  studies: number;
  participants: number;
  icon: string;
  color: string;
  createdAt: any;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string;
  createdAt: any;
}

const ScienceContentManager = () => {
  const [activeSection, setActiveSection] = useState('research-areas');
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const { showToast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (activeSection === 'research-areas') {
      fetchResearchAreas();
    } else {
      fetchTeamMembers();
    }
  }, [activeSection]);

  const fetchResearchAreas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'research-areas'));
      const areasData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ResearchArea[];
      setResearchAreas(areasData);
    } catch (error) {
      console.error('Error fetching research areas:', error);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'team-members'));
      const membersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TeamMember[];
      setTeamMembers(membersData);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const collectionName = activeSection === 'research-areas' ? 'research-areas' : 'team-members';
    const itemType = activeSection === 'research-areas' ? 'Research area' : 'Team member';
    
    try {
      if (editingItem) {
        await updateDoc(doc(db, collectionName, editingItem.id), {
          ...formData,
          updatedAt: new Date()
        });
        showToast({ variant: 'success', title: 'Success', description: `${itemType} updated successfully!` });
      } else {
        await addDoc(collection(db, collectionName), {
          ...formData,
          createdAt: new Date()
        });
        showToast({ variant: 'success', title: 'Success', description: `${itemType} added successfully!` });
      }
      
      resetForm();
      if (activeSection === 'research-areas') {
        fetchResearchAreas();
      } else {
        fetchTeamMembers();
      }
    } catch (error) {
      console.error('Error saving item:', error);
      showToast({ variant: 'error', title: 'Error', description: `Error saving ${itemType.toLowerCase()}. Please try again.` });
    }
  };

  const resetForm = () => {
    setFormData({});
    setShowForm(false);
    setEditingItem(null);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    const itemType = activeSection === 'research-areas' ? 'research area' : 'team member';
    if (window.confirm(`Are you sure you want to delete this ${itemType}?`)) {
      const collectionName = activeSection === 'research-areas' ? 'research-areas' : 'team-members';
      try {
        await deleteDoc(doc(db, collectionName, id));
        showToast({ variant: 'success', title: 'Success', description: `${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully!` });
        if (activeSection === 'research-areas') {
          fetchResearchAreas();
        } else {
          fetchTeamMembers();
        }
      } catch (error) {
        console.error('Error deleting item:', error);
        showToast({ variant: 'error', title: 'Error', description: `Error deleting ${itemType}. Please try again.` });
      }
    }
  };

  const renderResearchAreaForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Research Area Title"
        value={formData.title || ''}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border rounded-lg px-3 py-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border rounded-lg px-3 py-2 w-full h-24"
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Number of Studies"
          value={formData.studies || ''}
          onChange={(e) => setFormData({ ...formData, studies: parseInt(e.target.value) })}
          className="border rounded-lg px-3 py-2"
          required
        />
        <input
          type="number"
          placeholder="Number of Participants"
          value={formData.participants || ''}
          onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
          className="border rounded-lg px-3 py-2"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={formData.icon || ''}
          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        >
          <option value="">Select Icon</option>
          <option value="Microscope">Microscope</option>
          <option value="FlaskConical">Flask</option>
          <option value="Award">Award</option>
          <option value="Users">Users</option>
        </select>
        <select
          value={formData.color || ''}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        >
          <option value="">Select Color</option>
          <option value="purple">Purple</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          {editingItem ? 'Update' : 'Add'} Research Area
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );

  const renderTeamMemberForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Role/Position"
          value={formData.role || ''}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Credentials"
          value={formData.credentials || ''}
          onChange={(e) => setFormData({ ...formData, credentials: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={formData.image || ''}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="border rounded-lg px-3 py-2"
          required
        />
      </div>
      <textarea
        placeholder="Bio/Description"
        value={formData.bio || ''}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        className="border rounded-lg px-3 py-2 w-full h-24"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          {editingItem ? 'Update' : 'Add'} Team Member
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveSection('research-areas')}
            className={`px-4 py-2 rounded-lg ${
              activeSection === 'research-areas' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Research Areas
          </button>
          <button
            onClick={() => setActiveSection('team-members')}
            className={`px-4 py-2 rounded-lg ${
              activeSection === 'team-members' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Team Members
          </button>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add {activeSection === 'research-areas' ? 'Research Area' : 'Team Member'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4">
            {editingItem ? 'Edit' : 'Add New'} {activeSection === 'research-areas' ? 'Research Area' : 'Team Member'}
          </h4>
          {activeSection === 'research-areas' ? renderResearchAreaForm() : renderTeamMemberForm()}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md">
        {activeSection === 'research-areas' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {researchAreas.map((area) => (
              <div key={area.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">{area.title}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(area)}
                      className="text-purple-600 hover:text-purple-900"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(area.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-purple-600">{area.studies}</span>
                    <div className="text-gray-500">Studies</div>
                  </div>
                  <div>
                    <span className="font-medium text-purple-600">{area.participants}</span>
                    <div className="text-gray-500">Participants</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="border rounded-lg p-4 text-center">
                <div className="flex justify-end mb-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(member)}
                      className="text-purple-600 hover:text-purple-900"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-600 text-xs mb-2">{member.credentials}</p>
                <p className="text-gray-600 text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScienceContentManager;