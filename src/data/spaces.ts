import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";
import space4 from "@/assets/space-4.jpg";
import space5 from "@/assets/space-5.jpg";
import space6 from "@/assets/space-6.jpg";

export interface Space {
  id: string;
  name: string;
  location: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviews: number;
  image: string;
  type: "hot-desk" | "private-office" | "meeting-room" | "dedicated-desk";
  amenities: string[];
  capacity: number;
  description: string;
  availability: string;
}

export const spaces: Space[] = [
  {
    id: "1",
    name: "The Hive Hub",
    location: "Koramangala, Bangalore",
    price: 500,
    priceUnit: "/day",
    rating: 4.8,
    reviews: 124,
    image: space1,
    type: "hot-desk",
    amenities: ["Wi-Fi", "Coffee", "Printer", "Locker"],
    capacity: 1,
    description: "A vibrant open workspace with communal tables, high-speed internet, and an energetic community of freelancers and startups. Natural light floods in through floor-to-ceiling windows.",
    availability: "Available today",
  },
  {
    id: "2",
    name: "Focus Pod Pro",
    location: "Indiranagar, Bangalore",
    price: 1200,
    priceUnit: "/day",
    rating: 4.9,
    reviews: 87,
    image: space2,
    type: "private-office",
    amenities: ["Wi-Fi", "AC", "Whiteboard", "Soundproof", "Monitor"],
    capacity: 1,
    description: "Soundproof private pod perfect for deep work and important calls. Comes with an ergonomic chair, adjustable desk, and a 27-inch external monitor.",
    availability: "Available today",
  },
  {
    id: "3",
    name: "Creative Loft",
    location: "HSR Layout, Bangalore",
    price: 350,
    priceUnit: "/day",
    rating: 4.6,
    reviews: 203,
    image: space3,
    type: "hot-desk",
    amenities: ["Wi-Fi", "Coffee", "Bean Bags", "Whiteboard"],
    capacity: 1,
    description: "An inspiring creative space with a startup vibe. Features bean bags, brainstorming walls, and a community kitchen. Great for creative professionals.",
    availability: "Available tomorrow",
  },
  {
    id: "4",
    name: "Skyline Terrace",
    location: "MG Road, Bangalore",
    price: 800,
    priceUnit: "/day",
    rating: 4.7,
    reviews: 56,
    image: space4,
    type: "dedicated-desk",
    amenities: ["Wi-Fi", "Outdoor Seating", "Coffee", "Locker", "Parking"],
    capacity: 1,
    description: "Work with a view from our stunning rooftop terrace. Dedicated desk with storage, surrounded by greenery and fresh air. The perfect escape from traditional offices.",
    availability: "Available today",
  },
  {
    id: "5",
    name: "Boardroom Elite",
    location: "Whitefield, Bangalore",
    price: 2000,
    priceUnit: "/hr",
    rating: 4.9,
    reviews: 42,
    image: space5,
    type: "meeting-room",
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "AC", "Video Conferencing"],
    capacity: 8,
    description: "Professional meeting room equipped with a 4K projector, video conferencing setup, and comfortable seating for up to 8 people. Ideal for client presentations and team meetings.",
    availability: "Available today",
  },
  {
    id: "6",
    name: "Industrial Co-Lab",
    location: "JP Nagar, Bangalore",
    price: 450,
    priceUnit: "/day",
    rating: 4.5,
    reviews: 178,
    image: space6,
    type: "hot-desk",
    amenities: ["Wi-Fi", "Coffee", "Printer", "Event Space"],
    capacity: 1,
    description: "A character-rich industrial loft with exposed brick and vintage charm. High ceilings and warm lighting create the perfect atmosphere for productive work sessions.",
    availability: "2 spots left",
  },
];

export const spaceTypes = [
  { value: "all", label: "All Spaces" },
  { value: "hot-desk", label: "Hot Desk" },
  { value: "dedicated-desk", label: "Dedicated Desk" },
  { value: "private-office", label: "Private Office" },
  { value: "meeting-room", label: "Meeting Room" },
];
