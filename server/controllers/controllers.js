const { AppBlog, User } = require("../models/models.js");

exports.login = (req, res) => {
  const {email,password} =req.body;
  User.findone({email:email},(err,user)=>{
      if(user){
         if(password === user.password){
             res.send({message:"login sucess",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
}

exports.register = (req, res) => {
  console.log(req.body);
  const {name,email,password} =req.body;
  User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"user already exist"})
    }else {
        const user = new User({name,email,password})
        user.save(err=>{
            if(err){
                res.send(err)
            }else{
                res.send({message:"sucessfull"})
            }
        })
    }
  })
}

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