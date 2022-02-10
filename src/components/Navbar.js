import React, {useState} from 'react';
import Logo from '../assets/logo.png'
import { Squeeze as Hamburger } from 'hamburger-react'
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
      <header>
     <nav class="navbar navbar-expand-md">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">COVID-19</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger toggled={isOpen} toggle={setOpen} />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="https://www.worldometers.info/coronavirus/">More on COVID-19</a>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
      </header>
  )
};

export default Navbar;
