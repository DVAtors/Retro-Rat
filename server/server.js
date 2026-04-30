require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const sacredKey = process.env.MONGO_URI;

console.log("connecting to lcoud")

mongoose.connected(sacredKey)
.then(() => console.log("connected to db"))
.catch((err) => console.log("CONNECTION FAILED", err))

const User = require('./models/User');

app.post('/api/add-item', async (req, res) => {
    console.log("INCOMINGGGG")
    
    try{
        const { email, }
    }
})
app.listen(PORT, () => {
    console.log("WE'RE ALIVE")
})


