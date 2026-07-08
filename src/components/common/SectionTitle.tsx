"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${alignClass} max-w-3xl`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight ${
          light ? "text-white" : "text-heading"
        }`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-paragraph"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
