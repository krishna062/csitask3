import React from 'react'
import "./Navbar.css"
// import herobg from '../Assets/herobg3.jpg'
const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
        <div className='logo'>
            <a href='#'>
                <span>S</span>mart
                <span>S</span>avy
            </a>
            {/* <a><img src={ctlogo} className='logo-img' alt='logo'/></a> */}
        </div>
        <div className="nav-menu">
            <ul className='nav-links'> 
                <li><a href="How it Works">How It Works</a></li>
                <li><a href="What You Get">What You Get</a></li>
                <li><a href="Get Started">Get Started</a></li>
                <li><a href="Pricing">Pricing</a></li>
                
            </ul>
        </div>

        <div className="btns">
            <ul>
                <li><a href="#">Log In </a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
           
        </div>
    </nav>

    {/* <section className='hero-section'>
    <img src={herobg} alt="bg" className='mainbg'/>

    <div className='hero-text'>
    <h1>Smart Budgeting</h1>
    <p>Spend, save, and give toward what's important in life</p>
    <a href='#' className='start-btn'>Start Saving</a>
    </div>

    <div className='works-text'> 
        <h1>How It Works</h1>
        <div className='description'>
        <p> Smart Savy is a budget tracker for the modern age.This virtual budget program keeps you on track with family and friends with the time-tested envelope budgeting method.</p>
        <a href='#' className='learn-btn'>Learn More</a>
        </div>
    </div>
    </section> */}
    </>
    
  )
}

export default Navbar