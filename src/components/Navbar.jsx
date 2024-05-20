import "./Navbar.css";

const LOGO_URL =
  "https://cdn.dribbble.com/userupload/5222793/file/original-46d3ef1abd8fba5f6b21c603cf01acd6.png?resize=752x";
const Navbar = () => {
  return (
    <div className="navigation">
      <a href="/">
        <img src={LOGO_URL} className="logo" alt="logo" />
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="#home" className="nav-link nav-link-line">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link nav-link-line">
              About
            </a>
          </li>
          <li>
            <a href="#destination" className="nav-link nav-link-line">
              Destination
            </a>
          </li>
          <li>
            <a href="#newsletter" className="nav-link nav-link-line">
              NewsLetter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
