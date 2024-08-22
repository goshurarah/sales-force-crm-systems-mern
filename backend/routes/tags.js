const express = require("express");
const router = express.Router();
const Tags = require("../models/tags");

// POST route to add a new tag
router.post("/addtag", async (req, res) => {
  try {
    const { name, post_id } = req.body;
    const newTag = new Tags({ name, post_id });
    await newTag.save();
    res.status(201).json({ message: "Tag added successfully", tag: newTag });
  } catch (error) {
    console.error("Error adding tag:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET route to get all tags
router.get("/tags", async (req, res) => {
  try {
    const tags = await Tags.find();
    res.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET route to get tags by post id
router.get("/tags/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const tags = await Tags.find({ post_id: postId });
    res.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE route to delete a tag by id
router.delete("/tags/:id", async (req, res) => {
  try {
    const tagId = req.params.id;
    await Tags.findByIdAndDelete(tagId);
    res.json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("Error deleting tag:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
