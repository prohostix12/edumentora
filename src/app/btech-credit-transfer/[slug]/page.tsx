import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, GraduationCap, MapPin, ShieldCheck, Clock3 } from "lucide-react";
import { btechLocations, getBTechLocationBySlug } from "@/lib/btech-locations";

interface BTechLocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return btechLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: BTechLocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getBTechLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found - Edumentora",
    };
  }

  return {
    title: `${location.label} - Edumentora`,
    description: `Explore ${location.label} with Edumentora. Resume your engineering education through trusted academic credit transfer support in ${location.place}.`,
  };
}

export default async function BTechLocationPage({ params }: BTechLocationPageProps) {
  const { slug } = await params;
  const location = getBTechLocationBySlug(slug);

  if (!location) notFound();

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden gradient-bg-hero py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-2 text-sm font-semibold text-primary shadow-soft">
              <MapPin className="h-4 w-4" />
              {location.place}
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-[1.08]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {location.label}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-paragraph leading-relaxed">
              Continue your engineering journey in {location.place} through a structured academic credit transfer path with Edumentora. We help students preserve previously earned credits, reduce delays, and move toward a recognized B.Tech qualification with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
              >
                Enquire Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/btech-credit-transfer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                View Main B.Tech Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Academic Restart Support",
                text: `Students in ${location.place} can continue from where they left off instead of restarting their degree from the beginning.`
              },
              {
                icon: ShieldCheck,
                title: "Recognized Pathway",
                text: `Edumentora supports transfers into UGC-recognized institutions so your prior academic effort continues to matter.`
              },
              {
                icon: Clock3,
                title: "Time & Cost Efficiency",
                text: `A well-guided transfer process can reduce repetition, save semesters, and make degree completion more affordable.`
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-border/70 bg-gradient-to-b from-bg-section to-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-hover"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h2
                  className="text-xl font-bold text-heading mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.title}
                </h2>
                <p className="text-sm text-paragraph leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-border/70 bg-white p-8 lg:p-10 shadow-soft">
            <p className="text-base sm:text-lg text-paragraph leading-relaxed">
              If you are searching for <span className="font-semibold text-heading">{location.label}</span>, Edumentora can help you evaluate completed semesters, understand eligibility, organize academic documents, and identify the best continuation pathway for your B.Tech studies. Whether your education was interrupted by academic, financial, personal, or institutional reasons, our goal is to make sure your earlier effort still counts toward a successful future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
