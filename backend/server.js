const express = require('express');
const session = require('express-session');
const app = express();

const path = require('path');
const postRouter = require('./router/post');
const commentRouter = require('./router/comment');
const registerRouter = require('./router/register');
const loginRouter = require('./router/login');
const uploadimage = require('./router/upload-image');

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





  