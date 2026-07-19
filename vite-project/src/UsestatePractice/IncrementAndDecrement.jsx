import React, { useState } from 'react'

function IncrementAndDecrement() {
    const [count,setVal] = useState(10);
    
    
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={() =>setVal(count + 1)}>Increment</button><br></br>
    <button onClick={() =>setVal(count - 1)}>Decrement</button><br></br>
    <button onClick={() =>setVal()}>Reset</button>
    

      
    </div>
  )
}

export default IncrementAndDecrement
