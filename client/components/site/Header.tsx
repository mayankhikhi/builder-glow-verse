import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import { BookingDialog } from "./BookingDialog";
import { useEffect, useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
        scrolled ? "bg-background/80 backdrop-blur border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span
            className="text-xl md:text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sweta Makeover
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#gallery" className="hover:text-primary">
            Gallery
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <BookingDialog>
            <DialogTrigger asChild>
              <Button className="hidden sm:inline-flex bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow hover:opacity-90">
                Book Now
              </Button>
            </DialogTrigger>
          </BookingDialog>
          <Link
            to="/auth"
            className="ml-2 inline-flex items-center gap-2 text-sm hover:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
