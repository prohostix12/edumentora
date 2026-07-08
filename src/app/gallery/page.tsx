import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Sparkles, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery - Edumentora",
  description:
    "Explore the Edumentora gallery and highlights from our student success journey.",
};

const galleryItems = [
  {
    title: "Student Success Moments",
    category: "Achievement",
    image:
      "https://images.pexels.com/photos/17615695/pexels-photo-17615695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Smiling graduates posing together outdoors after graduation.",
    size: "large",
  },
  {
    title: "Campus Guidance Sessions",
    category: "Counseling",
    image:
      "https://images.pexels.com/photos/20030981/pexels-photo-20030981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Student receiving academic guidance in a counseling conversation.",
    size: "normal",
  },
  {
    title: "Academic Counseling Events",
    category: "Support",
    image:
      "https://images.pexels.com/photos/7176132/pexels-photo-7176132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Counselor discussing educational pathways with students.",
    size: "normal",
  },
  {
    title: "Partner University Highlights",
    category: "University",
    image:
      "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Students attending a bright university lecture hall session.",
    size: "wide",
  },
  {
    title: "Graduation & Achievement Stories",
    category: "Graduation",
    image:
      "https://images.pexels.com/photos/35487178/pexels-photo-35487178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Group of university graduates celebrating with diplomas outdoors.",
    size: "normal",
  },
  {
    title: "Workshops and Career Support",
    category: "Workshop",
    image:
      "https://images.pexels.com/photos/18999469/pexels-photo-18999469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Professionals collaborating during a training workshop.",
    size: "normal",
  },
  {
    title: "Focused Learning Environments",
    category: "Classroom",
    image:
      "https://images.pexels.com/photos/8199165/pexels-photo-8199165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "College students studying with laptops and books in class.",
    size: "wide",
  },
  {
    title: "Online Learning Flexibility",
    category: "Digital Learning",
    image:
      "https://images.pexels.com/photos/19613149/pexels-photo-19613149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Student studying with a laptop and book at home.",
    size: "tall",
  },
];

function sizeClasses(size: string) {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "wide":
      return "md:col-span-2";
    case "tall":
      return "md:row-span-2";
    default:
      return "";
  }
}

function aspectClasses(size: string) {
  switch (size) {
    case "large":
      return "aspect-[16/12] md:h-full";
    case "wide":
      return "aspect-[16/9]";
    case "tall":
      return "aspect-[4/5] md:h-full";
    default:
      return "aspect-[4/3]";
  }
}

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden gradient-bg-hero py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-2 text-sm font-semibold text-primary shadow-soft">
            <Camera className="h-4 w-4" />
            Gallery
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Explore Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-paragraph leading-relaxed">
            Discover snapshots of academic guidance, student support, partner
            universities, and the success journey that defines Edumentora.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Visual Highlights
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-heading"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Moments that Reflect Student Growth
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-bg-section px-4 py-2 text-sm font-medium text-paragraph ring-1 ring-border/70 w-fit">
              <ImageIcon className="h-4 w-4 text-primary" />
              {galleryItems.length} Curated Photos
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 auto-rows-[240px]">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className={`group ${sizeClasses(item.size)}`}
              >
                <div className="relative h-full overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover">
                  <div className={`relative ${aspectClasses(item.size)} h-full`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-90" />
                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
