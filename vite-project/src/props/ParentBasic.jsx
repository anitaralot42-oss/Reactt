import React from 'react'
import ChildBasic from './ChildBasic';

const ParentBasic = () => {
    let name = " anita";
    let age = 21;
  return (
    <div>
    <ChildBasic name = {name} age = {age} />
   
      
    </div>
  )
}

export default ParentBasic
