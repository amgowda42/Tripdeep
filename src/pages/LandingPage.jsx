import "./LandingPage.css";
import videoSrc from '../../utils/video/bc_video.mp4';
const LandingPage = () => {
  return (
    <div className="landinpage-container">
      <div className="landingpage-content">
        <h1>Exploag</h1>
        <h3>Hdsadaadkaldlad& asdjada</h3>
      </div>
      <div className="arrow bounce"></div>
     <video autoPlay loop muted id="myVideo">
      <source src={videoSrc}  type="video/mp4"/>
     </video>
    </div>
  );
};

export default LandingPage;
