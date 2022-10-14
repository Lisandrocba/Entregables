import { Router } from "express";
import '../db/models/chatsModel.js'
import { db } from "../db/dbConfig.js";

const routerChat = Router();

routerChat.get('/', (req, res)=>{
    const chats = db.form('chats').select('*')
    if(chats.length !== 0){
        res.json(chats)
    }else{
        res.json({mensaje: 'no hay mensajes para mostrar', chats: chats})
    }
})

routerChat.post('/', async(req,res)=>{
    const {email, msj} = req.body

    const chats = await db.form('chats').insert({email, msj})
    res.json({msj: 'se ingreso mensaje correctamente', chats})
})

export default routerChat;