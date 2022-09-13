import React from 'react';
import logo from '../../../../Images/logo.png';
import './Header.css'

export default function Header() {
  return (
    <div className='header-content'>
       <nav className="navbar navbar-expand-lg navbar-light">
        <div className='d-flex justify-content-between menu-toggle'>
        <img src={logo} alt="Logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        </div>
  <div className="collapse navbar-collapse menu-bar" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="Logo" /></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Departments</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
    </ul>
    <div className='consultation-btn'>
        <button>Free Consulation</button>
    </div>
  </div>
</nav>
    </div>
  )
}
