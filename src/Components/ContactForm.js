import React from 'react';
import "./ContactFormStyles.css";
const ContactForm = () => {
  return (
    <div className='form-container'>
    <h1>Send a massage to us!</h1>
    <form>
       <input type="text" placeholder='Name' /> 
       <input type="text" placeholder='Email' /> 
       <input type="text" placeholder='Subject' />
       <textarea placeholder='Massage' rows="4"></textarea> 
       <button>Send massage</button>
    </form>
    </div>
  );
};

export default ContactForm;