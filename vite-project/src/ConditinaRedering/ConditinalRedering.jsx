import React, { useState } from 'react'
import Usestate from "../Component/Usestate"
import Guest from "./guest/Guest";
import User from "./user/User"

const ConditinalRedering = () => {

    const[isLogin,setIsLogin]= useState(false);
    const [value,setValue] = useState();
       
  return (
    <div>
      <h1>Conditional Rendering</h1> 
      {isLogin ? <User /> : <Guest />}

    <button onClick={()=>setIsLogin(true)}>Login</button>

    {value == "User" && <User />}

    <button onClick={()=>setValue("User")}>Add Value</button>
    <button onClick={()=>setValue("Admin")}>reset</button>


    </div>
  )
}

export default ConditinalRedering
