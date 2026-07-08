"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/common/SectionTitle";
import { Star, Quote } from "lucide-react";

const defaultTestimonials = [
  {
    name: "Rahul Menon",
    position: "B.Tech Student, Glocal University",
    rating: 5,
    quote:
      "Edumentora made my credit transfer process incredibly smooth. I was worried about losing my credits when moving to a new city, but their team handled everything professionally. I joined the right semester without any hassle.",
  },
  {
    name: "Anjali Krishnan",
    position: "MBA Student, Arni University",
    rating: 5,
    quote:
      "The guidance I received from Edumentora was exceptional. They helped me understand the credit transfer system, reviewed all my documents, and ensured my previous subjects were accepted. Highly recommended!",
  },
  {
    name: "Vishnu Prasad",
    position: "BBA Student, Maya Devi University",
    rating: 5,
    quote:
      "Choosing Edumentora was the best decision for my education. They saved me an entire year by transferring my credits efficiently. The staff is knowledgeable, supportive, and always available to answer questions.",
  },
  {
    name: "Priya Sharma",
    position: "B.Sc Student, Glocal University",
    rating: 5,
    quote:
      "I was skeptical about credit transfer at first, but Edumentora proved me wrong. Their transparent process and expert counselors made the transition seamless. I am now continuing my degree without any delays.",
  },
  {
    name: "Mohammed Faizal",
    position: "BCA Student, Arni University",
    rating: 5,
    quote:
      "Edumentora values your previous efforts. They ensured all my completed subjects were recognized by the new university. The entire process was quick, and the team was extremely helpful throughout.",
  },
];

export default function TestimonialSlider() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mapped = data.map((item: any) => ({
              name: item.name,
              position: item.role,
              rating: item.rating,
              quote: item.feedback,
            }));
            setList(mapped);
          } else {
            setList(defaultTestimonials);
          }
        } else {
          setList(defaultTestimonials);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setList(defaultTestimonials);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            label="Testimonials"
            title="What Our Students Say"
            description="Your trusted partner in education, offering expert guidance and innovative learning resources to empower students and professionals for academic and career success."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {list.length > 0 && (
            <Swiper
              key={list.length}
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {list.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative h-full bg-gradient-to-b from-white to-bg-section/70 rounded-[2rem] p-8 border border-border/70 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 ring-1 ring-border/60">
                          <Quote className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex gap-1 rounded-full bg-accent/10 px-3 py-1.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-paragraph leading-relaxed mb-7 text-sm">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-4 pt-5 border-t border-border/60">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-sm shadow-lg shadow-primary/20 ring-2 ring-white">
                          {(testimonial.name || "")
                            .split(" ")
                            .filter(Boolean)
                            .map((n: string) => n[0])
                            .join("") || "U"}
                        </div>
                        <div>
                          <h4
                            className="text-sm font-bold text-heading"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-paragraph mt-0.5">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </div>
    </section>
  );
}
