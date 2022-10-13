import { Router } from "express";
import "../db/models/productsModel.js";
import { db } from "../db/dbConfig.js";

const routerProducts = Router();

routerProducts.get("/", async (req, res) => {
  const products = await db.from("products").select("*");
  if (products.length !== 0) {
    res.json(products);
  } else {
    res.json({ products: "no hay productos" });
  }
});
routerProducts.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await db.from("products").where("id", id).select("*");
  if (product.length !== 0) {
    res.json(product);
  } else {
    res.json({ product: "no hay productos" });
  }
});
routerProducts.post("/", async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const productCreate = await db
      .from("products")
      .insert({ name, price, stock });
    res.json({ msj: "producto creado con exito", product: productCreate });
  } catch (e) {
    console.log(e);
  }
});

export default routerProducts;
