import React from 'react';
import ScrollTop from "react-scrolltop-button";
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Seachcomp from './components/Seachcomp';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <ScrollTop text="back to top" border='none'/>
     <Navbar />
     <Hero />   
     <Seachcomp />
     <Footer />
      </>
  );
}

export default App;
