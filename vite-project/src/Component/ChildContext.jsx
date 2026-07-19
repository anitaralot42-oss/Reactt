import React from 'react'
import { UserContext } from "../context/UserContext";

const ChildContext = () => {
   const username = useContext(UserContext);
  return (
    <div>
    <h2>GrandChild Component</h2>
      
    </div>
  )
}

export default ChildContext
