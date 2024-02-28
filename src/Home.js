import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([ {
      title: "Welcom to my new website ",
      body: "new website  txt...",
      author: "mario",
      id: 1,
    },{
      title: "welcom to my trip",
      body: "my trip txt ...",
      author: "hhh",
      id: 2
    },
    {
      title: "welcom to my party",
      body: "my party txt ...",
      author: "mario",
      id: 3
    },
  ]);
  const handleDelete = (id)=> {
      const newBlogs = blogs.filter(blog => blog.id === id)
      setBlogs(newBlogs)
  }

  return (
    <div className="home">
        <BlogList blogs={blogs} title="all blogs" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;



