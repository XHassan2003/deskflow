const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Space = require("./models/Space");

dotenv.config();

const spaces = [
  {
    name: "WorkNest Gulberg",
    location: "Gulberg, Lahore",
    price: 2500,
    priceUnit: "/day",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    type: "hot-desk",
    amenities: ["High-Speed Wi-Fi", "Tea/Coffee", "Printer", "Locker"],
    capacity: 1,
    description:
      "Modern coworking space in Gulberg with a vibrant startup community and premium facilities.",
    availability: "Available today",
  },
  {
    name: "DHA Executive Pod",
    location: "DHA Phase 6, Karachi",
    price: 9000,
    priceUnit: "/day",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    type: "private-office",
    amenities: ["Wi-Fi", "AC", "Whiteboard", "Soundproof", "Monitor"],
    capacity: 1,
    description:
      "Private executive pod in DHA designed for professionals who need privacy and focus.",
    availability: "Available today",
  },
  {
    name: "Blue Area Creative Hub",
    location: "Blue Area, Islamabad",
    price: 2000,
    priceUnit: "/day",
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    type: "hot-desk",
    amenities: ["Wi-Fi", "Coffee", "Collaborative Space", "Whiteboard"],
    capacity: 1,
    description:
      "Affordable and creative workspace in Islamabad’s prime business district.",
    availability: "Available tomorrow",
  },
  {
    name: "Bahria Dedicated Desk",
    location: "Bahria Town, Rawalpindi",
    price: 4500,
    priceUnit: "/day",
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    type: "dedicated-desk",
    amenities: ["Wi-Fi", "Outdoor Seating", "Coffee", "Locker", "Parking"],
    capacity: 1,
    description:
      "Dedicated desk with peaceful rooftop access in Bahria Town.",
    availability: "Available today",
  },
  {
    name: "Clifton Boardroom Elite",
    location: "Clifton, Karachi",
    price: 4000,
    priceUnit: "/hr",
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    type: "meeting-room",
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "AC", "Video Conferencing"],
    capacity: 8,
    description:
      "Premium meeting room in Clifton ideal for corporate meetings and presentations.",
    availability: "Available today",
  },
  {
    name: "Faisalabad Startup Loft",
    location: "Madina Town, Faisalabad",
    price: 1800,
    priceUnit: "/day",
    rating: 4.5,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    type: "hot-desk",
    amenities: ["Wi-Fi", "Tea", "Printer", "Event Space"],
    capacity: 1,
    description:
      "Industrial-style coworking loft for startups and freelancers in Faisalabad.",
    availability: "2 spots left",
  },
];

async function importData() {
  try {
    // ensure DB connection before writes
    await connectDB();
    await Space.deleteMany(); // clears old data
    await Space.insertMany(spaces);
    console.log("Spaces Imported Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message || error);
    console.error("Hint: if your MongoDB Atlas DNS/SRV is unavailable you can run: node seeder.js --test to validate seed data without connecting to DB.");
    process.exit(1);
  }
}

function validateSeedData() {
  const errs = [];
  spaces.forEach((s, i) => {
    const doc = new Space(s);
    const e = doc.validateSync();
    if (e) errs.push({ index: i, name: s.name, error: e.message });
  });
  if (errs.length) {
    console.error("Validation errors found in seed data:", errs);
    process.exit(1);
  }
  console.log(`Seed data validated successfully — ${spaces.length} documents.`);
  process.exit(0);
}

function dryRun() {
  console.log("Dry run: the following documents would be inserted:");
  console.log(JSON.stringify(spaces, null, 2));
  process.exit(0);
}

// CLI flags:
//   --test | --validate  => validate seed against schema (no DB)
//   --dry | --mock       => print documents (no DB)
// default                => connect to DB and insert
const args = process.argv.slice(2);
if (args.includes("--test") || args.includes("--validate")) {
  validateSeedData();
} else if (args.includes("--dry") || args.includes("--mock")) {
  dryRun();
} else {
  importData();
}
