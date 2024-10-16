import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse-cars">browse cars</Link>
        </li>
        <li>
          <Link to="/car-details">Car detail</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/registration">Login / Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar