"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { MapPin, Award, Building2 } from "lucide-react";

const universities = [
  {
    name: "Glocal University",
    location: "Saharanpur, Uttar Pradesh",
    description:
      "A leading multidisciplinary institution offering over 55 undergraduate, postgraduate, and professional courses across eight major schools, including Engineering, Management, Law, and Pharmacy.",
    highlights: ["350-acre campus", "UGC Recognized", "Industry 4.0 Curriculum"],
    established: "2011",
  },
  {
    name: "Arni University",
    location: "Kangra, Himachal Pradesh",
    description:
      "Established in 2009, Arni University is located amidst the serene foothills of the Dhauladhar Mountain Ranges, delivering high-quality multidisciplinary education with over 200 expert instructors.",
    highlights: ["120-acre campus", "UGC Recognized", "Wi-Fi Enabled"],
    established: "2009",
  },
  {
    name: "Maya Devi University",
    location: "Uttarakhand",
    description:
      "With a distinguished legacy of 15 years, Maya Devi University is dedicated to advancing professional education across engineering, management, agriculture, pharmacy, and more.",
    highlights: ["World-class Infrastructure", "Industry Interface", "15+ Years Legacy"],
    established: "2010",
  },
];

export default function UniversityGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            label="Partner Universities"
            title="Top Universities We Collaborate With"
            description="We have partnered with leading universities across India to provide you with the best credit transfer and admission opportunities."
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-[2rem] border border-border/70 shadow-soft overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-3"
            >
              {/* Header */}
              <div className="relative h-52 bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center p-8 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border border-primary/10 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-secondary/10 group-hover:scale-125 transition-transform duration-700" />

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-primary shadow-soft ring-1 ring-primary/10">
                    <Award className="h-3.5 w-3.5" />
                    UGC Approved
                  </span>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-bg-section shadow-card ring-1 ring-border mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {uni.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-paragraph">{uni.location}</span>
                </div>

                <p className="text-paragraph leading-relaxed mb-6 text-sm">
                  {uni.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {uni.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-3.5 py-1.5 text-xs font-semibold text-secondary ring-1 ring-border/60 transition-colors duration-300 group-hover:ring-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credit Transfer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 rounded-[2rem] bg-gradient-to-br from-primary via-primary-dark to-secondary p-8 lg:p-12 text-white overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-2xl lg:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Understanding University Credit Transfer
              </h3>
              <p className="text-red-100 leading-relaxed">
                Many students reach a point where they want to change their university.
                With University Credit Transfer, the subjects and credits a student has
                already earned will never go to waste. The new university reviews the
                mark sheets and syllabus from the previous institution and accepts the
                subjects that match. This saves both time and money.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { value: "No", label: "Repeated Classes" },
                { value: "100%", label: "Credit Valuation" },
                { value: "Flexible", label: "Study Locations" },
                { value: "On Time", label: "Degree Completion" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.value}
                  </div>
                  <p className="text-sm text-red-100">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
