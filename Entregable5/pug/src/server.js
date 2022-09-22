const express = require('express')
const app = express()
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', './pug/src/views')
app.use('/', require('./router'))
app.set('view engine', 'pug')


app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
})
