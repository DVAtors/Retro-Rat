const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcrypt'); 

// Create a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Generate the salt 
        const salt = await bcrypt.genSalt(10);
        
        // Hash the incoming password with that salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user using the HASHED password
        const user = new User({ 
            name, 
            email, 
            password: hashedPassword 
        });
        
        await user.save();
        
        // Security Note: don't send the hashed password back in the response
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;