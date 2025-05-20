//importando model
const homeModel = require('../models/homeModel')


exports.paginaInicial= (req, res)=>{
    //req.session.usuario = {nome: 'thiago', idade:23}
    //req.flash('info', 'ola mundo')//mostra a mensagem e some assim que foi mostrada ao usuario
    //console.log(req.session.usuario)
    res.render('index', {
       flash: req.flash() 
    })
}

exports.respostaFormulario = async (req, res) => {
  try {
    const nomeCliente = req.body.cliente
    const dados = await homeModel.create({
      Cliente: nomeCliente
    })
    console.log(dados)
    req.flash('sucesso', 'Cliente salvo com sucesso!')
    res.redirect('/');
  } catch (e) {
    console.log(e)
    req.flash('erro', 'Erro ao salvar dados.')
    res.redirect('/');
  }
}
