import { Router } from "express";

const router = Router()

router.get("/", (req, res)=>{
    const obj = {
        argumentoEntrada: process.argv0,
        nombrePlataforma: process.platform,
        versionNode: process.versions.node,
        memoriaReservada: process.argv[1],
        procesId: process.pid,
    }
    res.json({mensaje: obj})
})

export default router