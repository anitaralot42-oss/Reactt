import React from 'react'

const ChildBasic = (props) => {
  const dt = props.getdata;
  console.log(dt);
  let name = "ANITA";
  return (
    <div>
    child
      <button onClick={()=>dt(name)}>Send data</button>
    
    </div>
  )
}

export default ChildBasic
