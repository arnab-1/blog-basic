import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State for post title input
  const [title, setTitle] = useState('');
  // State for post content input
  const [content, setContent] = useState('');
  // State to store all posts fetched from backend
  const [posts, setPosts] = useState([]);
  // State to check if editing mode is active
  const [isEditingPost, setIsEditingPost] = useState(false);
  // State to store the id of the post being edited
  const [editingId, setEditingId] = useState(null);

  // Function to fetch all posts from backend
  const fetchPosts = async () => {
    try { 
      const res = await axios.get('http://localhost:7000/posts');
      setPosts(res.data); // Update posts state with fetched data
    } catch (err) {
      console.log("Failed to fetch post", err); 
    }
  };

  // Function to create a new post
  const creatPost = async () => {
    const res = await axios.post('http://localhost:7000/backend-call', {
      title,
      content
    });
    console.log(res.data);
    setTitle(''); // Clear title input
    setContent(''); // Clear content input
    fetchPosts(); // Refresh posts list
  };

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to update an existing post
  const updatePost = async () => {
    try {
      await axios.put(`http://localhost:7000/posts/${editingId}`, {
        title,
        content
      });
      setTitle(''); // Clear title input
      setContent(''); // Clear content input
      setIsEditingPost(false); // Exit editing mode
      setEditingId(null); // Clear editing id
      fetchPosts(); // Refresh posts list
    } catch (err) {
      console.log("Failed to update post", err);
    }
  }

  // Function to load post data into form for editing
  const fetchDatatoUpdate = (key) => {
    console.log("Hare Krishna, value of key is :", key);
    const postToEdit = posts.find(p => p.id === key);
    setTitle(postToEdit.title); // Set title input to post's title
    setContent(postToEdit.content); // Set content input to post's content
    setIsEditingPost(true); // Enable editing mode
    setEditingId(key); // Set editing id
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/posts/${id}`);
      setPosts(prev => prev.filter(posts => posts.id !== id));
    } catch (err) {
      console.log("Failed to delete post Hare Krishna", err);
    }
  }

  return (
    <div className="App">
      <h3> blog app basic</h3>
      {/* Input for post title */}
      <input 
        placeholder="put Title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> 
      {/* Input for post content */}
      <input 
        placeholder="Put content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {/* Button to create or update post */}
      <button type="submit" onClick={isEditingPost ? updatePost : creatPost}>
        {isEditingPost ? "Update Post" : "Create post"}
      </button>

      <hr />

      <h4>All posts:</h4>
      <ul>
        {/* Render all posts */}
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> : {post.content} 
            {/* Button to load post data for editing */}
            <button type="submit" onClick={() => fetchDatatoUpdate(post.id)}> Update</button>
            {/* Placeholder for delete functionality */}
            <button type="submit" onClick={() => deletePost(post.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
