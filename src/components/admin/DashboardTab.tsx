'use client';

import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Star, 
  HelpCircle, 
  Mail, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

interface DashboardCounts {
  programs: number;
  universities: number;
  testimonials: number;
  faqs: number;
  enquiries: number;
}

interface DashboardTabProps {
  counts: DashboardCounts;
  setActiveTab: (tab: string) => void;
}

export default function DashboardTab({ counts, setActiveTab }: DashboardTabProps) {
  const cards = [
    {
      id: 'programs',
      title: 'Programs',
      count: counts.programs,
      label: 'Active Programs',
      icon: GraduationCap,
      color: 'bg-purple-500 text-white',
      accent: 'text-purple-500',
    },
    {
      id: 'universities',
      title: 'Partners',
      count: counts.universities,
      label: 'Universities',
      icon: Building2,
      color: 'bg-blue-500 text-white',
      accent: 'text-blue-500',
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      count: counts.testimonials,
      label: 'Student Reviews',
      icon: Star,
      color: 'bg-orange-500 text-white',
      accent: 'text-orange-500',
    },
    {
      id: 'faqs',
      title: 'FAQs',
      count: counts.faqs,
      label: 'Questions',
      icon: HelpCircle,
      color: 'bg-green-500 text-white',
      accent: 'text-green-500',
    },
    {
      id: 'enquiries',
      title: 'Enquiries',
      count: counts.enquiries,
      label: 'Received Messages',
      icon: Mail,
      color: 'bg-red-500 text-white',
      accent: 'text-red-500',
    },
    {
      id: 'home',
      title: 'Page Content',
      count: 2, // Home + About
      label: 'Editable Sections',
      icon: FileText,
      color: 'bg-indigo-500 text-white',
      accent: 'text-indigo-500',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-10 shadow-lg text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Welcome to Admin Panel
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Manage your Edumentora website content, academic programs, partner universities, and student enquiries in one unified workspace.
          </p>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
          >
            View Website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Grid of Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className="flex flex-col text-left justify-between p-6 bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${card.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
              
              <div>
                <span className="text-4xl font-extrabold text-gray-900 block mb-1">
                  {card.count}
                </span>
                <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">
                  {card.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
