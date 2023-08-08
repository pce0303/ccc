const express = require('express');
// const app = express();
const path = require('path');
const app = require('./api/post');

app.listen(8080, ()=>{
    console.log('server on port 8080');
})

// app.use('/api', postRoutes);

app.use( '/', express.static( path.join(__dirname, '../frontend/dist') ));  
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'app/dist/index.html'));  
})
