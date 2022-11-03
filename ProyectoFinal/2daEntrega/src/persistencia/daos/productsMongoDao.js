import { MongoClass } from "../contenedores/MongoClass.js";
import { productModel } from "../models/products.js";

export default class ProductsMongoDao extends MongoClass{
    constructor(){
        super(productModel);
    }
}