
const port = (process.env.PORT || 4000); 
const express = require('express'); 
const app = express(); 
const path = require('path')
const cors = require('cors'); 
const conectarDB = require('./app/config/connection')

conectarDB();


app.use(cors()); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//static files 


app.use(express.static(path.join(__dirname, 'app/upload')))

app.use('/api/mercado', require('./app/routes/mercado'))
app.use('/api/productos', require('./app/routes/productos'))
app.use('/api/presupuesto', require('./app/routes/presupuesto'))
app.use('/api/transacciones', require('./app/routes/transacciones'))



app.listen(port, (err)=>{

if(err){

console.log("hay un error")


}else{
    console.log("Servidor corriendo en el puerto: " + port)
}

})