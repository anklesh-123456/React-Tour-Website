import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import ContactImg from "../assets/2.jpg";
import Footer from '../Footer';
import ContactForm from '../ContactForm';
const Contact = () => {
  return (
    <>
     <Navbar/>
     <Hero
    cName='hero-mid'
    heroImg={ContactImg}
    title=" Contact " />
    <ContactForm/>
    <Footer/>
     </>
  );
};

export default Contact;