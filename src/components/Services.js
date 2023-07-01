import React from 'react'
import "./Services.css"
import Navbar from './Navbar'
import {ServiceCard} from './ServiceCard'
import check from '../Assets/check.jpg'

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className='services-container'>
        <div className='wrapper'>
        <h1>What You Get</h1>
        <p>savings  you'll love</p>
        </div>
    <div className="service-cards">
    <div>
      <ServiceCard 
      className="card-container" heading="Budgeting
      that works"
      imageSrc={check} imageAlt="Card Image"
      content="Based on the envelope budgeting method – a time-tested system that works!"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading="Budgeting
      that works"
      imageSrc={check} imageAlt="Card Image"
      content="Based on the envelope budgeting method – a time-tested system that works!"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading="Budgeting
      that works"
      imageSrc={check} imageAlt="Card Image"
      content="Based on the envelope budgeting method – a time-tested system that works!"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading="Budgeting
      that works"
      imageSrc={check} imageAlt="Card Image"
      content="Based on the envelope budgeting method – a time-tested system that works!"/>    
    </div>
    </div>
    </div>
    </>
  )
}

export default Services