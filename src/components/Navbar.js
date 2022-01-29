import React from 'react';
import Logo from '../assets/logo.png'
import {IoAlertCircleOutline} from 'react-icons/io5'
import './Navbar.css'
const Navbar = () => {
  return (
      <header>
  <div class="container-fluid">
  
    <h1 className='title'><img className='imgs' src={Logo} /> COVID-19</h1>
    <p className='info'><a href='https://www.worldometers.info/coronavirus/#countries'><IoAlertCircleOutline/> MORE ON COVID-19</a>
</p>  </div>
      </header>
  )
};

export default Navbar;
