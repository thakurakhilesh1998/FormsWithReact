import React,{useState} from 'react';
import './index.css';

const App=()=>{
const [name,setName]=useState();
const [fullanme,setFullName]=useState();
  const onInputTyped=(event)=>{
    setName(event.target.value);
  }

  const getName=()=>{
    setFullName(name);
  }

  return(
      <>
        <div id="form">
          <h1>Hello {fullanme}</h1>
          <input type="text" id="name" placeholder="Full Name" value={name} onChange={onInputTyped}></input>
          <button id="btn" onClick={getName}>Get Name</button>
        </div>
      </>
  );
}

export {App}
