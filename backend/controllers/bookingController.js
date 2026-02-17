const Booking = require('../models/Booking');
const Space = require('../models/Space');
const mongoose = require('mongoose');

// @desc    Create a booking
// @route   POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { spaceId, date, duration } = req.body;

    // Validate space ID
    if (!mongoose.Types.ObjectId.isValid(spaceId)) {
      return res.status(400).json({ message: 'Invalid space ID' });
    }

    const space = await Space.findById(spaceId);

    if (!space) {
      return res.status(404).json({ message: 'Space not found' });
    }

    if (!date) {
      return res.status(400).json({ message: 'Booking date is required' });
    }

    // Calculate total
    const serviceFee = Math.round(space.price * 0.1);
    const totalAmount = space.price + serviceFee;

    const booking = await Booking.create({
      user: req.user._id,
      space: spaceId,
      date,
      duration,
      totalAmount,
    });

    const populatedBooking = await Booking.findById(booking._id)
      .populate('space', 'name location image price')
      .populate('user', 'displayName email');

    res.status(201).json(populatedBooking);

  } catch (error) {
    console.error('Create Booking Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get current user's bookings
// @route   GET /api/bookings/my
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('space', 'name location image price')
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);

  } catch (error) {
    console.error('Get My Bookings Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
