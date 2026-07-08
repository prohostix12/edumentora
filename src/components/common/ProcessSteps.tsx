"use client";

import { motion } from "framer-motion";
import { FileText, Video, Armchair, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Start Application",
    description: "Start your Application",
  },
  {
    number: "02",
    icon: Video,
    title: "Video Verification",
    description: "Complete Your Video Verification",
  },
  {
    number: "03",
    icon: Armchair,
    title: "Seat Reservation",
    description: "Reserve Your Seat",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading max-w-md"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Know about Our Process
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-6">
          {/* Connecting dashed line (desktop) */}
          <div className="absolute top-14 left-[16%] right-[16%] hidden md:block border-t-2 border-dashed border-border" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-white to-bg-section/60 rounded-[2rem] border border-border/70 shadow-soft p-8 lg:p-9 hover:shadow-hover hover:-translate-y-3 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                {/* Big ghost number */}
                <span
                  className="absolute -top-4 right-4 text-[7rem] font-bold leading-none text-secondary/[0.05] group-hover:text-primary/[0.08] transition-colors duration-500 select-none"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {step.number}
                </span>

                <div className="relative">
                  {/* Icon circle on top of line */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/25 ring-4 ring-white mb-7 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  <span
                    className="inline-block text-sm font-bold text-primary mb-2 tracking-widest"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    STEP {step.number}
                  </span>

                  <h3
                    className="text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-paragraph text-[15px]">{step.description}</p>
                </div>
              </div>

              {/* Arrow between cards (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-5 z-10 hidden lg:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-border">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
