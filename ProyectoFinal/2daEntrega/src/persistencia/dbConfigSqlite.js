const config = {
    client: 'sqlite3',
    connection: {
        filename: './db/knex_sqlite'
    }
}

export const db = knex(config)