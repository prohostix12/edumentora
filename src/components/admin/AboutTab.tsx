'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, CheckCircle } from 'lucide-react';

export default function AboutTab() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    introText: '',
    fullContent: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/admin/about');
        if (res.ok) {
          const data = await res.json();
          setFormData({
            title: data.title || 'Best Credit Transfer Institute in Kerala for B.Tech Students',
            introText: data.introText || 'Edumentora is dedicated to guiding students through B.Tech credit transfers, ensuring standard guidelines are met seamlessly.',
            fullContent: data.fullContent || 'We provide comprehensive support, evaluation of syllabus compatibility, and handhold you until successful admission and degree completion.',
          });
        }
      } catch (err) {
        console.error('Failed to load about section content:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    try {
      const res = await fetch('/api/admin/about', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
        <p className="text-gray-500">Loading about content...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Manage About Content</h3>
          <p className="text-sm text-gray-500">Edit the about introduction, paragraphs, and detail descriptors.</p>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-70"
        >
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : success ? (
            <>
              <CheckCircle className="h-4 w-4 text-white" />
              Saved!
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          )}
        </button>
      </div>

      {success && (
        <div className="flex items-center gap-2 bg-green-50 text-green-700 rounded-xl p-4 text-sm font-medium border border-green-100">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <span>About section content has been updated successfully! Changes are live on the website.</span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Section Header Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Best Credit Transfer Institute..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Introductory Paragraph (Summary)</label>
          <textarea
            name="introText"
            value={formData.introText}
            onChange={handleChange}
            rows={3}
            placeholder="Introduce the about content in brief..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Detailed Content</label>
          <textarea
            name="fullContent"
            value={formData.fullContent}
            onChange={handleChange}
            rows={6}
            placeholder="Provide all background content, support details, and program context..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
      </div>
    </form>
  );
}
