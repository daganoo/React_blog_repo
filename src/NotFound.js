import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to={"/"}>Back to Homepage...</Link>
    </div>
  );
};

export default NotFound;
