import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import ServiceImg from "../assets/img.jpg";
import Footer from '../Footer';
import Trip from '../Trip';
const Service = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName='hero-mid'
    heroImg={ServiceImg}
    title=" Service " />
    <Trip/>
    <Footer/>
    </>
  );
};

export default Service;