import React,{useState} from 'react';
import './index.css';

const App=()=>{
const [details,setDetails]=useState({fname:'',lname:'',email:''});

  const onInputTyped=(event)=>{

      const name=event.target.name;
      console.log(name);
      const value=event.target.value;
    setDetails((pre)=>{
    
      switch(name)
      {
        case("fname"):
        return{
        fname:value,
        lname:pre.lname,
        email:pre.email
          };
        case("lname"):
        return{
          fname:pre.fname,
          lname:value,
          email:pre.email
        };
        case("email"):
        return{
        fname:pre.fname,
        lname:pre.lname,
        email:value,
      }

      }

    });
  }
  const getName=(e)=>{
    e.preventDefault();
    alert("form submitted successfully");
  }

  return(
      <>
        <div>
          <form className="form" onSubmit={getName}>
            <h1>Hello {details.fname} {details.lname}</h1>
            <h1 id='email'>{details.email}</h1>
            <input type="text" className="name" placeholder="First Name" name="fname" value={details.fname} onChange={onInputTyped}></input>
             <input type="text" className="name" placeholder="Last Name" name="lname" value={details.lname} onChange={onInputTyped}></input>
             <input type="text" className="name" placeholder="Email Address" name="email" value={details.email} onChange={onInputTyped}></input>
            <button id="btn" type="submit">Get Name</button>
          </form>
        </div>
      </>
  );
}

export {App}
