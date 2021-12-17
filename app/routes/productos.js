"use strict";
const express = require('express'); 
const router = express.Router(); 
const ProductosController = require('../controllers/ProductosController')





router.post('',  ProductosController.crearProducto ); 

router.get('' , ProductosController.obtenerProductos); 




module.exports = router; 

