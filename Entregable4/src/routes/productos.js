const { Router } = require("express");
const fs = require("fs");
const dataValidation = require("../middelwares/index.js");

const routerProductos = Router();
let productos = [];

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
  try {
    await reloadFile();
    res.status(200).json({ mensaje: "Los Productos son", productos });
  } catch (error) {
    res.status(400).json(error);
  }
});

/* routerProductos.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        await reloadFile();
        const respuesta = productos.filter(item => item.id === parseInt(id))
        res.status(200).json({ mensaje: "El producto seleccionado es: ", respuesta });
      } catch (error) {
        res.status(400).json(error);
      }
    
  }); */

  routerProductos.post("/", dataValidation, async (req, res) => {
    const { body } = req;
    try {
      await reloadFile();
      let id =
        productos.length !== 0 ? productos[productos.length - 1].id + 1 : 1;
      productos.push({ ...body, id });
      fs.promises.writeFile("productos.txt", JSON.stringify(productos));
      res.status(200).json({ mensaje: "producto agregado con exito", productos });
    } catch (error) {
      res.status(400).json(error);
    }
  });

  routerProductos.put("/:id", dataValidation, async (req, res) => {
    const { body } = req
    const {id} = req.params
    try {
      await reloadFile()
      productos.map(item =>{
        if(item.id === id){
            item.nombre = body.nombre
            item.precio = body.precio
            item.stock = body.stock
        }
      })

      fs.promises.writeFile("productos.txt", JSON.stringify(productos));
      res.status(200).json({ mensaje: "producto agregado con exito", productos });
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  routerProductos.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params
        await reloadFile();
        const respuesta = productos.filter(item => item.id !== parseInt(id))
        productos = respuesta
        res.status(200).json({ mensaje: "El producto seleccionado es: ", productos });
      } catch (error) {
        res.status(400).json(error);
      }
    
  });


module.exports = routerProductos;
