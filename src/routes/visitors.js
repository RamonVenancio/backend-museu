const express = require('express')
const visitante = express.Router()
const visitorController = require('../controller/visiterController')

visitante.get("/", async (req, res) =>{
    try {
        const visitantes = await visitorController.getVisitor()
        res.status(200).send(visitantes)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


visitante.post("/", async (req, res)=> {
    try {
        console.log(req.body)
        await visitorController.createVisitor(req.body)
        res.status(201).send('Visitante cadastrado com sucesso 👌')
    } catch (error) {
        if(error instanceof Error){
            res.status(400).send(error.message) 
        }
        else{
            res.status(400).send('erro inesperado')
        }
    }
} )

visitante.delete("/:id", async (req, res)=> {
    try {
        await visitorController.deleteVisitor(req.params.id)
        res.status(200).send('Visitante deletado com sucesso 👌')
    } catch (error) {
        if(error instanceof Error){
            res.status(400).send(error.message) 
        }
        else{
            res.status(400).send('erro inesperado')
        }
    }
} )

module.exports = visitante