import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Mail, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) setError(error.message);
    else setSent(true);
    setLoading(false);
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Reset Password</h1>
          <p className="mt-2 text-muted-foreground">We'll send you a reset link</p>
        </div>
        {sent ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-sm text-foreground">Check your email for a password reset link.</p>
            <Link to="/auth" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-border bg-card p-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
