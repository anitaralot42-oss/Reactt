import React, { useState } from 'react'

function LiveClock() {
    let newtime = new Date().toLocaleTimeString(); // ye hamesha current time ke liye use hoga
    const [ctime , setTime] = useState(newtime); // isme setTime ki jo bhi update hogi value woh ctime me store hogi
    
    function upadateTime(){
          let newtime = new Date().toLocaleTimeString();
        setTime(newtime);
    }


  return (


    <div>
    <h1>{ctime}</h1>
    <button onClick={upadateTime}>start</button>

    </div>
  )
}

export default LiveClock
