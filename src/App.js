import CategorySection from "./components/CategorySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RecentWorkSection from "./components/RecentWork";
import ServiceSection from "./components/ServicesSection"
import ClientTestmonials from "./components/ClientTestmonials"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const App = () => (
  <div className=" w-full">
    <div>
      <div>
        <Navbar />
        <HeroSection/>
        <CategorySection/>
        <ServiceSection />
        <RecentWorkSection/>
        <ClientTestmonials />
      </div>
    </div>
  </div>
);

export default App;