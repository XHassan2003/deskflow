import space1 from "../assets/space-1.jpg";
import space2 from "../assets/space-2.jpg";
import space3 from "../assets/space-3.jpg";
import space4 from "../assets/space-4.jpg";
import space5 from "../assets/space-5.jpg";
import space6 from "../assets/space-6.jpg";

export const spaces = [
  {
    id: "1",
    name: "WorkNest Gulberg",
    location: "Gulberg, Lahore",
    price: 2500,
    priceUnit: "/day",
    rating: 4.8,
    reviews: 124,
    image: space1,
    type: "hot-desk",
    amenities: ["High-Speed Wi-Fi", "Tea/Coffee", "Printer", "Locker"],
    capacity: 1,
    description:
      "Modern coworking space in Gulberg with a vibrant startup community and premium facilities.",
    availability: "Available today",
  },
  {
    id: "2",
    name: "DHA Executive Pod",
    location: "DHA Phase 6, Karachi",
    price: 9000,
    priceUnit: "/day",
    rating: 4.9,
    reviews: 87,
    image: space2,
    type: "private-office",
    amenities: ["Wi-Fi", "AC", "Whiteboard", "Soundproof", "Monitor"],
    capacity: 1,
    description:
      "Private executive pod in DHA designed for professionals who need privacy and focus.",
    availability: "Available today",
  },
  {
    id: "3",
    name: "Blue Area Creative Hub",
    location: "Blue Area, Islamabad",
    price: 2000,
    priceUnit: "/day",
    rating: 4.6,
    reviews: 203,
    image: space3,
    type: "hot-desk",
    amenities: ["Wi-Fi", "Coffee", "Collaborative Space", "Whiteboard"],
    capacity: 1,
    description:
      "Affordable and creative workspace in Islamabad’s prime business district.",
    availability: "Available tomorrow",
  },
  {
    id: "4",
    name: "Bahria Dedicated Desk",
    location: "Bahria Town, Rawalpindi",
    price: 4500,
    priceUnit: "/day",
    rating: 4.7,
    reviews: 56,
    image: space4,
    type: "dedicated-desk",
    amenities: ["Wi-Fi", "Outdoor Seating", "Coffee", "Locker", "Parking"],
    capacity: 1,
    description:
      "Dedicated desk with peaceful rooftop access in Bahria Town.",
    availability: "Available today",
  },
  {
    id: "5",
    name: "Clifton Boardroom Elite",
    location: "Clifton, Karachi",
    price: 4000,
    priceUnit: "/hr",
    rating: 4.9,
    reviews: 42,
    image: space5,
    type: "meeting-room",
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "AC", "Video Conferencing"],
    capacity: 8,
    description:
      "Premium meeting room in Clifton ideal for corporate meetings and presentations.",
    availability: "Available today",
  },
  {
    id: "6",
    name: "Faisalabad Startup Loft",
    location: "Madina Town, Faisalabad",
    price: 1800,
    priceUnit: "/day",
    rating: 4.5,
    reviews: 178,
    image: space6,
    type: "hot-desk",
    amenities: ["Wi-Fi", "Tea", "Printer", "Event Space"],
    capacity: 1,
    description:
      "Industrial-style coworking loft for startups and freelancers in Faisalabad.",
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
