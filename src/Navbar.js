import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogs</h1>
      <div>
        <Link to="/" style={{marginLeft:"445px"}}>Home</Link>
        <Link to="/create" style={{ color: "white" , backgroundColor:"#f1356d" , borderRadius:"8px"}}>
          New Bolg
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
