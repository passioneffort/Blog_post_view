
const express = require("express");
const cors = require("cors");
const configDatabase = require("./configurations/database.js");
const route = require("./routes/routes.js");
// const route = require("./routes/AuthRoute.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
configDatabase();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());




//connecting to the mongodb database


// add the middlewares
app.get("/", (req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);

// using our routes
app.use("/", route);



// listen
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
