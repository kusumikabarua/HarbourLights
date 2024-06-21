import React from 'react'
import "./Section.css"


const Section = ({image,text,value}) => {
  return (
    <div className='section'  >
        <img src={image} alt="logoimg" />
        <div class="text">{text}</div>
        <div class="value">{value}</div>
    </div>
  )
}

export default Section