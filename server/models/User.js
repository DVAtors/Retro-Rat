
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },

    //all the profile shit
    profilePicture: {
        type: String, //img url
        default: 'https://example.com/default-avatar.png'
    },
    bio: {
        type: String,
        maxLength: 250,//number of characters allowed    
        
    },
    location: { //for delivery stuff and local pick ups and stuff
        city: String,
        province: String,
        zipCode: String //incase we MAYBE do a filter for "near me" products
    },

    //marketplace logic
    role: {
        type: String,
        enum: ['buyer', 'seller', 'both'], //added a both option for accounts by default
        defualt: 'both' //defualt to both?
    },
    ratings: {
        average: { type: Number, default: 0 },
        count: { type: Number, default: 0}
    },

    //account managemnet stuff
    isVerified: {
        type: Boolean,
        default: false //user not verfied when they firzt join
    }, 
    createdAt: { //we can remove this if you want, i just know that most socail media buying things have a thing for when the user acc joined the platform
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);