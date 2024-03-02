import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    return ( 
        <div>
            <h2 className="blog-details">Blog details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;