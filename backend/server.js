const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = 7000;


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})

db.connect(() =>{
    console.log('MySQL connected');
});

app.get('/backend-call',(req,res) => {
    res.send('BlogPractice API is Running!');
});

app.post('/backend-call',(req,res) => {
    const {title, content} = req.body;

    const sql = 'INSERT INTO posts (title, content) VALUES (?,?)';
    db.query(sql,[title,content], (err,result) => {
        res.status(201).json({message : 'Post Created', id : result.insertId});

    });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
    
});
