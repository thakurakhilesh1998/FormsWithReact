import React,{useState} from 'react';
import './index.css';

const App=()=>{
const [details,setDetails]=useState({fname:'',lname:'',email:'',phone:''});

  const onInputTyped=(event)=>{

      const name=event.target.name;
      console.log(name);
      const value=event.target.value;
    setDetails((pre)=>{
    
      return{
        ...pre,
        [name]:value,
      }
      // switch(name)
      // {
      //   case("fname"):
      //   return{
      //   fname:value,
      //   lname:pre.lname,
      //   email:pre.email,
      //   phone:pre.phone,
      //     };
      //   case("lname"):
      //   return{
      //     fname:pre.fname,
      //     lname:value,
      //     email:pre.email,
      //     phone:pre.phone,
      //   };
      //   case("email"):
      //   return{
      //   fname:pre.fname,
      //   lname:pre.lname,
      //   email:value,
      //   phone:pre.phone,
      // }

      //   case("phone"):
      //   return{
      //     fname:pre.fname,
      //     lname:pre.lname,
      //     email:pre.email,
      //     phone:value,
      //   };

      // }

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
            <h1 className='email'>{details.email}</h1>
            <h1 className='email'>{details.phone}</h1>
            <input type="text" className="name" placeholder="First Name" name="fname" value={details.fname} onChange={onInputTyped}></input>
             <input type="text" className="name" placeholder="Last Name" name="lname" value={details.lname} onChange={onInputTyped}></input>
             <input type="email" className="name" placeholder="Email Address" name="email" value={details.email} onChange={onInputTyped}></input>
             <input type="number" className="name" placeholder="Mobile Number" name="phone" value={details.phone} onChange={onInputTyped}></input>
            <button id="btn" type="submit">Get Name</button>
          </form>
        </div>
      </>
  );
}

export {App}
