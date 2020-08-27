import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIClass } from '../../actions/index';
import { Input } from "../styles/Input";
import { SignupButton } from "../styles/SignupButton";
import "../../App.css";
import '../styles/CreateForm.css';

const CreateClass = props => {

    const [newClass, setNewClass] = useState({
        workoutName: '',
        type: '',
        startTime: '',
        durationMins: 0,
        intensityLevel: '',
        location: '',
        maxAttendees: 0,
        attendees: 0
    });

    console.log(newClass);

    const handleChanges = e => {
        console.log(e.target.value)
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.addIClass(newClass);
        props.history.push(`/instructor`);
    }

    return (
        <body id="instructor-page">
        <div>
            <h1>Create Class</h1>

            <form className="createForm">

                <div>
                    <label htmlFor="workoutName">Class Name</label>
                    <Input
                        type="text"
                        name="workoutName"
                        value={newClass.workoutName}
                        id="workoutName"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="classType">Type</label>
                    <Input
                        type="text"
                        value={newClass.type}
                        id="type"
                        name="type"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="startTime">Start Date and Time</label>
                    <Input
                        type="string"
                        value={newClass.startTime}
                        id="startTime"
                        name="startTime"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="durationMins">Duration (min)</label>
                    <Input
                        type="number"
                        value={newClass.durationMins}
                        id="durationMins"
                        name="durationMins"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="intensityLevel">Intensity</label>
                    <Input
                        type="text"
                        value={newClass.intensityLevel}
                        id="intensityLevel"
                        name="intensityLevel"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <Input
                        type="text"
                        value={newClass.location}
                        id="location"
                        name="location"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="maxAttendees">Max Class Size</label>
                    <Input
                        type="number"
                        value={newClass.maxAttendees}
                        id="maxAttendees"
                        name="maxAttendees"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="attendees">Attendees</label>
                    <Input
                        type="number"
                        value={newClass.attendees}
                        id="attendees"
                        name="attendees"
                        onChange={handleChanges}
                    />
                </div>
                <SignupButton onClick={handleSubmit}>Create Class</SignupButton>
            </form>
        </div>
        </body>
    )
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, { addIClass })(CreateClass);