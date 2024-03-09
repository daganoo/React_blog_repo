import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();// we use preventDefault() to not refresh the page when we click on the button 
    const blog = {title, body, author}
    setIsPending(true)
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>setIsPending(false))
    .then(() => {
      // history.go(-1);
      history.push('/');
    })
    },1000)
  }
  
//import { useHistory } from "react-router-dom";


  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}> 
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  );
};
export default Create;
