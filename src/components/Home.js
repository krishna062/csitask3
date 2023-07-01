import React from 'react'
import Navbar from './Navbar'
import './HomeStyles.css'
import herobg from '../Assets/herobg3.jpg'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section className='hero-section'>
        <img src={herobg} alt="bg" className='mainbg'/>

    <div className='hero-text'>
        <h1>Smart Budgeting</h1>
        <p>Spend, save, and give toward what's important in life</p>
        <a href='start saving' className='start-btn'>Start Saving</a>
    </div>

    <div className='works-text'> 
        <h1>How It Works</h1>
        <div className='description'>
        <p> Smart Savy is a budget tracker for the modern age.This virtual budget program keeps you on track with family and friends with the time-tested envelope budgeting method.</p>
        <a href='learn more' className='learn-btn'>Learn More</a>
        </div>
    </div>
    </section>
    </>
  )
}

export default Home