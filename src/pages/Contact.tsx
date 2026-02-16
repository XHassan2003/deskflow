import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Get in Touch</h1>
        <p className="mt-2 text-muted-foreground">Have a question or want to list your space? We'd love to hear from you.</p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-semibold text-foreground">Contact Info</h2>
          {[
            { icon: Mail, label: "hello@deskflow.in" },
            { icon: Phone, label: "+91 98765 43210" },
            { icon: MapPin, label: "Mumbai, Maharashtra, India" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="flex items-center justify-center rounded-xl border border-border bg-card p-10">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">Message Sent!</h3>
              <p className="mt-1 text-sm text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
              <input required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
              <input required type="email" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
              <textarea required rows={4} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="How can we help?" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
