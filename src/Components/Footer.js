import React from 'react';
import "./Footerstyles.css";
const Footer = () => {
  return (
    <div className='footer'>
    <div className='top'>
<div>
   <h1>trippy</h1> 
   <p>Choos your favourite destination</p>
</div>
<div>
    <a href="/">
        <i className='fa-brands fa-facebook-square'></i>
    </a>
    <a href="/">
        <i className='fa-brands fa-instagram-square'></i>
    </a>
    <a href="/">
        <i className='fa-brands fa-behance-square'></i>
    </a>
    <a href="/">
        <i className='fa-brands fa-twitter-square'></i>
    </a>
</div>
    </div>

    <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All version</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">gitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Ywitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>

        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of service</a>
            <a href="/">Private Policy</a>
            <a href="/">License</a>
            
        </div>
      
        </div>
    </div>
  );
};

export default Footer;