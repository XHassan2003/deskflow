import { Users, Target, Heart, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Users, title: "Community First", desc: "We believe great work happens when people connect and collaborate.", color: "bg-primary/10 text-primary" },
  { icon: Target, title: "Flexibility", desc: "Book by the hour, day, or month — your schedule, your choice.", color: "bg-accent/10 text-accent" },
  { icon: Heart, title: "Quality Spaces", desc: "Every listed space is vetted for comfort, connectivity, and vibe.", color: "bg-destructive/10 text-destructive" },
  { icon: Zap, title: "Seamless Booking", desc: "Find, compare, and reserve your perfect workspace in seconds.", color: "bg-primary/10 text-primary" },
];

const About = () => (
  <div className="mx-auto max-w-5xl px-4 py-20">
    <div className="text-center opacity-0 animate-fade-in">
      <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        Our Story
      </span>
      <h1 className="font-display text-5xl font-bold text-foreground">
        About <span className="gradient-text">DeskFlow</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        DeskFlow helps freelancers, startups, and remote teams discover and book the best coworking spaces across Pakistan — hassle-free.
      </p>
    </div>

    <div className="mt-20 grid gap-6 sm:grid-cols-2">
      {values.map((v, i) => (
        <div
          key={v.title}
          className={`group hover-lift rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-in-up`}
          style={{ animationDelay: `${0.1 + i * 0.1}s`, boxShadow: "var(--shadow-card)" }}
        >
          <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${v.color.split(" ")[0]} transition-transform duration-300 group-hover:scale-110`}>
            <v.icon className={`h-7 w-7 ${v.color.split(" ")[1]}`} />
          </div>
          <h3 className="font-display text-xl font-semibold text-card-foreground">{v.title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{v.desc}</p>
        </div>
      ))}
    </div>

    <div className="relative mt-20 overflow-hidden rounded-3xl bg-foreground p-12 text-center opacity-0 animate-fade-in animate-stagger-5">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative z-10">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Our Mission</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
          To make flexible workspaces accessible to everyone — so you can focus on doing your best work, wherever you are.
        </p>
        <Link to="/spaces" className="btn-primary mt-8">
          Explore Spaces <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
);

export default About;
