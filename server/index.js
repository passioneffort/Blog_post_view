const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const route = require("./routes/routes.js");
// const authRoute = require("./routes/AuthRoute");
// const MONGO_URL = "mongodb://127.0.0.1:27017/database";
const PORT = 5000;
const configDatabase = require("./configurations/database.js");
configDatabase();

// mongoose
//   .connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is  connected successfully"))
//   .catch((err) => console.error(err));

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// app.use(
//   cors({
//     origin: ["http://localhost:5000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.get("/", (req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// app.use("/", authRoute);

// using our routes
app.use("/", route);

// listen
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);