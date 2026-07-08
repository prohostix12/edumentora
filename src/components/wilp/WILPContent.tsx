"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  LaptopMinimal,
  LayoutTemplate,
  BadgeCheck,
  Wallet,
  RefreshCw,
  TrendingUp,
  Users,
  GraduationCap,
  Building2,
  Stethoscope,
  Landmark,
  Newspaper,
  Scale,
  ShoppingBag,
  School,
  Hotel,
  ChevronRight,
  Send,
  Headset,
  Award,
  Globe,
} from "lucide-react";

const whyChoose = [
  {
    icon: BriefcaseBusiness,
    title: "Work While Studying",
    description: "No need to quit your job.",
  },
  {
    icon: LayoutTemplate,
    title: "Flexible Learning Modes",
    description: "Online, weekend, and evening classes.",
  },
  {
    icon: LaptopMinimal,
    title: "Industry-Focused Curriculum",
    description: "Courses designed for real-world applications.",
  },
  {
    icon: BadgeCheck,
    title: "Recognized Degrees & Certifications",
    description: "Valid for job promotions and career transitions.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective & Time-Saving",
    description: "Complete your education faster and affordably.",
  },
  {
    icon: RefreshCw,
    title: "University Credit Transfers",
    description: "Convert previous academic credits and complete your degree.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Opportunities",
    description: "Gain higher qualifications to boost your professional success.",
  },
];

const popularCourses = [
  {
    icon: GraduationCap,
    title: "Engineering & Tech",
    courses: "B.Tech/M.Tech in Mechanical, Civil, CSE, ECE, IT, AI, Cybersecurity",
  },
  {
    icon: BriefcaseBusiness,
    title: "Management",
    courses: "MBA, Executive MBA, Business Analytics, Digital Marketing",
  },
  {
    icon: LaptopMinimal,
    title: "Computer Science",
    courses: "MCA, Software Engineering, Cloud, AI, Blockchain",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    courses: "Biotechnology, Healthcare Management",
  },
  {
    icon: Landmark,
    title: "Finance",
    courses: "Financial Management, Banking",
  },
  {
    icon: Newspaper,
    title: "Media",
    courses: "Digital Marketing, Mass Communication",
  },
  {
    icon: Scale,
    title: "Law",
    courses: "Corporate, Cyber, IP Law",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    courses: "Retail Management, E-Commerce",
  },
  {
    icon: School,
    title: "Education",
    courses: "Educational Leadership",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    courses: "Hotel Management, Tourism",
  },
];

const advantages = [
  "Study Without Leaving Your Job – Work & learn simultaneously.",
  "Flexible Learning Options – Online, weekend & evening classes.",
  "Industry-Focused Curriculum – Gain practical, job-ready skills.",
  "University-Recognized Degree – Accepted by top employers & government.",
  "Faster Career Growth – Better promotions, salary hikes & job security.",
  "Cost-Effective & Time-Saving – No relocation, lower fees, and quick completion.",
  "Global Career Opportunities – Valid for multinational & international jobs.",
  "Easy Admission & Credit Transfer – Seamless enrollment & degree continuation.",
];

function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden gradient-bg-hero">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[3rem] shadow-hover ring-8 ring-white">
                <Image
                  src="https://images.pexels.com/photos/7964503/pexels-photo-7964503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Professional using laptop while participating in Work Integrated Learning program at Edu Mentora"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute -bottom-5 left-6 right-6 rounded-[1.25rem] bg-white/95 backdrop-blur-sm px-5 py-4 shadow-hover ring-1 ring-primary/10"
              >
                <p className="text-sm font-medium text-heading">
                  Professional using laptop while participating in Work Integrated Learning program at Edu Mentora
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-5 py-2 text-sm font-semibold text-primary shadow-soft w-fit">
              WILP
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] text-heading"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Work Integrated Learning Program
            </h1>
            <p className="text-lg text-paragraph leading-relaxed max-w-xl">
              Edumentora&apos;s WILP credit transfer helps working professionals
              continue their education without losing progress. Carry your
              credits forward and keep growing on the job and in the classroom.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
              >
                Know more
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-b from-bg-section to-white border border-border/70 shadow-soft p-8 lg:p-10"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight text-heading mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Work Integrated Learning Program <span className="text-primary">(WILP)</span>
          </h2>
          <div className="flex flex-col gap-6 text-base sm:text-lg text-paragraph leading-relaxed">
            <p>
              Work Integrated Learning Program (WILP) is a flexible education system designed for working professionals who want to pursue higher education without leaving their jobs. It allows individuals to gain academic qualifications while applying their knowledge in real-world work environments.
            </p>
            <p>
              At Edumentora, we specialize in academic credit transfer programs and support students in completing their education through WILP. Our programs are tailored for professionals who need a recognized degree for career growth without disrupting their work schedules.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Benefits
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Why Choose WILP Through Edumentora?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {whyChoose.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-[2rem] bg-white border border-border/70 shadow-soft p-8 hover:shadow-hover hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-14 -right-14 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg ring-4 ring-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {index + 1}. {item.title}
                </h3>
                <p className="text-paragraph text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesAndEligibility() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Eligibility & Courses
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-heading mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Who Can Apply for WILP?
            </h2>
            <p className="text-base sm:text-lg text-paragraph leading-relaxed mb-8">
              WILP through Edumentora is for: Working professionals, career switchers, entrepreneurs, employees, and students completing degrees.
            </p>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-card ring-4 ring-bg-section">
              <Image
                src="https://images.pexels.com/photos/7942541/pexels-photo-7942541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Mentor awarding top-performing apprentice for excellence during apprenticeship training"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-paragraph italic">
              Mentor awarding top-performing apprentice for excellence during apprenticeship training
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3
                className="text-2xl font-bold text-heading mb-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Popular Courses:
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {popularCourses.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group rounded-[1.75rem] bg-gradient-to-b from-bg-section to-white border border-border/70 shadow-soft p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-border group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold text-heading mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-paragraph leading-relaxed">
                        {item.courses}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary via-[#1E2360] to-[#161A45] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-4">
              Smart Advantages
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Key Advantages of WILP
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Achieve your professional goals with WILP – The Smart Way to Learn!
            </p>

            <div className="relative rounded-[2rem] overflow-hidden shadow-hover ring-4 ring-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/7972276/pexels-photo-7972276.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Credit Transfer program at TIMS Education Kerala — student with transfer documents"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300 italic">
              Credit Transfer program at TIMS Education Kerala — student with transfer documents
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-5">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group rounded-[1.5rem] bg-white/[0.06] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/[0.1] hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyForm() {
  return (
    <section className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                alt="Edumentora support team helping professionals with WILP admissions"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
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
                  <p className="text-xs text-paragraph">Work & Learn Guidance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

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

export default function WILPContent() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhyChooseSection />
      <CoursesAndEligibility />
      <AdvantagesSection />
      <JourneyForm />
    </>
  );
}
