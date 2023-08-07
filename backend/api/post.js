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

app.post('/new-post', (req, res) => {
    const {title, detail} = req.body;

    connection.query('INSERT INTO post_table (title, detail) VALUES (?, ?)', [title, detail], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).json({ id: result.insertId });
    
        console.log('Inserted:', title, detail);
    });
});

module.exports = router;