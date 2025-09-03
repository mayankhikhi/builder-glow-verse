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
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span
            className="text-xl md:text-2xl font-semibold tracking-wide drop-shadow-sm"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sweta Makeover
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: "#services", label: "Services" },
            { href: "#gallery", label: "Gallery" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <BookingDialog>
            <DialogTrigger asChild>
              <Button className="hidden sm:inline-flex" variant="gradient">
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
