const Space = require('../models/Space');
const mongoose = require('mongoose');

// @desc    Get all spaces
// @route   GET /api/spaces
exports.getSpaces = async (req, res) => {
  try {
    const { type, sort, search } = req.query;

    let query = {};

    // Filter by type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Search by name or location
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ];
    }

    // Sorting
    let sortOption = { rating: -1 }; // default: top rated

    if (sort === 'price-low') sortOption = { price: 1 };
    if (sort === 'price-high') sortOption = { price: -1 };
    if (sort === 'newest') sortOption = { createdAt: -1 };

    const spaces = await Space.find(query).sort(sortOption);

    res.status(200).json(spaces);

  } catch (error) {
    console.error('Get Spaces Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single space by ID
// @route   GET /api/spaces/:id
exports.getSpaceById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid space ID' });
    }

    const space = await Space.findById(id);

    if (!space) {
      return res.status(404).json({ message: 'Space not found' });
    }

    res.status(200).json(space);

  } catch (error) {
    console.error('Get Space By ID Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
