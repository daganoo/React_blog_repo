import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title : "Welcom to my new website ", body :"new website  txt...", author :" fff" , id : 1},
        {title : "welcom to my trip", body :"my trip txt ...", author :" hhh" , id : 2},
        {title : "welcom to my party", body :"my party txt ...", author :" ttt" , id : 3}
    ])
    
  return (
    <div className="home">
        {
            blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>
                        {blog.title}
                    </h2>
                    <p>
                        {blog.author}
                    </p>
                </div>
            ))
        }
       
    </div>
  );
};

export default Home;
