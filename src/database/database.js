const db = require("mysql2/promise")

const execute = async (SQL)=> {
    const connection = await db.createConnection({
        host: 'localHost',
        user: "root",
        password: "1234",
        database: "museu",
        port: 3306
    })

    let [results] = await connection.query(SQL)
    connection.destroy()
    return results
}

module.exports({
    execute
})