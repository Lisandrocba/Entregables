import "../models/cartSqlite.js";
import { db } from "../dbConfigSqlite.js";

export default class CartsSquliteDao extends SqliteClass{
    constructor(){
        super(db.from("carts"));
    }
}