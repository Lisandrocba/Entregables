import "../models/productsSqlite.js";
import { db } from "../dbConfigSqlite.js";

export default class ProductsSquliteDao extends SqliteClass{
    constructor(){
        super(db.from("products"));
    }
}