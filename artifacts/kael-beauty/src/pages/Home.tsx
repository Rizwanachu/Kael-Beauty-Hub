import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MapPin, Star, Clock, BadgeCheck, Sparkles, CalendarCheck,
  PhoneCall, ChevronRight, ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";

const BENEFITS = [
  {
    icon: MapPin,
    title: "Central Location",
    desc: "Right on Earls Court Road — easy to reach by Tube, bus or on foot.",
  },
  {
    icon: Star,
    title: "4.3★ on Treatwell",
    desc: "208+ verified client reviews. Consistently rated among the best in the area.",
  },
  {
    icon: BadgeCheck,
    title: "Expert Therapists",
    desc: "Every therapist is professionally trained and deeply passionate about their craft.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Open Mon–Sat 10–7 and Sunday 10–5:30. We work around your schedule.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    desc: "We use only industry-leading beauty brands to deliver lasting results.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Online Booking",
    desc: "Book in seconds via Treatwell — no phone tag, no waiting.",
  },
];

const FEATURED_REVIEWS = [
  {
    quote: "Super quick and friendly! Highly recommend.",
    name: "Camila",
    rating: 5,
  },
  {
    quote: "It was so quick and flawless. Trusting her got me amazing results.",
    name: "Sophia",
    rating: 5,
  },
  {
    quote: "Nice experience, attentive to client's needs.",
    name: "Monica",
    rating: 5,
  },
];

const SERVICES = [
  {
    image: "/images/service-laser.png",
    title: "Laser & Hair Removal",
    desc: "Precision treatments for smooth, lasting results using advanced technology.",
    tag: "From £18",
  },
  {
    image: "/images/service-nails.png",
    title: "Beauty & Nails",
    desc: "Expert manicures, pedicures, lashes and brows tailored to your unique style.",
    tag: "From £25",
  },
  {
    image: "/images/service-massage.png",
    title: "Massage & Wellness",
    desc: "Deeply restorative therapies designed to melt away London's daily stress.",
    tag: "From £45",
  },
];

function SectionCTA({
  text = "Book Your Appointment",
  href = "https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/",
  className = "",
}: {
  text?: string;
  href?: string;
  className?: string;
}) {
  const isInternal = href.startsWith("/");
  return (
    <div className={`flex justify-center mt-10 ${className}`}>
      <Button
        asChild
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/85 rounded-full px-8 py-5 font-serif text-base shadow-md"
      >
        {isInternal ? (
          <Link href={href}>
            {text} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {text} <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        )}
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Kael Beauty Centre | Beauty Salon in Earl's Court, London"
        description="Premium beauty salon in Earl's Court, London. Laser hair removal, nails, massage & more. 4.3★ on Treatwell with 208 reviews. Book online today."
        path="/"
      />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[620px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <img
          src="/images/hero.png"
          alt="Luxury beauty salon interior at Kael Beauty Centre, Earl's Court London"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs md:text-sm tracking-[0.25em] uppercase mb-4 text-accent font-medium"
          >
            Earl's Court, London
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-2xl sm:text-4xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg leading-tight max-w-[280px] sm:max-w-none mx-auto"
          >
            Where Beauty Meets Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed"
          >
            London's boutique beauty destination for laser, nails, massage and more — rated 4.3★ by 208+ Treatwell clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/85 px-8 py-5 sm:px-9 sm:py-6 rounded-full font-serif text-sm sm:text-base shadow-xl border border-accent/30"
              data-testid="button-book-appointment"
            >
              <a
                href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Appointment
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/15 hover:border-white px-8 py-5 sm:px-9 sm:py-6 rounded-full font-serif text-sm sm:text-base backdrop-blur-sm"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8 text-white/70 text-xs"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span> 4.4 Google
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span> 4.3 Treatwell
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span>208+ Reviews</span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ──────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center flex flex-wrap items-center justify-center gap-3">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <p className="font-medium text-sm md:text-base">
            Rated 4.3★ by 208+ Treatwell clients · 4.4★ on Google
          </p>
          <a
            href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-accent font-semibold text-sm underline underline-offset-2 hover:text-accent/80 transition-colors hidden sm:inline"
          >
            Book Now →
          </a>
        </div>
      </section>

      {/* ── 3. ABOUT + WHY CHOOSE US ────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6 leading-tight">
                A Boutique Salon That Actually Cares
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Nestled in the heart of Earl's Court, Kael Beauty Centre has been London's trusted destination for massage, waxing, laser treatments and beauty. Our expert therapists are passionate about making you look and feel your absolute best.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're not just a salon — we're your beauty home in London. Every visit is personal, every treatment is tailored to you.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors text-sm uppercase tracking-widest border-b border-primary pb-1"
              >
                Our Story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: BadgeCheck, title: "Certified Therapists", desc: "Every treatment is carried out by trained, insured professionals." },
                { icon: Star, title: "Consistently Highly Rated", desc: "4.3★ on Treatwell and 4.4★ on Google — clients keep coming back." },
                { icon: CalendarCheck, title: "Easy to Book", desc: "Online booking via Treatwell, WhatsApp or phone — whatever suits you." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES SHOWCASE ────────────────────────── */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Services For Every Need
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From advanced laser to indulgent massages — everything you need to look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    See Prices <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionCTA text="View Full Service Menu" href="/services" />
        </div>
      </section>

      {/* ── 5. BENEFITS GRID ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">Why Kael</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              The Kael Difference
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Six reasons thousands of London clients trust us with their beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-primary/3 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <span className="text-yellow-400 text-base">★★★★★</span>
              Rated 4.3★ on Treatwell · 4.4★ on Google
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-background rounded-2xl p-8 border border-border/60 shadow-sm flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-serif italic text-foreground leading-relaxed flex-1 mb-6">
                  "{r.quote}"
                </p>
                <p className="font-semibold text-primary text-sm">— {r.name}</p>
              </motion.div>
            ))}
          </div>

          <SectionCTA text="Read All Reviews" href="/reviews" />
        </div>
      </section>

      {/* ── 7. CTA BANNER ───────────────────────────────── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5"
          >
            Ready to Glow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg mb-10 opacity-85 max-w-xl mx-auto"
          >
            Book your appointment today and experience the difference of truly personalised care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/85 font-semibold px-10 py-6 rounded-full text-base shadow-xl"
            >
              <a
                href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now on Treatwell
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/15 hover:border-white font-semibold px-10 py-6 rounded-full text-base"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 8. MINI CONTACT STRIP ───────────────────────── */}
      <section className="py-14 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-1">Questions? We're Here.</h3>
              <p className="text-muted-foreground text-sm">
                Reach us by phone, WhatsApp or pop in to 115 Earls Court Road.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground gap-2"
              >
                <a href="tel:+447886220689">
                  <PhoneCall className="w-4 h-4" /> +44 7886 220689
                </a>
              </Button>
              <Button
                asChild
                className="rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white gap-2"
              >
                <a href="https://wa.me/447886220689" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="ghost" className="rounded-full gap-1 text-primary font-semibold">
                <Link href="/contact">
                  Contact Page <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
