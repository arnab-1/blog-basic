const express = require('express');
const router = express.Router();
const {creatPost, getAllPosts, welcomeAPI } = require('../controllers/postController');


router.get('/backend-call', welcomeAPI);
router.post('/backend-call', creatPost);
router.get('/posts',getAllPosts); 

module.exports = router;