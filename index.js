//Reference: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
