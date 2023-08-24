const express = require("express");

const router = express.Router();

const {
  listAllBlog,
  createOneBlog,
  updateOneBlog,
  deleteBlog,
} = require("../controllers/controllers.js");

router.get("/", listAllBlog);

router.post("/", createOneBlog);

router.put("/:id", updateOneBlog);

router.delete("/:id", deleteBlog);

module.exports = router;