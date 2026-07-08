"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface University {
  logo: string;
  name: string;
  subtitle?: string;
  nameClass: string;
}

const universities: University[] = [
  {
    logo: "/logos/miu.png",
    name: "Manipur International University (MIU)",
    nameClass: "text-heading",
  },
  {
    logo: "/logos/glocal.png",
    name: "Glocal University",
    subtitle: "Shaping Global Minds",
    nameClass: "text-heading",
  },
  {
    logo: "/logos/mayadevi.png",
    name: "Maya Devi University",
    nameClass: "text-secondary",
  },
  {
    logo: "/logos/arni.png",
    name: "Arni University",
    subtitle: "(University Under Section 2(f) of the UGC Act)",
    nameClass: "text-secondary",
  },
];

export default function TrustedUniversities() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
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
            Trusted Partners
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading max-w-lg"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our Most Trusted Universities
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative bg-white rounded-[2rem] border border-border/70 shadow-soft hover:shadow-hover hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

              <div className="relative h-28 w-28 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              <h3
                className={`text-base font-bold leading-snug ${uni.nameClass}`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {uni.name}
              </h3>

              {uni.subtitle && (
                <p className="mt-1.5 text-xs text-paragraph italic">
                  {uni.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
