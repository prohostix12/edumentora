"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { ChevronDown, HelpCircle } from "lucide-react";

const defaultFaqs = [
  {
    question: "What is credit transfer and how does it work?",
    answer:
      "Credit transfer allows students to carry forward the credits they have already earned from a previous institution to a new university. Students submit their mark sheets, syllabus, and proof of completed subjects. The new institute then checks which subjects match their own syllabus. Once the credits are accepted, the student can directly join the appropriate semester without starting from the beginning.",
  },
  {
    question: "How long does the credit transfer process take?",
    answer:
      "The credit transfer process typically takes between 2 to 6 weeks, depending on the universities involved and the completeness of your documentation. We work closely with both institutions to expedite the process and ensure a smooth transition.",
  },
  {
    question: "Will all my credits be accepted by the new university?",
    answer:
      "Credit acceptance depends on how closely your previous subjects match the new university's syllabus. Our experts review your documents beforehand to give you an accurate assessment of which credits are likely to be transferred. In most cases, a significant portion of credits are accepted.",
  },
  {
    question: "Is credit transfer recognized by UGC?",
    answer:
      "Yes, credit transfer is a recognized process under UGC guidelines. We only partner with UGC-recognized universities that accept credit transfers in accordance with regulatory frameworks. Your degree will be fully valid and recognized.",
  },
  {
    question: "Can I transfer credits from any university?",
    answer:
      "Credit transfers are generally possible between recognized universities. The key factor is whether the subjects you have completed align with the syllabus of the receiving university. We evaluate your case individually and guide you to the best-matching institutions.",
  },
  {
    question: "What documents are required for credit transfer?",
    answer:
      "You will need to submit your mark sheets from the previous institution, detailed syllabus of completed subjects, course completion certificates, identity proof, and transfer certificate. Our team assists you in gathering and organizing all necessary documents.",
  },
  {
    question: "Does credit transfer save money?",
    answer:
      "Absolutely. Credit transfer saves both time and money. Since you do not need to repeat classes you have already passed, you pay fewer semester fees and complete your degree faster, reducing overall educational expenses.",
  },
  {
    question: "Which universities do you partner with?",
    answer:
      "We partner with leading UGC-recognized universities including Glocal University, Arni University, and Maya Devi University. These institutions offer a wide range of programs across engineering, management, law, pharmacy, and more.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`relative rounded-[1.5rem] border overflow-hidden transition-all duration-500 ${
        isOpen
          ? "border-primary/25 bg-gradient-to-b from-white to-bg-section/60 shadow-card -translate-y-0.5"
          : "border-border/70 bg-white/60 shadow-soft hover:border-primary/20 hover:shadow-card hover:-translate-y-0.5"
      }`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className={`text-base font-semibold transition-colors ${
            isOpen ? "text-primary" : "text-heading"
          }`}
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25"
              : "bg-bg-section text-paragraph ring-1 ring-border/60"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-border mb-4" />
              <p className="text-paragraph leading-relaxed text-sm">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqList, setFaqList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch("/api/faqs", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setFaqList(data);
          } else {
            setFaqList(defaultFaqs);
          }
        } else {
          setFaqList(defaultFaqs);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic FAQs:", err);
        setFaqList(defaultFaqs);
      }
    }
    fetchFaqs();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our credit transfer process, university partnerships, and student services."
          />
        </div>

        <div className="flex flex-col gap-4">
          {faqList.map((faq, index) => (
            <AccordionItem
              key={faq._id || index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 rounded-[2rem] bg-gradient-to-br from-primary via-primary-dark to-secondary p-8 lg:p-10 text-center text-white overflow-hidden"
        >
          <HelpCircle className="h-10 w-10 mx-auto mb-4 text-white/80" />
          <h3
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Still have questions?
          </h3>
          <p className="text-red-100 mb-6 text-sm">
            Our team is here to help you with any queries about credit transfer and admissions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
