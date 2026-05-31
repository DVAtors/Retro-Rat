const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing'); 

// Controller function for creating a listing... yes
const { createListing, addComment } = require('../controllers/listingController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Basically: protect -> upload to Cloudinary -> save to DB
router.post('/', protect, upload.single('image'), createListing);

// For Comment 
// POST http://localhost:5001/api/listings/<LISTING_ID>/comments
router.post('/:id/comments', protect, addComment);

// =====================================================================
// TROY'S CODE BELOWWWWW.
// =====================================================================

// GET /api/listings/ — get all approved listings
router.get('/', async (req, res) => {
  const listings = await Listing.find({ status: 'approved' })
    .populate('seller', 'name')  
    .sort({ createdAt: -1 });    // newest first
  res.json(listings);
});

// GET /api/listings/:id — get one listing (and increment views)
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { returnDocument: 'after' }
    ).populate('seller', 'name');
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /listings/:id — update an existing listing
router.put("/:id", async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;