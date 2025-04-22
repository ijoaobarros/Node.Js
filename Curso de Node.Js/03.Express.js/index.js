const express = require("express") // Importando o express
const app = express() // Iniciando o express

// rotas
app.get("/", function(req, res){
    res.send("<h1>Bem vindo, programador!</h1>")
})

app.get("/blog/:artigo?", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/youtube", function(req, res){
    res.send("<h1>Bem vindo ao meu canal</h1>")
})

app.get("/ola/:nome/:empresa", function(req, res){
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Olá, " + nome + " do " + empresa + "!</h1>")
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})