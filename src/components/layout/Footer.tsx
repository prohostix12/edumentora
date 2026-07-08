"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/btech-credit-transfer", label: "B.Tech Credit Transfer" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/universities", label: "Universities" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  "Credit Transfer",
  "University Admissions",
  "Career Counseling",
  "Study Abroad",
  "Distance Education",
  "Professional Courses",
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="text-primary">edu</span>
                <span className="text-white">Mentora</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner in education, offering expert guidance and innovative learning resources to empower students and professionals for academic and career success.
            </p>
            <div className="flex items-center gap-3">
              {["fb", "tw", "ig", "li"].map((key, i) => (
                <a
                  key={key}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Globe className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-base font-semibold text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="text-base font-semibold text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-sm text-slate-400">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-base font-semibold text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300 font-medium">Calicut</p>
                  <p className="text-sm text-slate-400">
                    YMCA Cross Road, Kozhikode, Kerala – 673001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300 font-medium">Kochi</p>
                  <p className="text-sm text-slate-400">
                    6th Floor, National Pearl Star building, Near Changampuzha park Metro Station, Edappally, Kochi, Kerala 682024
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">info@edumentora.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Edumentora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
