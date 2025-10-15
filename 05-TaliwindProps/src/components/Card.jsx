import React from 'react'

function Card(props){  // {} ke andar kyu lia because by defauls yaha props likhhte h which is an object ;
  // props = object so all its keys will be written in curly braces.
  console.log("props : ",props)
  let num = Math.round(Math.random()*50)+1;
  let str = `https://randomuser.me/api/portraits/men/${num}.jpg`;
    return (
        <>
            
      {/* in html it was used to be class here it is className */}
      {/* in tailwind every tag must be a closing tag : eg img */}

      <div className="max-w-3xl mb-4 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
      {/* <!-- Image Section --> */}
      <div className="md:w-1/3">
        <img 
          src={str}
          alt="Person Image" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* <!-- Content Section --> */}
      <div className="p-6 relative flex flex-col justify-center md:w-2/3 bg-slate-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.username?props.username:"JOHN DOE"} </h2>
        <p className="text-gray-600 mb-4 ">
          Software Engineer with 5+ years of experience in full-stack development. 
          Passionate about building scalable systems and clean UI using React, Node.js, and Tailwind CSS.
        </p>
        <button className="w-max px-4 py-2 absolute bottom-5 right-[38%] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {props.btnText || "View Profile"}
        </button>
      </div>
    </div>


        </>
    )
}

export default Card