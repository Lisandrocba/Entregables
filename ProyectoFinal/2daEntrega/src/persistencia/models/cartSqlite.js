import {db} from '../dbConfigSqlite.js'

(
    async function (){
    try {
        const isTable = await db.schema.hasTable('carts')

        if(!isTable){
            await db.schema.createTable('carts', (table)=>{
                table.increments('id').primary().notNullable()
                table.date('timestamp').notNullable()
                table.object('products').notNullable()
            })
        }
        console.log('tabla creada con exito')
    }catch(e){
        console.log(e)
    }
}
)()