import './App.css';
import React, {useState} from 'react';
import AboutSection from './Components/AboutSection';
import Creations from './Components/Creations';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutSection />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
