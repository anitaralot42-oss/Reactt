import React from 'react'

const ChildBasic = (props) => {
  return (
    <div>
    <h1>this is props</h1>
    <h1>StudentName : {props.name}</h1>
    <h1>Age : {props.age}</h1>
      
      
    </div>
  )
}

export default ChildBasic
