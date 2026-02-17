import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";

const SpaceCard = ({ space }) => {
  return (
    <Link to={`/spaces/${space._id}`} className="border p-4 rounded">
      <img src={space.image} alt={space.name} className="w-full h-40 object-cover" />

      <h3 className="mt-2 font-bold">{space.name}</h3>

      <p className="text-sm flex items-center gap-1">
        <MapPin size={14} /> {space.location}
      </p>

      <p className="flex items-center gap-1">
        <Star size={14} /> {space.rating}
      </p>

      <p className="font-bold">Rs. {space.price}</p>
    </Link>
  );
};

export default SpaceCard;
