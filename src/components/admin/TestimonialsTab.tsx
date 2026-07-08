'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2, Star, User } from 'lucide-react';

interface TestimonialItem {
  _id: string;
  name: string;
  role: string;
  feedback: string;
  image?: string;
  rating: number;
  order: number;
  enabled: boolean;
}

export default function TestimonialsTab() {
  const [items, setItems] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TestimonialItem | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    feedback: '',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop',
    rating: 5,
    order: 0,
    enabled: true,
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/testimonials');
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
      role: '',
      feedback: '',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop',
      rating: 5,
      order: items.length,
      enabled: true,
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: TestimonialItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      role: item.role,
      feedback: item.feedback,
      image: item.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop',
      rating: item.rating || 5,
      order: item.order || 0,
      enabled: item.enabled !== false,
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, { method: 'DELETE' });
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

      const res = await fetch('/api/admin/testimonials', {
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
    const target = e.target;
    const value = target.name === 'order'
      ? parseInt(target.value) || 0
      : target.type === 'checkbox'
        ? (target as HTMLInputElement).checked
        : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Student Testimonials</h3>
          <p className="text-sm text-gray-500">Manage feedback reviews from successful credit transfer candidates.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-gray-500 mb-2">No testimonials stored in database.</p>
          <button
            onClick={handleOpenAdd}
            className="text-sm text-blue-600 font-bold hover:underline"
          >
            Create the first testimonial entry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:border-blue-100 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      ) : (
                        <User className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${
                      item.enabled !== false 
                        ? "bg-green-50 text-green-700 ring-green-600/20" 
                        : "bg-red-50 text-red-700 ring-red-600/20"
                    }`}>
                      {item.enabled !== false ? 'Enabled' : 'Disabled'}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold">Order: {item.order}</span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < item.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{item.feedback}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-end gap-3">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Edit"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Delete"
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
                {editingItem ? 'Edit Testimonial Details' : 'Add New Testimonial'}
              </h4>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Course / Role Info</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="e.g. B.Tech CSE Student (2024)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Feedback Statement</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Rahul's experience at Edumentora..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Photo URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/... or relative path"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-semibold">Priority Sort Order</label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    min={0}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Status</label>
                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      name="enabled"
                      checked={formData.enabled}
                      onChange={handleChange}
                      className="h-4.5 w-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">Enabled</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Rating (Stars)</label>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleRatingChange(ratingValue)}
                        className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            ratingValue <= formData.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-200'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
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
