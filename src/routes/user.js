const express = require('express')
const usuarios = express.Router()
const userController = require('../controller/userController')

usuarios.get("/",async (req,res)=>{
    res.send(await userController.getUser())
})

// Usuarios.post("/",(req,res)=>{})

module.exports = usuarios
