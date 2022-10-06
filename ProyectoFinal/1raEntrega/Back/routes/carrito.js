const express = require('express');
const routerCarrito = express.Router();
const fs = require('fs');

let carrito = []

const reloadFile = async () => {
    try {
      const carritoFile = await fs.promises.readFile("carrito.txt", "utf8");
      carrito = JSON.parse(carritoFile);
    } catch (error) {
      console.log(error);
    }
  };
//datos del carrito id, timestamp, producto {}

routerCarrito.get('/', (req, res)=>{
    res.send('Hola desde el carrito')
})

routerCarrito.post('/', async (req, res)=>{
    try {
        let date = new Date()
        let timestamp = `dia: ${date.getDate()}/${date.getMonth() + 1} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        let id = carrito.length !== 0 ? carrito[carrito.length - 1].id + 1 : 1;
        carrito.push(...carrito, { id, timestamp, producto:[] });
        fs.promises.writeFile("carrito.txt", JSON.stringify(carrito));
        res.status(200).json({ mensaje: "Carrito creado con exito, numero de id:", id });
      } catch (error) {
        res.status(400).json(error);
      }
})

routerCarrito.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params
        await reloadFile();
        const respuesta = carrito.filter(item => item.id !== parseInt(id))
        carrito = respuesta
        fs.promises.writeFile("carrito.txt", JSON.stringify(carrito));
        res.status(200).json({ mensaje: "se elimino el carrito con exito ", carrito });
      } catch (error) {
        res.status(400).json(error);
      }
    
  });

  routerCarrito.get("/:id/productos", async (req, res) => {
    try {
        const {id} = req.params
        await reloadFile();
        const respuesta = carrito.filter(item => item.id === parseInt(id))
        carrito = respuesta
        fs.promises.writeFile("carrito.txt", JSON.stringify(carrito));
        res.status(200).json({ mensaje: "carrito seleccionado: ", carrito });
      } catch (error) {
        res.status(400).json(error);
      }
    
  });

  routerCarrito.delete("/:id/productos/:id_prod", async (req, res) => {
    try {
        const {id, id_prod} = req.params
        await reloadFile();
        const carritoId = carrito.filter(item => item.id === parseInt(id))
        const respuesta = carritoId.producto.filter(item => item.id !== parseInt(id_prod))
        carrito.push({ ...carrito, respuesta });
        fs.promises.writeFile("carrito.txt", JSON.stringify(carrito));
        res.status(200).json({ mensaje: "se elimino el carrito con exito ", carrito });
      } catch (error) {
        res.status(400).json(error);
      }
    
  });

module.exports = routerCarrito;