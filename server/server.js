const express = require("express");
const cors = require("cors");
const configDatabase = require("./configurations/database.js");
const route = require("./routes/routes.js");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
configDatabase();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// app.use(bodyParser.json());

// app.use(cors({ origin: true, credentials: true }));
// app.use(express.json({ extended: false }));

// app.get("/", (req, res) =>
//   res.send("Hello there!! Cheers !! The server is up and running")
// );

// // using our routes
// app.use("/", route);

// listen
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
