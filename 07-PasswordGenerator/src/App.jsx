import React, { useCallback, useEffect, useRef, useState } from 'react'

function App(){
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialCharAllowed,setspecialCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const generatePassword = useCallback(()=>{
    let str = "";
    let pass="";
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(specialCharAllowed) str += "!@#$%^&*()_";

    for(let i=0;i<length;i++){
      pass += str.charAt( Math.floor(Math.random()*str.length) );
    }
    setPassword(pass); 
  
  },[length,numberAllowed,specialCharAllowed,setPassword]);
// useCallback vale functions will auto call themselves based on dependencies.
  // whenever the value of any of the dependency is changed the function gets called through : useCallback()
  // why this function setPassword is passed as dependency : 

// useCallback function is updating Dom and as react says- "I WONT ALLOW YOU TO ALTER DOM YOURSELF YOU MUST TAKE MY HELP"
// useState to show changes on website ; useEffect to call sideEffects like DOM-Rendering , API-Calls etc/..

  useEffect( ()=>{
    generatePassword(); // sideEffect hai ye esse call hoga react me.
  },[length,numberAllowed,specialCharAllowed,generatePassword])
  
  const passwordref = useRef(null); // no intial reference.
  
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordref.current?.select();  // reference sirf is step ke lie liya tha 
    passwordref.current?.setSelectionRange(0,15); // max range of selection is set now.
    window.navigator.clipboard.writeText(password);
  } , [password]);
  
  
  return(
    <>
      <div className='w-full max-w-xl mx-auto shadow-lg rounded-md bg-emerald-300 px-4 py-2 my-9 text-center text-orange-600'>
        <h1 className='text-white text-center py-4'>Password Generator</h1>
        <div className='flex flex-row  '>
           <input type="text"
           value={password}
           placeholder='Password'
           className='outline-none w-full pl-3 py-1 rounded-l-md'
           readOnly
           ref={passwordref}
           />
           <button 
           onClick={copyPasswordToClipBoard}
           className='bg-blue-700 p-2 text-white shrink-0 rounded-r-md hover:bg-blue-400'>
                Copy
           </button>
        </div>
        <div className= " mt-5 flex gap-3 justify-evenly text-md">
          <div className='flex items-center gap-1 '>
            <input type="range" 
            min={6}
            value={length}
            max={50}
            id="range"
            onChange={ function(e){
              setLength(e.target.value);
            }}
            />
            <label htmlFor="range">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input type="checkbox" 
            id="numberAllowed"
            defaultChecked={numberAllowed}
            onChange={ ()=>{
              setNumberAllowed( (prev)=>!prev);
            }}
            />
            <label htmlFor="numberAllowed">Numbers</label>
            <input type="checkbox" 
            id="charAllowed"
            defaultChecked={specialCharAllowed}
            onChange={ ()=>{
              setspecialCharAllowed( (prev)=>!prev);
            }}
            />
            <label htmlFor="charAllowed">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
