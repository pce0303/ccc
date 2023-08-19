const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const query1 = `SELECT COUNT(*) AS count FROM userInfo WHERE username = '${username}'`
    const query2 = 'INSERT INTO userInfo (username, password) VALUES (?, ?)';
    const values = [username, password];

    db.query(query1, (err, results) => {
        if (err) console.log(err);
        console.log('query1 worked');

        const count = results[0].count;

        if(count === 0) {
            db.query(query2, values, (err, results)=> {
                if(err) {
                    console.log(err);
                }
                console.log('query2 worked');
                res.send("<script>alert('register success!'); location.href='/login';</script>")
            });
        } else {
            res.send("<script>alert('register failed!'); location.href='/register';</script>")
        }
    });
});

module.exports = router;