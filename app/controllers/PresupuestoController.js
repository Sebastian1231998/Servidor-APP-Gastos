const Presupuesto = require("../models/PresupuestoModel");


exports.crearPresupuesto = async (req, res) => {
  try {
    let { presupuesto } = req.body;

    console.log(presupuesto);

    let newPresupuesto = new Presupuesto(req.body);

    await newPresupuesto.save();

    res.status(200).json({
      newPresupuesto
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.obtenerPresupuesto = async (req, res) => {
  try {
    let presupuesto = await Presupuesto.find();
    console.log(presupuesto);
    res.json(presupuesto);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.actualizarPresupuesto = async (req, res) => {
  try {
    let { presupuesto } = req.body;

    console.log(req.body)

    let validaPresupuesto = Presupuesto.findById(req.params.id);

    let nuevoPresupuesto = {};

    if (!validaPresupuesto) {
      res.status(404).json({ msg: "El presupuesto no existe" });
      return;
    }

    if (presupuesto) {
      nuevoPresupuesto.presupuesto = presupuesto;
    }

    validaPresupuesto = await Presupuesto.findOneAndUpdate(
      { _id: req.params.id },
      nuevoPresupuesto,
      {
        new: true
      }
    );

    res.json({ validaPresupuesto });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};
