import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTopButton() {
  const [visible, setVisible]     = useState(false);
  const [progress, setProgress]   = useState(0); // 0–1

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      const pct      = total > 0 ? scrolled / total : 0;
      setVisible(scrolled > 300);
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-36 right-4 md:bottom-24 md:right-6 z-50 w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform duration-200"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
          >
            {/* Track */}
            <circle
              cx="22" cy="22" r={RADIUS}
              fill="none"
              stroke="#e8e4df"
              strokeWidth="2.5"
            />
            {/* Fill */}
            <circle
              cx="22" cy="22" r={RADIUS}
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>

          {/* Button face */}
          <span className="relative z-10 w-8 h-8 bg-[#C9A96E] rounded-full flex items-center justify-center shadow-md">
            <ChevronUp className="w-4 h-4 text-white" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
