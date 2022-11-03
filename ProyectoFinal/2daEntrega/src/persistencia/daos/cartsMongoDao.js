import { MongoClass } from "../contenedores/MongoClass.js";
import { cartModel } from "../models/carts.js";

export default class CartsMongoDao extends MongoClass{
    constructor(){
        super(cartModel);
    }
}