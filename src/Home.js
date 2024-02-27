import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title : "Welcom to my new website ", body :"new website  txt...", author :" mario" , id : 1},
        {title : "welcom to my trip", body :"my trip txt ...", author :" hhh" , id : 2},
        {title : "welcom to my party", body :"my party txt ...", author :" mario" , id : 3}
    ])
    
  return (
    <div className="home">
        
       <div>
           <BlogList blogs={blogs} title="all blogs"/>
           <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="mario's blogs"/>
       </div>
    </div>
  );
};

export default Home;
