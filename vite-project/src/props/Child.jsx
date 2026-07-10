import React from 'react'


function Child(props) {
  return (
    <div>
    <p>name : {props.name}</p>
    <p>age : {props.age}</p>
    <p>email :{props.email}</p>
      
    </div>
  )
}

export default Child
