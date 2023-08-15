const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0303',
    database: 'cocacopost'
});

connection.connect((err) => {
    if (err) console.log(err);
    console.log('Connected to MySQL database!');
});

module.exports = connection;