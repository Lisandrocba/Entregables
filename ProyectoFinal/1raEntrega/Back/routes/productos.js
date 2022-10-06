const express = require('express');
const routerProductos = express.Router();
const fs = require('fs');
//datos de los productos: id, timestamp, nombre, descripcion, codigo, foto (url), precio, stock

let productos = [];

const reloadFile = async () => {
  try {
    const productFile = await fs.promises.readFile("productos.txt", "utf8");
    productos = JSON.parse(productFile);
  } catch (error) {
    console.log(error);
  }
};

routerProductos.get('/', async (req, res)=>{
    try {
        await reloadFile();
        res.status(200).json({ mensaje: "Los Productos son", productos });
      } catch (error) {
        res.status(400).json(error);
      }
})

routerProductos.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        await reloadFile();
        const respuesta = productos.filter(item => item.id === parseInt(id))
        res.status(200).json({ mensaje: "El producto seleccionado es: ", respuesta });
      } catch (error) {
        res.status(400).json(error);
      }
    
  })

  routerProductos.post("/", async (req, res) => {
    try {
      const { body } = req;
      console.log(body)
      await reloadFile();
      let id = productos.length !== 0 ? productos[productos.length - 1].id + 1 : 1;
      productos.push({ ...body, id });
      fs.promises.writeFile("productos.txt", JSON.stringify(productos));
      res.status(200).json({ mensaje: "producto agregado con exito", productos });
    } catch (error) {
      res.status(400).json(error);
    }
  });

  routerProductos.put("/:id", async (req, res) => {
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
      res.status(200).json({ mensaje: "se modifico el producto con exito", productos });
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
        fs.promises.writeFile("productos.txt", JSON.stringify(productos));
        res.status(200).json({ mensaje: "se elimino el producto con exito ", productos });
      } catch (error) {
        res.status(400).json(error);
      }
    
  });

module.exports = routerProductos;