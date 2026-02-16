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
          <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Space not found</h1>
          <Link to="/spaces" className="text-sm text-primary hover:underline">← Back to spaces</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground opacity-0 animate-fade-in"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 opacity-0 animate-fade-in animate-stagger-1">
          <div className="overflow-hidden rounded-2xl">
            <img src={space.image} alt={space.name} className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl font-bold text-foreground">{space.name}</h1>
                <p className="mt-2 flex items-center gap-1.5 text-lg text-muted-foreground">
                  <MapPin className="h-5 w-5" /> {space.location}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="text-xl font-bold text-foreground">{space.rating}</span>
                <span className="text-sm text-muted-foreground">({space.reviews} reviews)</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {space.type.replace("-", " ")}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                <Users className="h-4 w-4" /> Up to {space.capacity}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Clock className="h-4 w-4" /> {space.availability}
              </span>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-foreground">{space.description}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">Amenities</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {space.amenities.map((a, i) => (
                <div
                  key={a}
                  className={`group flex items-center gap-3 rounded-xl bg-secondary p-4 transition-all duration-300 hover:bg-primary hover:text-primary-foreground opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  <Check className="h-5 w-5 text-accent group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking sidebar */}
        <div className="lg:col-span-1 opacity-0 animate-slide-in-right animate-stagger-2">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="text-4xl font-bold text-foreground">
              ₹{space.price}
              <span className="text-base font-normal text-muted-foreground">{space.priceUnit}</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
              {space.availability}
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Date</label>
                <input type="date" className="input-styled" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Duration</label>
                <select className="input-styled">
                  <option>1 day</option>
                  <option>1 week</option>
                  <option>1 month</option>
                </select>
              </div>
            </div>

            <Link to={`/booking/${space.id}`} className="btn-primary mt-8 w-full py-4 text-base">
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
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
