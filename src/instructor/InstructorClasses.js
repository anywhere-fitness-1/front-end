import React from "react";
import { Link } from "react-router-dom";

const InstructorClasses = () => {
  return (
    <div>
      <h4>Instructor Classes</h4>
      <Link exact to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default InstructorClasses;
