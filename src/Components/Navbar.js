import React, {useState} from 'react';
import "./NavbarStyle.css";
import { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [state, setState] = useState(false)
  const handleClick =()=>{
setState(!state);
  }
  
  return (
    <>
    <nav className='NavbarItems'>
<h1 className='navbar-logo'>Trippy</h1>

<div className='menu-icons' onClick={handleClick}>
  <i className={state ? "fas fa-times" : "fas fa-bars"}></i>

</div>

<ul className={state ? "nav-menu active":"nav-menu"}>
{MenuItems.map((item, index) =>{
return(
  <li key={index}>
<Link  className={item.cName} to={item.url}>
<i className={item.icon}></i> {item.title}
</Link>
</li>
)
})}
<button>Sign Up</button>

</ul>
    </nav>
    </>
  );
};

export default Navbar;