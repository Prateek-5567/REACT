import './App.css'
import React from 'react';
import { useState } from 'react';
// use state : manages state changes in react components.
// -> used to propagate you state changes to UI DOM.
// useState() => in () you pass default value.(true,false,"",{},default value of your variable)
// useState() => returns two values : [variable,function].


function App(){
  // var currCount = 10; 

  var [currCount,setCounter ] = useState(10); // default currCounter = 10.
  // whenever you update currCounter it will be propagated on entire UI/ using setCounter method. internally.


  // function INC(){
  //   currCount++; // this will not work as you need to update state of React :- useState()
  // }
  // function DEC(){
  //   currCount--; // actually it works but not desplayed on webSite because you are changing react states so useState() hook.
  // }
  // values will change but will not be updated on screen :- useState()
  // UI updation : react react's by upadting/refresing all variables because same variable
  //  may be present on multiple places and all needs to be refreshed.

// NOW these functions will work.
  function INC(){
    currCount++;
    setCounter(currCount);
  }
  function DEC(){
    // currCount--;
    setCounter(currCount-1); // niche vale 2 will get batched with this.
    setCounter(currCount-1); // because of batched updates in React fiber algorithm this wont work
    setCounter(currCount-1); // because of batched updates in React fiber algorithm this wont work
    setCounter( (prevCnt)=>prevCnt+1 ); // this will work.

  }
  function Double(){
    currCount *=2;
    setCounter(currCount);
  }
  function Half(){
    setCounter(currCount/2);
  }

  return(
    <>
      <h1>Simple Counter Project</h1>
      <br></br>
      <h2> Count : {currCount}</h2>
      <br></br>
      <button onClick={INC}>Increment &#9; </button>
      <button onClick={DEC}>Decrement</button>
      <br>
      </br>
      <button onClick={Double}>Double</button>
      <button onClick={Half}>Half</button>


    </>
  )
};
export default App ;

/**
 ->    <> </> this is called react fragment. 
 A Fragment is used to group multiple React elements without adding an extra DOM node.
 */