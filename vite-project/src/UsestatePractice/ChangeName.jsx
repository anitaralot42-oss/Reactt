import React, { useState } from 'react'

function ChangeName() {
    const [name , setName] = useState("ANITA");
  return (
    <div>
    <h1>{name}</h1>
    <button onClick={() => setName("dharmesh")}>changename</button>

      
    </div>
  )
}

export default ChangeName
