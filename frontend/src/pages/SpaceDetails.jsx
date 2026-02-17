import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SpaceDetails = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    fetch(`https://deskflow-6hg2.onrender.com/api/spaces/${id}`)
      .then((res) => res.json())
      .then((data) => setSpace(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!space) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-10">
      <img src={space.image} alt={space.name} className="w-full h-60 object-cover" />

      <h1 className="text-3xl font-bold mt-4">{space.name}</h1>
      <p>{space.location}</p>
      <p>Rs. {space.price}</p>

      <p className="mt-4">{space.description}</p>

      <Link to="/spaces" className="text-blue-500 mt-4 block">
        Back
      </Link>
    </div>
  );
};

export default SpaceDetails;
