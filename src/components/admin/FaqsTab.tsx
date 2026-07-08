'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2, ArrowUpDown } from 'lucide-react';

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  order: number;
  enabled: boolean;
}

export default function FaqsTab() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FaqItem | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    order: 0,
    enabled: true,
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/faqs');
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
      question: '',
      answer: '',
      order: items.length, // auto-increment sort order
      enabled: true,
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: FaqItem) => {
    setEditingItem(item);
    setFormData({
      question: item.question,
      answer: item.answer,
      order: item.order || 0,
      enabled: item.enabled !== false,
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    try {
      const res = await fetch(`/api/admin/faqs?id=${id}`, { method: 'DELETE' });
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

      const res = await fetch('/api/admin/faqs', {
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

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Frequently Asked Questions (FAQs)</h3>
          <p className="text-sm text-gray-500">Add, edit, or prioritize accordions listed on the FAQ page.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add FAQ
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
          <p className="text-gray-500">Loading FAQs...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-gray-500 mb-2">No FAQs stored in database.</p>
          <button
            onClick={handleOpenAdd}
            className="text-sm text-blue-600 font-bold hover:underline"
          >
            Create the first FAQ accordion
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:border-blue-100 transition-colors flex items-start gap-4"
            >
              <div className="flex items-center gap-1 text-gray-400 mt-1 cursor-grab" title="Order">
                <ArrowUpDown className="h-4 w-4 shrink-0" />
                <span className="text-xs font-semibold">{item.order}</span>
              </div>
              
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-gray-900 text-base">{item.question}</h4>
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${
                    item.enabled !== false 
                      ? "bg-green-50 text-green-700 ring-green-600/20" 
                      : "bg-red-50 text-red-700 ring-red-600/20"
                  }`}>
                    {item.enabled !== false ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.answer}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Edit FAQ"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100"
                  title="Delete FAQ"
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
                {editingItem ? 'Edit FAQ Accordion' : 'Add New FAQ Accordion'}
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
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Question</label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  placeholder="e.g. What is credit transfer?"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Answer Paragraph</label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Provide a clear, detailed answer..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Priority Sort Order</label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    min={0}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-1">Lower numbers appear first.</p>
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
                  {editingItem ? 'Save Changes' : 'Create FAQ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
