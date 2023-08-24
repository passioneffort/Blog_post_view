const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGO_DB_URL;

const configDatabase = async () => {
  try {
    const authDBConnection = await mongoose.createConnection("mongodb://127.0.0.1:27017/auth",{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB auth Database connected");

    const blogsDBConnection = await mongoose.createConnection('mongodb://127.0.0.1:27017/blogs', {
      useNewUrlParser: true 
    });
    console.log("MongoDB blog Database connected");
    
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = configDatabase;
