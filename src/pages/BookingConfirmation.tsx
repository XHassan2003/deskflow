import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import { spaces } from "@/data/spaces";

const BookingConfirmation = () => {
  const { id } = useParams();
  const space = spaces.find((s) => s.id === id);

  if (!space) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 font-display text-2xl font-bold text-foreground">
            Booking not found
          </h1>
          <Link to="/spaces" className="text-sm text-primary hover:underline">
            ← Browse spaces
          </Link>
        </div>
      </div>
    );
  }

  const bookingId = `DF-${Date.now().toString(36).toUpperCase()}`;
  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + 1);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="animate-fade-in text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle className="h-10 w-10 text-accent" />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Booking Confirmed!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Your workspace is reserved. See you there!
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-start gap-4">
          <img
            src={space.image}
            alt={space.name}
            className="h-20 w-20 rounded-lg object-cover"
          />
          <div>
            <h2 className="font-display text-xl font-semibold text-card-foreground">
              {space.name}
            </h2>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {space.location}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-secondary p-3">
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> Date
            </p>
            <p className="mt-1 text-sm font-medium text-secondary-foreground">
              {bookingDate.toLocaleDateString("en-IN", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> Duration
            </p>
            <p className="mt-1 text-sm font-medium text-secondary-foreground">1 day</p>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Space cost</span>
            <span className="text-foreground">₹{space.price}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span className="text-foreground">₹{Math.round(space.price * 0.1)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-bold">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">
              ₹{space.price + Math.round(space.price * 0.1)}
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-muted p-3 text-center text-xs text-muted-foreground">
          Booking ID: <span className="font-mono font-medium">{bookingId}</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Link
          to="/spaces"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Browse More Spaces <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
