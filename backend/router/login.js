const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM userInfo WHERE username = ? AND password = ?';
    const values = [ username, password ];

    db.query(query, values, (error, results)=> {
        if(error) console.log(error);
        console.log('query worked');

        if(results.length > 0) {
            req.session.isLoggedIn = true;
            req.session.username = results[0].username;

            return res.status(200).json({ message : 'Login success' });
        } else {
            return res.status(400).json({ message : 'Login failed' });
        }
    });
});

module.exports = router;