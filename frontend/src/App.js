import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [posts,setPosts] = useState([]);
  const [isEditingPost,setIsEditingPost] = useState(false);
  const [editingId,setEditingId] = useState(null);

  const fetchPosts = async () => {
   try { 
      const res = await axios.get('http://localhost:7000/posts');
      setPosts(res.data); // Update the state with feched posts
      //console.log(res.data);
      
    } catch (err) {
      console.log("Failed to fetch post",err); 
    }
  };

  // Creating new post
  const creatPost = async () => {
        const res = await axios.post('http://localhost:7000/backend-call',{
          title,
          content
        });
        console.log(res.data);
        
        setTitle('');
        setContent('');
        fetchPosts();
      };

      useEffect( () => {
        fetchPosts();
      },[]);

      const updatePost = async () => {
        
        
        try {
          await axios.put(`http://localhost:7000/posts/${editingId}`, {
            title,
            content
          });
          console.log("Hare krihsna from Axios");
          setTitle('');
          setContent('');
          setIsEditingPost(false);
          setEditingId(null);
          fetchPosts();
        } catch (err) {
          console.log("Failed to update post from AXIOS", err);
          console.log(`Editing id is ${editingId} and ${title} and ${content}`);
          
        }
      }

      const fetchDatatoUpdate = ( key) => {
        console.log("Hare Krishna, value of key is :", key);
        const postToEdit = posts.find(p => p.id === key )
        setTitle(postToEdit.title);
        setContent(postToEdit.content);
        setIsEditingPost(true);
        setEditingId(key);
      }
  return (
    <div className="App">
      <h3> blog app basic</h3>
      <input 
      placeholder="put Title here"
      value={title}
      onChange={(e) => setTitle(e.target.value)}/> 
      <input 
      placeholder="Put content here"
      value={content}
      onChange={(e) => setContent(e.target.value)}/>
      <button type="submit" onClick={isEditingPost ? updatePost: creatPost } >
        {isEditingPost ? "Update Post" : "Create post"}
      </button> // i should togle between create and Update mode


    <hr />

    <h4>All posts:</h4>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          
          <strong>{post.title}</strong> : {post.content}
          <button type="submit" onClick={() =>fetchDatatoUpdate(post.id)} > Update</button>
          <button type="submit" onClick={()=>{}}> Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
