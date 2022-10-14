import {db} from '../dbConfig.js'

(
    async function (){
    try {
        const isTable = await db.schema.hasTable('products')
        const isTableChat = await db.schema.hasTable('chats')

        if(!isTable){
            await db.schema.createTable('products', (table)=>{
                table.increments('id').primary().notNullable()
                table.string('name').notNullable()
                table.integer('price').notNullable()
                table.integer('stock').notNullable()
            })
        }
        if(!isTableChat){
            await db.schema.createTable('chats', (table)=>{
                table.increments('id').primary().notNullable()
                table.string('email').notNullable()
                table.integer('chat').notNullable()
            })
        }
        console.log('tabla creada con exito')
    }catch(e){
        console.log(e)
    }
}
)()