import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <div className="text-center opacity-0 animate-fade-in">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Contact
        </span>
        <h1 className="font-display text-5xl font-bold text-foreground">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">Have a question or want to list your space? We'd love to hear from you.</p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6 opacity-0 animate-slide-in-left animate-stagger-1">
          <h2 className="font-display text-2xl font-semibold text-foreground">Contact Info</h2>
          {[
            { icon: Mail, label: "hello@deskflow.in", sub: "Email us" },
            { icon: Phone, label: "+91 98765 43210", sub: "Call us" },
            { icon: MapPin, label: "Mumbai, Maharashtra, India", sub: "Visit us" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover-lift"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
                <p className="font-medium text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="opacity-0 animate-slide-in-right animate-stagger-2">
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-card p-12" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 animate-scale-up">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-card-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Name</label>
                <input required className="input-styled" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Email</label>
                <input required type="email" className="input-styled" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Message</label>
                <textarea required rows={4} className="input-styled resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
