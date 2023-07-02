import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
        <div className='logo'>
            <a href='/'>
                <span>S</span>mart
                <span>S</span>avy
            </a>
        
        </div>
        <div className="nav-menu">
            <ul className='nav-links'> 
              <NavLink exact to ={"/"} >
              <li> How It Works</li>
              </NavLink>
              <NavLink to={"/Whatyouget"} >
              <li> What You Get</li>
              </NavLink>
              <NavLink to={"/GetStarted"} >
              <li> Get Started</li>
              </NavLink>
              <NavLink to={"/Pricing"}>
              <li> Pricing</li>
              </NavLink>

                
            </ul>
        </div>

        <div className="btns">
            <ul>
                <li><a href="#" className='login'>Log In </a></li>
                <li><a href="#"className='signup'>Sign Up</a></li>
            </ul>
           
        </div>
    </nav>

    </>
    
  )
}

export default Navbar