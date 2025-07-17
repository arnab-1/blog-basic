const db = require('../configs/db');

const createPost = (title,content, callback) => {
    const sql = 'INSERT INTO posts (title,content) VALUES (?,?)';
    db.query(sql,[title, content],callback);
};

module.exports = { createPost };