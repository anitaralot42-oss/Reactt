  import React from 'react'
  import Header from "../Header/Header";
  import Image  from '../../Image/Image';
  import Left from '../Left';
import Services from '../Services';
import Work from '../Work';

  const Navbar = () => {
    return (
      <>
      <div className='nav'>
      <span className='anita'>Anita</span>
      
      <a href='#services'>Services</a>
      <a href='#work'>Work</a>
      <a href=''>About</a>
      <a href=''>Review</a>
      <a href=''>Blog</a>
      <button className='btn'>Hire me →</button>
      </div>
      
      <div className='left'>
      <Left/>
    <Image />

    </div>
    <Services />
   <Work />
      
      </>

    )
  }

  export default Navbar
