//Usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();


//configurar arquivos estáticos (css, imagens, scripts)
server.use(express.static("assets"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
})


//criei uma rota /
//e capturo o pedido do cliente para responder
server.get("index.html",function(req,res){
    return res.render("index.html");
})

server.get("ideias.html",function(req,res){
    return res.render("ideias.html");
})

//Liguei meu servidor na porta 3000
server.listen(3000);

