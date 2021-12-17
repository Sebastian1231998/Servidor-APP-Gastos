const mongoose = require("mongoose");

const MercadoSchema = mongoose.Schema({


NombreMercado:{

  type:String, 
  required: true,
  trim: true

},
urlFile: {
    type:String, 
    required: true,
    trim: true
}, 
registro: {
    type: Date,
    default: Date.now(),
  },

})


module.exports = mongoose.model('Mercado', MercadoSchema)