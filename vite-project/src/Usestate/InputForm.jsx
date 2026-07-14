import React, { use, useState } from 'react'

function InputForm() {
//   User Input
//       │
//       ▼
// onChange Event
//       │
//       ▼
// event.target.value
//       │
//       ▼
// setName(value)
//       │
//       ▼
// name update
//       │
//       ▼
// User clicks Submit
//       │
//       ▼
// setFullName(name)
//       │
//       ▼
// Fullname update
//       │
//       ▼
// Hello Anita
  // ye code jo he muje upr agr function nhi bna na he toh likh skti hu or usestate use honge isme hamesha subit ke liye
  const [name,setName] = useState("");
  const [Fullname,setFullName] = useState("");
  const [Lastname,setLastName] = useState("");
   const [LastNewname,setNewFullName] = useState("");
   const [email,setEmail] = useState("");
   const [Nemail,setFullEmail] = useState("");
   const[pass , setPass] = useState("");
   const[Fullpass , setFullpass] = useState("");

  // agr muje function bna ne alg alg toh me ese likh skti hu. alg alg function bna ke

  // arrow function me multiple statements likhne ke liye {} lagane padte hain.

  // function inputchange(event){
  //   setName(event.target.value);
  // }

  // function click(){
  //   setFullName(name);

  // }
  
  return (
    <>
    <form onSubmit={(event)=>{
      setFullName(name);
      setNewFullName(Lastname);
      setFullEmail(email);
      setFullpass(pass);
    event.preventDefault();
    }}>

    {/* // agr mene direct form tag lga diya toh browser refresh hojayega.
    //jese agr me naame likhu firse jaldi refresh hojata he */}

    <p>{Fullname}{LastNewname}{Nemail}{Fullpass}</p>
    <input type='text' placeholder='Enter  your name' onChange={(event) =>setName(event.target.value)}></input><br></br>

    <input type='text' placeholder='Enter  your Lastname' onChange={(event) =>setLastName(event.target.value)}></input><br></br>
    <input type='text' placeholder='Enter Your Email' onChange={(event) =>setEmail(event.target.value)}></input><br></br>
    <input type='password' placeholder='password' onChange={(event) =>setPass(event.target.value)}></input><br></br>

    {/* <button onClick={(event) =>setFullName(name)}>submit</button> */}

    <button type='submit'>submit</button>

    </form>
  
    </>
  )
}

export default InputForm

