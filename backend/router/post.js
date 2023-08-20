const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res) => {z
    const { username, password } = req.body;
    const query = 'SELECT * FROM userInfo WHERE username = ? AND password = ?';
    const values = [ username, password ];

    db.query(query, values, (error, results, fields)=> {
        console.log('query worked', results);
        console.log(fields);
        console.log(error);

        if(results.length > 0) {
            req.session.isLoggedIn = true;
            req.session.username = results[0].username;

            res.send('success')
        } else {
            res.send('failure')
        }
    });
});

module.exports = router;