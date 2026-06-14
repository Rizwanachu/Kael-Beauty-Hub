import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "framer-motion";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
  { name: "Isha",   role: "Beauty Therapist",  rating: "4.4", image: "/images/team-1.png" },
  { name: "Paryia", role: "Beauty Therapist",  rating: "4.7", image: "/images/team-2.png" },
  { name: "Zed",   role: "Massage Therapist", rating: "4.8", image: "/images/team-3.png" },
  { name: "Alysha", role: "Beauty Therapist",  rating: "4.3", image: "/images/team-4.png" },
  { name: "Fatma", role: "Beauty Therapist",  rating: "4.3", image: "/images/team-5.png" },
];

export default function About() {
  return (
    <PageTransition>
      <SEO 
        title="About Us | Kael Beauty Centre Earl's Court London"
        description="Meet the expert team at Kael Beauty Centre. Passionate beauty therapists and massage specialists serving Earl's Court, London with care and skill."
        path="/about"
      />

      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-10 text-primary"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg mx-auto text-muted-foreground"
          >
            <p className="lead text-xl md:text-2xl font-serif text-foreground mb-8">
              Kael Beauty Centre was born from a simple belief: everyone deserves to feel beautiful, cared for, and completely at ease.
            </p>
            <p>
              Nestled on Earls Court Road in the heart of London, our team of passionate therapists brings together years of expertise in beauty, wellness and relaxation. From precision laser treatments to luxurious massages, every service is delivered with the personal attention you deserve.
            </p>
            <p>
              We're not just a salon — we're your beauty home in Earl's Court.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">The experts behind your glow.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-sm">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Photo placeholder ribbon */}
                  <div className="absolute bottom-0 inset-x-0 z-20 bg-[#C9A96E]/90 text-white text-[9px] md:text-[10px] text-center py-1.5 px-1 leading-tight font-medium">
                    Photo placeholder —<br className="sm:hidden" /> to be replaced with real team photo
                  </div>
                </div>
                <h3 className="font-serif text-base md:text-xl font-semibold">{member.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">{member.role}</p>
                {member.rating && (
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center justify-center gap-1 text-sm font-medium text-yellow-500">
                      <span>★</span> {member.rating}
                    </div>
                    <span className="text-[10px] text-muted-foreground">rated on Treatwell</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Ready to Experience the Kael Difference?</h2>
          <p className="text-muted-foreground mb-8">Book your appointment online in seconds — or drop us a message if you have any questions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 rounded-full px-8">
              <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/25 hover:bg-primary hover:text-primary-foreground px-8">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <ShieldCheck className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Expert Care</h3>
              <p className="opacity-80">Highly trained therapists dedicated to mastery of their craft.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <Sparkles className="w-12 h-12 mb-6 opacity-80 text-accent" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Premium Products</h3>
              <p className="opacity-80">We use only the finest industry-leading beauty brands.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Heart className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Welcoming Space</h3>
              <p className="opacity-80">An intimate environment where you can truly relax.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
