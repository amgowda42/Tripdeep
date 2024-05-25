import "./Navbar.css";
import logo from "/utils/images/the_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <Link to ="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/" className="nav-link nav-link-line">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about"  className="nav-link nav-link-line">
              About
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="nav-link nav-link-line">
              Destination
            </Link>
          </li>
          <li>
            <Link to="/booknow" className="nav-link nav-link-line">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
