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
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        console.log('query1 worked');

        const count = results[0].count;

        if(count === 0) {
            db.query(query2, values, (err, results)=> {
                if(err) {
                    console.log(err);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }
                console.log('query2 worked');
                return res.status(200).json({ message: 'Registration Successful' });
            });
        } else {
            return res.status(400).json({ message: 'Username already exists' });
        }
    });
});

module.exports = router;