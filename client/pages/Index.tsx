import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicesSection } from "@/components/site/ServicesSection";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingDialog } from "@/components/site/BookingDialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2000&auto=format&fit=crop"
            alt="Makeover in progress"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
          <div className="container relative z-10 py-28">
            <div className="max-w-2xl">
              <h1
                className="text-4xl md:text-6xl font-semibold leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Sweta Makeover
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Crafting confidence, one makeover at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookingDialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    >
                      Book an Appointment
                    </Button>
                  </DialogTrigger>
                </BookingDialog>
                <a href="#services">
                  <Button size="lg" variant="outline">
                    Explore Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section
          className="container py-16"
          aria-labelledby="featured-services"
        >
          <h2
            id="featured-services"
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Featured Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Bridal Makeup",
                img: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1200&auto=format&fit=crop",
                desc: "Timeless elegance for your big day.",
              },
              {
                title: "Hair Styling",
                img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
                desc: "Custom styles that last.",
              },
              {
                title: "Skincare",
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
                desc: "Healthy glow with premium care.",
              },
              {
                title: "Party Look",
                img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
                desc: "Glam that turns heads.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-xl border bg-card shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-lg font-medium">{s.title}</div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4">
                    <BookingDialog>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground w-full">
                          Book Now
                        </Button>
                      </DialogTrigger>
                    </BookingDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
        <InstagramGrid />
        <Testimonials />

        {/* About */}
        <section
          id="about"
          className="container py-20 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1547789401-85a0d56a02b3?q=80&w=1200&auto=format&fit=crop"
            alt="Sweta Goutam"
            className="w-full rounded-xl border object-cover"
          />
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              About Sweta
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sweta Goutam is a professional makeup artist passionate about
              enhancing natural beauty with a modern touch. With years of
              experience across bridal, fashion and special events, Sweta crafts
              looks that photograph beautifully and feel effortless.
            </p>
            <Link to="/dashboard" className="inline-block mt-6">
              <Button variant="outline">View your appointments</Button>
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-20">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="rounded-md border bg-muted/40 px-3 py-2"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="rounded-md border bg-muted/40 px-3 py-2"
                  placeholder="Email"
                />
              </div>
              <input
                className="rounded-md border bg-muted/40 px-3 py-2 w-full"
                placeholder="Subject"
              />
              <textarea
                className="rounded-md border bg-muted/40 px-3 py-2 w-full h-32"
                placeholder="Message"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Send Message
              </Button>
            </form>
            <div className="rounded-xl overflow-hidden border min-h-[300px]">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14233.178592973683!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
