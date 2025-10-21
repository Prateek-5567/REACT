// Here we will observe how data is fetched using context API concept.

// File: src/components/Profile.js

import React, { useContext } from "react";
import "./Profile.css";
import UserContext from "../context/UserContext";

function Profile() {
  const {userData} = useContext(UserContext); //. access data from Central Store using ContextApi.

  // conditional return

  if(!userData) return <div style={{textAlign:"center"}}>You Have Not Logged In !! </div>
  
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img className="profile-avatar" src={'https://i.pravatar.cc/150?img=3'} />
        <h2 className="profile-name">{userData.username}</h2>
        <p className="profile-title">{userData.email}</p>

        <div className="profile-info">
          <p>📍 {"Delhi"}</p>
          <p>📧 {userData.email}</p>
        </div>

        <div className="social-links">
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">💼</a>
          <a href="#">📸</a>
        </div>

        <button className="profile-btn" >Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
