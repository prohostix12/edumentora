'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2, Image as ImageIcon } from 'lucide-react';

interface ProgramItem {
  _id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt?: string;
  accent?: string;
  ring?: string;
  button?: string;
}

export default function ProgramsTab() {
  const [items, setItems] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ProgramItem | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    href: '',
    image: '',
    imageAlt: '',
    accent: 'from-primary/15 to-primary/5',
    ring: 'ring-primary/15',
    button: 'from-primary to-primary-dark',
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/programs');
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
      title: '',
      description: '',
      href: '',
      image: '',
      imageAlt: '',
      accent: 'from-primary/15 to-primary/5',
      ring: 'ring-primary/15',
      button: 'from-primary to-primary-dark',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: ProgramItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      href: item.href,
      image: item.image,
      imageAlt: item.imageAlt || '',
      accent: item.accent || 'from-primary/15 to-primary/5',
      ring: item.ring || 'ring-primary/15',
      button: item.button || 'from-primary to-primary-dark',
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this program?')) return;
    try {
      const res = await fetch(`/api/admin/programs?id=${id}`, { method: 'DELETE' });
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

      const res = await fetch('/api/admin/programs', {
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
          <h3 className="text-lg font-bold text-gray-900">Academic Programs & Services</h3>
          <p className="text-sm text-gray-500">Add, edit, or remove programs shown on the homepage.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Program
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
          <p className="text-gray-500">Loading programs...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-gray-500 mb-2">No programs stored in database.</p>
          <button
            onClick={handleOpenAdd}
            className="text-sm text-blue-600 font-bold hover:underline"
          >
            Create the first program entry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between group hover:border-blue-100 transition-colors"
            >
              <div className="p-5 space-y-4">
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <ImageIcon className="h-10 w-10 text-gray-300" />
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-3">{item.description}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-end gap-3 bg-gray-50/50">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm"
                  title="Edit Program"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm"
                  title="Delete Program"
                >
                  <Trash2 className="h-4 w-4" />
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
                {editingItem ? 'Edit Program Details' : 'Add New Program'}
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
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Program Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Credit Transfer Program"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="A short summary of the program..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Link Path (Href)</label>
                  <input
                    type="text"
                    name="href"
                    value={formData.href}
                    onChange={handleChange}
                    required
                    placeholder="e.g. /credit-transfer"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Image Alt Text</label>
                  <input
                    type="text"
                    name="imageAlt"
                    value={formData.imageAlt}
                    onChange={handleChange}
                    placeholder="e.g. Student reviewing documents"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://images.unsplash.com/... or relative path"
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
                  {editingItem ? 'Save Changes' : 'Create Program'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
