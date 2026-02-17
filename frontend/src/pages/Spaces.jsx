import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import SpaceCard from "../components/SpaceCard";
import { spaces, spaceTypes } from "../data/spaces";


const Spaces = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("rating");

  const filtered = useMemo(() => {
    let result = spaces.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.location.toLowerCase().includes(search.toLowerCase());
      const matchType = type === "all" || s.type === type;
      return matchSearch && matchType;
    });

    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, type, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="opacity-0 animate-fade-in">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Browse
        </span>
        <h1 className="font-display text-4xl font-bold text-foreground">
          Explore Spaces
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {spaces.length} coworking spaces available
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-5 opacity-0 animate-fade-in animate-stagger-1" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-styled pl-12"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="input-styled"
            >
              {spaceTypes.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input-styled"
            >
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-border bg-card py-24 text-center opacity-0 animate-fade-in">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xl font-semibold text-foreground">No spaces found</p>
          <p className="mt-2 text-muted-foreground">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((space, i) => (
            <div key={space.id} className={`opacity-0 animate-fade-in-up`} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <SpaceCard space={space} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Spaces;
