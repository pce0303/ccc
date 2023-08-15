const express = require('express');
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//댓글 생성


module.exports = router;