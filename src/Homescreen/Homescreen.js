import React from 'react';
import './Homescreen.css';
// Import child elements
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';

function Homescreen() {
  return (
    <div className='homescreen'>
        <Navbar />

        {/* <Banner /> */}

        {/* <Row /> */}
    </div>
  )
}

export default Homescreen;