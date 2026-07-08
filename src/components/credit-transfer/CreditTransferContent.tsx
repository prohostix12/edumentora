"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send, Headset } from "lucide-react";

/* ------------------------------ Intro Section ----------------------------- */
function KnowMoreIntro() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden gradient-bg-hero">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-[14%] h-12 w-12 rounded-2xl bg-primary/10 rotate-12"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-[12%] h-9 w-9 rounded-full bg-accent/15"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-5 py-2 text-sm font-semibold text-primary shadow-soft mb-6"
        >
          Credit Transfer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] text-heading mb-6"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Know more on <span className="text-primary">Credit Transfers</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg text-paragraph leading-relaxed"
        >
          Credit transfer is a process that allows students to apply academic
          credits earned from one institution toward a degree or program at
          another. This system facilitates educational mobility, enabling
          learners to continue their studies without repeating equivalent
          coursework. By recognizing prior learning, credit transfers can
          reduce the time and cost required to complete a degree. However,
          acceptance of transfer credits depends on factors such as course
          equivalency, accreditation, and institutional policies. It&apos;s
          essential for students to consult with academic advisors to
          understand the transferability of their credits and ensure a smooth
          transition between educational institutions
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------------------- Program Cards ------------------------------- */
const programs = [
  {
    title: "UG Credit Transfer Program",
    description:
      "Transfer your earned UG credits to top universities, saving time and costs while completing your degree efficiently.",
    image:
      "https://images.pexels.com/photos/7777689/pexels-photo-7777689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Student reviewing academic documents for undergraduate credit transfer",
    accent: "from-primary/15 to-primary/5",
  },
  {
    title: "PG Credit Transfer Program",
    description:
      "Transfer your PG credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.",
    image:
      "https://images.pexels.com/photos/19613149/pexels-photo-19613149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Student continuing postgraduate studies with laptop and books",
    accent: "from-secondary/15 to-secondary/5",
  },
  {
    title: "Diploma Credit Transfer Program",
    description:
      "Transfer your Diploma credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.",
    image:
      "https://images.pexels.com/photos/8199200/pexels-photo-8199200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    imageAlt: "Student with study materials representing diploma credit transfer",
    accent: "from-accent/20 to-accent/5",
  },
];

function ProgramList() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Program Options
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Choose the Right Credit Transfer Path
            </h2>
            <p className="text-base sm:text-lg text-paragraph leading-relaxed max-w-md">
              Explore structured transfer pathways for undergraduate,
              postgraduate, and diploma learners—each designed to help students
              continue their education without unnecessary repetition.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className={`group relative ${
                  index === 1 ? "md:translate-y-10" : ""
                } ${index === 2 ? "md:-translate-y-2 md:col-span-2 md:max-w-[50%]" : ""}`}
              >
                <div className="relative pt-20">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 top-0 z-20 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full shadow-hover ring-8 ring-white"
                  >
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white px-7 pb-7 pt-20 shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover group-hover:border-primary/20">
                    <div
                      className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${program.accent}`}
                    />
                    <div className="absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

                    <div className="relative text-center md:text-left">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {program.title}
                      </h3>
                      <p className="text-paragraph text-[15px] sm:text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                        {program.description}
                      </p>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:gap-3 hover:shadow-xl hover:shadow-primary/30"
                      >
                        Know more
                        <ArrowRight className="h-4 w-4" />
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

/* --------------------------- Journey Form Section -------------------------- */
function JourneyForm() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-hover ring-8 ring-white">
              <Image
                src="https://images.pexels.com/photos/8866802/pexels-photo-8866802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Edumentora support team assisting students"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-3 sm:right-6 glass rounded-[1.5rem] p-4 shadow-hover ring-1 ring-primary/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/25">
                  <Headset className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">Expert Support</p>
                  <p className="text-xs text-paragraph">Always Here to Help</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative rounded-[2rem] bg-white border border-border/70 shadow-card p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

              <h2
                className="relative text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-heading mb-8"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Start Your Journey with Edumentora
              </h2>

              <form className="relative flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-xl border border-border bg-bg-section px-5 py-4 text-sm text-heading placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-border bg-bg-section px-5 py-4 text-sm text-heading placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full rounded-xl border border-border bg-bg-section px-5 py-4 text-sm text-heading placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-border bg-bg-section px-5 py-4 text-sm text-heading placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CreditTransferContent() {
  return (
    <>
      <KnowMoreIntro />
      <ProgramList />
      <JourneyForm />
    </>
  );
}
