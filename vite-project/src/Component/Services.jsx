import React from 'react'
import Navbar from './Navbar/Navbar'
import Scard from './Scard'


const Services = () => {
  return (
    <div id='services'>
    <p className='p1 ' style={{color:'coral'}}>What I do</p><br></br>
    <h1 className='p1'>Services</h1>
    <div id='card'>
    <Scard/>
    <Scard/>
    <Scard/>
    </div>
   
    </div>
  )
}

export default Services
