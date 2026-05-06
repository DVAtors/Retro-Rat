const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Listing routes
const listingRoutes = require('./routes/listingRoutes');
app.use('/api/listings', listingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

