const express = require('express')
const router = express.Router()

router.get('/camisetas', (req,res)=>{
    //res.end("Pagina de camisetas")
    res.render('produtos/camisetas')
})

router.get('/calcas', (req,res)=>{
    //res.end("Pagina de calcas")
    res.render('produtos/calcas')
})

router.get('/sapatos', (req,res)=>{
    //res.end("Pagina de sapatos")
    res.render('produtos/sapatos')
})

router.get('/sapatos/:id2', (req,res)=>{
    res.end(req.params.id2)
    //res.end("Pagina de sapatos")
})

module.exports = router
