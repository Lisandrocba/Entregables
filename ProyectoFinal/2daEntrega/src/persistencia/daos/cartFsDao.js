import { FsClass } from "../contenedores/FsClass.js"

export default class CartsFsDao extends FsClass{
    constructor(){
        super('DB/cart.json');
    }
    async desconectar(){
    }
}