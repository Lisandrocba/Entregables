import express from 'express';
import {Archivo} from '../Entregable2/index.js'

const archivo1 = new Archivo('productos.txt');
const producto1 = { title: 'cafe', price: 300, thimbnail: 'url.foto'}
const producto2 = { title: 'fideos', price: 180, thimbnail: 'url.foto2'}
const producto3 = { title: 'cerveza', price: 380, thimbnail: 'url.foto3'}
const producto4 = { title: 'mani', price: 80, thimbnail: 'url.foto4'}

archivo1.guardar(producto1);
archivo1.guardar(producto2);
archivo1.guardar(producto3);
archivo1.guardar(producto4);

const archivo = archivo1.leer()

let contadorItem=0;
let contadorItems=0;
let items = {item: archivo}
console.log('este',items)
console.log(items.item.length)
const contador = 0;
const objetoProductos = [items= { ...items, cantidad: 50}]


const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    console.log()
    
})

const numeroRandom = Math.random()*(items.item.length - 1)+1;
const resultado = numeroRandom.toFixed(0);
const itemRandom = items.item.filter(i => i.id === parseInt(resultado))
console.log(resultado)
app.get('/item', (req, res)=>{
    ++contadorItem
    res.send(itemRandom)
 })

app.get('/items', (req, res)=>{
    ++contadorItems
   res.send(archivo1.leer())
}) 

app.get('/visitas', (req, res)=>{
    res.send({visitas: {item: contadorItem, items: contadorItems}})
 })  

/* const PORT = 3030;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`Servidor http excuando en el puerto ${server.address().port}`)
})

app.get('/', (req, res)=>{
    res.send(`<h1>Bienvenidos al servidor express</h1>`)
})

let contador = 0;

app.get('/visitas', (req, res)=>{
    contador ++
    res.send(`<h3>La cantidad de visitas es ${contador}</h3>`)
}) */