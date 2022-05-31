const express = require('express')
const router = express.Router()

router.get('/camisetas', (req,res)=>{
    res.end("Pagina de camisetas")
})

router.get('/calcas', (req,res)=>{
    res.end("Pagina de calcas")
})

module.exports = router

router.get('/sapatos', (req,res)=>{
    res.end("Pagina de sapatos")
})

router.get('/sapatos/:id', (req,res)=>{
    res.send(req.params.id)
    res.end("Pagina de sapatos")
})

router.get('/bolsas', (req,res)=>{
    res.end("Pagina de bolsas")
})