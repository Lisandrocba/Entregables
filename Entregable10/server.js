import express from 'express'
import info from './routes/info.js'
import api from './routes/api.js'
import { fork } from 'child_process'

const app = express()
const PORT = 8081

app.use('/info', info)
app.use('/api', api)

app.get("/", (req, res)=>{
}) 

app.listen(PORT, ()=>{
    console.log(`escuchando desde el puerto ${PORT}`)
})