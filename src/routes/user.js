const express = require('express')
const Usuarios = express.Router()
const getUser = require('getUser')

Usuarios.get("/",async (req,res)=>{
    res.send(await getUser())
})

Usuarios.post("/",(req,res)=>{})

module.exports({
    Usuarios
})