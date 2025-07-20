const express = require('express');
const router = express.Router();
const {creatPost, updatePost, getAllPosts, deletePost, welcomeAPI } = require('../controllers/postController');


router.get('/backend-call', welcomeAPI);
router.post('/backend-call', creatPost);
router.get('/posts',getAllPosts); 
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost);

module.exports = router;