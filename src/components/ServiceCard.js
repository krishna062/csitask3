import React from 'react'
import "./ServiceCard.css"

export const ServiceCard = ({
    heading,
    content,
    imageSrc,
    imageAlt,
}) => {
  return (
    <>
      <div className='card-block'>
        <div className='text-block'>
        {heading && <h1 className='heading'>{heading}</h1>}
        </div>

        <div className='img-block'>
       {imageSrc && imageAlt && <img src={imageSrc} alt={imageAlt}/>}
        </div>

        <div className='contents'>
        {content && <p className='content'>{content}</p>}
        </div>
    </div>
    </>
  )
}

export default ServiceCard