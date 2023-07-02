import React from 'react'
import "./Services.css"
import Navbar from './Navbar'
import {ServiceCard} from './ServiceCard'
import envelope from '../Assets/envelope.png'
import budget from '../Assets/budget.jpg'
import saving from '../Assets/saving.png'
import debt from '../Assets/debtpay.jpg'

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
      imageSrc={envelope} imageAlt="Card Image"
      content="Based on the envelope budgeting method – a time-tested system that works!"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading="Sync & share
      budgets"
      imageSrc={budget} imageAlt="Card Image"
      content="Put your budget into action with the people who matter most."/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading=" Save for
      big expenses"
      imageSrc={saving} imageAlt="Card Image"
      content="Plan ahead and be prepared.
      No more surprises!"/>    
    </div>

    <div>
      <ServiceCard 
      className="card-container" heading="Pay off debt"
      imageSrc={debt} imageAlt="Card Image"
      content="Track your debt payoff progress while still setting aside money for other things."/>    
    </div>
    </div>
    </div>
    </>
  )
}

export default Services