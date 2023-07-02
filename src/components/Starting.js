import React, {useState} from 'react'
import "./Starting.css"
import Navbar from './Navbar'
import {ServiceCard} from './ServiceCard'
import house from '../Assets/house.jpg'
import clg from '../Assets/college1.png'
import vacation from '../Assets/vacation.png'
import img from '../Assets/budgeting.png'
import car from '../Assets/car.jpg'
import outOfDebt from '../Assets/outofdebt.png'
import emergencies from '../Assets/emergencies.jpg'
const Starting = () => {
  return (
    <>
    <Navbar/>
    <div className='header'>
        <div className='main-header'>
        <h1>Save Smartly</h1>
        <p>Spend in line with your values</p>
        </div>
    
    <div className='Starter-block'>
        <h2>Reach your Saving Goals.</h2>
        <a href='#'>Create your Budget</a>
    </div>

   
    <div className='goal-block'>
    <h1>Budgeting Goals</h1>
    </div>
   
    <div className="goal-cards">
    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={house} imageAlt="Card Image" 
      content="Buy A House"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={clg} imageAlt="Card Image"
      content="Save For College"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={vacation} imageAlt="Card Image"
      content="Go on Vacation"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={img} imageAlt="Card Image"
      content="Budget like an Adult"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={car} imageAlt="Card Image"
      content="Save for a Car"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={outOfDebt} imageAlt="Card Image"
      content="Get Out of Debt"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" 
      imageSrc={emergencies} imageAlt="Card Image"
      content="Plan for Emergencies"/>    
    </div>
   

    </div>
    </div>
    </>
  )
}

export default Starting