const express = require('express');

const app = express();

const port = 3000;

//conexao com o banco
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'joaoOne',
    password: '123456',
    database: 'test'
});

conn.connect((err) => {
    //Se ocorrer algum erro com a conexao
    if (err) {
        console.error('error connecting:' + err.stack);
        return
    }
    console.log('connected as id' + conn.threadId);
});

//Query de Delete ao banco de dados
conn.query("DELETE FROM users WHERE id = 3",
    (err,result)=>{
        if(!err){
            console.log('Usuario Deletado com sucesso');
        }
        else{
            console.log('Error:Nao foi possivel deletar o usuario');
        }
    }

)