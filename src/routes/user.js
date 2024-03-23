const express = require('express')
const usuarios = express.Router()
const userController = require('../controller/userController')

usuarios.get("/",async (req,res)=>{
    res.send(await userController.getUser())
})

usuarios.post("/login", async (req,res)=>{
    const result = await userController.login(req.body)
    res.status(result.statusCode).send(result)
})

usuarios.get("/results", async (req,res)=>{
    res.send(await userController.results())
})

module.exports = usuarios
