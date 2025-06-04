
import mysql from 'mysql2'


 const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vendas'
})

export default conexao