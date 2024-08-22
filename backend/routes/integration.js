// src/routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const Item = require("../models/Integration");

router.get("/integration", async (req, res) => {
  try {
    const integration = await Item.find();
    res.json(integration);
  } catch (err) {
    console.error("Error fetching integration:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET integration data by ID
router.get("/integration/:id", async (req, res) => {
    const integrationId = req.params.id;
  
    try {
      const integration = await Item.findOne({ id: integrationId });
  
      if (!integration) {
        return res.status(404).json({ error: "Integration not found" });
      }
  
      res.json(integration);
    } catch (err) {
      console.error("Error fetching integration:", err.message);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  
module.exports = router;
