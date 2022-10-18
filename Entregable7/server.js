import express from 'express'
import productRouter from './routes/productRouter.js'
import chatRouter from './routes/chatRouter.js'
import './db/models/productsModel.js'
import './db/models/chatsModel.js'

const app = express()
app.use(express.json())

app.use('/products', productRouter)
app.use('/chat', chatRouter)


const PORT = 3030
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})