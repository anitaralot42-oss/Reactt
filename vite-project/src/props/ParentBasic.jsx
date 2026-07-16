import React from 'react'
import ChildBasic from './ChildBasic';

const ParentBasic = () => {
  const display=(value) =>{
    console.log(value);
  }
   
  return (
    <div>
    <h1>parent data</h1>
    <ChildBasic getdata ={display}  />
   
      
    </div>
  )
}

export default ParentBasic
