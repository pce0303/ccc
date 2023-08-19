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

            res.send("<script>alert('login success!'); location.href='/home';</script>")
        } else {
            res.send("<script>alert('login failed!'); location.href='/login';</script>")
        }
    });
});

module.exports = router;