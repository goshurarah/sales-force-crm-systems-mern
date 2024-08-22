const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  picture: String,
  description: {
    type: String,
    required: true
  },
  quote: String,
  tag_id: [String],
  category_id: [String],
  create_at: {
    type: Date,
    default: Date.now // Set default value to the current date/time
  }
});

 // Apply the pagination plugin

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
