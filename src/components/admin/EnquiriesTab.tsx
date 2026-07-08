'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, Loader2, Calendar, Phone, Mail, X, MessageSquare } from 'lucide-react';

interface EnquiryItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

// ── Full-message modal ──────────────────────────────────────────────────────
function MessageModal({
  item,
  onClose,
}: {
  item: EnquiryItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Colour bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <MessageSquare className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-0.5">Message from</p>
              <h3 className="text-base font-extrabold text-gray-900 leading-tight">{item.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors border border-gray-100 shrink-0 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 px-6 py-3 bg-gray-50/70 border-b border-gray-100 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> {item.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> {item.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(item.createdAt).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Subject badge */}
        <div className="px-6 pt-4">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {item.subject}
          </span>
        </div>

        {/* Full message */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-700 whitespace-pre-line break-words leading-relaxed">
            {item.message}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main tab ────────────────────────────────────────────────────────────────
export default function EnquiriesTab() {
  const [items, setItems] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<EnquiryItem | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      if (res.ok) setItems(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Message modal */}
      {selectedItem && (
        <MessageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <div className="space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Submitted Enquiries</h3>
            <p className="text-sm text-gray-500">
              View and manage contact inquiries. Click a message to read it in full.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
            <p className="text-gray-500">Loading enquiries...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center p-12 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-500">No enquiries found in database.</p>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 uppercase text-[10px] font-bold tracking-wider border-b border-gray-100">
                    <th className="py-4 px-6">Sender Details</th>
                    <th className="py-4 px-6">Subject</th>
                    <th className="py-4 px-6">Message</th>
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {items.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/50 transition-colors align-top">
                      {/* Sender */}
                      <td className="py-4 px-6 space-y-1 min-w-[200px]">
                        <div className="font-bold text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-400 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 shrink-0" /> {item.email}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 shrink-0" /> {item.phone}
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="py-4 px-6 min-w-[150px]">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          {item.subject}
                        </span>
                      </td>

                      {/* Message — click to open modal */}
                      <td className="py-4 px-6 max-w-xs">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="text-left w-full group cursor-pointer"
                          title="Click to view full message"
                        >
                          <p className="whitespace-pre-line line-clamp-2 leading-relaxed text-gray-600 group-hover:text-blue-700 transition-colors">
                            {item.message}
                          </p>
                          <span className="mt-1 text-[11px] font-semibold text-blue-500 group-hover:text-blue-700 transition-colors">
                            Click to view full message →
                          </span>
                        </button>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-xs text-gray-400 min-w-[120px]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(item.createdAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </td>

                      {/* Delete */}
                      <td className="py-4 px-6 text-right min-w-[100px]">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
