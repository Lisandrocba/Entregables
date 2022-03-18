import express from "express";
import {Archivo} from '../entregable6/index.js'

const producto1 = { title: 'cafe', price: 300, thimbnail: 'url.foto'}
const producto2 = { title: 'fideos', price: 180, thimbnail: 'url.foto2'}

const archivo1 = new Archivo('productos.txt');
archivo1.guardar(producto1)

const articulo = archivo1.leer()

let contadorItem=0;
let contadorItems=0;
const items = [{item: articulo}]
const contador = 0;
const objetoProductos = {items: {nombre: 'arroz', precio: 120}, cantiad: {cantidad: 10}}




const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    console.log(items)
    
})

app.get('/item', (req, res)=>{
    ++contadorItem
    res.send(objetoProductos)
 })

app.get('/items', (req, res)=>{
    ++contadorItems
   res.send(items)
}) 

app.get('/visitas', (req, res)=>{
    res.send({visitas: {item: contadorItem, items: contadorItems}})
 }) 