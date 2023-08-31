const express = require("express");

const router = express.Router();

const {
  Signup,
  Login,
  // listAllBlog,
  // createOneBlog,
  // updateOneBlog,
  // deleteBlog,
} = require("../controllers/controllers.js");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/list/", listAllBlog);
router.post("/create", createOneBlog);
router.put("/update/:id", updateOneBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;