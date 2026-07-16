import React from 'react'

const Usestate = () => {
    const[value, setValue] = Usestate(10);
  return (
    <div>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value+1)}>increment</button>
    <button onClick={()=>setValue(value-1)}>decrement</button>
    <button onClick={()=>setValue(10)}>Reset</button>

      
    </div>
  )
}

export default Usestate
