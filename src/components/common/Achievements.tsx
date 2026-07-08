"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Repeat, Briefcase, Trophy, GraduationCap } from "lucide-react";

interface Achievement {
  icon: typeof Repeat;
  end: number;
  suffix: string;
  label: string;
}

const achievements: Achievement[] = [
  {
    icon: Repeat,
    end: 800,
    suffix: "+",
    label: "Successful Credit Transfers",
  },
  {
    icon: Briefcase,
    end: 16,
    suffix: "",
    label: "Years of Expertise in Industry",
  },
  {
    icon: Trophy,
    end: 163,
    suffix: "",
    label: "Awards and Recognition",
  },
  {
    icon: GraduationCap,
    end: 3000,
    suffix: "+",
    label: "Graduates With Certified Degrees",
  },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const duration = 2200;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-secondary via-[#1E2360] to-[#161A45]">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-[12%] h-32 w-32 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 left-[8%] h-24 w-24 rounded-full border border-white/5"
        />
        {/* Dot grid */}
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
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-5">
            <Trophy className="h-4 w-4 text-accent" />
            Milestones
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold !text-white"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our Great Achievements
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative rounded-[2rem] bg-white/[0.06] backdrop-blur-sm border border-white/10 p-8 text-center overflow-hidden hover:bg-white/[0.1] hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <div
                  className="text-4xl sm:text-5xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <AnimatedNumber end={item.end} suffix={item.suffix} />
                </div>

                {/* Divider */}
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 group-hover:w-16 transition-all duration-500" />

                <p className="text-sm font-medium text-slate-300 leading-snug">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
