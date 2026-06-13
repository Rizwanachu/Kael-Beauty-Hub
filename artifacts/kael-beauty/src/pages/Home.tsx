import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Flower2, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="Kael Beauty Centre | Beauty Salon in Earl's Court, London"
        description="Premium beauty salon in Earl's Court, London. Laser hair removal, nails, massage & more. 4.3★ on Treatwell with 208 reviews. Book online today."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/images/hero.png"
          alt="Luxury beauty salon interior at Kael Beauty Centre, Earl's Court London"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xs md:text-sm tracking-[0.25em] uppercase mb-5 text-accent font-medium"
          >
            Earl's Court, London
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-5 drop-shadow-lg leading-tight"
          >
            Where Beauty Meets Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg tracking-[0.12em] uppercase text-accent/90 font-medium mb-8"
          >
            Pamper Yourself Because You Deserve It
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 text-base px-9 py-6 rounded-full font-serif shadow-xl border border-accent/30">
              <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer" data-testid="button-book-appointment">
                Book Your Appointment
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center flex items-center justify-center gap-3">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <p className="font-medium text-sm md:text-base">
            Rated 4.3★ by over 200+ Treatwell clients
          </p>
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <Flower2 className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 leading-tight">
              A Boutique Spa That Actually Cares
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in the heart of Earl's Court, Kael Beauty Centre has been London's trusted destination for massage, waxing, laser treatments and beauty since our opening. Our expert therapists are passionate about making you look and feel your absolute best.
            </p>
            <div className="pt-8">
              <Link href="/about" className="inline-block text-primary font-medium hover:text-primary/80 transition-colors uppercase tracking-widest text-sm border-b border-primary pb-1">
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Laser & Hair Removal",
                desc: "Precision treatments for smooth, lasting results using advanced technology."
              },
              {
                icon: Flower2,
                title: "Beauty & Nails",
                desc: "Expert manicures, pedicures, lashes and brows tailored to your unique style."
              },
              {
                icon: Heart,
                title: "Massage & Wellness",
                desc: "Deeply restorative therapies designed to melt away London's daily stress."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2 }}
                className="text-center group cursor-default"
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.desc}</p>
                <Link href="/services" className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-primary transition-colors">
                  View Services
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid Placeholder */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12">The Kael Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square relative overflow-hidden rounded-lg group"
              >
                <img 
                  src={`/images/insta-${i}.png`} 
                  alt="Kael Beauty Experience" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Glow?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience the difference of truly personalized care.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-accent font-semibold px-10 py-7 rounded-full text-lg shadow-xl transition-all duration-300">
            <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </section>

    </PageTransition>
  );
}
