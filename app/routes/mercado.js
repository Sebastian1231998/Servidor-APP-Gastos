"use strict";
const express = require('express'); 
const router = express.Router(); 
const Mercado = require("../models/MercadoModel");
const storage = require("../config/multer");
const multer = require("multer");
const MercadoController = require('../controllers/MercadoController')

const uploader = multer({ storage });

router.post('', uploader.single("file") , MercadoController.crearMercado);
router.get('', MercadoController.obtenerMercado); 

module.exports = router;