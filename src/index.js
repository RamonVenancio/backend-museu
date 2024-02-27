const express = require('express')
const cors = require('cors')
const usuarios = require('./routes/user')
const visitante = require('./routes/visitors')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req,res)=>{
    try {
        res.send('pong')
    } catch (error) {
        res.send(error.message)
    }
})

app.use("/user", usuarios)
app.use("/visitors", visitante)

app.listen(3003,()=>{console.log('Servidor rodando na porta 3003')})