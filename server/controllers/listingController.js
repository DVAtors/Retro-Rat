const Listing = require('../models/Listing');

const createListing = async (req, res) => {
    try {
        const { productName, description, price, condition, era, category, location } = req.body;

        const imageUrl = req.file ? req.file.path : '';

        const listing = new Listing({
            productName: productName,
            description: description,
            price: price,
            condition: condition,
            era: era,
            category: category,
            location: location, 
            mainImage: imageUrl, 
            seller: req.user.id 
        });

        const savedListing = await listing.save();
        res.status(201).json(savedListing);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add a comment to a listing
const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const listingId = req.params.id; 

        if (!text) {
            return res.status(400).json({ error: 'Comment text is required' });
        }

        // Fetch parent document
        const listing = await Listing.findById(listingId);
        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        const newComment = {
            author: req.user.id,
            text: text
        };

        // Put in array
        listing.comments.push(newComment);

        // Save the parent document back to the database
        await listing.save();

        // Populate the author names before sending it back
        await listing.populate('comments.author', 'name');

        res.status(201).json(listing);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createListing, addComment };