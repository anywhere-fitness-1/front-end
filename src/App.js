import React from "react";
import "./index.css";
import ClientForm from "./component/Client/Form";
import InstructorForm from "./component/Instructor/Form";

export default function App() {
  return (
    <div className="App">
      <ClientForm />
      <InstructorForm/>
    </div>
  );
}
