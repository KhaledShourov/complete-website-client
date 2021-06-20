import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Common/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;