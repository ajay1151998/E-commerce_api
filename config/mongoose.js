//require the library
const mongoose = require("mongoose");
//connect to database
mongoose.connect("mongodb://localhost:27017/ecommerce_api");

const db = mongoose.connection;

//error
db.on("error", console.error.bind(console, "Error connecting to Database"));

db.once("open", () => {
  console.log("Successfully Connected to Database");
});

//export
module.exports = db;
