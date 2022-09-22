const express = require('express')
const app = express()
const PORT = 3030


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', require('./router'))
app.set('views', './src/views')
app.set('view engine', 'ejs')




app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
})

