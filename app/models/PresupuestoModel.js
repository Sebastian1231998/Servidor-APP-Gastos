const mongoose = require('mongoose'); 

const PresupuestoSchema = mongoose.Schema({


    presupuesto : {

        type:Number, 
        required: true, 
        trim: true

    },
    registro:{
        type: Date,
        default: Date.now()
    }



}); 


module.exports = mongoose.model('Presupuesto',  PresupuestoSchema)