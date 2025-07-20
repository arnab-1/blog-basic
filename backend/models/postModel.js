const db = require('../configs/db');

const createPost = (title,content, callback) => {
    const sql = 'INSERT INTO posts (title,content) VALUES (?,?)';
    db.query(sql,[title, content],callback);
};

const updatePostById = (id, title, content , callback) => {
    
    const sql = 'UPDATE posts SET title = ? , content = ? WHERE id = ?';
    db.query(sql,[title,content,id],callback);
}

const fetchAllPosts = (callback) => {
    const sql = 'SELECT * FROM posts ORDER BY id DESC';
    db.query(sql,callback);
}

module.exports = { createPost , updatePostById, fetchAllPosts};