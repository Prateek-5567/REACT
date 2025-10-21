// here we will learn ho data is send using contextApi
// Context Api is like a central / global store of data.

import React, { use, useContext, useState } from "react";
import "./Login.css";
import UserContext from "../context/UserContext";

function Login() {

  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Store se setUserData function utha loo cuz this is needed to update State and set Data.:- 
  const {setUserData} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    console.log("Login attempted with:", { email, password });

    setUserData({username,email,password}); // update central Store using ContextApi.
    
    setError(""); // clear any previous errors ._. 
  };

  return (
    <>
    { /* try yourself : - */}
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}

            <div>
                <label htmlFor="username">UserName</label>
                <input type="text"
                     id="username"
                     placeholder="Enter Your Username"
                     value={username} 
                    //  this means the value of this inputBox will be governed by a State : email
                     onChange={ (e)=>setUsername(e.target.value)}
                  />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text"
                     id="email"
                     placeholder="Enter Your Email"
                     value={email} 
                    //  this means the value of this inputBox will be governed by a State : email
                     onChange={ (e)=>setEmail(e.target.value)}
                  />
            </div>

            <div>
                <label htmlFor="pass">Password</label>
                <input type="password"
                     id="pass"
                     placeholder="Enter Your Password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
            </div>

            <button type="submit"> Submit </button>

        </form>
    </div>

</>
  );
}

export default Login;


    