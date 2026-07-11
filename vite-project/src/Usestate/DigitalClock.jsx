import React, { useState } from 'react'


function DigitalClock() {
    const [ctime,setTime] = useState(new Date().toLocaleTimeString()); 
    
setInterval(() => {
     setTime(new Date().toLocaleTimeString());
    
}, 1000);  
  return (
    <div>

    <h1>{ctime}</h1>
      
    </div>
  )
}

export default DigitalClock
