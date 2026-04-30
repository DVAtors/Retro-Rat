const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    //WHAT ITEM EVERYONE'S COMMENTING ON
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //to pull user data from the user schema
        required: true
    },

    //the tea on the product
    text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500 //again, to stop copy pasta
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema)