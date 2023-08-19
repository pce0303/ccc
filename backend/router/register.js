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
        else console.log(results);

        const count = results[0].count;

        if(count === 0) {
            db.query(query2, values, (err, results)=> {
                console.log('userInfo inserted', results);
                if(err) {
                    console.log(err);
                }
                res.send('success')
            });
        } else {
            res.send('failure')
        }
    });
});

module.exports = router;