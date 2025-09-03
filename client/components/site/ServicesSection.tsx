import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { BookingDialog } from "./BookingDialog";

const SERVICES = [
  {
    category: "Makeup",
    items: [
      {
        name: "Bridal Makeup",
        desc: "Elegant, long-lasting bridal look tailored to you.",
        duration: "120m",
        price: "₹12,000",
      },
      {
        name: "Party Makeup",
        desc: "Glamorous look perfect for celebrations.",
        duration: "60m",
        price: "₹3,500",
      },
    ],
  },
  {
    category: "Hair",
    items: [
      {
        name: "Hair Styling",
        desc: "Custom styles from waves to updos.",
        duration: "45m",
        price: "₹1,500",
      },
      {
        name: "Hair Color",
        desc: "Professional color with care.",
        duration: "90m",
        price: "₹3,000",
      },
    ],
  },
  {
    category: "Skincare & Nails",
    items: [
      {
        name: "Skincare Facial",
        desc: "Glow-enhancing, skin-friendly facial.",
        duration: "50m",
        price: "₹1,800",
      },
      {
        name: "Manicure",
        desc: "Neat, polished nails with care.",
        duration: "40m",
        price: "₹900",
      },
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-20">
      <div className="mb-8">
        <h2
          className="text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Services
        </h2>
        <p className="text-muted-foreground">Explore categories and book instantly.</p>
      </div>
      <Accordion type="multiple" className="w-full">
        {SERVICES.map((s, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border rounded-xl mb-4 bg-card/40 backdrop-blur-sm hover:border-white/20 transition"
          >
            <AccordionTrigger className="px-4">{s.category}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 px-4 pb-4">
                {s.items.map((it, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-md border border-white/10 bg-background/40 p-3 hover:bg-background/60 transition"
                  >
                    <div>
                      <div className="font-medium" style={{ fontFamily: "Playfair Display, serif" }}>{it.name}</div>
                      <div className="text-sm text-muted-foreground">{it.desc}</div>
                      <div className="text-xs text-muted-foreground">{it.duration} • {it.price}</div>
                    </div>
                    <BookingDialog>
                      <DialogTrigger asChild>
                        <Button variant="gradient">Book Now</Button>
                      </DialogTrigger>
                    </BookingDialog>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ServicesSection;
