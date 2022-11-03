export class SqliteClass{
    constructor(collection){
        this.collection = collection;
    }

    async getAll(){
        return await this.collection.select("*")
    }
    async getById(id){
        return await this.collection.where("id", id).select("*")
    }
    async create(obj){
        return await new this.collection.insert(obj)
    }
}