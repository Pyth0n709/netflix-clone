import React, { useState, useEffect } from 'react';
import './Navbar.css';


function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <div className='navbar__contents'>
        <img
           className='navbar__logo'
           src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
           alt=""
         /> 
         <img
           className='navbar__avatar' 
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
           alt=""
         />  
       </div>
    </div>
  )
}

export default Navbar;