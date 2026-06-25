import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote: "The colour has lasted for over a week, which is the longest ever.",
    name: "Verified Client",
    rating: 5,
  },
  {
    quote: "Overall, excellent service at reasonable prices.",
    name: "Satisfied Client",
    rating: 5,
  },
  {
    quote: "Love my toe nails and she hooked me up with a great price!",
    name: "Verified Client",
    rating: 5,
  },
  {
    quote: "Super quick and friendly!",
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

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} 
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <PageTransition>
      <SEO 
        title="Customer Reviews | Kael Beauty Centre Earl's Court"
        description="Read genuine customer reviews for Kael Beauty Centre. Rated 4.3★ on Treatwell with 208 reviews and 4.4★ on Google. Earl's Court, London."
        path="/reviews"
      />

      <div className="bg-card py-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-10 text-primary"
          >
            Client Love
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-background px-8 py-6 rounded-2xl shadow-sm border border-border"
            >
              <div className="text-3xl font-bold mb-2">4.4<span className="text-yellow-400">★</span></div>
              <p className="text-muted-foreground text-sm">Google (30 reviews)</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-background px-8 py-6 rounded-2xl shadow-sm border border-border"
            >
              <div className="text-3xl font-bold mb-2">4.3<span className="text-yellow-400">★</span></div>
              <p className="text-muted-foreground text-sm">Treatwell (208 reviews)</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <Card className="bg-card/50 hover:bg-card transition-colors border-border/60">
                <CardContent className="p-8">
                  <RatingStars rating={review.rating} />
                  <p className="text-lg font-serif italic text-foreground mb-6 leading-relaxed">
                    "{review.quote}"
                  </p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[#f5f2ee] rounded-3xl p-10 md:p-16 border border-[#ddd9d3]"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary">Happy with your visit?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your feedback means the world to us. It helps us grow and helps others find their new favorite salon.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              Leave a Review on Google
            </a>
          </Button>
        </motion.div>
      </div>

    </PageTransition>
  );
}
