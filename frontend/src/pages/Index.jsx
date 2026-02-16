import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Wifi,
  Shield,
  Sparkles
} from "lucide-react";

import heroImage from "../assets/hero-coworking.jpg";
import SpaceCard from "../components/SpaceCard";
import { spaces } from "../data/spaces";

const stats = [
  { value: "500+", label: "Spaces" },
  { value: "12K", label: "Members" },
  { value: "25+", label: "Cities" },
  { value: "4.8", label: "Avg Rating" },
];

const Index = () => {
  const featured = spaces.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern coworking space" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm opacity-0 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">India's #1 Coworking Platform</span>
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] text-primary-foreground md:text-7xl opacity-0 animate-fade-in animate-stagger-1">
              Find Your Perfect
              <br />
              <span className="gradient-text">Workspace</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-primary-foreground/80 opacity-0 animate-fade-in animate-stagger-2">
              Discover and book coworking spaces tailored to how you work.
              From hot desks to private offices — all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row opacity-0 animate-fade-in animate-stagger-3">
              <Link to="/spaces" className="btn-primary px-8 py-4 text-base">
                <Search className="h-5 w-5" />
                Explore Spaces
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/10"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 opacity-0 animate-fade-in animate-stagger-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 backdrop-blur-md text-center">
                <p className="font-display text-3xl font-bold text-primary-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="text-center opacity-0 animate-fade-in">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Why DeskFlow
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Everything you need,<br />nothing you don't.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: Search, title: "Smart Search", desc: "Filter by type, price, amenities and location to find exactly what you need." },
            { icon: Wifi, title: "Verified Spaces", desc: "Every space is vetted for quality — fast Wi-Fi, clean desks, real reviews." },
            { icon: Shield, title: "Instant Booking", desc: "Book in seconds with transparent pricing. No hidden fees, cancel anytime." },
          ].map((f, i) => (
            <div
              key={f.title}
              className={`group hover-lift rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-in-up animate-stagger-${i + 1}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-card-foreground">{f.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(180deg, hsl(var(--secondary) / 0.3) 0%, hsl(var(--background)) 100%)" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 flex items-end justify-between opacity-0 animate-fade-in">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Popular Picks
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground">Featured Spaces</h2>
              <p className="mt-2 text-muted-foreground">Handpicked for quality and community vibes</p>
            </div>
            <Link to="/spaces" className="hidden items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((space, i) => (
              <div key={space.id} className={`opacity-0 animate-fade-in-up animate-stagger-${i + 1}`}>
                <SpaceCard space={space} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link to="/spaces" className="btn-primary">
              View all spaces <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16" style={{ boxShadow: "var(--shadow-glow)" }}>
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Ready to find your space?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg text-primary-foreground/70">
              Join thousands of professionals who've found their ideal workspace.
            </p>
            <Link to="/spaces" className="btn-primary px-10 py-4 text-base">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
