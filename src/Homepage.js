import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Profile from "./Profile/Profile";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__Profile">
        <Profile />
      </div>
    </div>
  )
}

export default Homepage;
