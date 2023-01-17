import { Router } from "express";
import { fork } from 'child_process'


const router = Router()
/* const numeroRandom =(cantidad)=>{
    const result = []
    for(let i=0; i<cantidad; i++){
        result.push(Math.random() * (1000 - 1) + 1)
    }
    return result
} */

router.get("/randoms", (req,res)=>{
    /* const cant = req.params.cant
    
    res.json({numeros: numeroRandom(cant)}) */
    //const cant = req.params.cant
    res.send('hola')
    const childrenProcess = fork('childrenProcess.js')
    childrenProcess.send('message')
    childrenProcess.on('message', (resultado)=>{
        res.json({resultado})
    })
})

export default router