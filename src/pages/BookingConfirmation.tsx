import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MapPin, Calendar, Clock, Shield } from "lucide-react";
import { spaces } from "@/data/spaces";

const BookingConfirmation = () => {
  const { id } = useParams();
  const space = spaces.find((s) => s.id === id);

  if (!space) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Booking not found</h1>
          <Link to="/spaces" className="text-sm text-primary hover:underline">← Browse spaces</Link>
        </div>
      </div>
    );
  }

  const bookingId = `DF-${Date.now().toString(36).toUpperCase()}`;
  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + 1);

  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="text-center opacity-0 animate-fade-in">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 animate-scale-up">
          <CheckCircle className="h-12 w-12 text-accent" />
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground">Booking Confirmed!</h1>
        <p className="mt-3 text-lg text-muted-foreground">Your workspace is reserved. See you there!</p>
      </div>

      <div
        className="mt-10 rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-in-up animate-stagger-2"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-start gap-5">
          <img src={space.image} alt={space.name} className="h-24 w-24 rounded-xl object-cover" />
          <div>
            <h2 className="font-display text-2xl font-semibold text-card-foreground">{space.name}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4" /> {space.location}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-secondary p-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Calendar className="h-4 w-4" /> Date
            </p>
            <p className="mt-2 text-sm font-semibold text-secondary-foreground">
              {bookingDate.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
          <div className="rounded-xl bg-secondary p-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Clock className="h-4 w-4" /> Duration
            </p>
            <p className="mt-2 text-sm font-semibold text-secondary-foreground">1 day</p>
          </div>
        </div>

        <div className="mt-8 space-y-3 border-t border-border pt-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Space cost</span>
            <span className="font-medium text-foreground">₹{space.price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span className="font-medium text-foreground">₹{Math.round(space.price * 0.1)}</span>
          </div>
          <div className="flex justify-between border-t border-border pt-3 text-lg font-bold">
            <span className="text-foreground">Total</span>
            <span className="gradient-text">₹{space.price + Math.round(space.price * 0.1)}</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-muted p-4 text-center">
          <p className="text-xs text-muted-foreground">Booking ID</p>
          <p className="mt-1 font-mono text-sm font-bold text-foreground">{bookingId}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center opacity-0 animate-fade-in animate-stagger-3">
        <Link to="/spaces" className="btn-primary px-8 py-3.5">
          Browse More Spaces <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
