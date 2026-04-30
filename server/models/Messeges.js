const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    conversationId: { //to help group messeges bwteen to users (buyer and seller, cause i don't wanna turn this into a social messegeing app where we need to look out for predators and stuff T-T)
        type: String,
        required: true
    },

    //link the convefrsation to the item (like there's a button on the item istelf in case poeple want to messeg ethe buy directly regarding the item )
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', //whatever product model this is
        //need to make sure to have a Product.js schema that tracks things like the title, price, and images you’re displaying in the ProductCard components.
        required: true
    },
    //the sender's user ID
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    //reciever's user id >:D
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
        required: true,
        trim: true,
        maxLength: 1000 //to prevent copypasta
    },

    timestamp: { //INCASE we want to show "sent at {insert time here"ee
        type: Date,
        default: Date.now
    },

    //for read recipets
    isRead: {
        type: Boolean,
        defualt: false
    }

});

module.exports = mongoose.model('Message', MessageSchema);