import { mockProducts } from '../../utils/mocksProduct.js';
import {MongoClass} from '../contenedores/MongoClass.js';
import {productModel} from '../models/products.js'



export default class ProductMongoDaos extends MongoClass{
    constructor(){
        super(productModel)
    }

    async save(){
        const fiveProduct = []
        for(let i= 0; i<5; i++){
            const mockProduct = mockProducts()
            const productCreated = await this.create(mockProduct)
            fiveProduct.push(productCreated)
        }
        return fiveProduct
    }
}