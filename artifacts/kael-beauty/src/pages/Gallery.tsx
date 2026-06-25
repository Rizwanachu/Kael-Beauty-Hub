import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
  const [lightbox, setLightbox] = useState<number | null>(null); // index into `filtered`

  const filtered = activeCat === "All"
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCat);

  const openAt = (idx: number) => setLightbox(idx);
  const close   = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox(i => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox(i => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

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
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => { setActiveCat(cat); setLightbox(null); }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-[#e8e5e1] text-foreground hover:bg-[#d4d0ca]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — all images visible immediately, no stagger */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <button
              key={img.id}
              data-testid={`gallery-image-${img.id}`}
              onClick={() => openAt(idx)}
              className="break-inside-avoid w-full relative group rounded-xl overflow-hidden bg-muted mb-4 block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                <span className="text-white text-xs font-medium bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {img.category}
                </span>
                <ZoomIn className="w-5 h-5 text-white drop-shadow" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 md:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
              <p className="mt-3 text-white/70 text-sm text-center px-4">
                {filtered[lightbox].alt}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightbox + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
