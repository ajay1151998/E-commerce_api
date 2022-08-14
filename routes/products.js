const express = require("express");
const router = express.Router();
const productsController = require('../controllers/product_controller');

// route to create product 
router.post('/create', productsController.createProduct);

// route to delete product 
router.delete('/:id', productsController.deleteProduct);

// route to update products and increase/decrease quantity
router.post('/:id/update_quantity/:num', productsController.updateProductIncOrDec); 

module.exports = router;