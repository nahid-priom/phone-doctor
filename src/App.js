import CategorySection from "./components/CategorySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RecentWorkSection from "./components/RecentWork";
import ServiceSection from "./components/ServicesSection"
import ClientTestmonials from "./components/ClientTestmonials"
import Footer from "./components/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Preloader from "./components/Preloader";



const App = () => (
  <div className=" w-full">
    <div>
      <div>
        <Preloader/>
        <Navbar />
        <HeroSection/>
        <CategorySection/>
        <ServiceSection />
        <RecentWorkSection/>
        <ClientTestmonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;