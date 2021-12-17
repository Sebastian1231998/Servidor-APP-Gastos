const mongoose = require("mongoose");

const ProductosShema = mongoose.Schema({
  nombreProducto: {
    type: String,
    required: true,
    trim: true
  },
  cantidad: {
    type: Number,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  creado: {
    type: Date,
    default: Date.now()
  },
  mercado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mercado'
  },
});

module.exports = mongoose.model("Producto", ProductosShema);
