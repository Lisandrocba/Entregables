import { Router } from "express";
import { ChatMongoDaos } from "../presistencia/daos/chatMongoDaous.js";
import {Server} from 'socket.io';

const io = new Server()

const chatMongo = new ChatMongoDaos();

const router = Router();


io.on('connection',async (socket)=>{
    console.log('usuario conectado')

    socket.on('chat', async(msj)=>{
        const { nombre, apellido, edad, alias, avatar, mensaje } = msj;
        const obj = {
            author: {
            name: nombre,
            lastName: apellido,
            edad: edad,
            alias: alias,
            avatar: avatar,
            },
            text: mensaje,
        };
        await chatMongo.create(obj);
    })
    
    const response = await chatMongo.getAll()
    socket.emit('chat', response)
})




/* router.get("/", async (req, res) => {
  const chats = await chatMongo.getAll();
  if (chats.length !== 0) {
    res.json(chats);
  } else {
    res.json({ msj: "No hay mensajes para mostrar" });
  }
});

router.post("/", async (req, res) => {
  const { nombre, apellido, edad, alias, avatar, msj } = req.body;
  const obj = {
    author: {
      name: nombre,
      lastName: apellido,
      edad: edad,
      alias: alias,
      avatar: avatar,
    },
    text: msj,
  };
  const response = await chatMongo.create(obj);
  res.json(response);
}); */

export default router;
