import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Star,
  MapPin,
  Users,
  ArrowLeft,
  Check,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";
import { spaces } from "../data/spaces";

const SpaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const space = spaces.find((s) => s.id === id);

  if (!space) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 font-display text-2xl font-bold text-foreground">
            Space not found
          </h1>
          <Link
            to="/spaces"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Back to spaces
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={space.image}
              alt={space.name}
              className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl font-bold text-foreground">
                  {space.name}
                </h1>

                <p className="mt-2 flex items-center gap-1.5 text-lg text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {space.location}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3 shadow-sm">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="text-xl font-bold text-foreground">
                  {space.rating}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({space.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary capitalize">
                {space.type.replace("-", " ")}
              </span>

              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                <Users className="h-4 w-4" />
                Up to {space.capacity}
              </span>

              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Clock className="h-4 w-4" />
                {space.availability}
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed text-foreground">
              {space.description}
            </p>

            {/* Amenities */}
            <h2 className="mt-12 font-display text-2xl font-semibold text-foreground">
              Amenities
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {space.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 rounded-xl bg-secondary p-4 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-8 shadow-xl">
            {/* Price */}
            <p className="text-4xl font-bold text-foreground">
              Rs. {space.price.toLocaleString("en-PK")}
              <span className="text-base font-normal text-muted-foreground">
                {space.priceUnit}
              </span>
            </p>

            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
              {space.availability}
            </p>

            {/* Form */}
            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-input bg-background py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">
                  Duration
                </label>
                <select className="w-full rounded-xl border border-input bg-background py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>1 day</option>
                  <option>1 week</option>
                  <option>1 month</option>
                </select>
              </div>
            </div>

            <Link
              to={`/booking/${space.id}`}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              Free cancellation up to 24 hours before
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
