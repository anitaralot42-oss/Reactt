import React from 'react'

const Acard = (props) => {
  return (
   <div>
    
    <p>{props.t1}</p>
    <h1>{props.t}</h1>
    <p>{props.p2}</p>
    <p>{props.s}</p>
     <button className='A'>Tailwind CSS</button>
    <button className='A'>Alpine.js</button>
    <button className='A'>Figma</button>
    <button className='A'>HTML / CSS</button>
    <button className='A'>JavaScript</button>
    <button className='A'>Symfony</button>
    <button className='A'>Framer</button>
    <button className='A'>Webflow</button>
    </div>
  )
}

export default Acard
