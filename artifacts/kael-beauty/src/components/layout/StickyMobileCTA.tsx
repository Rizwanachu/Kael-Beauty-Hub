import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

function getOpenStatus(): { open: boolean; label: string } {
  const londonParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) =>
    londonParts.find((p) => p.type === type)?.value ?? "";

  const weekday = get("weekday"); // "Sun" | "Mon" | ... | "Sat"
  const h = parseInt(get("hour"), 10);
  const m = parseInt(get("minute"), 10);
  const mins = h * 60 + m;
  const day = weekday === "Sun" ? 0 : 1; // 0 = Sunday, 1 = any Mon–Sat

  const open = 10 * 60;       // 10:00
  const closeSat = 19 * 60;   // 19:00 Mon–Sat
  const closeSun = 17 * 60 + 30; // 17:30 Sun

  if (day === 0) {
    // Sunday
    const isOpen = mins >= open && mins < closeSun;
    return { open: isOpen, label: isOpen ? "Open Now" : "Closed Today" };
  }
  // Mon–Sat (day 1–6)
  const isOpen = mins >= open && mins < closeSat;
  return { open: isOpen, label: isOpen ? "Open Now" : "Closed Today" };
}

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 120;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;
      setVisible(scrolled && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Refresh status every minute
  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
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
              <p className="text-primary-foreground/60 text-xs flex items-center gap-1.5">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                    status.open ? "bg-green-400" : "bg-red-400"
                  }`}
                />
                Earl's Court · {status.label}
              </p>
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
