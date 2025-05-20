const mongoose = require('mongoose')

//definindo propriedades do banco
const homeSchema = new mongoose.Schema({
    Cliente: {type: String, required: true}
})

//criando model
const homeModel = mongoose.model('home', homeSchema)

module.exports = homeModel