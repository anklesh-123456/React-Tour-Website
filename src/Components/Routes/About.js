import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import AboutImg from "../assets/night.jpg";
import Footer from '../Footer';
import Aboutus from '../Aboutus';
const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName='hero-mid'
    heroImg={AboutImg}
    title="About"
    btnClass="hide" />
    <Aboutus/>
    <Footer/>
    </>
  );
};

export default About;