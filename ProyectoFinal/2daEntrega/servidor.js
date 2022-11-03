import express from "express";
import productsRouter from "./src/routes/productsRouter.js";
import cartsRouter from "./src/routes/cartsRouter.js"
import { dbConect } from "./src/persistencia/dbConfig.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsRouter);
app.use("/carts", cartsRouter)
const PORT = 8080;

try {
  await dbConect();
  console.log("base de datos conectada");
  app.listen(PORT, () => {
    console.log(`escuchando al puerto ${PORT}`);
  });
} catch (e) {
  console.log(e);
}
