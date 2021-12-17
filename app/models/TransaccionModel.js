const mongoonse = require('mongoose'); 

const TransaccionSchema = mongoonse.Schema({


    valor_transaccion:{
        type: Number,
        required:true,
        trim:true
    },
    tipo_transaccion:{
        type:String,
        required:true,
        trim:true
    },
    servicio:{
        type:String,
        required:true,
        trim:true
    },
    presupuesto_antes:{
        type:Number,
        required:true,
        trim:true
    },
    presupuesto_actualizado:{
        type:Number,
        required:true,
        trim:true
    },
    fecha_transaccion:{ 
        type:Date,
        default: Date.now()

    },
    referencia_transaccion:{

        type: mongoonse.Schema.Types.ObjectId,
        ref:'Mercado',
        ref:'Presupuesto'
    }



}); 


module.exports = mongoonse.model('Transaccion', TransaccionSchema)