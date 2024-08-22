const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
});

const Tags = mongoose.model("tags", tagsSchema);

module.exports = Tags;
