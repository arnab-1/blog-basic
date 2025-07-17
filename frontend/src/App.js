import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
       // Calling backkend from here later
  const fetch = async () => {
        const res = await axios.post('http://localhost:7000/backend-call',{
          title,
          content
        });
        console.log(res.data);
        
        setTitle('');
        setContent('');
       
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
      <button type="submit" onClick={fetch} >create post</button>

    </div>
  );
}

export default App;
