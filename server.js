//o ambiente de desenvolvimento do node é diferente de produção, vc pode buscar esse arquivo e tratar ele como config
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

//importar os modulos

const express =  require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Configurações de arquivos estáticos

//pra fazer o express trabalhar com esses arquivos que estao dentro de public
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))

//configurar view engine
app.set('view engine', 'ejs')
app.set('view', __dirname+'/views')
app.set('layout','layouts/layout') // esse não é essencial, é só pra alterar a localização de layout.ejs
app.use(expressLayouts)

//importar router

const indexRouter= require('./routes/indexRouter')


//Configurar/implantar rota
app.use('/', indexRouter)
//app.get('/',(req, res)=>{
//    res.end("Primeira página")
//})

//Inicializar o serviço
//app.listen(3005)

app.listen(process.env.PORT,console.log("Servidor Iniciado"))

