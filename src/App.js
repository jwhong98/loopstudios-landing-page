import './App.css';
import AboutSection from './Components/AboutSection';
import Creations from './Components/Creations';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Creations />
    </>
  );
}

export default App;
