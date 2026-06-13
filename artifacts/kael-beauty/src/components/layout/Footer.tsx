import { Link } from "wouter";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-primary">Kael Beauty Centre</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your premium beauty, laser and wellness haven in the heart of Earl's Court, London.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/447886220689" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-[#25D366] hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>115 Earls Court Road,<br/>London SW5 9RL</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+447886220689" className="hover:text-primary transition-colors">+44 7886 220689</a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                >
                  Book on Treatwell
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Mon – Sat</span>
                <span className="font-medium text-foreground">10:00 - 19:00</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Sunday</span>
                <span className="font-medium text-foreground">10:00 - 17:30</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kael Beauty Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
