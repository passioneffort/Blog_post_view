const mongoose = require("mongoose");

const BlogListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const AppBlog = mongoose.model("blog", BlogListSchema);

module.exports = AppBlog;