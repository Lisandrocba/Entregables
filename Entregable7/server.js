import express from 'express'
import productRouter from './routes/productRouter.js'
import './db/models/productsModel.js'

const app = express()
app.use(express.json())

app.use('/products', productRouter)


const PORT = 3030
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})