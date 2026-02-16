const Space = require('../models/Space');

// @desc    Get all spaces (with optional filters)
// @route   GET /api/spaces?type=hot-desk&sort=price-low&search=bangalore
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

    // Sort options
    let sortOption = { rating: -1 }; // default: top rated
    if (sort === 'price-low') sortOption = { price: 1 };
    if (sort === 'price-high') sortOption = { price: -1 };

    const spaces = await Space.find(query).sort(sortOption);
    res.json(spaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single space by ID
// @route   GET /api/spaces/:id
exports.getSpaceById = async (req, res) => {
  try {
    const space = await Space.findById(req.params.id);
    if (!space) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json(space);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
