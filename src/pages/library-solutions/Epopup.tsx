import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EPopup = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">

        {/* Hero section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-card/80 mb-2">
                  Product • ePopUp Library
                </p>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-card drop-shadow-lg">
                  Take your library&apos;s digital collection{" "}
                  <span className="text-accent">out into the community</span>
                </h1>

                <p className="text-card/90 mb-4 drop-shadow-md">
                  ePopUp Library lets you share your digital collection in busy,
                  unexpected places—like buses, stations, airports, hotels and
                  partner locations.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" asChild size="lg">
                    <a href="/demo" className="flex items-center gap-2">
                      Request a demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>

                  <Button variant="heroOutline" asChild size="lg">
                    <a href="/library-solutions/boundless">
                      Explore our other products
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="container mx-auto px-4 space-y-12 py-16">
          <section>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              What is ePopUp Library?
            </h2>
            <p className="text-muted-foreground mb-4">
              ePopUp Library is a pop-up digital access point for your library.
            </p>
          </section>

          {/* How it works */}
          <section className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm card-elevated">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              How does it work?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Place QR codes in community spaces.</li>
              <li>Users scan and access curated digital collections instantly.</li>
              <li>No app or library card required for temporary access.</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 pt-4">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Ready to get started?
            </h2>

            <Button variant="hero" asChild size="lg">
              <a href="/demo" className="flex items-center gap-2">
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default EPopup;
