const express = require('express');
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//게시물 생성
router.post('/', (req, res) => {
    const {title, detail} = req.body;
    const query = 'INSERT INTO posts (title, detail, writer) VALUES (?, ?, ?)';
    var writer = "choeun"; //작성자는 임시로 설정함 추후에 로그인 정보로 변경
    const values = [title, detail, writer];

    db.query(query, values, (error, results, fields) => {
        if (error) console.error(error);
    
        console.log('Inserted:', results);
    });
});

//게시물 수정
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    const values = [ title, content, id ];
    const query = 'UPDATE posts SET title = ?, detail = ? WHERE id = ?';

    db.query(query, values, (err, results, fields) => {
        if(err) console.log(err);
        
        console.log('update :', results);
    });
});

//게시물 삭제
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM posts WHERE id = ?';

    db.query(query, [id], (err, results, fields) => {
        if (err) console.error(err);

        console.log('deleted', results);
    });
});

module.exports = router;