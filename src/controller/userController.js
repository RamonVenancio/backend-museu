const db = require('../database/database')
const getUser = async ()=> {
    try {
        const users = await db.execute("SELECT * FROM user")
        return users
    } catch (error) {
        return{message: error.message}
    }
}

module.exports = {
    getUser
};