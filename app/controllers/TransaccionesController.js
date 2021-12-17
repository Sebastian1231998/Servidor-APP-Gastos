const Transaccion = require("../models/TransaccionModel");

exports.crearTransaccion = async (req, res) => {
  try {
    const transaccion = new Transaccion(req.body);

    await transaccion.save();

    res.status(200).json(transaccion);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};
exports.obtenerTransaccion = async (req, res) => {
  try {
    let transacciones = await Transaccion.find();

    res.status(200).json(transacciones);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};
