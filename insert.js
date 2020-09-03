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

conn.connect ((err)=>{
    //Se ocorrer algum erro com a conexao
    if(err){
        console.error('error connecting:'+ err.stack);
        return
    }
    console.log('connected as id' + conn.threadId);
});

//Cadastro de Dados
conn.query('INSERT INTO users(nome, email)VALUES("JoaoAugusto","JoaoAugusto@gmail.com")',
    (err,result)=>{
        if(!err){
            console.log('Usuario cadastrado com sucesso')
        }
        else{
            console.log('Erro ao cadastra o usuario')
        }
    }
)


app.listen(port);