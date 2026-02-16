const Booking = require('../models/Booking');
const Space = require('../models/Space');

// @desc    Create a booking
// @route   POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { spaceId, date, duration } = req.body;

    const space = await Space.findById(spaceId);
    if (!space) {
      return res.status(404).json({ message: 'Space not found' });
    }

    const serviceFee = Math.round(space.price * 0.1);
    const totalAmount = space.price + serviceFee;

    const booking = await Booking.create({
      user: req.user.id,
      space: spaceId,
      date,
      duration,
      totalAmount,
    });

    const populated = await booking.populate('space', 'name location image price');
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get current user's bookings
// @route   GET /api/bookings/my
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('space', 'name location image price')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
