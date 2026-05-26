const Listing = require('../models/Listing');

const createListing = async (req, res) => {
    try {
        // So i get the exact fields Troy's schema demands
        const { productName, description, price, condition, era, category } = req.body;

        // Cloudinary URL
        const imageUrl = req.file ? req.file.path : '';

        // Then i match the field names exactly to Troy's schema, and rely on defaults for 'status' and 'views'
        const listing = new Listing({
            productName: productName,
            description: description,
            price: price,
            condition: condition,
            era: era,
            category: category,
            mainImage: imageUrl, 
            seller: req.user.id 
        });

        const savedListing = await listing.save();
        res.status(201).json(savedListing);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createListing };