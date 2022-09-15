const express = require('express')
const app = express()
const generalRoutes = require('./routes/index.js')
const productosRouter = require('./routes/productos.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', generalRoutes)
app.use('/api/productos', productosRouter)

const PORT = process.env.PORT || 8081

app.listen(PORT, ()=>{
    console.log(`escuchando en el puerto ${PORT}`)
})
.on('error', (error)=>{
    console.log(error)
})

