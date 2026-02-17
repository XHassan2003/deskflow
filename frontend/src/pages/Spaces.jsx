import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";

import SpaceCard from "../components/SpaceCard";

const API_URL = "https://deskflow-6hg2.onrender.com/api/spaces";

const spaceTypes = [
  { value: "all", label: "All Spaces" },
  { value: "hot-desk", label: "Hot Desk" },
  { value: "dedicated-desk", label: "Dedicated Desk" },
  { value: "private-office", label: "Private Office" },
  { value: "meeting-room", label: "Meeting Room" },
];

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("rating");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(API_URL, {
          params: { search, type, sort },
        });

        setSpaces(data);
      } catch (error) {
        console.error("Error fetching spaces:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, [search, type, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div>
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
      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
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
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
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
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="mt-12 text-center">Loading spaces...</div>
      ) : spaces.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-border bg-card py-24 text-center">
          <p className="text-xl font-semibold text-foreground">
            No spaces found
          </p>
          <p className="mt-2 text-muted-foreground">
            Try adjusting your filters
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) => (
            <SpaceCard key={space._id} space={space} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Spaces;
