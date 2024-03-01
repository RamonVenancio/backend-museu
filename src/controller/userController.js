const db = require('../database/database')
const jwt = require('jsonwebtoken')

const getUser = async ()=> {
    try {
        const users = await db.execute("SELECT * FROM user")
        return users
    } catch (error) {
        if(error instanceof Error){
            return {message: error.message}
        }else{
            return{message: error.message}
        }
    }
}

const login = async (data)=> {
    try {
        const{email, senha} = data
        if(!email){
            throw new Error("'email' é um campo obrigatório!")
        }
        if(!senha){
            throw new Error("'senha' é um campo obrigatório!")
        }
        const [exists] = await db.execute(`SELECT * FROM user WHERE email = '${email}' AND password = '${senha}';`)
        if(!exists){
            throw new Error('Acesso Negado! Verifique os dados e tente novamente.')
        }
        
        const secret = process.env.SECRET

        const token = jwt.sign({id:exists.id},'secret')
        return{message:'Bem vindo ao sistema!', token:token}

    } catch (error) {
        if(error instanceof Error){
            return {message: error.message}
        }else{
            return{message: error.message}
        }
    }
}

const results = async (data)=> {
   try {
    const generos = await db.execute("SELECT genero, COUNT(*) AS total  FROM visitors  GROUP BY genero DESC;");
    const cidade = await db.execute("SELECT cidade, COUNT(*) AS total  FROM visitors  GROUP BY cidade DESC;");
    const idade = await db.execute("SELECT idade, COUNT(*) AS total  FROM visitors  GROUP BY idade DESC;");
    const profissao = await db.execute("SELECT profissao, COUNT(*) AS total  FROM visitors  GROUP BY profissao DESC;");
    const estado = await db.execute("SELECT estado, COUNT(*) AS total  FROM visitors  GROUP BY estado DESC;");
    const output = {generos, cidade, idade, profissao, estado}
    return output

   } catch (error) {
        if(error instanceof Error){
            return {message: error.message}
        }else{
            return{message: error.message}
        }
   }
}

module.exports = {
    getUser,
    login,
    results
};