const AppBlog = require("../models/BlogModel.js");
const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");


module.exports.Signup = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    console.log("~~~~~~~~~~~~~~");
    console.log(auth);
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(201).json({ message: "User logged in successfully", success: true });
      next()
  } catch (error) {
    console.error(error);
  }
}

exports.createOneBlog = (req, res) => {
  // console.log(req.body);
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
      res.status(404).json({ 
        message: "There isnt any blog available", 
        error: err.message,
      });
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