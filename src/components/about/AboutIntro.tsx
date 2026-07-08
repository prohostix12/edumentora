"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorative squiggles */}
      <svg
        className="absolute top-16 left-[42%] hidden lg:block"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M10 90 Q 60 10, 110 50"
          stroke="#E31E24"
          strokeOpacity="0.35"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 105 Q 70 25, 115 65"
          stroke="#E31E24"
          strokeOpacity="0.2"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Organic Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-[540px] mx-auto lg:mx-0">
              {/* Decorative line arcs behind main image */}
              <svg
                className="absolute -left-10 bottom-24 z-0"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
              >
                <path
                  d="M5 60 Q 45 5, 85 40"
                  stroke="#252A6C"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 75 Q 45 20, 88 55"
                  stroke="#10B981"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Main arch image */}
              <div className="relative z-10 w-[78%]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-bl-[3rem] rounded-br-[8rem] shadow-hover">
                  <Image
                    src="https://images.pexels.com/photos/6283227/pexels-photo-6283227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="Student studying on laptop in a library"
                    fill
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Half-circle image top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-[8%] right-0 z-20 w-[44%]"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-card ring-4 ring-white">
                  <Image
                    src="https://images.pexels.com/photos/8199174/pexels-photo-8199174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Smiling student holding notebooks in university hallway"
                    fill
                    sizes="(max-width: 1024px) 40vw, 240px"
                    className="object-cover"
                  />
                </div>
                {/* Squiggle above half-circle */}
                <svg
                  className="absolute -top-12 right-4"
                  width="70"
                  height="50"
                  viewBox="0 0 70 50"
                  fill="none"
                >
                  <path
                    d="M5 40 Q 35 0, 65 25"
                    stroke="#E31E24"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Small circle image bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-[4%] right-[6%] z-20 w-[32%]"
              >
                <div className="relative aspect-square overflow-hidden rounded-full shadow-card ring-8 ring-bg-section">
                  <Image
                    src="https://images.pexels.com/photos/8199613/pexels-photo-8199613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Students researching books in a library"
                    fill
                    sizes="(max-width: 1024px) 30vw, 170px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating accent dot */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[45%] -left-4 z-0 h-6 w-6 rounded-full bg-accent/30"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 left-[30%] z-0 h-4 w-4 rounded-full bg-primary/25"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              About Edumentora
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Edumentora makes restarting your education easy by transferring
              past credits to accredited universities, saving you time and
              money.
            </h2>

            <p className="text-base sm:text-lg text-paragraph leading-relaxed">
              Resume your graduation or postgraduate education through
              Edumentora, a leading academic credit transfer institution.
              Transfer earned credits for B. Tech, engineering, and other
              programs to recognized universities, saving time and costs while
              achieving academic success.
            </p>

            {/* Call us card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-4 rounded-[1.5rem] bg-gradient-to-r from-bg-section to-white border border-border/70 shadow-soft p-5 w-fit"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/25">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-paragraph">Call Us Anytime</p>
                <a
                  href="tel:+919744587777"
                  className="text-lg font-bold text-heading hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  +91 974458 7777
                </a>
              </div>
            </motion.div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
              >
                Read More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
