const express = require('express');
const session = require('express-session');
const app = express();
const multer = require("multer");

const path = require('path');
const postRouter = require('./router/post');
const commentRouter = require('./router/comment');
const registerRouter = require('./router/register');
const loginRouter = require('./router/login');

app.listen(8080, ()=>{
    console.log('server on port 8080');
})

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use('/new-post', postRouter);
app.use('/home', commentRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use(express.static( path.join(__dirname, '../frontend/dist') ));  
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));  
})




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


  