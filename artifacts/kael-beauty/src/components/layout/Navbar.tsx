import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg mt-[0px] mb-[0px] pt-[5px] pb-[5px]">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3 pl-[16px] pr-[16px] pt-[0px] pb-[0px]">
        <Link href="/" className="flex items-center" data-testid="link-home-logo">
          <img
            src="/images/logo.png"
            alt="Kael Beauty Centre"
            className="h-[60px] md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-accent"
                  : "text-primary-foreground/75 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/85 ml-2 font-semibold px-6 rounded-full shadow-sm"
            data-testid="button-book-now-nav"
          >
            <a
              href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 py-4 px-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium px-4 py-3 rounded-md ${
                location === link.href
                  ? "bg-white/10 text-accent"
                  : "text-primary-foreground/75 hover:bg-white/5 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full mt-3 bg-accent text-accent-foreground hover:bg-accent/85 font-semibold rounded-full"
          >
            <a
              href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
