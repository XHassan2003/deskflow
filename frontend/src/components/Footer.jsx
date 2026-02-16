import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-foreground">
            Desk<span className="gradient-text">Flow</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            India's favorite platform for discovering and booking coworking spaces.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/spaces", label: "Explore Spaces" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
            <span className="text-sm text-muted-foreground">Cookie Policy</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> in India
        </p>
        <p className="text-sm text-muted-foreground">
          © 2026 DeskFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
