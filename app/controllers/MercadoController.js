const Mercado = require('../models/MercadoModel')

exports.crearMercado = async(req,res)=>{

     try{
        const { file, body } = req;
        if (file && body) {
          const nuevoMercado = new Mercado({
            NombreMercado: body.name,
            urlFile: `http://localhost:4000/${file.filename}`
          });
    
          await nuevoMercado.save();
      
          res.json(nuevoMercado);
        }

     }catch(error){
        console.log(error);
        res.status(400).json({ msg: "Hubo un error" });
     }
}


exports.obtenerMercado = async(req, res)=>{

try{

  let mercado = await Mercado.find(); 
  res.json({mercado}); 

}catch(error){
  console.log(error);
  res.status(400).json({ msg: "Hubo un error" });
}

}