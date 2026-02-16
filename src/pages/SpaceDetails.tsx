import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, MapPin, Users, ArrowLeft, Check } from "lucide-react";
import { spaces } from "@/data/spaces";

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
          <Link to="/spaces" className="text-sm text-primary hover:underline">
            ← Back to spaces
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src={space.image}
              alt={space.name}
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">
                  {space.name}
                </h1>
                <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {space.location}
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{space.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({space.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {space.type.replace("-", " ")}
              </span>
              <span className="flex items-center gap-1 rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                <Users className="h-3.5 w-3.5" /> Up to {space.capacity}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-foreground">{space.description}</p>

            <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
              Amenities
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {space.amenities.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm text-secondary-foreground"
                >
                  <Check className="h-4 w-4 text-accent" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
            <p className="text-3xl font-bold text-foreground">
              ₹{space.price}
              <span className="text-base font-normal text-muted-foreground">
                {space.priceUnit}
              </span>
            </p>
            <p className="mt-1 text-sm text-accent font-medium">{space.availability}</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Duration
                </label>
                <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>1 day</option>
                  <option>1 week</option>
                  <option>1 month</option>
                </select>
              </div>
            </div>

            <Link
              to={`/booking/${space.id}`}
              className="mt-6 block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Book Now
            </Link>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Free cancellation up to 24 hours before
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
