import { useState } from "react";


function App() {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');

  const fetch = () => {
        console.log(title);
        console.log(content);
        
        // will call backkend from here later
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
      <button type="submit" onClick={fetch}>create post</button>

    </div>
  );
}

export default App;
