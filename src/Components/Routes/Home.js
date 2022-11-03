import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';
import HomeImg from "../assets/12.jpg";
import Destination from '../Destination';
import Trip from '../Trip';
import Footer from '../Footer';
const Home = () => {
  return (
    <>
  <><Navbar/>
  <Hero
    cName='hero'
    heroImg={HomeImg}
    title="Your Journey Your Story"
    text="Choos Your Favourite destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
  />
  <Destination/>
  <Trip/>
  </>
  <Footer/>
    </>
  );
};

export default Home;