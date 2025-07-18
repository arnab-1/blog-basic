import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [posts,setPosts] = useState([]);

  const fetchPosts = async () => {
   try { 
      const res = await axios.get('http://localhost:7000/posts');
      setPosts(res.data); // Update the state with feched posts
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
       
      };

      useEffect( () => {
        fetchPosts();
      },[]);

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
      <button type="submit" onClick={creatPost} >create post</button>


    <hr />

    <h4>All posts:</h4>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong> : {post.content}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
