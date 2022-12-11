const express = require('express')
const app = express()
const http = require('http')
const server = http.Server(app)
const io = require('socket.io')(server)
const PORT = 3000

const productos=[{id:1, nombreProducto: 'fideo', precioProducto: 200, stockProducto: 1500}]
const conversacion = []

app.use(express.static('public'))

app.get('/',(req, res)=>{
    
})

//socket formulario
io.on('connect',(socket)=>{
    console.log('cliente conectado')
    socket.emit('productos', productos)
    socket.emit('listaChat', conversacion)
    socket.on('nuevoProducto', data =>{
        productos.push(data)
        io.sockets.emit('productos', productos)
    })
    socket.on('chat', data=>{
        conversacion.push(data)
        io.sockets.emit('listaChat', conversacion)
    })
})





server.listen(PORT, ()=>{
    console.log(`servidor escuchando al puerto ${PORT}`)
})