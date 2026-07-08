"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Route,
  HeartHandshake,
  MousePointerClick,
  ShieldCheck,
  PiggyBank,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Expert guidance",
    description:
      "Our dedicated team offers tailored guidance, ensuring a seamless and successful academic credit transfer experience for each student.",
  },
  {
    icon: Route,
    title: "Flexible learning paths",
    description:
      "We offer tailored programs that allow you to balance education with personal and professional commitments effectively.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized support",
    description:
      "Our experienced team offers personalized support, guaranteeing a seamless and hassle-free academic credit transfer experience.",
  },
  {
    icon: MousePointerClick,
    title: "Effortless credit transfer",
    description:
      "Seamlessly transfer your earned credits to resume your education without losing progress or starting from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted university",
    description:
      "Collaborations with Glocal University, Radha Govind University, and Arni University ensure globally recognized and accredited degrees.",
  },
  {
    icon: PiggyBank,
    title: "Save time and money",
    description:
      "Resume your education from where you paused, saving valuable time and reducing overall financial expenses efficiently.",
  },
];

export default function WhyRightChoice() {
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
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading max-w-md"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Why We are the Right Choice
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-[2rem] bg-gradient-to-b from-bg-section to-white border border-border/70 shadow-soft p-8 hover:shadow-hover hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner glow */}
              <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-secondary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-border group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500 group-hover:scale-110">
                  <reason.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-paragraph text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
