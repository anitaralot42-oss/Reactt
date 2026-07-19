import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import ChildContext from "./ChildContext"



const ParentContext = () => {
   const username =  "anita";
    
  return (
    <div>

     <UserContext.Provider value={username}>
         
          <ChildContext />
        </UserContext.Provider>


    </div>
  )
}

export default ParentContext
