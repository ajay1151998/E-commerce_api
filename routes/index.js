const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product_controller");

//for any other routes, access from here
router.use("/products", require("./products"));
router.get("/products", productsController.allProducts);

//exporting the router
module.exports = router;
