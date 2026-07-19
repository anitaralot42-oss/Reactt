import React, { useState } from 'react'

function LoginForm() {
    // usestate ke andr 4 object pass krdiye he
    const [Fullname , setFullName] = useState(
        {
            fname : '',
            lname : '',
            email : '',
            pass  : ''
        }
    );

  return (
    <div>
    <p>{Fullname.fname}{Fullname.lname}</p>
    <input type='text' placeholder='Enter your name' name='fname' value={Fullname.fname} onChange={(event)=>setFullName(event.target.value)}/><br></br>
    <input type='text' placeholder='Enter your Lastname' name='lname'value={Fullname.lname} onChange={(event)=>setFullName(event.target.value)}/><br></br>
    <input type='text' placeholder='Enter your Email'name='email' value={Fullname.email} onChange={(event)=>setFullName(event.target.value)}/><br></br>
    <input type='password' placeholder='password'name='pass' value={Fullname.pass} onChange={(event)=>setFullName(event.target.value)}/><br></br>
    <button>submit</button>
      
    </div>
  )
}

export default LoginForm
