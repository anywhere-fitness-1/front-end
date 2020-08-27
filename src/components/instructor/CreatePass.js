import React, { useState } from "react";
import { connect } from "react-redux";
import { addPass } from "../../actions/index";
import { Input } from "../styles/Input";
import { SignupButton } from "../styles/SignupButton";
import "../../App.css"
import '../styles/CreateForm.css';

const CreatePass = props => {
  const [newPass, setNewPass] = useState({
    workoutName: "",
    instructor: "",
    client: "",
    classesRemaining: 0
  });

  const handleChanges = e => {
    setNewPass({
      ...newPass,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addPass(newPass);
    props.history.push(`/instructor`);
  };
  return (
    <body id="instructor-page">
    <div>

      <h1>Create Card</h1>

      <form className="createForm">
        <div>
          <label htmlFor="workoutName">Class Name</label>
          <Input
            type="text"
            name="workoutName"
            value={newPass.workoutName}
            id="workoutName"
            onChange={handleChanges}
        />
        </div>
        <div>
          <label htmlFor="instructor">Instructor</label>
          <Input
            type="text"
            name="instructor"
            value={newPass.instructor}
            id="instructor"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="client">Client</label>
          <Input
            type="text"
            name="client"
            value={newPass.client}
            id="client"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="classesRemaining">Classes Remaining</label>
          <Input
            type="number"
            name="classesRemaining"
            value={newPass.classesRemaining}
            id="classesRemaining"
            onChange={handleChanges}
          />
        </div>

        <SignupButton onClick={handleSubmit}>Create Pass</SignupButton>
        <br/><br/>
      </form>
    </div>
    </body>
  );
};
const mapStateToProps = state => {
  return {
    addPass: state.addPass
  };
};
export default connect(mapStateToProps, { addPass })(CreatePass);