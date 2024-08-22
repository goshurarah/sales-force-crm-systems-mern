const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/getintouch', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: "Contact added successfully", contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
