// categories model
const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
});

const Categories = mongoose.model("categories", categoriesSchema);

module.exports = Categories;
