const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

// import routes

const productosRoutes = require('./routes/productos');
const carritoRoutes = require('./routes/carrito')


app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//productos
app.use('/productos', productosRoutes )

//carrito
app.use('/carrito', carritoRoutes)

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`escuchando en el puesto ${PORT}`)
})