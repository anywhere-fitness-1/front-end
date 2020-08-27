import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const homePage = () => {
  return (
    <div>
      <h4> Homepage</h4>

      <Link to="/Login">Log In</Link>
      <br></br>
      <Link to="/ClientSignup">Client Signup</Link>
      <br></br>
      <Link to="/InstructSignup">Instructor Signup</Link>
    </div>
  );
};

export default homePage;
