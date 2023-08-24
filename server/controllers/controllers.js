const AppBlog = require("../models/models.js");

exports.createOneBlog = (req, res) => {
  AppBlog.create(req.body)
    .then((blog) => {
      console.log({ blog });
      res.json({
        message: "Cheers!! You have successfully added Blog",
        blog,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your blog list cannot be added",
        error: err.message,
      });
    });
};

exports.listAllBlog = (req, res) => {
  AppBlog.find()
    .then((blog) => {
      console.log({ blog });
      res.json(blog);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any blog available", error: err.message });
    });
};

exports.updateOneBlog = (req, res) => {
  AppBlog.findByIdAndUpdate(req.params.id, req.body)
    .then((blog) => {
      console.log({ blog });
      return res.json({
        message: "Cheers!! You have successfully updated Blog",
        blog,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your blog list cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteBlog = (req, res) => {
  AppBlog.findByIdAndRemove(req.params.id, req.body)
    .then((blog) => {
      console.log({ blog });
      res.json({
        message: "Cheers!! You have successfully deleted your Blog",
        blog,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your blog is not there",
        error: err.message,
      });
    });
};