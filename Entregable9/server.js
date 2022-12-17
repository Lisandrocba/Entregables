import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import productRouter from "./routes/productsRouter.js";
import chatRoutes from "./routes/chatRoutes.js";
import { dbConnect } from "./presistencia/dbConfig.js";
import http from "http";
import { ChatMongoDaos } from "./presistencia/daos/chatMongoDaous.js";
import {Server} from 'socket.io';



const app = express();
const server = http.createServer(app);
const PORT = 8080;
const io = new Server(server)
const chatMongo = new ChatMongoDaos();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productRouter);
app.use("/chats", chatRoutes);

app.use(
  session({
    secret: "mongoKey",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://proyectoFinal:proyectoFinal@cluster0.oel9pnk.mongodb.net/entregable10?retryWrites=true&w=majority",
    }),
    cookie: { maxAge: 30000 },
  })
);

app.set("views", "./views");
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("login")
})

app.post("/session",async (req,res)=>{
   for(const key in req.body){
    req.session[key] = req.body[key]
    req.session[key] = req.body[key]
    req.session[key] = req.body[key]
    req.session[key] = req.body[key]
    req.session[key] = req.body[key]
   }
   const name = req.session.nombre
   const lastName = req.session.apellido
   const edad = req.session.edad;
   const alias = req.session.alias;
   const avatar = req.session.avatar;
   
   const obj = {author: {name, lastName, edad, alias, avatar}, text : ''};
   if(obj.length !== 0){
    await chatMongo.create(obj)
   }

    res.render("home", {nombre: req.session.nombre})
})


//socket io chat

io.on('connection',async (socket)=>{
  console.log('usuario conectado')|89
  socket.on('chat', async(msj)=>{
        const mensaje = msj
        console.log(mensaje)
        //await chatMongo.create(obj);
      })
      
      const response = await chatMongo.getAll()
      socket.emit('chat', response)
    })



    try {
      await dbConnect();
      console.log("Conectado a la base de datos");
      server.listen(PORT, () => {
        console.log(`escuchando en el puerto ${PORT}`);
      });
    } catch (e) {
      console.log(e);
    }