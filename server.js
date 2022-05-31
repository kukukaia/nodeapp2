//importar os modulos

const express =  require('express')
const app = express()

//Configurações

//importar router
const indexRouter= require('./routes/indexRouter')


//Configurar rota
app.use('/', indexRouter)
//app.get('/',(req, res)=>{
//    res.end("Primeira página")
//})

//Inicializar o serviço
app.listen(3005)

