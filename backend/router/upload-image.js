const express = require('express');
const router = express.Router(); // 라우터 생성
const multer = require('multer');
const path = require('path');
const cors = require('cors');


const app = express();
const upload = multer({ dest: 'uploads/' });



app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  // 이미지를 저장하고 저장된 이미지의 URL을 생성합니다.
  const imageUrl = `/uploads/${req.file.filename}`;
  
  res.json({ imageUrl: 'image_url_here' });
});


module.exports = router; // 라우터를 모듈로 내보냄
