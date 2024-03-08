const db = require('../database/database')

const getVisitor = async ()=> {
    try {
        const visitor = await db.execute("SELECT * FROM visitors")
        return visitor
    } catch (error) {
        return{message: error.message}
    }
}

const createVisitor = async (data)=> {
        console.log(data)
        const {nome, cpf, genero, idade, profissao, cidade, estado} = data
        if (profissao){
            if(typeof profissao !== 'string' ){
                throw new Error("'profissao'- deve ser enviado em formato string!")
            }
        }
        if (!nome){
            throw new Error("'nome' - é um campo obrigatório")
        }
        if (typeof nome !== 'string'){
            throw new Error("'nome' - deve ser enviado no formato string")
        }
        if (!cpf){
            throw new Error("'cpf' - é um campo obrigatório")
        }
        if (typeof cpf !== 'string'){
            throw new Error("'cpf' - deve ser enviado no formato string")
        }
        if (!genero){
            throw new Error("'genero' - é um campo obrigatório")
        }
        if (typeof genero !== 'string'){
            throw new Error("'genero' - deve ser enviado no formato string")
        }
        if (!idade){
            throw new Error("'idade' - é um campo obrigatório")
        }
        // if (typeof idade !== 'number'){
        //     throw new Error("'idade' - deve ser enviado no formato number")
        // }
        if (!cidade){
            throw new Error("'cidade' - é um campo obrigatório")
        }
        if (typeof cidade !== 'string'){
            throw new Error("'cidade' - deve ser enviado no formato string")
        }
        if (!estado){
            throw new Error("'estado' - é um campo obrigatório")
        }
        if (typeof estado !== 'string'){
            throw new Error("'estado' - deve ser enviado no formato string")
        }

        const [exist] = await db.execute(`SELECT * from visitors WHERE cpf = '${cpf}'`);

        if(exist){
            throw new Error('CPF já cadastrado')
        }

        if (profissao) {
            await db.execute(`INSERT INTO visitors(nome, cpf, genero, idade, profissao, cidade, estado, created_at)
        VALUES 
        ('${nome}','${cpf}','${genero}','${idade}','${profissao}','${cidade}','${estado}','${new Date().toISOString()}');
        `)
        }else{
            await db.execute(`INSERT INTO visitors(nome, cpf, genero, idade, cidade, estado, created_at)
        VALUES 
        ('${nome}','${cpf}','${genero}','${idade}', '${cidade}','${estado}','${new Date().toISOString()}');
        `)    
        }

    }

const deleteVisitor = async (id)=> {
    if(!id){
        throw new Error("'id' - não está ausente")
    }
    const [exist] = await db.execute(`SELECT * FROM visitors WHERE id = '${id}';`)

    if(!exist){
        throw new  Error("'visitante' - Não existe")
    }
    await db.execute(`DELETE FROM visitors WHERE id = '${id}';`)
}


module.exports = {
    getVisitor,
    createVisitor,
    deleteVisitor
    
};