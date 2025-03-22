import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from './components/AboutUs';
import Services from './components/Services';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />

    </div>
  );
}
export default App