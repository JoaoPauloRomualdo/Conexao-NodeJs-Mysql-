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


//Comando Update 
conn.query('UPDATE users SET nome = "Joao Paulo" WHERE id = 1',
    (err, result) => {
        if(!err){
            console.log("Usuario editado com sucesso")
        }
        else{
            console.log("Erro:Usuario nao foi editado com sucesso")
        }
})