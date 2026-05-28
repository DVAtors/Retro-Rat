const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing"); // for Troy's GET routes

// Controller function for creating a listing... yes
const { createListing } = require("../controllers/listingController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Basically: protect -> upload to Cloudinary -> save to DB
router.post("/", protect, upload.single("image"), createListing);

// =====================================================================
// TROY'S CODE BELOWWWWW.
// =====================================================================

// GET /api/listings/ — get all approved listings
router.get("/", async (req, res) => {
	const listings = await Listing.find({ status: "approved" })
		.populate("seller", "name")
		.sort({ createdAt: -1 }); // newest first
	res.json(listings);
});

// Robert added this part... for testing
// This works, just commented it out, as I'm not backend ~Robert
// GET /api/listings/pending — get all pending listings (admin only)
// router.get("/pending", async (req, res) => {
// 	try {
// 		const listings = await Listing.find({ status: "pending" })
// 			.populate("seller", "name")
// 			.sort({ createdAt: -1 }); // sorts them newest first
// 		res.json(listings);
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// });

// Another Robert added route... I'm so sorry troy :(
// GET /api/listings/past — get all approved and rejected listings
// router.get("/past", async (req, res) => {
// 	try {
// 		const listings = await Listing.find({
// 			status: { $in: ["approved", "rejected"] },
// 		})
// 			.populate("seller", "name")
// 			.sort({ createdAt: -1 });
// 		res.json(listings);
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// });

// Another TestRoute by rob for getting the user's listings
// GET /api/listings/my — get all listings for the logged-in user
// router.get("/my", protect, async (req, res) => {
// 	try {
// 		const listings = await Listing.find({ seller: req.user.id }).sort({
// 			createdAt: -1,
// 		});
// 		res.json(listings);
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// });

// GET /api/listings/:id — get one listing (and increment views)
router.get("/:id", async (req, res) => {
	try {
		const listing = await Listing.findByIdAndUpdate(
			req.params.id,
			{ $inc: { views: 1 } },
			{ new: true },
		).populate("seller", "name");
		if (!listing) return res.status(404).json({ error: "Listing not found" });
		res.json(listing);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// PUT /listings/:id — update an existing listing
router.put("/:id", async (req, res) => {
	try {
		const updated = await Listing.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!updated) {
			return res.status(404).json({ error: "Listing not found" });
		}
		res.json(updated);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
