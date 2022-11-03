import { Router } from "express";
import CartsMongoDao from "../persistencia/daos/cartsMongoDao.js";

const router = Router()
const cartsMongo = new CartsMongoDao()

router.get("/", async(req,res)=>{
    const carts = await cartsMongo.getAll()
    if(carts.length === 0){
        res.json({msj: "no hay carritos para mostrar"})
    }
    res.json(carts)
})
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    const carts = await cartsMongo.getById(id)
    if(carts.length === 0){
        res.json({mensaje: 'no existe un carrito con ese id'})
    }
    res.json(carts)
})
router.post('/', async(req,res)=>{
    const obj = req.body
    if(obj.length === 0){
        res.json('no hay carrito para ingresar')
    }
    const carts = await cartsMongo.create(obj)
    res.json({msj: 'se creo un carrito correctamente', carts: carts})
})
router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const deletedCart = await cartsMongo.delete(id)
        res.json({msj: 'carrito eliminado con exito', product: deletedCart})
    }catch(e){
        console.log(e)
    }
   
})
router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const obj = req.body
    if(obj.length === 0){
        res.json({msj: 'no hay datos para modificar'})
    }
    const cartUpdate = await cartsMongo.update(id, obj)
    res.json({msj: 'carrito modificado', cart: cartUpdate})

})

export default router