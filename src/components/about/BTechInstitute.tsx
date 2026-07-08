"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BTechInstitute() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary via-[#1E2360] to-[#161A45] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
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
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight !text-white mb-8"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Best Credit Transfer Institute in Kerala for B.Tech Students
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Edumentora, we believe education is a right—not a privilege.
              Unfortunately, many students are forced to discontinue their
              graduation or postgraduate programs due to academic roadblocks,
              personal setbacks, or institutional barriers. This often leaves
              them uncertain about how to complete their education without
              starting over. As a leading academic credit transfer institution,
              Edumentora specializes in helping students seamlessly resume and
              complete their degrees, including B. Tech and other professional
              programs. Recognized as a trusted engineering academic credit
              transfer institution in Kerala, we offer a streamlined solution
              for transferring previously earned academic credits to
              UGC-recognized universities. Our process is simple and effective:
              we assess your existing academic credits, align them with partner
              universities, and ensure a smooth transfer—saving you valuable
              time and money. With Edumentora, you can continue your education
              from where you left off and move closer to your academic and
              career goals without unnecessary repetition or delays.
            </p>
          </motion.div>

          {/* Right - Student image on red panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Floating accents */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-primary/20 rotate-12 pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -right-5 h-12 w-12 rounded-full bg-accent/20 pointer-events-none"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-hover ring-1 ring-white/10">
                <Image
                  src="/images/btech-student.png"
                  alt="Happy B.Tech student holding a notebook"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
                {/* Bottom gradient for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
