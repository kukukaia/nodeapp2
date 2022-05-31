//importar os modulos

const express =  require('express')
const app = express()

//Configurações

//Configurar rota
app.get('/',(req, res)=>{
    res.end("Primeira página")
})

//Inicializar o serviço
app.listen(3005)

