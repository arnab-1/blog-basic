const express = require('express');
const router = express.Router();
const {creatPost, welcomeAPI } = require('../controllers/postController');


router.get('/backend-call', welcomeAPI);
router.post('/backend-call', creatPost);

module.exports = router;