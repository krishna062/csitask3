import React from 'react'
import Navbar from './Navbar'
import "./Pricing.css"
import {PriceCard} from './PriceCard'

const Pricing = () => {
  return (

    <>
    <Navbar/>
    <div className='price-container'>
        <div className='begin'>
        <h1>Sign Up</h1>
        <p>Smart Savings For Modern World</p>
        </div>

    <div className="price-cards">
    <div>
      <PriceCard 
      className="price-card" 
      type="Free" typeDescription="Free Forever"
      symbol="₹" price="0" 
      feature1="✔ 10 regular envelopes"
      feature2="✔ 10 more envelopes"
      feature3="✔ 1 account"
      feature4="✔ 2 devices"
      feature5="✔ 1 year of history"
      feature6="✔ Debt tracking"
      feature7="✔ Community support" />
         
    </div>

    <div>
      <PriceCard 
      className="price-card" 
      type="Plus" typeDescription="More of what you love"
      symbol="₹" price="351" 
      feature1="✔ Unlimited regular envelopes"
      feature2="✔ Unlimited more envelopes"
      feature3="✔ Unlimited accounts"
      feature4="✔ 5 devices"
      feature5="✔ 7 year of history"
      feature6="✔ Debt tracking"
      feature7="✔ Email support" />
         
    </div>

    </div>

    </div>
    </>
  )
}

export default Pricing