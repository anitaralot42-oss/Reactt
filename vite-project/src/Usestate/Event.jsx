import React, { useState } from 'react'



function Event() {
    const purple = "purple";
    const [color , setColor] = useState(purple); 
    const [name , setName] = useState("Click Me!!");
    
    const func = () =>{
        setColor("#89CFF0");
        setName("OUCH!! 💕")
    
    }   
    // firse back jane ke liye dusra function chla diya he

    const bgback = () =>{
        setColor("purple");
        setName("AYOO!!😀 ")
    
    }   

  return (
    <>

      <div style={{background : color,
         height: "100vh"}}> 

         {/* yaha 100 vh isly lgaya kyuki puri body ko cover krega */}

   <button  onClick={func} onDoubleClick={bgback}>{name}</button>
      
    </div>
    </>

  )
}

export default Event
