const mongoose = require("mongoose");

//product schema design
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

//exporting the schema to be used further
module.exports = Product;
