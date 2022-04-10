const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

//@desc     GET all prodtucs from mongo db
//@route    GET /api/products
//@acces    Public
router.get('/', getAllProducts);

//@desc     GET a product by id from db
//@route    GET /api/products/:id
//@acces    Public
router.get('/:id', getProductById);
    
module.exports = router;