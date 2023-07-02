import React from 'react'
import "./PriceCard.css"

export const PriceCard = ({
    type,
    typeDescription,
    symbol,
    price,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
}
) => {
  return (
    <>
      <div className='price-block'>
        <div className='text-block'>
        {type && <h1 className='type'>{type}</h1>}
        {typeDescription && <p className='typeDesc'>{typeDescription}</p>}
        {price && symbol && <h1 className='price'><span>{symbol}</span>{price}</h1>}

        </div>

        <div className='features'>
        {feature1 && <p>{feature1}</p>}
        {feature2 && <p>{feature2}</p>}
        {feature3 && <p>{feature3}</p>}
        {feature4 && <p>{feature4}</p>}
        {feature5 && <p>{feature5}</p>}
        {feature6 && <p>{feature6}</p>}
        {feature7 && <p>{feature7}</p>}

        </div>
    </div>
    </>
  )
}

export default PriceCard