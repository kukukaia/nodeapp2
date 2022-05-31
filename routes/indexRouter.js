const express = require('express')
const router = express.Router()

const produtosRouter = require('./produtosRouter')

router.use('/produtos', produtosRouter)

//modulos de rotas
router.get('/',(req,res)=>{
    res.end("Index")
})

router.get('/produtos',(req,res)=>{
    res.end("Página de produtos")
})

router.get('/servicos',(req,res)=>{
    res.end("Pagina de serviços")
})

router.get('/contato',(req,res)=>{
    res.end("Pagina de contatos")
})


module.exports = router