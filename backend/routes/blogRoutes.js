const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/"); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("picture");
// Function to check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}
// Serve static files from the 'uploads' directory
// router.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
// POST route to add a new blog

router.post("/addblog", upload, async (req, res) => {
  const baseUrl = "http://127.0.0.1:8000/public/images/";
  try {
    const { title, description, quote, tag_id, category_id } = req.body;
    const pictureUrl = req.file ? baseUrl + req.file.filename : null; // construct file URL
    console.log(pictureUrl,"picture url")
    console.log("sdsdsdsdsd")
    const newBlog = new Blog({
      title,
      picture: pictureUrl,
      description,
      quote,
      tag_id,
      category_id,
      create_at: new Date(), // Set the create_at field to the current date/time
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    // Replace backslashes with forward slashes in the picture path
    const blogsWithCorrectPicturePaths = blogs.map((blog) => {
      return blog;
    });
    res.status(200).json(blogsWithCorrectPicturePaths);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get blogs by category ID
router.get("/blogs/category/:category_id", async (req, res) => {
  try {
    const blogs = await Blog.find({ category_id: req.params.category_id });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get blogs by tag ID
router.get("/blogs/tag/:tag_id", async (req, res) => {
  try {
    const blogs = await Blog.find({ tag_id: req.params.tag_id });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs by tag:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a single blog by ID
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a blog by ID
router.put("/blogs/:id", upload, async (req, res) => {
  try {
    const { title, description, quote, tag_id, category_id } = req.body;

    let previousBlogData = await Blog.findById(req.params.id);
    const previousPicture = previousBlogData.picture;
    let picture = previousPicture;

    const updatedBlog = {
      title,
      picture,
      description,
      quote,
      tag_id,
      category_id,
    };

    // Update the blog
    const blog = await Blog.findByIdAndUpdate(req.params.id, updatedBlog, {
      new: true,
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a blog by ID
router.delete("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
