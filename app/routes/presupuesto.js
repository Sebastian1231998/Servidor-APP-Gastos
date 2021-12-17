"use strict";
const express = require("express");
const router = express.Router();
const presupuestoController = require("../controllers/PresupuestoController");

router.post('', presupuestoController.crearPresupuesto);

router.get('' , presupuestoController.obtenerPresupuesto);

router.put('/:id' , presupuestoController.actualizarPresupuesto)

module.exports = router;
