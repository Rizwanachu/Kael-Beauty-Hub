import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const BA_PAIRS = [
  {
    before: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=750&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=750&fit=crop&q=80&sat=-100",
    beforeLabel: "Natural", afterLabel: "Gel Nails",
    alt: "Nail enhancement", title: "Gel Nail Enhancement",
  },
  {
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=750&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop&q=80",
    beforeLabel: "Before", afterLabel: "After",
    alt: "Brow lamination treatment", title: "Brow Lamination",
  },
  {
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=750&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=750&fit=crop&q=80",
    beforeLabel: "Before", afterLabel: "After",
    alt: "Lash lift and tint", title: "Lash Lift & Tint",
  },
];

const CATEGORIES = ["All", "Hair", "Nails", "Massage", "Waxing"];

const IMAGES = [
  { id: 1,  src: "/images/gallery-nails-1.jpg", alt: "Royal blue gel nail art with floral accent", category: "Nails" },
  { id: 2,  src: "/images/gallery-nails-2.jpg", alt: "Cream almond gel nails",                    category: "Nails" },
  { id: 3,  src: "/images/gallery-nails-3.jpg", alt: "Soft pink almond gel nails",                category: "Nails" },
  { id: 21, src: "/images/gallery-nails-4.jpg", alt: "Purple floral pedicure nail art",           category: "Nails" },
  { id: 22, src: "/images/gallery-nails-5.jpg", alt: "Purple floral gel nail art",                category: "Nails" },
  { id: 23, src: "/images/gallery-nails-6.jpg", alt: "Red gel nails with white line art",         category: "Nails" },
  { id: 24, src: "/images/gallery-nails-7.jpg", alt: "Dark red gel nails with pink accent",       category: "Nails" },
  { id: 4,  src: "/images/gallery-hair.jpg",   alt: "Balayage hair colour treatment",              category: "Hair" },
  { id: 13, src: "/images/gallery-hair-2.jpg", alt: "Blonde curly hair styling",                  category: "Hair" },
  { id: 14, src: "/images/gallery-hair-3.jpg", alt: "Brunette ombre curls hair treatment",         category: "Hair" },
  { id: 15, src: "/images/gallery-hair-4.jpg", alt: "Soft balayage highlights wavy blow-dry",      category: "Hair" },
  { id: 16, src: "/images/gallery-hair-5.jpg", alt: "Platinum blonde curls at Kael Beauty Centre", category: "Hair" },
  { id: 17, src: "/images/gallery-hair-6.jpg", alt: "Caramel balayage wavy hair",                  category: "Hair" },
  { id: 18, src: "/images/gallery-hair-7.jpg", alt: "Hair styling at Kael Beauty Centre",          category: "Hair" },
  { id: 19, src: "/images/gallery-hair-8.jpg", alt: "Curly hair treatment result",                 category: "Hair" },
  { id: 20, src: "/images/gallery-hair-9.jpg", alt: "Dark hair with highlights blow-dry finish",   category: "Hair" },
  { id: 7,  src: "/images/gallery-7.jpg",  alt: "Deep tissue back massage treatment",            category: "Massage" },
  { id: 8,  src: "/images/gallery-8.jpg",  alt: "Hot stone massage at Kael Beauty Centre",       category: "Massage" },
  { id: 9,  src: "/images/gallery-9.jpg",  alt: "Aromatherapy massage with essential oils",      category: "Massage" },
  { id: 10, src: "/images/gallery-10.jpg", alt: "Professional leg waxing treatment",             category: "Waxing" },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80",
    alt: "Eyebrow threading treatment at beauty salon",
    category: "Waxing",
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [baIdx, setBaIdx] = useState(0);
  const baPrev = () => setBaIdx(i => (i - 1 + BA_PAIRS.length) % BA_PAIRS.length);
  const baNext = () => setBaIdx(i => (i + 1) % BA_PAIRS.length);

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

      {/* Before & After section */}
      <div className="bg-[#f5f2ee] border-b border-[#e0dbd5]">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2">
              Before &amp; After
            </h2>
            <p className="text-muted-foreground text-sm">
              Drag the handle to reveal the transformation
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-md mx-auto">
            {/* Prev */}
            <button
              onClick={baPrev}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[#1b1e22] transition-shadow"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={baIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                <BeforeAfterSlider
                  before={BA_PAIRS[baIdx].before}
                  after={BA_PAIRS[baIdx].after}
                  beforeLabel={BA_PAIRS[baIdx].beforeLabel}
                  afterLabel={BA_PAIRS[baIdx].afterLabel}
                  alt={BA_PAIRS[baIdx].alt}
                />
                <p className="text-center text-sm font-medium text-foreground mt-3">
                  {BA_PAIRS[baIdx].title}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={baNext}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[#1b1e22] transition-shadow"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {BA_PAIRS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBaIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === baIdx ? "bg-primary" : "bg-[#c9c4be]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2">Our Work</h2>
          <p className="text-muted-foreground text-sm">Browse treatments by category</p>
        </div>

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
