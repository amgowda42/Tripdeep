import "./Destinations.css";
import { Destination } from "/utils/Data";
console.log(Destination);

const Destinations = () => {
  return (
    <div id="destinations">
      <div className="destinations-container">
        <h1>Destinations</h1>
        <div className="cards-container-box">{
            Destination.map((destination)=>{
                return (
                  <div key={destination.id} className="card">
                    <img src={destination.image} alt="destination-image" />
                    <h1>{destination.title}</h1>
                    <h4>{destination.description}</h4>
                    <h2>{destination.price}</h2>
                  </div>
                );
            })
        }</div>
      </div>
    </div>
  );
};
export default Destinations;
