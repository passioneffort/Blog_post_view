const express = require("express");

const router = express.Router();

const {
  register,
  login,
  listAllBlog,
  createOneBlog,
  updateOneBlog,
  deleteBlog,
} = require("../controllers/controllers.js");

const { Signup } = require("../controllers/AuthController.js");

router.post("/signup", Signup);
router.post("/register", register);
router.post("/login", login);
router.get("/", listAllBlog);
router.post("/", createOneBlog);
router.put("/:id", updateOneBlog);
router.delete("/:id", deleteBlog);

module.exports = router;