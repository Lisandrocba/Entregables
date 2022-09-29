const express = require('express')
const http = require('http')
const {Server : SocketServer} = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const socketServer = new SocketServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', require('./router'))
app.set('views', './src/views')
app.set('view engine', 'ejs')



socketServer.on('connection',(client)=>{
    client.on('chat', msj =>{
        socketServer.emit('chat', msj)
    })
})






const PORT = process.env.PORT || 3000
httpServer.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})