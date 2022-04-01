const { Router } = require('express');
const {
    addProductCart,
    getProductsCart
} = require('../../controllers/carts.controllers');

const router = Router();

router.get('/products-cart', getProductsCart);


router.post('/products-cart', addProductCart);


module.exports = router;