import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import SpaceCard from "../components/SpaceCard";
import { spaceTypes } from "../data/spaces";

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("rating");

  // ✅ Fetch from backend
  useEffect(() => {
    fetch("https://deskflow-6hg2.onrender.com/api/spaces")
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching spaces:", err);
        setLoading(false);
      });
  }, []);

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
  }, [spaces, search, type, sort]);

  if (loading) {
    return <p className="text-center mt-10">Loading spaces...</p>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Explore Spaces</h1>

      <p className="mt-2">{spaces.length} coworking spaces available</p>

      {/* Filters */}
      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          {spaceTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="rating">Top Rated</option>
          <option value="price-low">Low Price</option>
          <option value="price-high">High Price</option>
        </select>
      </div>

      {/* Results */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((space) => (
          <SpaceCard key={space._id} space={space} />
        ))}
      </div>
    </div>
  );
};

export default Spaces;
