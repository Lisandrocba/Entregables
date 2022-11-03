import { Router } from "express";
import ProductsMongoDao from "../persistencia/daos/productsMongoDao.js";


const router = Router();
const productsMongo = new ProductsMongoDao()

router.get('/', async (req,res)=>{
    const products = await productsMongo.getAll()
    if(products.length === 0){
        res.json({mensaje: 'no hay productos para mostrar'})
    }
    res.json(products)
})
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    const product = await productsMongo.getById(id)
    if(product.length === 0){
        res.json({mensaje: 'no existe un producto con ese id'})
    }
    res.json(product)
})
router.post('/', async(req,res)=>{
    const obj = req.body
    if(obj.length === 0){
        res.json('no hay producto para ingresar')
    }
    const product = await productsMongo.create(obj)
    res.json({msj: 'se ingreso el producto correctamente', product: product})
})
router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const deletedProduct = await productsMongo.delete(id)
        res.json({msj: 'producto eliminado con exito', product: deletedProduct})
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
    const productUpdate = await productsMongo.update(id, obj)
    res.json({msj: 'producto modificado', product: productUpdate})

})

export default router;
