import {db} from '../dbConfig.js'

(
    async function (){
    try {
        const isTable = await db.schema.hasTable('products')

        if(!isTable){
            await db.schema.createTable('products', (table)=>{
                table.increments('id').primary().notNullable()
                table.string('name').notNullable()
                table.integer('price').notNullable()
                table.integer('stock').notNullable()
            })
        }
        console.log('tabla creada con exito')
    }catch(e){
        console.log(e)
    }
}
)()