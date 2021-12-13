import './App.css';
import AboutSection from './Components/AboutSection';
import Creations from './Components/Creations';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
