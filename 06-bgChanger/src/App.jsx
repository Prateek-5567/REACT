import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("black");
  return (
    <div className='w-full h-screen duration-200' 
        style={{backgroundColor:color , color:"white"}}>
          {/* style will come in doubly curly braces in react . */}
          bgColorChangerDemo
{/* inset-x-0 : left se bhi 0 right se b 0 means overall position is center : best way to center anything */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-evenly gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-pink-500 shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-red-600 shadow-lg "
          style={{backgroundColor: "olive"}}
          >olive</button>
        </div>
      </div>

    </div>
  )
}

export default App
