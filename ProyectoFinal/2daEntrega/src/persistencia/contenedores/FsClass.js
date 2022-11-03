import fs from "fs"

export class FsClass{
    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(){
        const obj = await fs.promises.readFile(this.ruta, "utf8")
        return JSON.parse(obj)
    }
    async getById(id){
        const obj = await this.getAll()
        const resultado = obj.find(item => item.id === id)
        return resultado
    }
    async create(prop){
        const obj = await this.getAll()
        let id = obj.length !== 0 ? obj[obj.length - 1].id + 1 : 1;
        obj.push({...prop, id})
        fs.promises.writeFile(this.ruta, JSON.stringify(obj))
        return obj
    }
    async update(id, prop){
        const obj = await this.getAll()
        obj.map(item =>{
            if(item.id === id){
                item.name = prop.name
                item.price = prop.price
                item.stock = prop.stock
            }
          })
          fs.promises.writeFile(this.ruta, JSON.stringify(obj));
          return obj
    }
    async delete(id){
        obj = await this.getAll()
        const respuesta = obj.filter(item => item.id !== parseInt(id))
        fs.promises.writeFile(this.ruta, JSON.stringify(respuesta));
        return obj
    }
}