criar .env
criar .gitignore
criar server.js
npm init -y
npm i dotenv express --save

Editar o server.js
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


    npm run devStart

Criar pasta router
criar arquivo indexRouter.js

    app.get('/',(req,res)=>{
        res.end("Primeira pagina")
    })

Criar a rota das páginas