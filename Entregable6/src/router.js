const { Router } = require("express");
const fs = require("fs");

const routerProductos = Router();
let productos = [/* {id: 1, nombreProducto: 'fideos', precioProducto: 200, stockProducto: 20 } */];

const reloadFile = async () => {
  try {
    const productFile = await fs.promises.readFile("productos.txt", "utf8");
    productos = JSON.parse(productFile);
  } catch (error) {
    console.log(error);
  }
};

routerProductos.get("/", async (req, res) => {
    await reloadFile();
    res.render('index', {productos: productos})
});

routerProductos.get("/create", (req, res) => {
    res.render('create')
  });


  routerProductos.post("/", async (req, res) => {
    const { body } = req;
    try {
      await reloadFile();
      let id =
        productos.length !== 0 ? productos[productos.length - 1].id + 1 : 1;
      productos.push({ ...body, id });
      fs.promises.writeFile("productos.txt", JSON.stringify(productos));
      res.render('index', {productos: productos})   
    } catch (error) {
      res.status(400).json(error);
    }
  });



module.exports = routerProductos;