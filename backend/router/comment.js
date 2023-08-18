const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//댓글 생성
router.post('/', (req, res) => {
    const { content } = req.body;
    var writer = req.session.username;
    const values = [content, writer];

    db.query(query, values, (err, results, fields) => {
        if (err) console.error(err);

        console.log('comment uploaded', results.content);
    });
});

//댓글 수정
router.put('/:id', (req, res) => {
    const ID = req.params.id;
    const { content } = req.body;
    const query = 'UPDATE comments SET content = ? WHERE id = ?';
    const values = [content, ID];

    db.query(query, values, (err, results, fields) => {
        if (err) console.log(err);

        console.log('comment updated', results);
    });
});

//댓글 삭제
router.delete('/:id', (req, res) => {
    const ID = req.params.id;
    const query = 'DELETE * FROM comment WHERE id = ?';

    db.query(query, ID, (err, results, fields) => {
        if (err) console.error(err);

        console.log('comment deleted', results);
    });
});

module.exports = router;