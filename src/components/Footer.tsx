import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-lg font-bold text-foreground">
          Desk<span className="text-primary">Flow</span>
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/spaces" className="hover:text-foreground">Explore</Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 DeskFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
