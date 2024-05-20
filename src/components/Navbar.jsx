
const LOGO_URL = "https://cdn.dribbble.com/userupload/5222793/file/original-46d3ef1abd8fba5f6b21c603cf01acd6.png?resize=752x"
const Navbar = () => {
  return (
    <div className="navigation">
      <a href="">
        <img src={LOGO_URL} alt="logo" />
      </a>
      <div className="navigation-menu">
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#destinations">
            <li>Destinations</li>
          </a>
          <a href="#newsletters">
            <li>NewsLetters</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
