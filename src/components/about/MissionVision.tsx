"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  const [content, setContent] = useState({
    missionTitle: "Our Mission",
    missionDescription: "In EduMentora Our Mission is to help students overcome academic setbacks by facilitating seamless credit transfers to accredited universities for successful completion.",
    visionTitle: "Our Vision",
    visionDescription: "In EduMentora Our Vision is to bright create a future where every student can complete their education without barriers through recognized credit transfer programs."
  });

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch("/api/admin/home", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setContent({
            missionTitle: data.missionTitle || "Our Mission",
            missionDescription: data.missionDescription || "In EduMentora Our Mission is to help students overcome academic setbacks by facilitating seamless credit transfers to accredited universities for successful completion.",
            visionTitle: data.visionTitle || "Our Vision",
            visionDescription: data.visionDescription || "In EduMentora Our Vision is to bright create a future where every student can complete their education without barriers through recognized credit transfer programs."
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchContent();
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-12 items-center">
          {/* Left - Navy Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:col-span-7 rounded-[2rem] bg-gradient-to-br from-secondary to-[#1A1E52] p-8 sm:p-12 lg:p-14 lg:pr-40 shadow-hover overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative">
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-primary mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Empowering students through credit transfer</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
                Resume your graduation or postgraduate education through
                Edumentora, a leading academic credit transfer institution.
                Transfer earned credits for B. Tech, engineering, and other
                programs to recognized universities, saving time and costs
                while achieving academic success.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-10"
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold !text-white mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {content.missionTitle}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {content.missionDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold !text-white mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {content.visionTitle}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {content.visionDescription}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 lg:col-span-5 mt-8 lg:mt-0 lg:-ml-32"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-hover ring-8 ring-white">
              <Image
                src="https://images.pexels.com/photos/7942522/pexels-photo-7942522.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Graduates celebrating their achievement at a graduation ceremony"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
