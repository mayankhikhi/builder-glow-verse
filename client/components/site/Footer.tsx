import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t mt-24">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>Sweta Makeover</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Crafting confidence, one makeover at a time.
          </p>
          <a
            href="https://www.instagram.com/sweta.goutam.7/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: hello@swetamakeover.com</li>
            <li>Phone: +91 00000 00000</li>
            <li>Hours: Tue–Sun, 10:00–19:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sweta Makeover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
