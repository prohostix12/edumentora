"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Award,
  Clock,
  BookOpen,
  Check,
  GraduationCap,
} from "lucide-react";

const statCards = [
  { icon: Users, value: "3,000+", label: "Students Helped" },
  { icon: Award, value: "163+", label: "Awards and Recognition" },
  { icon: Clock, value: "16+", label: "Years Experience" },
];

export default function Hero() {
  const [content, setContent] = useState({
    heroBadge: "Kerala's Premier Credit Transfer Institute",
    heroTitle: "Empowering Students Through Credit Transfer",
    heroDescription: "Resume your education with the Best Academic Credit Transfer institution in Kerala. Recognizing credits and saving time and cost to achieve your academic goals."
  });

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch("/api/admin/home", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setContent({
            heroBadge: data.heroBadge || "Kerala's Premier Credit Transfer Institute",
            heroTitle: data.heroTitle || "Empowering Students Through Credit Transfer",
            heroDescription: data.heroDescription || "Resume your education with the Best Academic Credit Transfer institution in Kerala. Recognizing credits and saving time and cost to achieve your academic goals."
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchContent();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-24 lg:pt-28">
      {/* Main hero canvas */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-[#FBF9F9] via-white to-[#F5F6FB] px-5 py-16 sm:px-8 lg:px-16 lg:py-24 shadow-soft">
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-secondary/5 blur-3xl" />
            <div
              className="absolute right-[39%] top-[34%] hidden h-32 w-32 opacity-20 lg:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #252A6C 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-soft"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {content.heroBadge}
              </motion.div>

              <h1
                className="mb-6 text-4xl font-bold leading-[1.08] text-heading sm:text-5xl lg:text-6xl xl:text-[64px]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {content.heroTitle.includes("Credit Transfer") ? (
                  <>
                    {content.heroTitle.split("Credit Transfer")[0]}
                    <span className="text-primary">Credit Transfer</span>
                    {content.heroTitle.split("Credit Transfer")[1]}
                  </>
                ) : content.heroTitle}
              </h1>

              <p className="mb-7 max-w-xl text-lg leading-relaxed text-paragraph">
                {content.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                >
                  Get Started Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right portrait composition */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:mx-0"
            >
              <div className="relative aspect-square w-full max-w-[500px]">
                {/* Abstract brand shapes behind figure */}
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[6%] top-[12%] h-[78%] w-[78%] rounded-[45%_55%_48%_52%] bg-secondary shadow-card"
                />
                <motion.div
                  animate={{ rotate: [0, -8, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-[4%] top-[22%] h-[58%] w-[58%] rounded-[48%_52%_42%_58%] bg-primary/90"
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[2%] top-[24%] h-20 w-20 rounded-3xl bg-primary/15"
                />

                {/* Decorative wave lines */}
                <svg
                  className="absolute right-[12%] top-[18%] z-10 hidden text-white/70 sm:block"
                  width="120"
                  height="70"
                  viewBox="0 0 120 70"
                  fill="none"
                >
                  <path d="M5 18 C28 0 55 36 78 16 C93 4 105 10 115 18" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 34 C30 16 55 52 80 31 C94 19 106 24 116 34" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 50 C30 33 57 65 82 45 C95 35 106 39 116 50" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* Person/image */}
                <div className="absolute inset-x-[10%] bottom-0 z-20 mx-auto aspect-[4/5] overflow-hidden rounded-b-[44%] rounded-t-[2rem] shadow-hover ring-8 ring-white/70">
                  <Image
                    src="/images/education.jpg"
                    alt="Student representing Edumentora credit transfer success"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Floating success badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-2 bottom-[8%] z-30 hidden rounded-[1.5rem] border border-white/60 bg-white/85 p-4 shadow-hover backdrop-blur-md sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                      <Award className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-heading">100%</p>
                      <p className="text-xs text-paragraph">Success Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom overlapping stat cards - reference inspired */}
        <div className="relative z-20 mx-auto -mt-8 grid max-w-5xl gap-5 px-2 sm:grid-cols-3 lg:-mt-14">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.12, duration: 0.55 }}
              className={`group relative rounded-[1.5rem] border border-border/70 bg-white p-7 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-hover ${index === 1 ? "bg-gradient-to-br from-primary to-primary-dark text-white" : ""
                }`}
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${index === 1
                  ? "bg-white/15 text-white ring-1 ring-white/20"
                  : "bg-primary/10 text-primary"
                  }`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <div
                className={`mb-1 text-2xl font-bold ${index === 1 ? "text-white" : "text-heading"
                  }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.value}
              </div>
              <p className={`text-sm ${index === 1 ? "text-red-100" : "text-paragraph"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

