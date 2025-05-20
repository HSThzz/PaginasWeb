const express = require('express')
const route = express.Router() //para usar rotas
const homeController = require('./src/controllers/homeController')

//      rota   requisiçao e resposta
route.get('/', homeController.paginaInicial)

route.post('/', homeController.respostaFormulario)

module.exports = route
//exportando rotas