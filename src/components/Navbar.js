import React from 'react'
import "./Navbar.css"
import ctlogo from '../Assets/celeballogo.jpg'
const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
        <div className='logo'>
            {/* <h2>
                <span>C</span>lebal
                <span>T</span>echnologies
            </h2> */}
            <a><img src={ctlogo} className='logo-img' alt='logo'/></a>
        </div>
        <div className="nav-menu">
            <ul className='nav-links'> 
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <section className='hero-section'>
    <p>welcome to smart saver</p>
    <h1>Track your Budget</h1>
    </section>
    </>
    
  )
}

export default Navbar