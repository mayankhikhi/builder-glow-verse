import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547789401-85a0d56a02b3?q=80&w=1200&auto=format&fit=crop",
];

export const InstagramGrid = () => {
  return (
    <section id="gallery" className="container py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>Instagram</h2>
          <p className="text-muted-foreground">@sweta.goutam.7</p>
        </div>
        <a href="https://www.instagram.com/sweta.goutam.7/" target="_blank" rel="noreferrer">
          <Button variant="outline">Open Instagram</Button>
        </a>
      </div>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Sweta Makeover work" className="mb-4 w-full rounded-lg border object-cover" loading="lazy" />
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Tip: Connect Zapier to auto-sync your Instagram feed here.
      </p>
    </section>
  );
};

export default InstagramGrid;
