const { log } = require('async');
const Post = require('../models/postModel');
const { message } = require('statuses');

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

const updatePost = (req,res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    
    Post.updatePostById(id,title,content, (err,result) => {
        if (err) {
            console.log('Error updating post:', err);
            return res.status(500).json({ message : 'Failed to update post'});           
        }

        res.status(200).json({message : 'Post Update successfully' });
    });

}

    const deletePost = (req,res) => {
        const { id } = req.params;

        Post.deletePostById(id, (err,result) => {
            if ( err) {
                console.log('Error deleting post:',err);
                return res.status(500).json({message : 'Failed to Delete post'});
            }

            res.status(200).json({message : 'post delete successfully'});
        });
    }

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
    updatePost,
    getAllPosts,
    deletePost,
    welcomeAPI
}