import { Router } from "express";
import '../db/models/chatsModel.js'
import { db } from "../db/dbConfig.js";

const routerChat = Router();

routerChat.get('/', async (req, res)=>{
    const chats = await db.from("chats").select("*");
    if(chats.length !== 0){
        res.json(chats)
    }else{
        res.json({mensaje: "no hay mensajes para mostrar", chats: chats})
    }
})

routerChat.post('/', async(req,res)=>{
    const {email, chat} = req.body

    const chats = await db.from("chats").insert({email, chat})
    res.json({msj: 'se ingreso mensaje correctamente', chats})
})

export default routerChat;