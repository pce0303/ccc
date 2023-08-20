const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    const response = {};
    const username = req.session.username
    response.username = username

    db.query('SELECT * FROM comments;', (err, results) => {
        if (err) {
            console.error('Error fetching comments', err);
            return res.status(500).json({ error: 'Error fetching comments' });
        }
        response.comments = results;
    });
    db.query('SELECT * FROM posts;', (err, results) => {
        if (err) {
            console.error('Error fetching posts', err);
            return res.status(500).json({ error: 'Error fetching posts' });
        }
        response.posts = results;

        res.json(response);
    });
    
});


//댓글 생성
router.post('/', (req, res) => {
    const { content } = req.body;
    var writer = req.session.username;
    const query = 'INSERT INTO comments (content, writer) VALUES (?,?)';
    const values = [content, writer];

    db.query(query, values, (err, results) => {
        if (err) console.error(err);

        console.log('comment uploaded', results);
    });
});

// //댓글 수정
// router.put('/:id', (req, res) => {
//     const id = req.params.id; //댓글 아이디 가져오기
//     const writer = req.session.username; //작성자는 로그인 유저네임
//     const { content } = req.body; //댓글 가져오기
//     const values = [ content, id ];
//     const query1 = 'SELECT writer FROM comments WHERE writer = ';
//     const query2 = 'UPDATE comments SET, content = ? WHERE id = ?';

//     db.query(query1, writer, (err, results) => { //작성자와 현재 유저가 동일인물인지 검사
//         if(err) console.log(err);

//         if(results.length > 0) {
//             db.query(query2, values, (err, results) => { //댓글 수정
//                 if(err) console.log(err);

//                 res.send(results.values);
//             });
//         } else {
//             res.send('this is not your post');
//         }
//     });
// });

// //댓글 삭제
// router.delete('/:id', (req, res) => {
//     const id = req.params.id; //댓글 id 가져오기
//     const writer = req.session.username; //작성자는 로그인 유저네임
//     const query1 = 'SELECT writer FROM comments WHERE writer = ';
//     const query2 = 'DELETE * FROM comments WHERE id = ?';

//     db.query(query1, writer, (err, results) => { //현재 유저가 작성한 글인지 검사
//         if (err) console.log(err);

//         if(results.length > 0) {
//             db.query(query2, id, (err, results) => { //댓글 삭제
//                 if (err) console.log(err);

//                 res.send('delete successfully');
//             });
//         } else {
//             res.send('this is not your post');
//         }
//     });
// });

module.exports = router;