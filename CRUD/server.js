import app from "./app/index.js";
import conexao from './database/bd.js'

const PORT = 3000

conexao.connect((error)=>{
    if(error){
        console.log('falha ao conectar ao banco de dados')
    }else{
        console.log('conexao realizada com sucesso!')
        app.listen(PORT, ()=>{
        console.log(`Servidor rodando no endereço: http://localhost:${PORT}/vendas`)
        })
    }
})