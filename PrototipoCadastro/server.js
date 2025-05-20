require('dotenv').config()//boa pratica para omitir senha

const express = require('express')//importando express
const app = express()
const mongoose = require('mongoose')//importando mongoose

const session = require('express-session') //salva sessao na memoria
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const helmet = require('helmet')
const csrf = require('csurf')

const routes = require('./routes')//rotas importadas
const path = require('path')
const {MiddlewareGlogal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware')

//diz ao express onde on arquivos views estao
app.set('views', path.resolve(__dirname, 'src', 'views'))
//escolhe que motor de templates sera usado
app.set('view engine', 'ejs')



//conexao com o banco dae dados
mongoose.connect(process.env.CONNECTION)//retorna uma promise e realiza a conexao com o banco
  .then(() => {
    console.log('Conexão com o MongoDB feita com sucesso!')
    app.emit('pronto')//enviando mensagem assim que o banco estiver pronto
})
  .catch(err => console.log('Erro na conexão com o MongoDB:', err))


//tratrando o body da requisiçao
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'frontend', 'assets')));
app.use(helmet())

const sessionOptions = session({
    secret: 'aaaaaaaaaa',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION}),
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 *60 *60 * 24 * 7 ,//uma semana em milesimos
        httpOnly:true
    }
})
//usando sessao de cookies
app.use(sessionOptions)
//usando mensagens flash
app.use(flash())


app.use(csrf())

//usando middleware
app.use(MiddlewareGlogal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)//usa as rotas feitas no arquivo routes.js 

//recebendo confirmaçao do banco para poder começar a ouvir na porta 
app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('acessar http://localhost:3000')
        console.log(`Servidor rodando na porta 3000`)
    })
})