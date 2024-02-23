const db = require('execute')
const getUser = async ()=> {
    try {
        const users = await db("SELECT * FROM user")
        return users
    } catch (error) {
        return{message: error.message}
    }
}

module.exports({
    getUser
})