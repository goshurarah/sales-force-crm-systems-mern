const mongoose = require('mongoose');

const integrationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: { // Change 'image' to 'picture'
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Integration', integrationSchema);
