import { Link } from "react-router-dom";
import { Search, ArrowRight, Wifi, Coffee, Shield } from "lucide-react";
import heroImage from "@/assets/hero-coworking.jpg";
import SpaceCard from "@/components/SpaceCard";
import { spaces } from "@/data/spaces";

const Index = () => {
  const featured = spaces.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern coworking space"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="mb-4 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-6xl animate-fade-in">
              Find Your Perfect
              <br />
              <span className="text-primary">Workspace</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Discover and book coworking spaces tailored to how you work.
              From hot desks to private offices — all in one place.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/spaces"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Search className="h-5 w-5" />
                Explore Spaces
              </Link>
              <Link
                to="/spaces"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">
          Why DeskFlow?
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Everything you need, nothing you don't.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Smart Search",
              desc: "Filter by type, price, amenities and location to find exactly what you need.",
            },
            {
              icon: Wifi,
              title: "Verified Spaces",
              desc: "Every space is vetted for quality — fast Wi-Fi, clean desks, real reviews.",
            },
            {
              icon: Shield,
              title: "Instant Booking",
              desc: "Book in seconds with transparent pricing. No hidden fees, cancel anytime.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Featured Spaces
              </h2>
              <p className="mt-1 text-muted-foreground">Popular picks near you</p>
            </div>
            <Link
              to="/spaces"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/spaces"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              View all spaces <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
          Ready to find your space?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Join thousands of professionals who've found their ideal workspace.
        </p>
        <Link
          to="/spaces"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default Index;
