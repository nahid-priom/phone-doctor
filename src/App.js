import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


const App = () => (
  <div className=" w-full">
    <div>
      <div>
        <Navbar />
        <HeroSection/>
      </div>
    </div>
  </div>
);

export default App;