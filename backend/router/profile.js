const express = require('express');
const router = express.Router(); // 라우터 생성
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

const directoryPath = 'uploads'; // 생성하려는 디렉토리 경로

// 디렉토리가 존재하지 않으면 생성
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
  console.log('Directory created:', directoryPath);
} else {
  console.log('Directory already exists:', directoryPath);
}

router.use(express.static(path.join(__dirname, 'uploads')));
router.use(cors({ origin: 'http://localhost:8080/profile' }));

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  // 이미지를 저장하고 저장된 이미지의 URL을 생성합니다.
  const imageUrl = `/uploads/${req.file.filename}`;
  
  res.setHeader('Content-Type', 'image/png'); 

  const imageStream = fs.createReadStream(req.file.path);
  imageStream.pipe(res);
});

module.exports = router; // 라우터를 모듈로 내보냄
