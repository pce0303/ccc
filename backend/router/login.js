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
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }
        else console.log(results);

        if(results.length > 0) {
            req.session.isLoggedIn = true;
            req.session.username = results[0].username;

            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    }); 
});

module.exports = router;