const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0303',
    database: 'cocacopost'
});

connection.connect();

app.get('/new-post', (req, res) => {
    
})