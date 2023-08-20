const express = require('express');
const app = express()

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const postRouter = require('./router/post');
const commentRouter = require('./router/comment');
const registerRouter = require('./router/register');
const loginRouter = require('./router/login');
const ProfileRouter = require('./router/profile');

app.listen(8080, ()=>{
    console.log('server on port 8080');
});

app.use(cors());

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(    
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true,
        store: new FileStore(),
        // cookie: {
        //     httpOnly: true,
        //     secure: false
        // }
    })
);

app.use('/post', postRouter);
app.use('/home', commentRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', ProfileRouter);

app.use('/', express.static( path.join(__dirname, '../frontend/dist') ));  
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));  
});
