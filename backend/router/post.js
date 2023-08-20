const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


//게시물 생성
router.post('/', (req, res) => {
    const {title, content} = req.body;
    const query = 'INSERT INTO posts (title, content, writer) VALUES (?, ?, ?)';
    var writer = req.session.username;
    const values = [title, content, writer];

    db.query(query, values, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }

        else {
            console.log(results);
            res.status(200).json({ success: true, message: 'Post uploaded' });
        }
    });
});

//게시물 수정
// router.put('/', (req, res) => {
//     const id = req.params.id; //게시물 아이디 가져오기
//     const writer = req.session.username; //작성자는 로그인 유저네임
//     const { title, content } = req.body; //게시글 가져오기
//     const values = [ title, content, id ];
//     const query1 = 'SELECT writer FROM posts WHERE writer = ';
//     const query2 = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';

//     db.query(query1, writer, (err, results) => { //현재 유저가 작성한 글인지 검사
//         if(err) console.log(err);

//         if(results.length > 0) {
//             db.query(query2, values, (err, results) => { //게시글 수정
//                 if(err) console.log(err);

//                 res.send(results.values);
//             });
//         } else {
//             res.send('this is not your post');
//         }
//     });
// });

//게시물 삭제
// router.delete('/', (req, res) => {
//     const postId = req.params.id; //게시물 id 가져오기
//     const writer = req.session.username; //작성자는 로그인 유저네임
//     const query1 = 'SELECT writer FROM posts WHERE id = ?';
//     const query2 = 'DELETE FROM posts WHERE id = ?';

//     res.json(postId)

//     db.query(query1, [postId], (err, results) => { //현재 유저가 작성한 글인지 검사
//         if (err) {
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         if(results.length > 0 && results[0].writer === writer) {
//             db.query(query2, [postId], (err, results) => { //게시글 삭제
//                 if (err) {
//                     console.log(err);
//                     res.status(500).send('Internal Server Error');
//                     return;
//                 }

//                 res.send('Deleted successfully');
//             });
//         } else {
//             res.status(403).send('this is not your post');
//         }
//     });
// });

module.exports = router;