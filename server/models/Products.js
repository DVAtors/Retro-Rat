const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number, //for sort by price o7
        required: true
    },

    location: {
        city: String,
        province: String
    },
    category: {
        type: String,
        enum: ['Computer', 'whatever other categories we have']
    },
    year: {
        type: Number //sort by year o7
    },
    isVerified: {
        type: Boolean,
        default: false //for the verified badge thing
    },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    condition:{
        type: String,
        required: true,
        enum: ['New', 'Excellent', 'Very Good', 'Good', 'Ok']
    },

    createdAt: {
        type: DataTransfer,
        default: Date.now
    }
})

module.exports = mongoose.modelNames('Product', ProductSchema);