const express    = require('express');
const mysql      = require('mysql2');

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});