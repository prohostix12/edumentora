"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Credit Transfer Program",
    description:
      "Transfer your past credits to complete your degree faster with Edumentora.",
    href: "/credit-transfer",
    image:
      "https://images.pexels.com/photos/7777689/pexels-photo-7777689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Student reviewing academic documents for credit transfer",
    accent: "from-primary/15 to-primary/5",
    ring: "ring-primary/15",
    button: "from-primary to-primary-dark",
  },
  {
    title: "Apprenticeship Program",
    description:
      "Study while gaining real work experience through industry training.",
    href: "/apprenticeship-program",
    image:
      "https://images.pexels.com/photos/18999469/pexels-photo-18999469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Professionals collaborating during apprenticeship training",
    accent: "from-secondary/15 to-secondary/5",
    ring: "ring-secondary/15",
    button: "from-secondary to-[#1A1E52]",
  },
  {
    title: "Work Integrated Learning Program",
    description:
      "Learn theory and apply it practically for a career-ready education.",
    href: "/work-integrated-learning-program",
    image:
      "https://images.pexels.com/photos/7964503/pexels-photo-7964503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Professional using laptop while learning through WILP",
    accent: "from-accent/20 to-accent/5",
    ring: "ring-accent/15",
    button: "from-primary to-primary-dark",
  },
];

export default function CreditPrograms() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left - Sticky Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Our Programs
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Credit Transfer Programs
            </h2>
            <p className="text-paragraph text-base sm:text-lg leading-relaxed max-w-md">
              In EduMentora Our Vision is to create a bright future where every
              student can complete their education without barriers through
              recognized credit transfer programs.
            </p>
          </motion.div>

          {/* Right - Image Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-6 gap-y-10 lg:gap-y-12 pt-4">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.14, duration: 0.65, ease: "easeOut" }}
                className={`group relative ${index === 1 ? "sm:translate-y-8" : ""} ${
                  index === 2 ? "sm:translate-y-2" : ""
                }`}
              >
                <div className="relative pt-20">
                  {/* Circular image */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ duration: 0.35 }}
                    className={`absolute left-1/2 top-0 z-20 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full shadow-hover ring-8 ring-white ${program.ring}`}
                  >
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white px-7 pb-7 pt-20 shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover group-hover:border-primary/20">
                    <div
                      className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${program.accent}`}
                    />
                    <div className="absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

                    <div className="relative text-center sm:text-left">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {program.title}
                      </h3>
                      <p className="text-paragraph text-[15px] leading-relaxed mb-6 max-w-md mx-auto sm:mx-0">
                        {program.description}
                      </p>

                      <Link
                        href={program.href}
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${program.button} px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:gap-3 hover:shadow-xl`}
                      >
                        Know more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
