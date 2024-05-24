import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About/>
    </div>
  );
};

export default App;
