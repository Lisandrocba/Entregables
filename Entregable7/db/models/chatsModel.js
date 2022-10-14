import {db} from '../dbConfig.js'

(
    async function (){
    try {
        const isTableChat = await db.schema.hasTable('chats')

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