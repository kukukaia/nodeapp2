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

Criar view, que é a parte que vai pro usuário

Criar o Layout.ejs

O express vai procurar esse arquivo
<%- body%> vai executar o que tá la dentro
<%= body%> vai mostrar o que tá lá dentro

alternativa do ejs:
npm handlebar expression

A rota é um elemento obrigatório no nosso projeto, mas a view não é obrigatória
o express vai fazer as rotas e o ejs vai criar as interfaces e das views (linguagem de template do javaScript, mais voltado pro html)
Permite inserir elementos dinâmicos no meio do html.

(o handlebar funciona um pouco diferente)

instalar
npm i express-ejs-layouts --save
npm i express-ejs-layouts ejs --save

importar dentro de layout vai aparecer em tudo e produtos vai aparecer só na página de produtos
