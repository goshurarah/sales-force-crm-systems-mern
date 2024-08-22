// categories routes
const express = require("express");
const router = express.Router();
const Categories = require("../models/categories");

// POST route to add a new category
router.post("/addcategory", async (req, res) => {
  try {
    const { name, post_id } = req.body;
    const newCategory = new Categories({ name, post_id });
    await newCategory.save();
    res.status(201).json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json(error);
  }
});

// GET route to get all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET route to get categories by post id
router.get("/categories/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const categories = await Categories.find({ post_id: postId });
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE route to delete a category by id
router.delete("/categories/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    await Categories.findByIdAndDelete(categoryId);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
