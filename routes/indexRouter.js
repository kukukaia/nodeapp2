const express = require('express')
const router = express.Router()

const produtosRouter = require('./produtosRouter')

router.use('/produtos', produtosRouter)

//modulos de rotas
router.get('/',(req,res)=>{
    //res.end("Index")
    res.render('index')
})

router.get('/produtos',(req,res)=>{
    //res.end("Página de produtos")
    res.render('produtos')
})

router.get('/servicos',(req,res)=>{
    res.end("Pagina de serviços")
})

router.get('/contato',(req,res)=>{
    res.end("Pagina de contatos")
})

//outros métodos(aula de 01/06/22-quarta)
router.post('/contato', (req, res)=>{
    //res.end("Pagina de CONTATO")
    let dados = JSON.stringify(req.body)
    //converte o objeto json em string
    //res.end(dados)
    res.end(dados)
})

router.patch('/contato', (req, res)=>{
    res.end("Pagina de CONTATO")
})

router.post('/imc', (req, res)=>{
    //inicialmente:
    //res.end("Pagina de IMC")Se tiver só isso, quando manda a requisição pela página do html, ele retorna somente"Página de IMC"
    //Para retornar os dados preenchidos no formulário do html, fazemos da //seguinte forma:
    let imc=req.body.peso/(req.body.altura*req.body.altura)
    //res.end("O IMC calculado é:  "+imc)
    res.render('imc/resultado',{'resultado':imc})  
})
//nao pode ter duas get ou duas post. Tem que ser um só de cada
router.get('/imc', (req, res)=>{
    res.render('imc/formulario')    
})

module.exports = router