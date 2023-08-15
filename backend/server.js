const express = require('express');
const app = express();
const path = require('path');  // path 모듈 사용
const multer = require('multer');


app.listen(8080, ()=>{
    console.log('server on port 8080');
})

app.use(express.json()); // Parse JSON request body

app.use( '/', express.static( path.join(__dirname, '../pages/dist') ));  
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'app/dist/index.html'));  
})
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다.


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage });
  
  app.use(express.static('public'));
  
  // 프로필 이미지 업로드 처리
  app.post('/upload-profile-image', upload.single('profileImage'), (req, res) => {
    const imageUrl = '/uploads/' + req.file.filename;
    res.json({ imageUrl });
  });


  //회원가입 & 로그인

// const mysql = require('mysql');
// const vue = require('vue');
// const bodyParser = require('body-parser');


// const connection = mysql.createConnection({
//     host:'YESEUL',
//     user: 'YESEUL',
//     password: '1017',
//     database: 'COCACO'
// });

// connection.connect();

// app.set('component engine', 'vue');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

//ID, PS 등록 하는 곳 (register)
// app.get('/register', function(req,res) {
//     res.render('register');
// });

// app.post('/register', function(req,res) {
//     const {username, password} = req.body;

//     connection.query(`INSERT INTO Info (username, password) VALUES('${username}', '${password}')`, 
//     function(error) {
//         if (error) {
//             console.log(error);
//         }
//         // res.render('successful-register');

//     });
// });

// //로그인 하는 곳 
// app.get('/login', function(req,res) {
//     res.render('login');
// });

// app.post('/login', function(req,res) {
//     const {username, password} = req.body;

//     connection.query(`SELECT * FROM Info WHERE username='${username}' and password='${password}'`, function(error, results) {
//         if (error) {
//             console.log(error);
//         }
//         // if (!Object.keys(results).length)
//         //     res.render('fail-login');
//         // else 
//         //     res.render('successful-login', {username});
//     });
// });
