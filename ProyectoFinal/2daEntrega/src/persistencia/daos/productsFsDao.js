import { FsClass } from "../contenedores/FsClass.js"

export default class ProductsFsDao extends FsClass{
    constructor(){
        super('DB/products.json');
    }
    async desconectar(){
        
    }
}