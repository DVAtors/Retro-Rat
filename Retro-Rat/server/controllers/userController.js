const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/users/register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ 
            name, 
            email, 
            password: hashedPassword 
        });
        
        await user.save();
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Authenticate a user & get token
// @route   POST /api/users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by their email
        const user = await User.findOne({ email });

        // Check if user exists AND the password matches the hash
        if (user && (await bcrypt.compare(password, user.password))) {
            
            // Crerate the digital passport (JWT)
            const token = jwt.sign(
                { id: user._id }, 
                process.env.JWT_SECRET, 
                { expiresIn: '30d' } // Token expires in 30 days (Discuss with team)
            );

            // Send back the user data PLUS the token
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token
            });
        } else {
            // Vague error message
            res.status(401).json({ error: 'Invalid email or password' }); 
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { registerUser, loginUser, getUsers };