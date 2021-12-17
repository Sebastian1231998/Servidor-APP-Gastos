'use strict'
const mongoose = require('mongoose')
const {mongoDB} = require('./data')

const conectarDB = async ()=>{

    
    try{

       await mongoose.connect( mongoDB.URL , {

           useNewUrlParser:true,
           useUnifiedTopology:true,
            
               
        })

        console.log('DB conectada')

    }catch(error){

        console.log(error)
        process.exit(1); //detener la app
    }

}

module.exports = conectarDB;