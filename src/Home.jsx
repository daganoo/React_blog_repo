import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {
const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
  
  return (
    <div className="home">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error +"."}</h3>}
      {blogs && <BlogList blogs={blogs} title="all blogs"  />}
    </div>
  );
};

export default Home;
