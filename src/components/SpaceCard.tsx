import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import type { Space } from "@/data/spaces";

const SpaceCard = ({ space }: { space: Space }) => {
  return (
    <Link
      to={`/spaces/${space.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={space.image}
          alt={space.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {space.type.replace("-", " ")}
        </span>
        {space.availability === "Available today" && (
          <span className="absolute right-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
            Available today
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-card-foreground">
            {space.name}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="font-medium text-card-foreground">{space.rating}</span>
            <span className="text-muted-foreground">({space.reviews})</span>
          </div>
        </div>
        <p className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {space.location}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-foreground">
            ₹{space.price}
            <span className="text-sm font-normal text-muted-foreground">
              {space.priceUnit}
            </span>
          </p>
          <div className="flex gap-1">
            {space.amenities.slice(0, 3).map((a) => (
              <span
                key={a}
                className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
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
