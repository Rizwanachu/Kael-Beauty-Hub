import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 120;
      // Hide when near footer
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;
      setVisible(scrolled && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden"
        >
          <div className="bg-primary/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-2xl">
            <div className="flex-1 min-w-0">
              <p className="text-primary-foreground font-semibold text-sm truncate">
                Kael Beauty Centre
              </p>
              <p className="text-primary-foreground/60 text-xs">Earl's Court · Open Today</p>
            </div>
            <a
              href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-accent/85 transition-colors shrink-0"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
