const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Space',
    required: true,
  },
  date: { type: Date, required: true },
  duration: {
    type: String,
    enum: ['1 day', '1 week', '1 month'],
    default: '1 day',
  },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled', 'completed'],
    default: 'confirmed',
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
