import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About/>
      <Destinations/>
    </div>
  );
};

export default App;
