const Producto = require("../models/ProductosModel");
const Mercado = require("../models/MercadoModel");

exports.crearProducto = async (req, res) => {
  try {
    let { mercado } = req.query;

    let MercadoExiste = await Mercado.findById(mercado);

    if (!MercadoExiste) {
      res.status(404).json({
        error: "Mercado No Existe"
      });
    }

    req.body.forEach(async (productoPost) => {
      const producto = new Producto({
        nombreProducto: productoPost.nombreProducto,
        cantidad: productoPost.cantidad,
        precio: productoPost.precio,
        tipo: productoPost.tipo,
        mercado: mercado
      });
      await producto.save();
    });

    res.status(200).json({
      estado: "correcto"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    let { mercado } = req.query;

    let MercadoExiste = await Mercado.findById(mercado);

    if (!MercadoExiste) {
      return res.status(404).json({ msg: "Mercado No existe" });
    }

    const productos = await Producto.find({ mercado });

    res.status(200).json({ productos });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};
