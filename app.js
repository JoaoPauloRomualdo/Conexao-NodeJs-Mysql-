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

//Query Para mostrar dados do banco
conn.query('SELECT * FROM test.users;',(err,rows, fields)=>{
    if(!err){
        console.log('Resultado',rows);
    }
    else{
        console.log('Erro ao realizar a consulta');
    }
});


app.listen(port);