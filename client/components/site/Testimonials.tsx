import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aarohi",
    text:
      "Absolutely loved my bridal look! The attention to detail and calm energy made the day perfect.",
  },
  {
    name: "Simran",
    text:
      "Professional, kind and super talented. The makeup lasted all night and looked stunning in photos!",
  },
  {
    name: "Neha",
    text:
      "From hair to skin prep, everything was flawless. Highly recommended for any special occasion.",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="container py-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{fontFamily: 'Playfair Display, serif'}}>What Clients Say</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-4">
                <div className="rounded-xl border bg-card p-8 shadow">
                  <p className="text-lg leading-relaxed">“{t.text}”</p>
                  <div className="mt-4 text-sm text-muted-foreground">— {t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/70 p-2 backdrop-blur hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/70 p-2 backdrop-blur hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, i) => (
          <span key={i} className={`h-1.5 w-6 rounded-full ${i===selectedIndex ? 'bg-primary' : 'bg-muted'}`} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
