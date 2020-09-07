import React,{useState} from 'react';
import './index.css';

const App=()=>{
const [name,setName]=useState();
const [lastName,setLastName]=useState('');
const [fullanme,setFullName]=useState('');

  const onInputTyped=(event)=>{
    setName(event.target.value);
  }

  const onLastNameTyped=(event)=>{
    setLastName(event.target.value);
  }
  const getName=(e)=>{
    e.preventDefault();
    setFullName(`${name} ${lastName}`);
  }

  return(
      <>
        <div>
          <form className="form" onSubmit={getName}>
            <h1>Hello {fullanme}</h1>
            <input type="text" className="name" placeholder="First Name" value={name} onChange={onInputTyped}></input>
             <input type="text" className="name" placeholder="Last Name" value={lastName} onChange={onLastNameTyped}></input>
            <button id="btn" type="submit">Get Name</button>
          </form>
        </div>
      </>
  );
}

export {App}
