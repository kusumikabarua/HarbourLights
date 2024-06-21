
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesAndAmenities from './components/FeaturesAndAmenities/FeaturesAndAmenities';
import ImageGrid from './components/ImageGrid/ImageGrid';
function App() {
  return (
    <div>
      <HeroSection />
      <Navbar/>
      
      <FeaturesAndAmenities/>
      <ImageGrid />
      
    </div>
  );
}

export default App;
