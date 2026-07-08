'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, CheckCircle } from 'lucide-react';

export default function HomeTab() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    heroBadge: '',
    heroTitle: '',
    heroDescription: '',
    missionTitle: '',
    missionDescription: '',
    visionTitle: '',
    visionDescription: '',
    achievementsTitle: '',
    achievementsSubtitle: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/admin/home');
        if (res.ok) {
          const data = await res.json();
          setFormData({
            heroBadge: data.heroBadge || 'Empowering students through credit transfer',
            heroTitle: data.heroTitle || 'Complete Your B.Tech/Degree via Credit Transfer',
            heroDescription: data.heroDescription || 'Fast-track your degree with UGC-recognized universities. Transfer your credits securely and save years of study.',
            missionTitle: data.missionTitle || 'Our Mission',
            missionDescription: data.missionDescription || 'To provide accessible pathways for students to achieve their academic goals through credit transfer.',
            visionTitle: data.visionTitle || 'Our Vision',
            visionDescription: data.visionDescription || 'To be the leading credit transfer guidance institute in India, fostering smooth academic transitions.',
            achievementsTitle: data.achievementsTitle || 'Our Great Achievements',
            achievementsSubtitle: data.achievementsSubtitle || 'Over the years, we have helped thousands of students achieve their dreams of higher education.',
          });
        }
      } catch (err) {
        console.error('Failed to load home page content:', err);
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
      const res = await fetch('/api/admin/home', {
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
        <p className="text-gray-500">Loading home content...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Manage Home Page</h3>
          <p className="text-sm text-gray-500">Edit core titles, headers, and section descriptors.</p>
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
          <span>Home page content has been updated successfully! Changes are live on the website.</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-blue-50/50 pb-2">Hero Section</h4>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Badge Tagline</label>
            <input
              type="text"
              name="heroBadge"
              value={formData.heroBadge}
              onChange={handleChange}
              placeholder="e.g. Empowering students through credit transfer"
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Main Title</label>
            <input
              type="text"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              placeholder="e.g. Complete Your B.Tech/Degree via Credit Transfer"
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Description</label>
            <textarea
              name="heroDescription"
              value={formData.heroDescription}
              onChange={handleChange}
              rows={3}
              placeholder="Give a short summary..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-blue-50/50 pb-2">Mission & Vision Section</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mission Heading</label>
              <input
                type="text"
                name="missionTitle"
                value={formData.missionTitle}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mission Description</label>
              <textarea
                name="missionDescription"
                value={formData.missionDescription}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Vision Heading</label>
              <input
                type="text"
                name="visionTitle"
                value={formData.visionTitle}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Vision Description</label>
              <textarea
                name="visionDescription"
                value={formData.visionDescription}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-blue-50/50 pb-2">Achievements Section</h4>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Achievements Heading</label>
            <input
              type="text"
              name="achievementsTitle"
              value={formData.achievementsTitle}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Achievements Description Subtitle</label>
            <textarea
              name="achievementsSubtitle"
              value={formData.achievementsSubtitle}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
