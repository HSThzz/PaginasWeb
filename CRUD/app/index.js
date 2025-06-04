import express from 'express'
import conexao from '../database/bd.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const app = express()

// Configura o caminho atual corretamente
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Serve arquivos estáticos da pasta "public"
app.use(express.static('views'))


app.use(express.json())

app.get('/vendas', (req, res)=>{
    const sql = "select * from venda;"

    conexao.query(sql, (error, result, fields)=>{
        if(error){
            console.log(error)
        }else{
            //res.status(200).send(result)
            res.sendFile(path.join(__dirname, 'views', 'index.html'))
        }
    })
})



app.post('/vendas', (req, res)=>{
    const sql = "insert into venda (mes, valor) values (?, ?);"

    const venda = [
        req.body.mes,
        req.body.valor
    ]

    conexao.query(sql, venda, (error, result, fields)=>{
        if(error){
            console.log(error)
        }else{
            console.log('venda criada com sucesso')
            res.status(201).json(result)
        }
    })
})

app.put('/vendas/:id', (req, res)=>{
    const sql = "update venda set mes = ?, valor = ? where id = ?;"

    const update = [
        req.body.mes,
        req.body.valor,
        req.params.id
    ]

    conexao.query(sql, update, (error, result, fields)=>{
        if(error){
            console.log(error)
        }else{
            console.log('venda atualizada com sucesso')
            res.send(result)
        }
    })

})

app.delete('/vendas/:id', (req, res)=>{
    const sql = "delete from venda where id=?"
    const id = req.params.id

    conexao.query(sql, id, (error, result, fileds)=>{
        if(error){
            console.log(error)
        }else{
            console.log('venda apagada com sucesso')
            res.send(result)
        }
    })
})
export default app