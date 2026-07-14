import React from 'react'

const Basic = () => {
  let stu ={
     name : "anita",
        roll :2000,

  };
   
    let students = {
        id : 101,
        ...stu,
      
        age : 21,
        course :"B.Tech",
        place : "Udaipur"
    };
    console.log(students);
   
    
  // return (
  //   <div>
  //   <h2>Name : {students.name}</h2>
    
      
  //   </div>
  // )
}


export default Basic
