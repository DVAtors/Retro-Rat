const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// POST /api/listings — create a new listing
router.post('/', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/listings/ — get all approved listings
router.get('/', async (req, res) => {
  const listings = await Listing.find({ status: 'approved' })
    .populate('seller', 'name')  // <-- add this
    .sort({ createdAt: -1 });    // newest first
  res.json(listings);
});

// GET /api/listings/:id — get one listing (and increment views)
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('seller', 'name');
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;