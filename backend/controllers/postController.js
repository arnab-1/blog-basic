const { log } = require('async');
const Post = require('../models/postModel');

const creatPost = (req, res) => {
    const { title, content } = req.body;

    Post.createPost(title,content, (err,result) => {
        if (err) {
            console.log('❌ Error inserting post:',err);
            return res.status(500).json({ error : 'Internal Server Error'});
        }

        res.status(201).json({
            message : '✅Post Created',
            id: result.insertId
        });
    })
};

    const getAllPosts = (req,res) => {
        Post.fetchAllPosts((err,results) => {
            if (err) {
                console.log('❌ Error fetching posts:', err);
                return res.status(500).json({ error: 'Internal Server Error'});            
            }

            res.status(200).json(results);
        })
    }

const welcomeAPI = (req,res) => {
    res.send('🎉 BlogPractice API is Running!');
};


module.exports = {
    creatPost,
    getAllPosts,
    welcomeAPI
}