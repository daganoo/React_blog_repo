import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError] = useState(null);
  
  useEffect(() => {
    setTimeout(() =>{
      fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch the data from the server")
        }
        return res.json();

      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false)
        setError(null);
      })
      .catch((err) =>{
        setError(err.message);
        setIsPending(false);
      })
    },1000)
  }, []);

  return (
    <div className="home">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error +"."}</h3>}
      {blogs && <BlogList blogs={blogs} title="all blogs"  />}
    </div>
  );
};

export default Home;
