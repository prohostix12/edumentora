'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';

interface UniversityItem {
  _id: string;
  name: string;
  logo: string;
  website: string;
  description?: string;
}

export default function UniversitiesTab() {
  const [items, setItems] = useState<UniversityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<UniversityItem | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: '',
    description: '',
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/universities');
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      logo: '',
      website: '',
      description: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: UniversityItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      logo: item.logo,
      website: item.website,
      description: item.description || '',
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this partner university?')) return;
    try {
      const res = await fetch(`/api/admin/universities?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchItems();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const method = editingItem ? 'PUT' : 'POST';
      const body = editingItem ? { ...formData, _id: editingItem._id } : formData;

      const res = await fetch('/api/admin/universities', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setModalOpen(false);
        fetchItems();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Partner Universities & Universities</h3>
          <p className="text-sm text-gray-500">Add, edit, or delete partner academic institutions.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add University
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
          <p className="text-gray-500">Loading universities...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-gray-500 mb-2">No universities stored in database.</p>
          <button
            onClick={handleOpenAdd}
            className="text-sm text-blue-600 font-bold hover:underline"
          >
            Create the first university entry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between group hover:border-blue-100 transition-colors"
            >
              <div className="p-5 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 border border-gray-100 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-full max-w-full p-2 object-contain"
                    />
                  ) : (
                    <ImageIcon className="h-6 w-6 text-gray-300" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900 text-base truncate mb-0.5">{item.name}</h4>
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 flex items-center gap-1 hover:underline font-medium"
                    >
                      <LinkIcon className="h-3 w-3" />
                      Visit Website
                    </a>
                  )}
                  {item.description && (
                    <p className="text-xs text-gray-400 line-clamp-1 mt-1">{item.description}</p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-gray-50 flex items-center justify-end gap-3 bg-gray-50/50">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Edit University"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Delete University"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-gray-100 w-full max-w-lg shadow-xl overflow-hidden animate-slideUp">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <h4 className="font-bold text-lg text-gray-900">
                {editingItem ? 'Edit University Details' : 'Add New Partner University'}
              </h4>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">University Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Glocal University"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Logo URL or Path</label>
                <input
                  type="text"
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  required
                  placeholder="e.g. /logos/glocal.png or https://..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Official Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="e.g. https://www.glocaluniversity.edu.in"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Short Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Brief context or status (e.g. UGC Approved, A-Grade)..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-75"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {editingItem ? 'Save Changes' : 'Create Entry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
