import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import productRouter from "./routes/productsRouter.js";
import chatRoutes from "./routes/chatRoutes.js";
import { dbConnect } from "./presistencia/dbConfig.js";
import http from "http";

const app = express();
const server = http.createServer(app);
const PORT = 8080;

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

app.post("/session",(req,res)=>{
   for(const key in req.body){
    req.session[key] = req.body[key]
   }
    res.render("home", {nombre: req.session.nombre})
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
