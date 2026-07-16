import React from 'react'
import Navbar from './Navbar/Navbar'
import Scard from './Scard'


const Services = (props) => {
  return (
    <div id='services'>
    <p className='p1 ' style={{color:'coral'}}>What I do</p><br></br>
    <h1 className='p1'>Services</h1>
    <div id='card'>
    <Scard 
     id = "card1"
      title = "UI/UX Design"
      p = "From wireframes to polished Figma  prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
    />
   
    
    <Scard 
    id = "card2"
            title = "Frontend Dev"
      p = "Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks"
    />
  
    <Scard
    id = "card3"
        title = "Landing Page"
      p = "High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scrol"

    />


    </div>
     </div>
  )
}

export default Services
