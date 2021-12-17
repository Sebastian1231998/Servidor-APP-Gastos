const express = require('express'); 
const router = express.Router(); 
const TransaccionesController = require('../controllers/TransaccionesController')


router.post('', TransaccionesController.crearTransaccion)

router.get('', TransaccionesController.obtenerTransaccion)


module.exports = router; 