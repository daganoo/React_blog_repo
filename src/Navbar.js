const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogs</h1>
      <div>
        <a href="/" style={{marginLeft:"450px"}}>Home</a>
        <a href="/create" style={{ color: "white" , backgroundColor:"#f1356d" , borderRadius:"8px"}}>
          New Bolg
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
