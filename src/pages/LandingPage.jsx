import { Link } from "react-router-dom";
import "./LandingPage.css";
import videoSrc from "../../utils/video/bc_video.mp4";
const LandingPage = () => {
  return (
    <div className="landinpage-container">
      <div className="landingpage-content">
        <h1>Explore Karnataka </h1>
        <h3>Book Your Trip With The Trip Pole</h3>
        <h4>Have Fun on your trip with exiting team</h4>
        <Link to="/booknow">
          <button className="lading-page-btn">Book Now</button>
        </Link>
      </div>
      <video autoPlay loop muted id="myVideo">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default LandingPage;
