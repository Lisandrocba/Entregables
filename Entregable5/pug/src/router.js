const { Router } = require("express");
const fs = require("fs");

const routerProductos = Router();
let productos = [{id: 1, nombreProducto: 'fideos', precioProducto: 200, stockProducto: 20 }];

const reloadFile = async () => {
  try {
    const productFile = await fs.promises.readFile("productos.txt", "utf8");
    productos = JSON.parse(productFile);
    console.log("productos", productos);
  } catch (error) {
    console.log(error);
  }
};

routerProductos.get("/", async (req, res) => {
    await reloadFile();
    res.render('index', {productos: productos})
});





module.exports = routerProductos;