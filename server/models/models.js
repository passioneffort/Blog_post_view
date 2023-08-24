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

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema)

module.exports = { AppBlog, User };