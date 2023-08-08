const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0303',
    database: 'cocacopost'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

app.post('/api/new-post', (req, res) => {
    const {title, detail} = req.body;

    var author = "choeun";


    connection.query('INSERT INTO post_table (title, detail, author) VALUES (?, ?, ?)', [title, detail, author], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).json({ id: result.insertId });
    
        console.log('Inserted:', title, detail);
    });
});

module.exports = app;