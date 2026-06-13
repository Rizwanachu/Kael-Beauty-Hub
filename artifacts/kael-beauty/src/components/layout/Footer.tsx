import { Link } from "wouter";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-2xl font-bold text-accent">Kael Beauty Centre</span>
            </Link>
            <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/50 mb-5">
              Pamper Yourself Because You Deserve It
            </p>
            <p className="text-primary-foreground/65 mb-6 max-w-sm text-sm leading-relaxed">
              Your premium beauty, laser and wellness haven in the heart of Earl's Court, London.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://wa.me/447886220689"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>115 Earls Court Road,<br />London SW5 9RL</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+447886220689" className="hover:text-accent transition-colors">
                  +44 7886 220689
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/85 transition-colors shadow-sm text-sm"
                >
                  Book on Treatwell
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">Opening Hours</h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" /> Mon – Sat
                </span>
                <span className="font-medium text-primary-foreground">10:00 – 19:00</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" /> Sunday
                </span>
                <span className="font-medium text-primary-foreground">10:00 – 17:30</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Kael Beauty Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
