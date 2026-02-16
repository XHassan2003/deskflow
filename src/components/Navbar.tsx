import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/spaces", label: "Explore" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold text-foreground">
          Desk<span className="text-primary">Flow</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {user.user_metadata?.display_name || user.email?.split("@")[0]}
              </span>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <LogOut className="h-4 w-4" /> Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground md:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => { setMobileOpen(false); handleSignOut(); }}
              className="mt-2 block w-full rounded-lg border border-border px-4 py-2 text-center text-sm font-medium text-foreground"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/auth"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
