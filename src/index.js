const express = require('express')
const cors = require('cors')
const Usuarios = require('Usuarios')

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

app.use("/user", User)


app.listen(3340,()=>{console.log('Servidor rodando na porta 3340')})