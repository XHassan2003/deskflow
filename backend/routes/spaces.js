const express = require('express');
const router = express.Router();

const { 
  getSpaces, 
  getSpaceById, 
  createSpace 
} = require('../controllers/spaceController');

// Get all spaces
router.get('/', getSpaces);

// Get single space
router.get('/:id', getSpaceById);

// ✅ ADD THIS (Create space)
router.post('/', createSpace);

module.exports = router;
