// this is the Provider for UserContext.js file. and 
// Provider is always .jsx because it returns a component jiske andar baki Components wrap honge so that they can access States.
// we know very well what react.jsx files return : returns a component that is used as a tag ..

import React, { use } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const [userData,setUserData]=React.useState(null); 
    return (
        <UserContext.Provider value = {{userData,setUserData}}>
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider;



/**
 * children is just a generic naming Convention that means Jo bhi 'props' aa rhe h unhe aage pass kardo... thatsIt
 * Children may be card/Component/NavBar
 * UserContext.Provider se wrap kardo Whatever Comes to get rendered
 * inside value you provide props that the components inside Context are allowed to access;
*/ 