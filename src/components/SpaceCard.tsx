import { Link } from "react-router-dom";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import type { Space } from "@/data/spaces";

const SpaceCard = ({ space }: { space: Space }) => {
  return (
    <Link
      to={`/spaces/${space.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card hover-lift"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={space.image}
          alt={space.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
          {space.type.replace("-", " ")}
        </span>
        {space.availability === "Available today" && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground animate-pulse-soft" />
            Available
          </span>
        )}
        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
            {space.name}
          </h3>
          <div className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="font-semibold text-card-foreground">{space.rating}</span>
          </div>
        </div>
        <p className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {space.location}
        </p>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <p className="text-xl font-bold text-foreground">
            ₹{space.price}
            <span className="text-sm font-normal text-muted-foreground">{space.priceUnit}</span>
          </p>
          <div className="flex gap-1.5">
            {space.amenities.slice(0, 2).map((a) => (
              <span key={a} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpaceCard;
