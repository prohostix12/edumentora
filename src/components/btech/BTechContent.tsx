"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  FileCheck2,
  Building2,
  PenLine,
  ChevronRight,
} from "lucide-react";

/* ------------------------------ Hero Section ------------------------------ */
function BTechHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden gradient-bg-hero">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[16%] h-14 w-14 rounded-2xl bg-primary/10 rotate-12"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[40%] h-10 w-10 rounded-full bg-accent/15"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with arch shape */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[3rem] shadow-hover ring-8 ring-white">
                <Image
                  src="https://images.pexels.com/photos/5538007/pexels-photo-5538007.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Smiling engineering student holding books on campus"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-3 sm:right-0 glass rounded-[1.5rem] p-4 shadow-hover ring-1 ring-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/25">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-heading">B.Tech Degree</p>
                    <p className="text-xs text-paragraph">UGC Recognized</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-5 py-2 text-sm font-semibold text-primary w-fit shadow-soft">
              B.Tech Credit Transfer Program
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] text-heading"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Take the Next Step in your{" "}
              <span className="text-primary">Engineering Career</span>
            </h1>

            <div className="h-px w-20 bg-border" />

            <p className="text-lg text-paragraph leading-relaxed max-w-xl">
              Don&apos;t let an incomplete B.Tech stop you from achieving your
              dreams. With Edumentora&apos;s B.Tech Credit Transfer Program, you
              can resume your studies, complete your degree, and build a
              successful future.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-[#1A1E52] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-secondary/25 transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-1"
              >
                Know more
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Program Overview ---------------------------- */
function ProgramOverview() {
  const paragraphs = [
    <>
      At Edumentora, our{" "}
      <span className="font-semibold text-primary">
        B.Tech Credit Transfer Program
      </span>{" "}
      is designed to help engineering students who have discontinued their
      studies due to academic, personal, or financial challenges. This program
      allows you to transfer your previously earned credits to our partner
      universities and continue your B.Tech degree without starting over.
    </>,
    <>
      We collaborate with reputed institutions like{" "}
      <span className="font-semibold text-secondary">Glocal University</span>,{" "}
      <span className="font-semibold text-secondary">
        Radha Govind University
      </span>
      , and Arni University, ensuring that your academic efforts are recognized
      and credited toward your degree. Our expert team evaluates your existing
      credits and facilitates a smooth transfer process, helping you save time
      and reduce financial burdens.
    </>,
    <>
      With Edumentora&apos;s B.Tech Credit Transfer Program, you can complete
      your degree efficiently and confidently, setting the foundation for a
      successful engineering career
    </>,
  ];

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left accent line */}
          <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary via-secondary to-primary hidden sm:block" />
          <div className="sm:pl-10 flex flex-col gap-7">
            {paragraphs.map((content, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-base sm:text-lg text-paragraph leading-relaxed"
              >
                {content}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Complete Without Starting Over ------------------ */
function CompleteBTech() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-hover ring-8 ring-white">
              <Image
                src="https://images.pexels.com/photos/3760789/pexels-photo-3760789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Happy student giving thumbs up with laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            {/* Decorative dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 h-14 w-14 rounded-2xl bg-primary/15 rotate-12 pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 right-10 h-10 w-10 rounded-full bg-accent/20 pointer-events-none"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-5">
              Second Chance
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Complete your B.tech Without Starting Over!
            </h2>
            <p className="text-base sm:text-lg text-paragraph leading-relaxed">
              Edumentora&apos;s B.Tech Credit Transfer Program offers a second
              chance to students who had to discontinue their engineering
              studies due to academic, financial, or personal challenges.
              Instead of starting from the first year, eligible students who
              have completed at least 50% of their B.Tech coursework can
              transfer their existing credits to a UGC-approved and
              AICTE-recognized university. This allows them to pick up their
              studies from where they left off and complete their degree
              faster. The program is completely legal and ensures the final
              degree is valid for both government and private sector jobs, as
              well as further education. It&apos;s a smart, efficient way to
              get back on track and achieve your engineering goals without
              losing the progress you&apos;ve already made.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Eligibility Criteria -------------------------- */
function Eligibility() {
  const conditions = [
    {
      icon: GraduationCap,
      text: "Completed at least 50% of your B.Tech degree (2+ years).",
    },
    {
      icon: Building2,
      text: "Your previous university must be UGC-approved.",
    },
    {
      icon: FileCheck2,
      text: "You must provide official mark sheets and academic transcripts.",
    },
    {
      icon: PenLine,
      text: "You must complete failed subjects in offline mode at the university (no online exams allowed).",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary via-[#1E2360] to-[#161A45] overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-5">
              Requirements
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Eligibility Criteria for B.Tech Credit Transfer
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              To qualify for B.Tech Credit Transfer, you must meet these
              conditions. If you meet these conditions, you can resume your
              studies and complete your degree faster.
            </p>
          </motion.div>

          {/* Condition cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group relative rounded-[1.5rem] bg-white/[0.06] backdrop-blur-sm border border-white/10 p-7 hover:bg-white/[0.1] hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-primary/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 ring-1 ring-white/20 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <condition.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {condition.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Top Universities ----------------------------- */
function TopUniversities() {
  const universities = [
    "Glocal University",
    "Radha Govind University",
    "IEC University",
    "Arni University",
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-5">
              Partner Universities
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Top Universities Accepting B.Tech Credit Transfers
            </h2>
            <p className="text-base sm:text-lg text-paragraph leading-relaxed mb-8">
              Edumentora collaborates with top UGC-approved universities in
              India that allow B.Tech credit transfers. These universities
              provide valid, degrees:
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {universities.map((uni, index) => (
                <motion.div
                  key={uni}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 rounded-2xl bg-bg-section border border-border/70 px-5 py-4 hover:border-primary/25 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <ChevronRight className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
                  </span>
                  <span
                    className="text-base font-semibold text-heading"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {uni}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-paragraph leading-relaxed">
              These universities issue recognized B.Tech degrees, making you
              eligible for private and government jobs, as well as higher
              studies.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-hover ring-8 ring-bg-section">
              <Image
                src="https://images.pexels.com/photos/35487178/pexels-photo-35487178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Group of graduates in gowns holding diplomas"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-4 glass rounded-[1.5rem] p-4 shadow-hover ring-1 ring-success/15"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">Valid Degrees</p>
                  <p className="text-xs text-paragraph">Govt & Private Jobs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function BTechContent() {
  return (
    <>
      <BTechHero />
      <ProgramOverview />
      <CompleteBTech />
      <Eligibility />
      <TopUniversities />
    </>
  );
}
