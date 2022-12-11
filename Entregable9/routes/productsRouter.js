import { Router } from "express";
import ProductMongoDaos from "../presistencia/daos/productsMongoDaos.js";
import { mockProducts } from "../utils/mocksProduct.js";

const router = Router();
const productsMongo = new ProductMongoDaos();

router.get("/", async (req, res) => {
  const products = await productsMongo.getAll();
  if (products.length !== 0) {
    res.json(products);
  } else {
    res.json({ msj: "No hay productos para mostrar" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productsMongo.getById(id);
  if (product.length !== 0) {
    res.json(product);
  } else {
    res.json({ msj: "no se encontro el producto" });
  }
});

router.post("/", async (req, res) => {
  const mockProduct = mockProducts();
  const createProduct = await productsMongo.create(mockProduct);
  res.json({ msj: "Producto creado con exito", product: createProduct });
});

router.post("/api/poduct-test", async (req, res) => {
  const fiveProduct = await productsMongo.save();
  res.json({ msj: "Se crearon 5 productos", productos: fiveProduct });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await productsMongo.delete(id);
    res.json({ msj: "Producto eliminado con exito", producto: deletedProduct });
  } catch (e) {
    console.log(e);
  }
});

export default router;
