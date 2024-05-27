import React from 'react'
import news from '../assets/news.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <img  src={news} alt="LOGO"/> 
      <span> Made with and <b>React.js</b></span>
    </div>
  )
}

export default Footer
