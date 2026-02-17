const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  priceUnit: { type: String, default: '/day' },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  image: { type: String, required: true },
  type: {
    type: String,
    enum: ['hot-desk', 'private-office', 'meeting-room', 'dedicated-desk'],
    required: true,
    index: true,
  },
  amenities: [String],
  capacity: { type: Number, default: 1 },
  description: { type: String },
  availability: { type: String, default: 'Available today' },
}, { timestamps: true });

module.exports = mongoose.model('Space', spaceSchema);
