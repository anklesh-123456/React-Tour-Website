import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import About from './Components/Routes/About';
import Contact from './Components/Routes/Contact';
import Home from './Components/Routes/Home';
import Service from './Components/Routes/Service';

const App = () => {
  return (
    <>
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
  

    
    </div>

    </>
  );
};

export default App;


