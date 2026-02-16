import { Users, Target, Heart, Zap } from "lucide-react";

const values = [
  { icon: Users, title: "Community First", desc: "We believe great work happens when people connect and collaborate." },
  { icon: Target, title: "Flexibility", desc: "Book by the hour, day, or month — your schedule, your choice." },
  { icon: Heart, title: "Quality Spaces", desc: "Every listed space is vetted for comfort, connectivity, and vibe." },
  { icon: Zap, title: "Seamless Booking", desc: "Find, compare, and reserve your perfect workspace in seconds." },
];

const About = () => (
  <div className="mx-auto max-w-4xl px-4 py-16">
    <div className="text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">
        About <span className="text-primary">DeskFlow</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        DeskFlow helps freelancers, startups, and remote teams discover and book the best coworking spaces across India — hassle-free.
      </p>
    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {values.map((v) => (
        <div key={v.title} className="rounded-xl border border-border bg-card p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <v.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold text-card-foreground">{v.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 rounded-xl bg-secondary p-8 text-center">
      <h2 className="font-display text-2xl font-bold text-secondary-foreground">Our Mission</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        To make flexible workspaces accessible to everyone — so you can focus on doing your best work, wherever you are.
      </p>
    </div>
  </div>
);

export default About;
