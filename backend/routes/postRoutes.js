const express = require('express');
const router = express.Router();
const {creatPost, updatePost, getAllPosts, welcomeAPI } = require('../controllers/postController');


router.get('/backend-call', welcomeAPI);
router.post('/backend-call', creatPost);
router.get('/posts',getAllPosts); 
router.put('/posts/:id',updatePost);

module.exports = router;