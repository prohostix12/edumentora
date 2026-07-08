"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ban } from "lucide-react";

interface PainPoint {
  image: string;
  alt: string;
  text: string;
}

const painPoints: PainPoint[] = [
  {
    image:
      "https://images.pexels.com/photos/20640156/pexels-photo-20640156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Worried student looking through library bookshelf",
    text: "Worried about repeating semesters you have already completed and passed",
  },
  {
    image:
      "https://images.pexels.com/photos/8199252/pexels-photo-8199252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Student researching universities on laptop",
    text: "Moving to a new city and afraid of losing the credits you have already earned",
  },
  {
    image:
      "https://images.pexels.com/photos/8199622/pexels-photo-8199622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Students discussing with a mentor in library",
    text: "Confused about which universities will accept your previous subjects and syllabus",
  },
];

function ArcImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-36 w-36 sm:h-40 sm:w-40">
      {/* Red arc segments */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-12 transition-transform duration-700 group-hover:rotate-45"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="#E31E24"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="80 216"
          strokeDashoffset="0"
        />
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="#E31E24"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="50 245"
          strokeDashoffset="-160"
          opacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="#252A6C"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="26 270"
          strokeDashoffset="-110"
          opacity="0.35"
        />
      </svg>

      {/* Circular image */}
      <div className="absolute inset-3 overflow-hidden rounded-full shadow-card">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export default function ReadyToGrow() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[38%_62%]">
        {/* Left - Red Panel */}
        <div className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden py-20 lg:py-28 px-8 sm:px-12 lg:px-16 flex items-center">
          {/* Decorative circles */}
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute bottom-20 right-10 h-6 w-6 rounded-full bg-white/15" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.2] tracking-wide uppercase"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="block text-white">Ready to</span>
              <span className="block text-white">Grow? We</span>
              <span className="block text-secondary">Understand</span>
              <span className="block text-white/80">Your Pain</span>
              <span className="block text-secondary">Points</span>
            </h2>
            <p className="mt-6 text-red-100 text-base leading-relaxed max-w-xs">
              Every student deserves a fresh start without losing what they
              have already achieved. We solve the real problems students face.
            </p>
          </motion.div>
        </div>

        {/* Right - Cards Panel */}
        <div className="bg-bg-section py-20 lg:py-28 px-8 sm:px-12 lg:px-16 flex items-center">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative bg-white rounded-[1.5rem] p-7 shadow-soft border border-border/60 hover:shadow-hover hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Ban icon top-left */}
                <div className="mb-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-border text-slate-400 group-hover:text-primary group-hover:ring-primary/30 transition-colors duration-300">
                    <Ban className="h-4 w-4" />
                  </span>
                </div>

                <ArcImage src={point.image} alt={point.alt} />

                <p className="mt-7 text-sm text-paragraph leading-relaxed text-center">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
