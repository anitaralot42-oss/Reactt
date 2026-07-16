  import React from 'react'
  import Header from "../Header/Header";
  import Image  from '../../Image/Image';
  import Left from '../Left';
import Services from '../Services';
import Work from '../Work';
import About from '../About/About';
import Review from '../Review';
import Blog from '../Blog';

  const Navbar = () => {
    return (
      <>
      <div className='nav'>
      <span className='anita'>Anita</span>
      
      <a href='#services'>Services</a>
      <a href='#work'>Work</a>
      <a href='#about'>About</a>
      <a href='#Review'>Review</a>
      <a href='#Blog'>Blog</a>
      <a href=''>Contact</a>
      <button className='btn'>Hire me →</button>
      </div>
      
      <div className='left'>
      <Left/>
    <Image />

    </div>
    <Services />
   <Work />
   <About />
   <Review />
   <Blog />
      
      </>

    )
  }

  export default Navbar
