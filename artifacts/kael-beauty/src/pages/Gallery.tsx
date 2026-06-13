import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Nails", "Brows & Lashes", "Massage", "Waxing"];

const IMAGES = [
  { id: 1,  src: "/images/gallery-1.png",  alt: "Nude and pink ombre gel nail art",              category: "Nails" },
  { id: 2,  src: "/images/gallery-2.png",  alt: "Rose gold chrome mirror nail art",              category: "Nails" },
  { id: 3,  src: "/images/gallery-3.png",  alt: "3D floral nail art with crystals",              category: "Nails" },
  { id: 4,  src: "/images/gallery-4.png",  alt: "Eyebrow lamination and shaping result",         category: "Brows & Lashes" },
  { id: 5,  src: "/images/gallery-5.png",  alt: "Eyelash lift and extensions",                   category: "Brows & Lashes" },
  { id: 6,  src: "/images/gallery-6.png",  alt: "Eyebrow tinting and lifting treatment",         category: "Brows & Lashes" },
  { id: 7,  src: "/images/gallery-7.png",  alt: "Deep tissue back massage treatment",            category: "Massage" },
  { id: 8,  src: "/images/gallery-8.png",  alt: "Hot stone massage at Kael Beauty Centre",       category: "Massage" },
  { id: 9,  src: "/images/gallery-9.png",  alt: "Aromatherapy massage with essential oils",      category: "Massage" },
  { id: 10, src: "/images/gallery-10.png", alt: "Professional leg waxing treatment",             category: "Waxing" },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80",
    alt: "Eyebrow threading treatment at beauty salon",
    category: "Waxing",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=800&fit=crop&q=80",
    alt: "Cat eye gel nail art with gold accents",
    category: "Nails",
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All"
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCat);

  return (
    <PageTransition>
      <SEO
        title="Gallery | Nail Art, Brows & Beauty | Kael Beauty Centre"
        description="Browse our gallery of nail art, brow treatments, lash extensions and massage therapies at Kael Beauty Centre, Earl's Court, London."
        path="/gallery"
      />

      <div className="bg-card py-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A glimpse into the exquisite results and serene atmosphere at Kael Beauty Centre.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/20 text-foreground hover:bg-secondary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                data-testid={`gallery-image-${img.id}`}
                className="break-inside-avoid relative group rounded-xl overflow-hidden bg-muted mb-4"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-serif font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm text-sm">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
