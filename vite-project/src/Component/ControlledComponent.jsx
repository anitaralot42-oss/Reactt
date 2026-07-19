import React, { useState } from 'react'

const ControlledComponent = () => {
    const[value,setValue] = useState("");
  return ( 
    <div>
    <h1>Controlled Component</h1>
    <input type= "text" value= "anita"   value ={value} onChange={(e)=>setValue(e.target.value)}></input>
    <h1>typing :{value}</h1>
      
    </div>
  )
}

export default ControlledComponent
