"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AdminLoginModal from "@/components/layout/AdminLoginModal";
import { Menu, X, BookOpen, ChevronDown, Phone } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/btech-credit-transfer", label: "B.Tech Credit Transfer" },
  {
    href: "/programs",
    label: "Programs",
    dropdown: [
      { href: "/credit-transfer", label: "Credit Transfer Program" },
      { href: "/apprenticeship-program", label: "Apprenticeship Program" },
      { href: "/work-integrated-learning-program", label: "Work Integrated Learning Program" },
    ],
  },
  { href: "/universities", label: "Universities" },
  {
    href: "/about",
    label: "About",
    dropdown: [
      { href: "/about", label: "About Us" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blogs", label: "Blogs" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-heading hover:text-primary rounded-full transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </Link>
      <AnimatePresence>
        {open && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white shadow-card border border-border p-2 z-50"
          >
            {item.dropdown.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="block px-4 py-2.5 text-sm font-medium text-paragraph hover:text-primary hover:bg-bg-section rounded-xl transition-colors"
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="text-primary">edu</span>
                <span className="text-secondary">Mentora</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DesktopDropdown key={link.label} item={link} />
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 text-[15px] font-semibold rounded-full transition-colors ${
                      pathname === link.href && link.href === "/"
                        ? "text-secondary"
                        : "text-heading hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Call Now CTA */}
            <div className="hidden lg:block">
              <a
                href="tel:+919744587777"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <button onClick={() => setLoginOpen(true)} className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Login</button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-heading" />
              ) : (
                <Menu className="h-6 w-6 text-heading" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-24 left-4 right-4 rounded-3xl bg-white shadow-card border border-border p-6 max-h-[70vh] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label ? null : link.label
                          )
                        }
                        className="flex w-full items-center justify-between px-4 py-3 text-base font-semibold text-heading hover:text-primary hover:bg-bg-section rounded-xl transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            mobileExpanded === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 border-l-2 border-border pl-2 py-1 flex flex-col gap-1">
                              {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="px-4 py-2.5 text-sm font-medium text-paragraph hover:text-primary hover:bg-bg-section rounded-xl transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-base font-semibold text-heading hover:text-primary hover:bg-bg-section rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <a
                  href="tel:+919744587777"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    {loginOpen && <AdminLoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />}
</>
  );
}
